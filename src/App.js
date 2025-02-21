import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Card from './components/Card/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card title="Eddard Stark" text="Winter is coming.." />
      <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım. Evet tarafından." />
      <Card title="Serbest" text="İlhami abi sen söyle, ben başka bir ilde miyim?" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
