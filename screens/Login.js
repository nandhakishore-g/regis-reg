import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-web";
import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('NewPage')}
                    style={styles.profileButton}>
                    <MaterialCommunityIcons name={"account-circle"} size={50} color="#01a699" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headercontainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    footercontainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    bottomContainer: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    profileButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
    }
});
export default Login