import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardContato({
  id = '0',
  name = 'Não informado',
  idade = 'Desconhecida',
  stand = 'Desconhecido',
  image = null,
}) {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.cardBody}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>Idade: {idade}</Text>
        <Text style={styles.text}>Stand: {stand}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
  },
  cardBody: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
