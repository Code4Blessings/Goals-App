import { v4 as uuidv4 } from 'uuid';
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
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {enteredGoalText, key: uuidv4()}
      //The uuidv4() function generates a random id for each item in the list. This is necessary for the FlatList component to work properly. The key prop is required for the FlatList component to work properly.
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
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item}</Text>
            </View>
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
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  }
});
