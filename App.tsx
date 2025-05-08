// import { StyleSheet,SafeAreaView,View,Text } from "react-native";
// import ReadyForOperations from './screens/ReadyForOperations'
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from '@react-navigation/native';
// import NameOperations from "./screens/NameOperations"
// import OnBreak from "./screens/OnBreak"
// import EndJobScreen from "./screens/EndJobScreen"
// import ChangeJob from "./screens/ChangeJob"
// import Logout from "./screens/Logout"
// import { enableScreens } from 'react-native-screens';

// enableScreens();

// const Stack = createNativeStackNavigator();

// function App(): React.JSX.Element {
  
//   return (
//     <SafeAreaView>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">

//             <Stack.Screen name="Home" component={ReadyForOperations}/>
//             <Stack.Screen name="Login" component={NameOperations}/>
//             <Stack.Screen name="EndJob" component={EndJobScreen}/>
//             <Stack.Screen name="Logout" component={Logout}/>
//             <Stack.Screen name="TakeBreak" component={OnBreak}/>
//             <Stack.Screen name="ChangeJob" component={ChangeJob}/>

//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//     // <View>
//     //   <Text>this is awseome</Text>
//     // </View>
//   );
// }


// export default App;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import NameOperations from "./screens/NameOperations"
import OnBreak from "./screens/OnBreak"
import EndJobScreen from "./screens/EndJobScreen"
import ChangeJob from "./screens/ChangeJob"
import Logout from "./screens/Logout"
import ReadyForOperations from './screens/ReadyForOperations'
// import { SafeAreaView } from 'react-native-safe-area-context';

enableScreens(); // Important for native-stack!

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={ReadyForOperations}/>
            <Stack.Screen name="Login" component={NameOperations}/>
            <Stack.Screen name="EndJob" component={EndJobScreen}/>
            <Stack.Screen name="Logout" component={Logout}/>
            <Stack.Screen name="TakeBreak" component={OnBreak}/>
            <Stack.Screen name="ChangeJob" component={ChangeJob}/>  
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}