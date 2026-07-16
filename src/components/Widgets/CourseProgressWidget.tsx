import React from 'react';
import { WidgetCard } from './WidgetCard';
import { CircularProgressBar } from '../ProgressBar/CircularProgressBar';

export interface CourseProgressWidgetProps {
  percentage?: number;
  title?: string;
  description?: string;
  empty?: boolean;
  onAction?: () => void;
  className?: string;
}

export const CourseProgressWidget = ({
  percentage = 25,
  title = 'Team Development',
  description = 'Designed to leverage diverse expertise.',
  empty = false,
  onAction,
  className = '',
}: CourseProgressWidgetProps) => (
  <WidgetCard icon="government-line" title="Course Progress" className={className}>
    <div className="premui-w-progress-row">
      <CircularProgressBar percentage={empty ? 0 : percentage} size={64} showLabel strokeWidth={6} />
      <div className="premui-w-progress-copy">
        {empty ? (
          <>
            <span className="premui-w-progress-title">No courses in progress</span>
            <span className="premui-w-progress-desc">There's no progress for any courses yet. Consider applying for one.</span>
            <a className="premui-w-link" onClick={onAction}>Apply for a Course</a>
          </>
        ) : (
          <>
            <span className="premui-w-progress-title">{title}</span>
            <span className="premui-w-progress-desc">{description}</span>
            <a className="premui-w-link" onClick={onAction}>Resume</a>
          </>
        )}
      </div>
    </div>
  </WidgetCard>
);
