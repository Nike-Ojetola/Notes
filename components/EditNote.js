import { PropsService } from '@ui-kitten/components/devsupport';
import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { styles } from './AddNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditNote = ({ route, navigation, ...props }) => {
  const { i, n } = route.params;
  const [newEdit, setNewEdit] = useState(n);

  const editNote = () => {
    let edited = [...props.notes];
    edited[i] = newEdit;
    props.setNotes(edited);
    navigation.navigate('Notes');

    AsyncStorage.setItem('storedNotes', JSON.stringify(edited))
      .then(() => {
        props.setNotes(edited);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        behavior="padding"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ padding: 20, justifyContent: 'space-around' }}>
            <TextInput
              style={[styles.input]}
              placeholder="Type here.."
              value={newEdit.toString()}
              onChangeText={(text) => setNewEdit(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => editNote()}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditNote;
