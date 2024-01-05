import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';



const GoalItem = (props) => {
    return (
     
        <View style={styles.goalItem}>
            <Pressable 
              android_ripple={{color: '#ddd'}} 
              onPress={props.onDeleteItem.bind(this, props.id)}
              style={({pressed}) => pressed && styles.pressedItem}>
               <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>    
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#FF5733',
      },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8
      }
});

export default GoalItem;
