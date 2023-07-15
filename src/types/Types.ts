export type TypeOptionRoute = {
  headerShown: boolean;
  title?: string;
  headerStyle?: any;
  headerTintColor?: string;
  headerTitleStyle?: any;
  headerRight?: boolean;
};
export type TypeRouter = {
  name: string;
  component: () => JSX.Element;
  options: TypeOptionRoute;
  auth: boolean;
};
export type TypeLocation = {
  coords: {
    accuracy: number | undefined;
    altitude: number | undefined;
    altitudeAccuracy: number | undefined;
    heading: number | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
    speed: number | undefined;
  };
  mocked?: boolean | undefined;
  timestamp: number;
};
export interface TypeStudent {
  name: string;
  age: number;
  grade: number;
  subject: string[];
}
