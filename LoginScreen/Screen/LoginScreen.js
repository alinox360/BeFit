import * as React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity,
 } from "react-native";

export default class LoginScreen extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <KeyboardAvoidingView> 
                <View style = {styles.heading}>
                    <Text style = {styles.headingText}>BeFit</Text>

                    <Text style = {styles.headingText2}>
                        Login to <Text style={{color:'white'}}> your account</Text>
                    </Text>
                 </View>

                <View style = {styles.body}> 
                <TextInput 
                placeholder="Username" 
                keyboardType="username"
                style={[styles.inputBox, {marginTop: 50}]}
                />

                <TextInput 
                placeholder="Password" 
                secureTextEntry = {true}
                style={[styles.inputBox, {marginTop: 10}]}
                />

                <TouchableOpacity style = {styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop: 25}}>
                    <Text>Don't have an account? Register here</Text>
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#800080",
        alignItems: "center",
        justifyContent: "center",
    },

body:{
    width:300, 
    height:300,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
        width:0,
        height:2
    },
shadowOpacity: 0.25,
shadowRadius: 4,
elevation: 5,
},

heading: {
    alignSelf: "center",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
},

headingText: {
    fontStyle: "italic",
    color: "white",
    fontSize: 30,
    marginBottom: 10,
    textDecorationLine: "underline",
},

headingText2:{
    fontStyle: 'italic',
    fontSize: 20,
    color: "white",
    marginTop: 10,
},

inputBox:{
    backgroundColor: '#EBF0FC',
    borderRadius: 50,
    padding: 10,
    width: 280,
    height: 40,
},

button:{
    backgroundColor: 'purple',
    height: 40,
    width: 200,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
},
});
