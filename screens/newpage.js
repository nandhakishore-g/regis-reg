import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';


export default function NewPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await resp.json();
            setData(data);
        }
        getData();
    }, []);
    // const languages = [
    //     { name: 'pascal', key: '1 ' },
    //     { name: 'c', key: '2' }, { name: 'c++', key: '3' },
    //     { name: 'java', key: '4' }, { name: 'javascript', key: '5' },
    //     { name: 'Go', key: '6' }, { name: 'kotlin', key: '7' },
    //     { name: 'Swift', key: '8' }
    // ]
    return (
        <View style={StyleSheet.container}>
            {/* <ScrollView>
                {languages.map((lang) => (
                    <View key={lang.key}>
                        <Text style={styles.item}>{lang.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
        paddingTop: 40, paddingHorizontal: 20
    },
    item: {
        marginTop: 20, padding: 30, backgroundColor: 'lightgray', fontSize: 24
    }
});

// import React from 'react'
// import { View, Text, StyleSheet, Dimensions } from 'react-native'

// const NewPage = () => {
//     return (
//         <View style={styles.container}>
//             {/*card*/}
//             <View style={styles.card}>
//                 {/* /*header*/}
//                 <View style={styles.header}>
//                     <Text style={styles.title}>
//                         Zenzome Application
//                     </Text>
//                     <Text style={styles.subtitle}>
//                         Card view
//                     </Text>
//                 </View>
//                 {/*content*/}
//                 <View style={styles.content}>
//                     <Text style={styles.text}>
//                         Describing about the process flow of the application ,
//                         content-based-application used with help of AWS Lambda for video transcoding
//                     </Text>
//                 </View>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center', backgroundColor: '#f5f5f5'
//     },
//     card: {
//         backgroundColor: ' white', borderRadius: 15,
//         padding: 16, shadowColor: 'black',
//         shadowOffset: {
//             width: 0, height: 4
//         }, shadowOpacity: 0.3,
//         shadowRadius: 6, elevation: 14,
//         width: 350, height: 350,
//         justifyContent: 'center', alignItems: 'center'
//     },
//     header: {
//         marginBottom: 16, alignItems: 'center'
//     },
//     title: {
//         fontSize: 30, fontWeight: 'bold', color: 'green'
//     },
//     subtitle: {
//         fontSize: 24, color: '#333', marginTop: 5
//     },
//     content: {
//         alignItems: 'center'
//     },
//     text: {
//         fontSize: 17, color: '#444444', textAlign: 'center'
//     },
// });

// export default NewPage