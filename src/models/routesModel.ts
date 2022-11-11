import { NativeStackNavigationProp } from "@react-navigation/native-stack"

// faz a tipagem das rotas 
export type propsNavigationStack = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>