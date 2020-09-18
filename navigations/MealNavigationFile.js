import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryMealScreen from "../screens/CategoryMealScreen";
import FavoriateScreen from "../screens/FavoriateScreen";
import MealScreen from '../screens/MealDetailsScreen';
const MealNavigator = createStackNavigator({
    Category: {
        screen: CategoryScreen, navigationOptions: {
            headerStyle: {
          backgroundColor:"#341f97"
            },
            headerTintColor:"#fff"
        }
    },
    CategoryMeal: CategoryMealScreen,
    Favorate: FavoriateScreen,
    MealDetails: MealScreen
    
    
});
export default createAppContainer(MealNavigator);
