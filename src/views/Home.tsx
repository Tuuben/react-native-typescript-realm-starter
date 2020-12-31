import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NavigationParamList} from '../navigator/MainNavigator';
import {useRealm} from '../realm/realmContext';
import {Note} from '../realm/schemas/NoteSchema';
import {theme} from '../theme/theme';

export type HomeViewProps = {};

export type HomeNavigatorProps = {
  navigation: StackNavigationProp<NavigationParamList, 'Home'>;
  route: RouteProp<NavigationParamList, 'Home'>;
};

const HomeView = ({navigation, route}: HomeNavigatorProps) => {
  const realm = useRealm();
  const notes = realm?.objects('Note');
  // const [notes, setNotes] = useState<Results<Realm.Object & Note>>();
  const [inputText, setInputText] = useState<string>('');

  /*  useEffect(() => {
    const fetchedNotes = realm?.objects<Note>('Note');

    setNotes(fetchedNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  const addNote = () => {
    console.log('add note ', inputText);
    if (!inputText) {
      return;
    }

    realm?.write(() => {
      realm.create<Note>('Note', {
        text: inputText,
        noteId: (Math.random() * 99999).toString(),
      });
    });
    setInputText('');
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>React starter template</Text>
            <View style={styles.cardContainer}>
              {notes?.map((note) => (
                <View style={styles.card}>
                  <Text style={styles.cardText}>{note.text}</Text>
                </View>
              ))}
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setInputText(text)}
              placeholder="Write a note ..."
              placeholderTextColor={theme.palette.white}
              value={inputText}
            />
            <View style={styles.buttonContainer}>
              <Button
                onPress={addNote}
                title="Add note"
                color={theme.palette.primaryHiglight}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: theme.palette.backgroundPrimary,
    height: '100%',
  },
  safeArea: {
    backgroundColor: theme.palette.backgroundPrimary,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: theme.palette.backgroundPrimary,
    height: '100%',
    padding: theme.spacing.space32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: theme.palette.white,
  },
  cardContainer: {
    marginVertical: theme.spacing.space32,
  },
  card: {
    padding: theme.spacing.space16,
    backgroundColor: theme.palette.backgroundSecondary,
    borderRadius: 6,
    marginBottom: theme.spacing.space12,
  },
  cardText: {
    color: theme.palette.white,
    fontSize: theme.typography.normal,
  },
  textInput: {
    height: 48,
    borderColor: theme.palette.white,
    color: theme.palette.white,
    borderWidth: 1,
    paddingHorizontal: theme.spacing.space16,
    width: '100%',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: theme.spacing.space16,
  },
});

export default HomeView;
