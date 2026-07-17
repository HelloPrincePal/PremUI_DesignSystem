import React from 'react';
import './hr-management.css';
import { SidebarNavigation } from '../../SidebarNavigation/SidebarNavigation';
import { PageHeader } from '../../PageHeader/PageHeader';
import {
  TimeOffWidget,
  CurrentProjectWidget,
  StatusTrackerWidget,
  NotesWidget,
  ScheduleWidget,
  TimeTrackerWidget,
  EmployeeSpotlightWidget,
  DailyFeedbackWidget,
  WorkHourAnalysisWidget,
  DailyWorkHoursWidget,
  TrainingAnalysisWidget,
  CourseProgressWidget,
  EmployeeRatingWidget,
  CoursesWidget,
} from '../../Widgets';

export interface HRManagementDashboardProps {
  /** Title shown in the page header. */
  title?: string;
  description?: string;
  className?: string;
}

/**
 * HR Management Dashboard — a complete sector product screen assembled from the
 * SidebarNavigation shell, a PageHeader, and the HR Management widgets laid out
 * in a responsive masonry grid. Composes existing Product Components; no new
 * primitives.
 */
export const HRManagementDashboard = ({
  title = 'Good morning, Sophia 👋',
  description = "Here's what's happening with your team today.",
  className = '',
}: HRManagementDashboardProps) => (
  <div className={`premui-sp-hr ${className}`}>
    <SidebarNavigation showSearch activeKey="dashboard" />
    <main className="premui-sp-hr-main">
      <PageHeader title={title} description={description} secondaryLabel="Schedule" primaryLabel="Create Request" />
      <div className="premui-sp-hr-scroll">
        <div className="premui-sp-hr-masonry">
          {[
            <TimeOffWidget key="timeoff" />,
            <CurrentProjectWidget key="project" />,
            <StatusTrackerWidget key="status" />,
            <ScheduleWidget key="schedule" />,
            <NotesWidget key="notes" />,
            <EmployeeSpotlightWidget key="spotlight" />,
            <TimeTrackerWidget key="tracker" />,
            <DailyFeedbackWidget key="feedback" />,
            <WorkHourAnalysisWidget key="hours" />,
            <DailyWorkHoursWidget key="daily" />,
            <TrainingAnalysisWidget key="training" />,
            <CourseProgressWidget key="progress" />,
            <EmployeeRatingWidget key="rating" />,
          ].map((w) => (
            <div className="premui-sp-hr-item" key={w.key}>{w}</div>
          ))}
        </div>
        <CoursesWidget className="premui-sp-hr-wide" />
      </div>
    </main>
  </div>
);
