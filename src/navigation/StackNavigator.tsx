import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HOME_SCREEN, USER_FAVORITES_SCREEN } from './paths';
import { RootStackParamList } from './RootStackParamList';
import { HomeScreen, UserFavoritesScreen } from '../screens';

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName={HOME_SCREEN}
                screenOptions={{ headerShown: false }}>
                <MainStack.Screen name={HOME_SCREEN} component={HomeScreen} />
                <MainStack.Screen
                    name={USER_FAVORITES_SCREEN}
                    component={UserFavoritesScreen}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
