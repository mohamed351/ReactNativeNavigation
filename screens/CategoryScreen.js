import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import CatgoryTitleComponent from '../components/CategoryTitle'
import { CATEGORIES } from '../data/dumydata';



export default function CategoryScreen(props) {
   
  
    const renderGridItem = (itemData) => {
 
        return <CatgoryTitleComponent category={itemData.item} onSelect={() => props.navigation.navigate({
            routeName: "CategoryMeal", params: {
            categoryId:itemData.item.id
        }})} />;
    }

    return (<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} keyExtractor={(item)=> item.id} ></FlatList>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    
    }
  
})