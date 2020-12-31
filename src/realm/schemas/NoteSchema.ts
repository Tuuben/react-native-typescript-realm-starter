import {Schema} from './schema';

export type Note = {
  text: string;
  noteId: string;
  createdAt: string;
};

export const NoteSchema: Schema<Note> = {
  name: 'Note',
  primaryKey: 'noteId',
  properties: {
    text: 'string?',
    noteId: 'string?',
    createdAt: 'number',
  },
};
