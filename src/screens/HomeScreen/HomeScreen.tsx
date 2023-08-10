import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './HomeScreen.styles';
import { useTypedNavigation } from '../../hooks';
import { HOME_SCREEN, USER_FAVORITES_SCREEN } from '../../navigation';

export const HomeScreen = () => {
    const navigation = useTypedNavigation(HOME_SCREEN);

    const navigateToFavScreen = () => {
        navigation.navigate(USER_FAVORITES_SCREEN);
    };

    return (
        <View style={styles.wrapper}>
            <Text>HomeScreen</Text>
            <Button title="Navigate to FAV" onPress={navigateToFavScreen} />
        </View>
    );
};
