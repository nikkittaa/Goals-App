import { Button, View, Text } from "react-native";
import {StyleSheet} from 'react-native';
function GoalItem(props){
    function remove(){
      props.removeElement(props.goalData.item);
    }
    return (
        <View style = {styles.goalContainer}>
              <Text 
                style = {styles.goaltext} 
                onPress={remove}>
                 {props.goalData.item}
              </Text>
              <Button title = 'Done'
                  color = '#d966ff'
                  onPress={remove}
              />
            </View>
    )
}; 

const styles = StyleSheet.create({
    goaltext: { 
    margin: 6,
    padding: 8,
    backgroundColor: 'white',
    flex: 1,
  },

  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default GoalItem;