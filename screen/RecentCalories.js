import { useContext, useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CaloriesOutput from '../components/CaloriesOutput/CaloriesOutput';
import { CaloriesContext } from '../store/calories-context';
import { getDateMinusDays } from '../util/date';
import { fetchCalories } from '../util/http';




function RecentCalories(){
  const CaloriesCtx= useContext(CaloriesContext);
  useEffect(()=>{
    async function getCalories(){
    const calories=await fetchCalories();
    }
    getCalories();
  },[]);


  const recentCalories=CaloriesCtx.calories.filter((calories)=>{
    const today=new Date();
    const date7DaysAgo= getDateMinusDays(today,7);
    return calories.date>date7DaysAgo;
  });
    return (<CaloriesOutput calories={recentCalories}  CaloriesPeriod="last 7 days" fallbackText="No Calories registered for the last 7 days"/>);
    
}
export default RecentCalories;
const style=StyleSheet.create({
  container:{
    backgroundColor:''
  }
})