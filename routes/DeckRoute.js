import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Deck from '../components/Deck'
import AddQuestion from '../components/AddQuestion'
import Quiz from '../components/Quiz'
import TabNavigator from './TabNavigator'

const StackNavigator = createStackNavigator(
    {
        Main: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            }
        },
        Deck: {
            screen: Deck,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.params.deck.title
            })
        },
        AddQuestion: {
            screen: AddQuestion,
            navigationOptions: {
                title: "ADD Question",
            }
        },
        StartQuiz: {
            screen: Quiz,
            navigationOptions: {
                title: "QUIZ",
            }
        },
    },
    {
        //*****************************************************************
        // further properties are listed on the following link
        //https://reactnavigation.org/docs/en/stack-navigator.html
        //*****************************************************************
        initialRouteName: "Main",
    },


);

// StackNavigator.navigationOptions = { tabBarVisible: false }

export default (createAppContainer(StackNavigator));