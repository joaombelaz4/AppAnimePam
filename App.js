import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardContato from './components/CardContato';
import contatos from './data/contatos.json';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {contatos.map((contato) => (
          <CardContato
            key={contato.id}
            id={contato.id}
            name={contato.name}
            idade={contato.idade}
            stand={contato.stand}
            image={contato.image}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
