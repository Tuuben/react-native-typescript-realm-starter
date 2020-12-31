import Realm from 'realm';
import {NoteSchema} from './schemas/NoteSchema';

export const initRealm = async () => {
  const schemaVersion = 1;
  const realm = await Realm.open({
    schemaVersion,
    path: 'default.realm',
    schema: [NoteSchema],
  });
  return realm;
};
