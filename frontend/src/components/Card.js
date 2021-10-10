import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Card({data}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.grade}>{data.grade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  grade: {
    fontSize: 16,
    fontWeight: '500',
    color: 'red',
  },
});
