import React from "react";
import {Home} from "../views/Home";
import {Contact} from "../views/Contact";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}