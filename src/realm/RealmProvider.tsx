import React, {useEffect} from 'react';
import {useState} from 'react';
import {initRealm} from './realm';
import {RealmContext} from './realmContext';

type RealmProviderProps = {
  children: React.ReactNode;
};

const RealmProvider = ({children}: RealmProviderProps) => {
  const [realm, setRealm] = useState<Realm>();

  useEffect(() => {
    initRealm().then((newRealm) => setRealm(newRealm));

    return () => {
      if (!realm?.isClosed) {
        realm?.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
  );
};

export default RealmProvider;
