import { createAppContainer, createSwitchNavigator } from 'react-navigation';
{/*import{createStackNavigator} from 'react-navigation-stack';*/}

import page2 from '~/pages/Main/login';
import Main from '~/pages/Main';
import page3 from '~/pages/Main/cobrar';
import Tabs from '~/Components/Header/Tabs/index';
{/* Professora perdão pelo nomes das paginas kjsdaskdakj */}
const Routes = createAppContainer(createSwitchNavigator({page2, Main,  page3, }));

export default Routes;
