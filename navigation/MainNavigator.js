import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import StudentScreen from '../components/StudentScreen';
import TeacherScreen from '../components/TeacherScreen';
import AdminScreen from '../components/AdminScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Estudiante" component={StudentScreen} />
      <Stack.Screen name="Profesor" component={TeacherScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
  );
}
