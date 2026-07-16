import React from 'react';
import { WidgetCard, BrandLogo } from './WidgetCard';
import { Avatar } from '../Avatars/Avatar';
import { AvatarGroup } from '../Avatars/AvatarGroup';
import { Badge } from '../Badge/Badge';
import { EmptyState } from '../EmptyStates/EmptyState';

export interface CurrentProjectWidgetProps {
  empty?: boolean;
  className?: string;
}

export const CurrentProjectWidget = ({ empty = false, className = '' }: CurrentProjectWidgetProps) => (
  <WidgetCard icon="flashlight-line" title="Current Project" className={className}>
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="hr" type="Current Project" size={112} />
        <div className="premui-widget-empty-caption">
          No records of projects yet.
          <br />
          Please check back later.
        </div>
      </div>
    ) : (
      <div className="premui-w-kv">
        <div className="premui-w-kv-row">
          <span className="premui-w-kv-label">Project Name</span>
          <span className="premui-w-kv-value">
            <BrandLogo name="Monday.com" className="premui-w-kv-logo" />
            Monday.com Redesign
            <span style={{ marginLeft: 'auto' }}>
              <Badge color="orange" style="light" size="sm" type="left-icon" icon="loader-4-line">
                In Progress
              </Badge>
            </span>
          </span>
        </div>
        <div className="premui-w-kv-row">
          <span className="premui-w-kv-label">Project Manager</span>
          <span className="premui-w-kv-value">
            <Avatar persona="Laura Perez" size={24} type="Illustration" />
            Laura P.
          </span>
        </div>
        <div className="premui-w-kv-row">
          <span className="premui-w-kv-label">Team</span>
          <span className="premui-w-kv-value">
            <AvatarGroup
              size={24}
              showMore={false}
              members={[
                { persona: 'Sophia Williams', type: 'Illustration' },
                { persona: 'Arthur Taylor', type: 'Solid BG' },
                { persona: 'Emma Wright', type: 'Solid BG' },
              ]}
            />
            <span style={{ color: 'var(--color-text-sub)', fontWeight: 400 }}>+8 people</span>
          </span>
        </div>
        <div className="premui-w-kv-row">
          <span className="premui-w-kv-label">Timeline</span>
          <span className="premui-w-kv-value">
            <i className="ri-calendar-line" aria-hidden="true" />
            12/10/2022 · 01/04/2023
          </span>
        </div>
        <div className="premui-w-kv-row">
          <span className="premui-w-kv-label">Description</span>
          <span className="premui-w-kv-value">
            <i className="ri-pencil-line" aria-hidden="true" />
            Mobile and desktop app design for the new product.
          </span>
        </div>
      </div>
    )}
  </WidgetCard>
);
