import { Animated } from "react-native";
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Ionicons";

import Colors from "../modules/Colors";
import { BottomRoutes } from "../routes/BottomRoutes";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <Tabs.Navigator>
      {BottomRoutes?.map((tab: any, index: number) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: Colors.colorBG, height: 60 },
            tabBarIcon: ({ focused }: any) => {
              return (
                <>
                  <Icon
                    name={tab.icon}
                    size={25}
                    color={focused ? Colors.dark : Colors.gray}
                  />
                  {/* {tab.badge && cartItems && (
                    <Badge
                      style={{
                        position: 'absolute',
                        top: 6,
                        left: 50,
                      }}
                      color='primary'
                      label={JSON.parse(cartItems)?.length}
                    />
                  )} */}
                </>
              );
            },
          }}
          listeners={({ navigation, route }: any) => ({
            tabPress: (e: any) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      ))}
    </Tabs.Navigator>
  );
};

export default BottomTabs;
