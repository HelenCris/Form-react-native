import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

function userSignInViewModel() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = async () => {
      await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Register with: ', user.email);
        Alert.alert('User account created & signed in!');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
      
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        // console.error(error);
      });  
  }

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignIn,
  };
}


export default userSignInViewModel;



