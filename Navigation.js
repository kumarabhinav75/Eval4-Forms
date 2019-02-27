import {
  createAppContainer, createStackNavigator, StackActions, NavigationActions,
} from 'react-navigation';
// import LoginPageContainer from './Containers/LoginPage/LoginPage.container';
// import AllAssessmentsContainer from './Containers/AllAssessments/AllAssessments.container';

import FormLandingPage from './Components/FormLandingPage/FormLandingPage.component';
import CreateForm from './Components/CreateForm/CreateForm.component';
import FillForm from './Components/FIllForm/FillForm.component;


const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: FormLandingPage,
    navigationOptions: {
      header: null,
    },
  },
  CreateFormPage: {
    screen: CreateForm,
  },
  FillFormPage: {
    screen: FillForm,
  }
}, {
  initialRouteName: 'MainScreen',
});

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default AppNavigatorContainer;
