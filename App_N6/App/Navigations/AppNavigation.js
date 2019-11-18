import React from 'react'
import {Icon} from 'react-native-elements'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../Containers/CategoriesScreen'
import CreateWarningScreen from '../Containers/CreateWarningScreen'
import HomeCategoriesScreen from '../Containers/HomeCategoriesScreen'
import HomeWarningScreen from '../Containers/HomeWarningScreen'
import WarningDetailsScreen from '../Containers/WarningDetailsScreen'
import HomeScreen from '../Containers/HomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import InfoScreen from '../Containers/InfoScreen'
import SearchScreen from '../Containers/SearchScreen'
import CreateRequestScreen from '../Containers/CreateRequestScreen'
import RequestScreeen from '../Containers/RequestScreeen'
import LoadingScreen from '../Containers/LoadingScreen'
import RequestDetailScreen from '../Containers/RequestDetailScreen'
import ResetpassScreen from '../Containers/ResetpassScreen'
import HouseWarningScreen from '../Containers/HouseWarningScreen'
import ChangeInforScreen from '../Containers/ChangeInforScreen'
import ConfirmScreen from '../Containers/ConfirmScreen'
import CreatenewpassScreen from '../Containers/CreatenewpassScreen'

const WarningNavigation = createStackNavigator(
  {
    CategoriesScreen: {
      screen: CategoriesScreen
    },
    CreateWarningScreen: {
      screen: CreateWarningScreen
    },
    WarningDetailsScreen: {
      screen: WarningDetailsScreen
    },
    HomeWarningScreen: {
      screen: HomeWarningScreen,
    },
    HomeCategoriesScreen: {
      screen: HomeCategoriesScreen,
    },
    HouseWarningScreen: {
      screen: HouseWarningScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'HouseWarningScreen'
  }
)

const RequestNavigation = createStackNavigator(
  {
    RequestScreeen: {
      screen: RequestScreeen
    },
    CreateRequestScreen: {
      screen: CreateRequestScreen
    },
    RequestDetailScreen: {
      screen: RequestDetailScreen
    },RequestScreeen: {
      screen: RequestScreeen
    }
  }, 
  {
    headerMode: 'none',
    initialRouteName: 'RequestScreeen'
  }
)

const AppNavigator = createStackNavigator(
  {
    LoadingScreen: {
      screen: LoadingScreen
    },
    ConfirmScreen: {
      screen :ConfirmScreen
    },
    HomeScreen: {
      screen: HomeScreen
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    SignUpScreen: {
      screen: SignUpScreen
    },
    WarningScreen: {
      screen: WarningNavigation
    },
    ResetpassScreen: {
      screen: ResetpassScreen
    },
    InfoScreen: {
      screen: InfoScreen
    },
    SearchScreen: {
      screen: SearchScreen
    },
    RequestScreen: {
      screen: RequestNavigation
    },
    ChangeInforScreen: {
      screen: ChangeInforScreen
    },
    CreatenewpassScreen:{
      screen: CreatenewpassScreen
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoadingScreen'
  }
)
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
