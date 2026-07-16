import React from 'react';
import './widgets.css';

export type TimerType = 'default' | 'ongoing';

export interface TimerProps {
  type?: TimerType;
  /** Elapsed time shown, e.g. "00:00:00". */
  time?: string;
  onStart?: () => void;
  onStop?: () => void;
  className?: string;
}

/**
 * Timer [Time Tracker] — the big timer readout with a Default (awaiting, start)
 * and an Ongoing (running, stop) state. Ported from Figma node 3849:32209.
 */
export const Timer = ({ type = 'default', time, onStart, onStop, className = '' }: TimerProps) => {
  const ongoing = type === 'ongoing';
  const display = time ?? (ongoing ? '00:12:45' : '00:00:00');
  const [main, sec] = [display.slice(0, 5), display.slice(5)];

  return (
    <div className={`premui-w-tracker-timer ${className}`}>
      <span className="premui-w-tracker-status" data-ongoing={ongoing || undefined}>
        {ongoing ? 'Ongoing' : 'Awaiting'}
      </span>
      <span className="premui-w-tracker-time" data-ongoing={ongoing || undefined}>
        {main}
        <span className="sec">{sec}</span>
      </span>
      {ongoing ? (
        <button className="premui-w-tracker-start is-stop" type="button" onClick={onStop}>
          <i className="ri-stop-fill" aria-hidden="true" />
          Stop Time Tracker
        </button>
      ) : (
        <button className="premui-w-tracker-start" type="button" onClick={onStart}>
          <i className="ri-play-fill" aria-hidden="true" />
          Start Time Tracker
        </button>
      )}
    </div>
  );
};
