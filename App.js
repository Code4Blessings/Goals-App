import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
//FlatList is better for long lists, ScrollView is better for short lists. FlatList only renders the items that are visible on the screen, ScrollView renders all items at once. Also does not require mapping over the array of items, just pass the array as a prop.

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString()}
      //The key prop is required for FlatList to work properly. It is used to identify each item in the list. It must be a string.
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color='#FF5733'
        onPress={startAddGoalHandler} />
      <GoalInput 
        visible={modalIsVisible}
        addGoal={addGoalHandler}
        onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
           <GoalItem 
           text={itemData.item.text} 
           id={itemData.item.id}
           onDeleteItem={deleteGoalHandler} />
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
  
  goalsContainer: {
    flex: 5
  },
});
