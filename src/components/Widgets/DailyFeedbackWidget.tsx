import React, { useState } from 'react';
import { WidgetCard } from './WidgetCard';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface DailyFeedbackWidgetProps {
  question?: string;
  step?: number;
  totalSteps?: number;
  empty?: boolean;
  onNext?: () => void;
  className?: string;
}

const MOODS = ['😞', '😕', '😐', '🙂', '😍'];

export const DailyFeedbackWidget = ({
  question = 'How would you rate your mood today?',
  step = 1,
  totalSteps = 4,
  empty = false,
  onNext,
  className = '',
}: DailyFeedbackWidgetProps) => {
  const [mood, setMood] = useState(3);

  return (
    <WidgetCard
      icon="chat-smile-2-line"
      title="Daily Feedback"
      action={empty ? undefined : <span style={{ fontSize: 13, color: 'var(--color-text-sub)' }}>{`Question ${step}/${totalSteps}`}</span>}
      className={className}
    >
      {empty ? (
        <div className="premui-widget-empty">
          <EmptyState set="hr" type="Daily Feedback" size={112} />
          <div className="premui-widget-empty-caption">
            No records of feedback yet.
            <br />
            Please check back later.
          </div>
        </div>
      ) : (
        <div className="premui-w-feedback">
          <span className="premui-w-feedback-num">{String(step).padStart(2, '0')}</span>
          <span className="premui-w-feedback-q">{question}</span>
          <span className="premui-w-feedback-sub">Share your mood to help us understand.</span>
          <div className="premui-w-emoji-row" role="radiogroup" aria-label="Mood">
            {MOODS.map((m, i) => (
              <div
                key={i}
                className="premui-w-emoji"
                role="radio"
                aria-checked={i === mood}
                data-active={i === mood || undefined}
                onClick={() => setMood(i)}
              >
                {m}
              </div>
            ))}
          </div>
          <textarea className="premui-w-textarea" placeholder="Tell us why!" rows={2} />
          <button className="premui-w-fullbtn" type="button" onClick={onNext}>
            Next Question
          </button>
        </div>
      )}
    </WidgetCard>
  );
};
