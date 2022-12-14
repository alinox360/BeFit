import axios from 'axios';
const backend_UR='https://react-nativebefit-default-rtdb.firebaseio.com/'
export function storeCalories(caloriesData){
    axios.post('https://react-nativebefit-default-rtdb.firebaseio.com/calories.json',caloriesData)
    

}
export async function fetchCalories(){
   const response= await axios.get('https://react-nativebefit-default-rtdb.firebaseio.com/calories.json');
   //fire base get back the object by response , not using .get

   const calories=[];
   // hold the array
   for(const key in response.data){
    const caloriesObject={
        id:key,
        amount:response.data[key].amount,
        date:new Date(response.data[key].date),
        description:response.data[key].description
    };
    calories.push(caloriesObject)
   }
   return calories;

   // key are ids in firebase, access different ids in our data
}
//use promises object , will give you access to other data