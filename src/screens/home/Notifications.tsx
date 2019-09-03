import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PBottomNav from '../../library/components/PBottomNav';
import { INavigation } from '../../library/interfaces/Navigation';

interface INotificationsProps extends INavigation {

}

export default (props: INotificationsProps) => {
    return (
        <View style={styles.container}>
            <Text>Notifications</Text>

            <PBottomNav
                navigation={props.navigation}
            ></PBottomNav>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})