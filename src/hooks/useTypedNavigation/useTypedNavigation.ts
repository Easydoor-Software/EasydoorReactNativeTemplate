import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList, HOME_SCREEN } from '../../navigation';


export const useTypedNavigation = (
    screenKey: keyof RootStackParamList = HOME_SCREEN,
): NavigationProp<RootStackParamList, keyof RootStackParamList> =>
    useNavigation<NavigationProp<RootStackParamList, typeof screenKey>>();
