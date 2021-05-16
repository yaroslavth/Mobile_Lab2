import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Bottom } from '../conststants/global'
import Me from "./Me";
import Charts from "./Charts";

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={Bottom}>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Me"
            >
                <Tab.Screen
                    name="Me"
                    component={Me}
                    options={{
                        tabBarLabel: 'Me',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'maxcdn'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Charts"
                    component={Charts}
                    options={{
                        tabBarLabel: 'Charts',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'css3'}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
