import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { propsStack } from '../../../models/routesModel';
import userSignInViewModel from '../../../viewModel/userSignInViewModel';
import { styles } from '../../components/styles/styles';


export default function SignInScreen () {
  const navigation = useNavigation<propsStack>();

  const { name, setName, email, setEmail, password, setPassword, handleSignIn} = userSignInViewModel();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cadastro</Text>
      </View>      
      <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Nome Completo'
        value={name}
        onChangeText={text=> setName(text)}
        style={styles.input}></TextInput>

        <TextInput 
        placeholder='email@example.com'
        value={email}
        onChangeText={text=> setEmail(text)}
        style={styles.input}></TextInput>
          
        <TextInput 
        placeholder='*******'
        value={password}
        onChangeText={text=> setPassword(text)}
        style={styles.input}
        secureTextEntry></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleSignIn}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.finalText}>Já tem uma conta?</Text>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Login')}>
          <Text  style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}



