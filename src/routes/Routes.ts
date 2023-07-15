import Colors from "../modules/Colors";
import BottomTabs from "../navigations/BottomTabs";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import StudentScreen from "../screens/StudentScreen";
import { TypeRouter } from "../types/Types";

export const Routes = <TypeRouter[]>[
  // {
  //   component: LoginScreen,
  //   name: "login-screen",
  //   auth: false,
  //   options: {
  //     headerShown: false,
  //   },
  // },
  {
    component: MainScreen,
    name: "main-screen",
    auth: true,
    options: {
      headerShown: true,
      title: "MainScreen",
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: "#000",
    },
  },
  {
    component: StudentScreen,
    name: "student-screen",
    auth: true,
    options: {
      headerShown: true,
      title: "StudentScreen",
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: "#000",
    },
  },
];
