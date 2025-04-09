import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Anime from './components/anime';
import Filme from './components/filme';
import Serie from './components/serie';



export default function App() {
  return (
    <View style={styles.container}>
      <Anime/>
      dasdadasdsadasdadas
      <Filme/>
      <Serie/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
