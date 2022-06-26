import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Keyboard,
  TextInput,
  Alert,
} from 'react-native';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import * as Styles from '../assets/styles';

const AddNote = ({ navigation, ...props }) => {
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
              placeholder="Type Here..."
              multiline={true}
              value={props.note}
              onChangeText={(text) => props.setNote(text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (props.note === '') {
                  Alert.alert('Please Type Something');
                } else {
                  props.handleNote();
                  navigation.navigate('Notes');
                }
              }}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  addNoteContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 20,
    paddingTop: 20,
    width: '100%',
    fontSize: 19,
    color: 'black',
    fontWeight: '600',
    opacity: 0.8,
    shadowColor: Styles.color,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Styles.color,
    borderWidth: 2,
    borderRadius: 5,
    height: 300,
  },

  button: {
    backgroundColor: Styles.color,
    width: '40%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
export default AddNote;
