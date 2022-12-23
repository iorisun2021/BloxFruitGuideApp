import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Profile from "./screen/Profile";
import ForgotPassword from "./screen/ForgotPassword";
import Index from "./screen/Index";
import News from "./screen/News";
import NewsDetail from "./screen/NewsDetail";
import Fruit from "./screen/Fruit";
import AddFruit from "./screen/AddFruit";
import GuideMngm from "./screen/GuideMngm";
import FruitMngm from "./screen/FruitMngm";
import UserMngm from "./screen/UserMngm";
import FruitDetail from "./screen/FruitDetail";
import UserDetail from "./screen/UserDetail";
import Guide from "./screen/Guide";
import Settings from "./screen/Settings";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthProvider } from "./context/auth";
import { FruitProvider } from "./context/fruit";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomTabBarButton from "./components/CustomTabBarButton";
import CustomTabBar from "./components/CustomTabBar";

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  return (
    <AuthProvider>
      <FruitProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="Index"
                options={{ headerShown: false }}
                component={Index}
              />
              <HomeStack.Screen
                name="GuestDashBoard"
                options={{ headerShown: false, gestureEnabled: false }}
                component={GuestDashBoardTab}
              />
              <HomeStack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="AddFruit"
                component={AddFruit}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="GuideMngm"
                component={GuideMngm}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="FruitMngm"
                component={FruitMngm}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="UserMngm"
                component={UserMngm}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                  title: "Reset Password",
                  headerBackTitleVisible: false,
                }}
              />
              <HomeStack.Screen
                name="Profile"
                component={Profile}
                options={{
                  headerBackTitleVisible: false,
                  headerRight: () => (
                    <TouchableOpacity
                      style={{
                        height: 30,
                        width: 60,
                        borderRadius: 8,
                        marginRight: 20,
                        backgroundColor: "#4A95D6",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        Edit
                      </Text>
                    </TouchableOpacity>
                  ),
                }}
              />
              <HomeStack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
              <HomeStack.Screen name="News" component={News} />
              <HomeStack.Screen
                name="NewsDetail"
                component={NewsDetail}
                options={{ title: "News", headerBackTitleVisible: false }}
              />
              <HomeStack.Screen name="Fruit" component={Fruit} />
              <HomeStack.Screen
                name="FruitDetail"
                component={FruitDetail}
                options={{ headerBackTitleVisible: false, headerShown: false }}
              />
              <HomeStack.Screen
                name="UserDetail"
                component={UserDetail}
                options={{ headerBackTitleVisible: false, headerShown: false }}
              />
              <HomeStack.Screen name="Guide" component={Guide} />
              <HomeStack.Screen name="Settings" component={Settings} />
            </HomeStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </FruitProvider>
    </AuthProvider>
  );
}

function GuestDashBoardTab() {
  return (
    <Tab.Navigator
      //tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "News")
            iconName = focused ? "newspaper" : "newspaper-outline";
          else if (route.name === "Fruits")
            iconName = focused ? "nutrition" : "nutrition-outline";
          else if (route.name === "Guide")
            iconName = focused ? "bulb" : "bulb-outline";
          else if (route.name === "Settings")
            iconName = focused ? "settings" : "settings-outline";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      })}
    >
      <Tab.Screen
        name="News"
        component={News}
        options={{
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Fruits"
        options={{
          headerShown: false,
          title: "Fruuits",
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        component={Fruit}
      />
      <Tab.Screen
        name="Guide"
        component={Guide}
        options={{
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        options={{
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "transparent",
    position: "absolute",
    borderTopWidth: 0,
    bottom: 10,
  },
});
