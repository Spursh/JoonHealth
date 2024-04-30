import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EnterName from "../screens/EnterName";
import SelectGender from "../screens/SelectGender";
import AddChild from "../screens/AddChild";
import SignUp from "../screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

// Define the screens for the SignUpStack
const screens = [
    {name: "EnterName", component: EnterName},
    {name: "SelectGender", component: SelectGender},
    {name: "AddChild", component: AddChild},
    {name: "SignUp", component: SignUp}
];

const SignUpStack = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="EnterName">
                {screens.map(({name, component}) => (
                    <Screen
                        key={name}
                        name={name}
                        component={component}
                        options={{
                            headerTitle: '',
                        }}
                    />
                ))}
            </Navigator>
        </NavigationContainer>
    );
}

export default SignUpStack;
