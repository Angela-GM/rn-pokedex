import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigation';
import { ContextProvider } from './src/context/Context';


export default function App() {
  
  return (
    <ContextProvider>
    <NavigationContainer>
        <AppNavigator />
     </NavigationContainer>
 </ContextProvider>
  );
}

