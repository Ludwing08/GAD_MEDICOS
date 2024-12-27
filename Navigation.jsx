import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Schedule from './app/screens/Schedule';
import Appointment from './app/screens/Appointment';
import Login from './app/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs(){
    return(
       <Tabs.Navigator
       initialRouteName='Schedule'
       screenOptions={{
        tabBarInactiveTintColor: 'green',
        tabBarStyle: { backgroundColor: '#f8f9fa'},
        animation: 'fade'        
    }}>
        <Tabs.Screen
        name='Schedule'
        component={Schedule}
        options={{
            tabBarLabel: 'Agendar cita',
            headerShown: false
        }}
        />        
        <Tabs.Screen
        name='Appoitment'
        component={Appointment}
        options={{
            tabBarLabel: 'Teleconsulta',
            headerShown: false
        }}
        />
       </Tabs.Navigator>
    );
}

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name='Login'
            component={Login}
            
            />
            <Stack.Screen
            name='MyTabs'
            component={MyTabs}
            screenOptions={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default function Navigation(){
    return (
    <NavigationContainer>        
            <MyStack/>        
    </NavigationContainer>
    );
}