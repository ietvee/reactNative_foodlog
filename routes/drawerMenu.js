import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack.';
import Stack from './mainStack';

const DrawerNav = createDrawerNavigator({
    Home: {
        screen: Stack,
    }, 
    About: {
        screen: AboutStack,
    }
});

export default createAppContainer(DrawerNav);