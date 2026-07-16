import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { Avatar } from '../Avatars/Avatar';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Badge } from '../Badge/Badge';
import { EmptyState } from '../EmptyStates/EmptyState';

interface Course {
  persona: string;
  role: string;
  course: string;
  date: string;
  progress: number;
  status: 'in-progress' | 'completed';
}

export interface CoursesWidgetProps {
  courses?: Course[];
  empty?: boolean;
  onSeeAll?: () => void;
  className?: string;
}

const DEFAULT_COURSES: Course[] = [
  { persona: 'Nuray Aksoy', role: 'Product Manager', course: 'Time Management', date: 'Aug 21 - Sep 04', progress: 30, status: 'in-progress' },
  { persona: 'Arthur Taylor', role: 'Entreprenur / CEO', course: 'Leadership Skills', date: 'Aug 02 - Aug 18', progress: 70, status: 'in-progress' },
  { persona: 'Wei Chen', role: 'Operations Manager', course: 'Diversity Training', date: 'June 24 - July 03', progress: 100, status: 'completed' },
  { persona: 'Lena Müller', role: 'Marketing Manager', course: 'Efficiency at Work', date: 'June 04 - June 28', progress: 100, status: 'completed' },
];

export const CoursesWidget = ({ courses = DEFAULT_COURSES, empty = false, onSeeAll, className = '' }: CoursesWidgetProps) => (
  <WidgetCard
    icon="book-2-line"
    title="Courses"
    width={728}
    flushBody
    action={
      <>
        <WidgetHeaderButton icon="search-2-line" iconOnly ariaLabel="Search" />
        <WidgetHeaderButton onClick={onSeeAll}>See All</WidgetHeaderButton>
      </>
    }
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty" style={{ padding: 'var(--spacing-32) 0' }}>
        <EmptyState set="hr" type="Courses" size={112} />
        <div className="premui-widget-empty-caption">
          There are no records of courses yet.
          <br />
          Please check back later.
        </div>
      </div>
    ) : (
      <table className="premui-w-table">
        <thead>
          <tr>
            <th>Instructor</th>
            <th>Course Name</th>
            <th>Progress</th>
            <th>Status</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.persona}>
              <td>
                <div className="premui-w-table-person">
                  <Avatar persona={c.persona} type="Solid BG" size={32} />
                  <div>
                    <div className="premui-w-table-person-name">{c.persona}</div>
                    <div className="premui-w-table-person-role">{c.role}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="premui-w-table-course">{c.course}</div>
                <div className="premui-w-table-date">{c.date}</div>
              </td>
              <td>
                <div className="premui-w-table-progress">
                  <ProgressBar percentage={c.progress} />
                  <span>{c.progress}%</span>
                </div>
              </td>
              <td>
                {c.status === 'completed' ? (
                  <Badge color="green" style="light" size="md" type="left-icon" icon="checkbox-circle-line">
                    Completed
                  </Badge>
                ) : (
                  <Badge color="orange" style="light" size="md" type="left-icon" icon="loader-4-line">
                    In Progress
                  </Badge>
                )}
              </td>
              <td>
                <i className="ri-more-2-fill" style={{ color: 'var(--color-icon-soft)', fontSize: 18, cursor: 'pointer' }} aria-hidden="true" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </WidgetCard>
);
