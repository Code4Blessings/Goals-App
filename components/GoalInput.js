import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText(''); //Clears the text input after the goal is added which is binded to the TextInput in the value={enteredGoal}.
  };

    return (
      <Modal visible={props.visible} animationType='slide' >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput} placeholder='Your course goal!' 
            onChangeText={goalInputHandler} 
            value={enteredGoalText}/> 
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Add Goal' color='#FF5733' onPress={addGoalHandler}/>
              </View>
              <View style={styles.button}>
                <Button title='Cancel' color='#FF5733' />
              </View>
            </View>
          
      </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    padding: 25,
    borderBottomColor: '#373231',
  },
  textInput: {
    width: '100%', 
    borderColor: '#373231', 
    borderWidth: 1, 
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});

export default GoalInput;
