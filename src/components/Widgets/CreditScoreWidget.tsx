import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';

export interface CreditScoreWidgetProps {
  score?: number;
  empty?: boolean;
  onDetails?: () => void;
  onApply?: () => void;
  className?: string;
}

const TOTAL_BARS = 40;

export const CreditScoreWidget = ({
  score = 710,
  empty = false,
  onDetails,
  onApply,
  className = '',
}: CreditScoreWidgetProps) => {
  // 710 of ~850 → fraction of bars filled (min 300 baseline).
  const filled = empty ? 0 : Math.round(((score - 300) / (850 - 300)) * TOTAL_BARS);
  return (
    <WidgetCard
      icon="speed-up-line"
      title="Credit Score"
      action={
        empty
          ? <WidgetHeaderButton icon="add-line" onClick={onApply}>Apply</WidgetHeaderButton>
          : <WidgetHeaderButton onClick={onDetails}>Details</WidgetHeaderButton>
      }
      className={className}
    >
      <div className="premui-w-score-head">
        {empty ? (
          <p className="premui-w-score-text" data-muted>
            Your <b>credit score</b> is <b>0</b><br />
            <span className="premui-w-score-sub">Feel free to build your credit history to see your score.</span>
          </p>
        ) : (
          <>
            <p className="premui-w-score-text">
              Your <b>credit score</b> is <b>{score}</b><br />
              <span className="premui-w-score-sub">This score is considered to be Excellent.</span>
            </p>
            <span className="premui-w-score-dot" aria-hidden="true" />
          </>
        )}
      </div>
      <div className="premui-w-score-bars" aria-hidden="true">
        {Array.from({ length: TOTAL_BARS }).map((_, i) => (
          <span key={i} className="premui-w-score-bar" data-on={i < filled || undefined} />
        ))}
      </div>
    </WidgetCard>
  );
};
