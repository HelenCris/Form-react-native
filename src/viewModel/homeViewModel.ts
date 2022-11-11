import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../models/routesModel';

function HomeViewModel() {
  const navigation = useNavigation<propsStack>();

  const handleSignOut = () => {
    auth().signOut().then(() => {
      navigation.navigate('Login');
    })
    .catch(error => {
      Alert.alert(error.message)
    } )};
    
  return {
    handleSignOut
  };
}


export default HomeViewModel;