import { useState } from 'react';
import {
   StyleSheet, 
   Text, 
   View, 
   Button, 
   TextInput, 
   ScrollView,
   FlatList
  } from 'react-native';
//FlatList is better for long lists, ScrollView is better for short lists. FlatList only renders the items that are visible on the screen, ScrollView renders all items at once. Also does not require mapping over the array of items, just pass the array as a prop.

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}
      //The key prop is required for FlatList to work properly. It is used to identify each item in the list. It must be a string.
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
           <GoalItem text={itemData.item.text} />
          );
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5
  },
});
