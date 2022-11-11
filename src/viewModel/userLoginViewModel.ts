import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../models/routesModel';

function userLoginViewModel() {
  const navigation = useNavigation<propsStack>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    if (email.length !== 0 && typeof email != null && password.length !== 0 && typeof password != null) {
      auth().signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Login with: ', user.email);
        navigation.navigate('Home');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
          setErrorMessage("Email incorreto!");
        }

        if (error.code === 'auth/wrong-password') {
          setErrorMessage("Senha incorreta!");
        }
      });
    } else {
        setErrorMessage('Email ou senha não podem ser vazios!')
    }
    
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    errorMessage, 
    setErrorMessage
  };
}


export default userLoginViewModel;