import { useState } from "react";
import { View, Text,Alert} from "react-native";
import Input from "./Input";
import Buttons from "../UI/Buttons";
import { getFormattedDate } from "../../util/date";

function CaloriesForm({submitButtonLabel,onCancel,onSubmit,defaultValues}) {
    const[inputValues,setinputAvalue]= useState({
        amount:{
            value:defaultValues ? defaultValues.amount.toString():'',
            isValid:defaultValues? true:false,
        },
        date:{
            value:defaultValues?getFormattedDate(defaultValues.date):'',
            isValid:defaultValues? true:false,
        },
        description:{
            value:defaultValues?defaultValues.description:'',
            isValid:!!defaultValues,

        },

    });
    function amountChangeHnadler(inputIndetifier,enteredValue){
        setinputAvalue((currentInputValue)=>{
            return{
                ...currentInputValue,
                [inputIndetifier]:{value:enteredValue,isValid:true},
            }
        });
    }
    function submitHandler(){
        const caloriesData={
            amount:+inputValues.amount.value,
            date:new Date(inputValues.date.value),
            description:inputValues.description.value
        };
        const amountIsvalid=!isNaN(caloriesData.amount)  &&caloriesData.amount>0;
        const dateIsValid = caloriesData.date.toString() !=='Invalid Date';
        const descriptionIsValid= caloriesData.description.trim().length>0;

        if(!amountIsvalid || !dateIsValid || !descriptionIsValid){
            Alert.alert('Inavlid input')
            return;
        }
        onSubmit(caloriesData);
    }
    return( <View>

        <Input label="Amount" TextInputConfig={{
            keyboardType:'number-pad',
            onChangeText:amountChangeHnadler.bind(this,'amount'),
            value:inputValues.amount.value,
        }}/>
        <Input label="Date" TextInputConfig={{
           
            placeholder:'YYYY-MM-DD',
            maxLenght:10,
            onChangeText:amountChangeHnadler.bind(this,'date'),
            value:inputValues.date.value,
        }
            
        }/>
        <Input label="Description" TextInputConfig={{
            multiline:true,
            //autoCorret:false
            onChangeText:amountChangeHnadler.bind(this,'description'),
            value:inputValues.description.value,
        }} />
         <View>
                <Buttons mode="flat" onPress={onCancel}>
                    CALNCEL
                </Buttons>
                <Buttons onPress={submitHandler}>{submitButtonLabel}</Buttons>
            </View>


    </View>
    );
}
export default CaloriesForm;