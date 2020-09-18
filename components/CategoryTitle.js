import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default function CatgoryTitleComponent(props) {
   

    return (
        <TouchableOpacity onPress={props.onSelect} style={{ ...styles.griditem,backgroundColor:props.category.color }}>
        <View>
             <Text  style={styles.textStyle} >{props.category.name}</Text>
            </View>
    </TouchableOpacity>);
}
const styles = StyleSheet.create({
    griditem: {
        flex: 1,
        padding: 25,
        height: 140,
        margin: 25,
        borderRadius: 10,
       
    },
    textStyle: {
        color: "#fff",
        fontSize:18
        
    }
})