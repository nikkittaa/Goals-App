import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
 
export default function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler (){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible = {props.visible} animationType='slide'>
    
          <View style = {styles.inputContainer}>
          <Image style = {styles.image} source = {require('../assets/goals.png')}/>
        <TextInput style = {styles.textInput} 
            placeholder = "Goals..." 
            onChangeText={goalInputHandler}
            value = {enteredGoalText}
        />
        <View style = {styles.buttonContainer}>
        <View style = {styles.button}>
        <Button title = "Add Goal"
            onPress = {addGoalHandler}
            color = '#d966ff'
        />
        </View>
        <View style = {styles.button}>
        <Button title = "Cancel" color = 'red' onPress = {props.onCancel}/>
        </View>
        </View>
      </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#311b6b",
    
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '85%',
    padding: 16,
    marginRight: 8,
    marginBottom: 16,
    
    borderRadius: 6,
  },

  buttonContainer: {
    flexDirection :"row",
  },
  button : {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});