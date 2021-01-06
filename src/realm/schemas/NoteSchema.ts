import {Schema} from './schema';

export type Note = {
  text: string;
  noteId: string;
};

export const NoteSchema: Schema = {
  name: 'Note',
  primaryKey: 'noteId',
  properties: {
    text: 'string?',
    noteId: 'string?',
  },
};
