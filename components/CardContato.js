import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardContato({
  id = '0',
  name = 'Não informado',
  email = null,
  phone = 'Não informado',
  image = null,
}) {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.cardBody}>
        <Text style={styles.title}>{name}</Text>
        {email && <Text style={styles.text}>📧 {email}</Text>}
        <Text style={styles.text}>📱 {phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    backgroundColor: '#ccc',
  },
  cardBody: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
});
