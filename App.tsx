import { NavigationContainer } from '@react-navigation/native';
import { ContextProvider } from './src/context/Context';
import AppNavigator from './src/navigation/AppNavigation';


export default function App() {
  
  return (
    <ContextProvider>
    <NavigationContainer>
        <AppNavigator />
     </NavigationContainer>
 </ContextProvider>
  );
}

