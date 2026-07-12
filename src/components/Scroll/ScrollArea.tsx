import React, { useEffect, useRef, useState } from 'react';
import './scroll.css';
import { Scroll } from './Scroll';
import type { ScrollSize, ScrollStyle } from './Scroll';

export interface ScrollAreaProps {
  children?: React.ReactNode;
  size?: ScrollSize;
  style?: ScrollStyle;
  height?: number | string;
  className?: string;
}

const computeMetrics = (el: HTMLDivElement) => {
  const { scrollTop, scrollHeight, clientHeight } = el;
  const ratio = scrollHeight > 0 ? clientHeight / scrollHeight : 1;
  const maxScroll = scrollHeight - clientHeight;
  const offset = maxScroll > 0 ? scrollTop / maxScroll : 0;
  return { ratio, offset };
};

export const ScrollArea = ({ children, size = 'md', style = 'default', height = 400, className = '' }: ScrollAreaProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  // Only tracks whether a scrollbar should render at all — not updated per-scroll-tick,
  // so scrolling never waits on a React re-render. The thumb's actual position/size is
  // written straight to the DOM below, in lockstep with the scroll event itself.
  const [visible, setVisible] = useState(false);
  const [initialMetrics, setInitialMetrics] = useState({ ratio: 1, offset: 0 });

  const paintThumb = (ratio: number, offset: number) => {
    const thumb = thumbRef.current;
    if (!thumb) return;
    const clampedRatio = Math.min(1, Math.max(0.05, ratio));
    const clampedOffset = Math.min(1, Math.max(0, offset));
    thumb.style.height = `${clampedRatio * 100}%`;
    thumb.style.top = `${(1 - clampedRatio) * clampedOffset * 100}%`;
  };

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = undefined;
      const { ratio, offset } = computeMetrics(el);
      paintThumb(ratio, offset);
    });
  };

  const refreshVisibility = () => {
    const el = contentRef.current;
    if (!el) return;
    const { ratio, offset } = computeMetrics(el);
    setVisible(ratio < 1);
    setInitialMetrics({ ratio, offset });
    paintThumb(ratio, offset);
  };

  useEffect(() => {
    refreshVisibility();
    const el = contentRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(refreshVisibility);
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <div className={`premui-scroll-area ${className}`} style={{ height }}>
      <div ref={contentRef} className="premui-scroll-area-content" onScroll={handleScroll}>
        {children}
      </div>
      {visible && (
        <Scroll
          ref={thumbRef}
          size={size}
          style={style}
          thumbRatio={initialMetrics.ratio}
          thumbOffset={initialMetrics.offset}
          className="premui-scroll-area-bar"
        />
      )}
    </div>
  );
};
