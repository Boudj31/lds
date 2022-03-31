import React from "react";
import {Home} from "../views/Home";
import {Contact} from "../views/Contact";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Login} from "../views/Login";
import {News} from "../views/News";

const Tab = createBottomTabNavigator();


export const TabBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Connexion" component={Login} />
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
    );
}