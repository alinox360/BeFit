import { Text, TextInput, View,StyleSheet } from "react-native";

function Input({ label, TextInputConfig }) {
    return( <View style={style.Container}>
        <Text style={style.label} >
            {label}
        </Text >
        <TextInput style={style.inputStyle} {...TextInputConfig} />
    </View>
    );
}
export default Input;
const style=StyleSheet.create({
    Container:{
        marginHorizontal:4,
        marginVertical:16,
    },
    label:{
        fontSize:14,
        color:'white',
        marginBottom:3,


    },
    inputStyle:{
        borderRadius:6,
        fontSize:15,
        padding:8,
        backgroundColor:'#00fa9a',
        color:'black'

    }
})