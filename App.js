import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageC from './screen/ManageC.js';
import RecentCalories from './screen/RecentCalories';
import AllCalories from './screen/AllCalories';
import Goals from './components/Goal/Goal.js';
import { GlobalStyles } from './constants/styles.js';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton.js';
import CaloriesContextProvider from './store/calories-context.js';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function CaloriesOverview() {
  return <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageC');
          }} />
      ),
    })}
  >
    <BottomTabs.Screen name="RecentCalories" component={RecentCalories}
      options={{
        title: 'RecentCalories',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />

      }} />
       
    <BottomTabs.Screen name="AllCalories" component={AllCalories}
      options={{
        title: 'AllCalories',
        tabBarLabel: 'All Calories',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
      }} />
      <BottomTabs.Screen name="Goals" component={Goals}
      option={{
        title:'Goals',
        tabBarLabel:'Goals',
        tabBarIcon:({color,size})=><Ionicons name="heart" size={size} color={color}/>
      }}
      />





  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>

      <StatusBar style="light" />
      <CaloriesContextProvider>

        <NavigationContainer >

          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}
          >
            <Stack.Screen
              name="CaloriesOverview"
              component={CaloriesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageC"
              component={ManageC}
              options={{
                title: "Manage Calories",
                presentation: 'modal'

              }}
            />



          </Stack.Navigator>



        </NavigationContainer>
      </CaloriesContextProvider>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: "#FFFFFF"
  }
});
