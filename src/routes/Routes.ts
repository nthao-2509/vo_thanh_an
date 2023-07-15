import BottomTabs from "../navigations/BottomTabs";
import LoginScreen from "../screens/LoginScreen";
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
    component: BottomTabs,
    name: "bottom-tabs",
    auth: true,
    options: {
      headerShown: false,
    },
  },
];
