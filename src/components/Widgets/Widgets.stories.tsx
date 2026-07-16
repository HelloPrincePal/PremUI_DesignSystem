import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TimeOffWidget } from './TimeOffWidget';
import { CurrentProjectWidget } from './CurrentProjectWidget';
import { StatusTrackerWidget } from './StatusTrackerWidget';
import { NotesWidget } from './NotesWidget';
import { ScheduleWidget } from './ScheduleWidget';
import { TimeTrackerWidget } from './TimeTrackerWidget';
import { EmployeeSpotlightWidget } from './EmployeeSpotlightWidget';
import { DailyFeedbackWidget } from './DailyFeedbackWidget';
import { WorkHourAnalysisWidget } from './WorkHourAnalysisWidget';
import { CoursesWidget } from './CoursesWidget';
import { DailyWorkHoursWidget } from './DailyWorkHoursWidget';
import { TrainingAnalysisWidget } from './TrainingAnalysisWidget';
import { CourseProgressWidget } from './CourseProgressWidget';
import { EmployeeRatingWidget } from './EmployeeRatingWidget';

const meta: Meta = {
  title: 'Product Components/Widgets/HR Management',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

const Pair = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>{children}</div>
);

/** Every HR widget, populated. */
export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <TimeOffWidget />
      <CurrentProjectWidget />
      <StatusTrackerWidget />
      <NotesWidget />
      <TimeTrackerWidget />
      <EmployeeSpotlightWidget />
      <DailyFeedbackWidget />
      <WorkHourAnalysisWidget />
      <ScheduleWidget />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <DailyWorkHoursWidget />
        <TrainingAnalysisWidget />
        <CourseProgressWidget />
        <EmployeeRatingWidget />
      </div>
      <CoursesWidget />
    </div>
  ),
};

/** Every HR widget in its empty ("Empty State=On") variant. */
export const EmptyStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <TimeOffWidget empty />
      <CurrentProjectWidget empty />
      <StatusTrackerWidget empty />
      <NotesWidget empty />
      <TimeTrackerWidget empty />
      <EmployeeSpotlightWidget empty />
      <DailyFeedbackWidget empty />
      <WorkHourAnalysisWidget empty />
      <ScheduleWidget empty />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <DailyWorkHoursWidget empty />
        <TrainingAnalysisWidget empty />
        <CourseProgressWidget empty />
        <EmployeeRatingWidget empty />
      </div>
      <CoursesWidget empty />
    </div>
  ),
};

// ─── Per-widget (populated + empty side by side) ────────────────────────────

export const TimeOff: Story = { render: () => <Pair><TimeOffWidget /><TimeOffWidget empty /></Pair> };
export const CurrentProject: Story = { render: () => <Pair><CurrentProjectWidget /><CurrentProjectWidget empty /></Pair> };
export const StatusTracker: Story = { render: () => <Pair><StatusTrackerWidget /><StatusTrackerWidget empty /></Pair> };
export const Notes: Story = { render: () => <Pair><NotesWidget /><NotesWidget empty /></Pair> };
export const Schedule: Story = { render: () => <Pair><ScheduleWidget /><ScheduleWidget empty /></Pair> };
export const TimeTracker: Story = { render: () => <Pair><TimeTrackerWidget /><TimeTrackerWidget empty /></Pair> };
export const EmployeeSpotlight: Story = { render: () => <Pair><EmployeeSpotlightWidget /><EmployeeSpotlightWidget empty /></Pair> };
export const DailyFeedback: Story = { render: () => <Pair><DailyFeedbackWidget /><DailyFeedbackWidget empty /></Pair> };
export const WorkHourAnalysis: Story = { render: () => <Pair><WorkHourAnalysisWidget /><WorkHourAnalysisWidget empty /></Pair> };
export const Courses: Story = { render: () => <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><CoursesWidget /><CoursesWidget empty /></div> };
export const DailyWorkHours: Story = { render: () => <Pair><DailyWorkHoursWidget /><DailyWorkHoursWidget empty /></Pair> };
export const TrainingAnalysis: Story = { render: () => <Pair><TrainingAnalysisWidget /><TrainingAnalysisWidget empty /></Pair> };
export const CourseProgress: Story = { render: () => <Pair><CourseProgressWidget /><CourseProgressWidget empty /></Pair> };
export const EmployeeRating: Story = { render: () => <Pair><EmployeeRatingWidget /><EmployeeRatingWidget empty /></Pair> };
