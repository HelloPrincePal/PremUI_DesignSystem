import React from 'react';
import { WidgetCard, WidgetHeaderButton } from './WidgetCard';
import { NoteItem } from './NoteItem';
import type { NoteItemTag } from './NoteItem';
import { EmptyState } from '../EmptyStates/EmptyState';

interface Note {
  title: string;
  description: string;
  tags: NoteItemTag[];
  date: string;
  done?: boolean;
}

export interface NotesWidgetProps {
  notes?: Note[];
  empty?: boolean;
  onAddNote?: () => void;
  className?: string;
}

const DEFAULT_NOTES: Note[] = [
  {
    title: 'Text Inputs for Design System',
    description: 'Search for inspiration to provide a rich collection of input styles.',
    tags: [
      { label: 'Today', color: 'red' },
      { label: 'To-do', color: 'orange' },
    ],
    date: 'Aug 03',
    done: false,
  },
  {
    title: 'Meeting with Arthur Taylor',
    description: 'Discuss the MVP version of Apex Mobile app design.',
    tags: [
      { label: 'Today', color: 'gray' },
      { label: 'Meeting', color: 'gray' },
    ],
    date: 'Aug 02',
    done: true,
  },
  {
    title: 'Check neutral and state colors',
    description: 'Button components will be revised and detailed for all states.',
    tags: [
      { label: 'Yesterday', color: 'gray' },
      { label: 'Important', color: 'gray' },
    ],
    date: 'Aug 01',
    done: true,
  },
];

export const NotesWidget = ({ notes = DEFAULT_NOTES, empty = false, onAddNote, className = '' }: NotesWidgetProps) => (
  <WidgetCard
    icon="sticky-note-line"
    title="Notes"
    action={<WidgetHeaderButton icon="add-line" onClick={onAddNote}>Add Note</WidgetHeaderButton>}
    className={className}
  >
    {empty ? (
      <div className="premui-widget-empty">
        <EmptyState set="hr" type="Notes" size={112} />
        <div className="premui-widget-empty-caption">
          There are no records of notes yet.
          <br />
          Please check back later.
        </div>
        <WidgetHeaderButton icon="add-line" onClick={onAddNote}>Add Note</WidgetHeaderButton>
      </div>
    ) : (
      <div>
        {notes.map((note, i) => (
          <NoteItem
            key={i}
            title={note.title}
            description={note.description}
            tags={note.tags}
            date={note.date}
            checked={note.done}
          />
        ))}
      </div>
    )}
  </WidgetCard>
);
