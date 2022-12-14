import { View,TextInput,Button,StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const[enteredGoalText,setEnteredGoalText]=useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    };
    function addgoalHandler()
    {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return(
        <View style={style.inputContainer}>
        <TextInput style={style.TextInput}
         placeholder="your goal "
         onChangeText={goalInputHandler} 
         value={enteredGoalText}
         />
        <Button title="Add Goal" onPress={addgoalHandler}/>
       </View>
    );
};

export default GoalInput;
const style=StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'

    },
    TextInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'70%',
        marginRight:8,
        padding:8
    },

});