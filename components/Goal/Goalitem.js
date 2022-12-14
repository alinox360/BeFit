import { StyleSheet,Pressable,View,Text } from "react-native";
function Goalitem(props){
    return(
        <Pressable onPress={props.onDeleteItem.bind(this,props.id)} >
        <View style={style.goalItem}>
        <Text style={style.goalText}>{props.text}</Text>
    </View>
    </Pressable>
    );
};

export default Goalitem;
const style=StyleSheet.create({
    goalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#1e90ff',
        color:'white',
    },
    goalText:{
        color:'white',
    }
});