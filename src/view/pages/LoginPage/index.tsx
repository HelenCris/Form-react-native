import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../../models/routesModel';
import userLoginViewModel from '../../../viewModel/userLoginViewModel';
import { styles } from '../../components/styles/styles';


export default function LoginScreen () {
  const navigation = useNavigation<propsStack>();

  const { email, setEmail, password, setPassword, handleLogin, errorMessage} = userLoginViewModel();
  
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior='padding'>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder='email@example.com'
        keyboardType={'email-address'}
        value={email}
        onChangeText={text=> setEmail(text)}
        style={styles.input}></TextInput>
        <TextInput 
        placeholder='*******'
        value={password}
        onChangeText={text=> setPassword(text)}
        style={styles.input}
        secureTextEntry></TextInput>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleLogin}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.finalText}>Ainda não tem uma conta?</Text>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Register')}>
          <Text style={styles.link}>Cadastre</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
