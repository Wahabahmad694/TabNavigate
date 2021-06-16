import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { StatusBar } from "react-native";

const App =() => {
  return(
    <NavigationContainer>
      <StatusBar hidden={true}/>
        <Tabs /> 
    </NavigationContainer>
  );
}

export default App;