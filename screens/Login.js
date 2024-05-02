import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <Text>Login Screen flow from here...</Text>
            </View>
            <View style={styles.footercontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('NewPage')}>
                    <Text>Move to Foodie Uploads...</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headercontainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    footercontainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});
export default Login