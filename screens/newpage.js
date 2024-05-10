import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const NewPage = () => {
    return (
        <View style={styles.container}>
            {/*card*/}
            <View style={styles.card}>
                {/* /*header*/}
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Zenzome Application
                    </Text>
                    <Text style={styles.subtitle}>
                        Card view
                    </Text>
                </View>
                {/*content*/}
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Describing about the process flow of the application ,
                        content-based-application used with help of AWS Lambda for video transcoding
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#f5f5f5'
    },
    card: {
        backgroundColor: ' white', borderRadius: 15,
        padding: 16, shadowColor: 'black',
        shadowOffset: {
            width: 0, height: 4
        }, shadowOpacity: 0.3,
        shadowRadius: 6, elevation: 14,
        width: 350, height: 350,
        justifyContent: 'center', alignItems: 'center'
    },
    header: {
        marginBottom: 16, alignItems: 'center'
    },
    title: {
        fontSize: 30, fontWeight: 'bold', color: 'green'
    },
    subtitle: {
        fontSize: 24, color: '#333', marginTop: 5
    },
    content: {
        alignItems: 'center'
    },
    text: {
        fontSize: 17, color: '#444444', textAlign: 'center'
    },
});

export default NewPage