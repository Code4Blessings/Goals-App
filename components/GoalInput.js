import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} placeholder='Your course goal!' 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}/> 
        <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    width: '70%', 
    borderColor: '#ccc', 
    borderWidth: 1, 
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInput;
