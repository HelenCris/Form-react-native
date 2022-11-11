import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import HomeViewModel from '../../../viewModel/homeViewModel';
import { styles } from './styles';

export default function HomeScreen() {
  const { handleSignOut } = HomeViewModel();
  const [count, setCount] = useState(0)

  useEffect(() => {
    <Text>{count+1}</Text>
  })
  return (
    <View style={styles.container}>
      <Text>Welcome {auth().currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}