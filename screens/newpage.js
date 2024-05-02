import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NewPage = () => {
    return (
        <View style={styles.container}>
            <Text>new page feeds ... !!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NewPage