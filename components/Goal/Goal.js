
import{ useState } from "react";
import { View,Text, StyleSheet, Button, TextInput, ScrollView,FlatList, Pressable} from "react-native";
import Goalitem from "./Goalitem";
import GoalInput from "./Goalinput";
export default function Goals(){
    
    const[caloriesGoals,setCaloriesGoals]=useState([]);

    
    function addgoalHandler(enteredGoalText){
        setCaloriesGoals(currentCaloriesGoals=>[...currentCaloriesGoals,{text:enteredGoalText,id:Math.random().toString()},]);
    };
    function deleteGoalHandler(id){
        setCaloriesGoals((currentCaloriesGoals)=>{
            return currentCaloriesGoals.filter((goal)=>goal.id !== id);
        });

    }


    
    return(
        <View style={style.container}>
            <GoalInput onAddGoal={addgoalHandler}/>
      
               <View style={style.goalsContainer} >
            <FlatList
             data={caloriesGoals} 
            renderItem={(itemData)=>{
                
                return(
                    <Goalitem text={itemData.item.text} id={itemData.item.idc} onDeleteItem={deleteGoalHandler}/>
                  
            );
        }}
        keyExtractor={(item,index)=>{
            return item.id;
        }}
         alwaysBounceVertical={false}
            />
            </View>
        </View>

    );
}
const style=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:16,
        
    },
   
    goalsContainer:{
        flex:5
    },
    
})