import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dumydata';

const CategoryMealScreen = (props)=> {

    return (<View>
        <Text>Category Meal Screen  </Text>
    </View>)
}
CategoryMealScreen.navigationOptions = (a) => {
   const categoryId =  a.navigation.getParam("categoryId");
    const category = CATEGORIES.find(a => a.id == categoryId);
   
    return {
        headerTitle:category.name
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    
    }
})

export default CategoryMealScreen;