import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './UserFavoritesScreen.styles';
import { useTypedNavigation } from '../../hooks';
import { USER_FAVORITES_SCREEN } from '../../navigation';

export const UserFavoritesScreen = () => {
    const navigation = useTypedNavigation(USER_FAVORITES_SCREEN);

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.wrapper}>
            <Text>UserFavoritesScreen</Text>
            <Button title="Go back" onPress={goBack} />
        </View>
    );
};
