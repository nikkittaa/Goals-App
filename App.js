
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [ modalIsVisible, setModalIsVisible] = useState([]);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText){
    setGoals(prev => [...prev, enteredGoalText]);
    endAddGoalHandler();
  }

  function removeElement(goal){
    const newGoals = goals.filter(goalText => goalText !== goal);
    setGoals(newGoals);
  }
 
  return (
    <View style = {styles.appContainer}>
      <Button title = "Add New Goal" color = '#d966ff'
        onPress = {startAddGoalHandler}
      />
      <GoalInput onCancel = {endAddGoalHandler} visible = {modalIsVisible} onAddGoal = {addGoalHandler}/>
      <View style = {styles.goalsContainer}>
      <FlatList data = {goals}
        renderItem={(goalData) => {
          return(
            <GoalItem goalData = {goalData} removeElement = {removeElement}/>
          );
        }}
          keyExtractor={(item, index) => {
            return item;
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
    backgroundColor: "#311b6b",
  },
  
  goalsContainer: {
    flex: 4,
  },

  
});
