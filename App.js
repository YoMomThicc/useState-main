import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const colors = [
  { name: 'Green', hex: '#32CD32' }, // LimeGreen
  { name: 'Red', hex: '#FF6347' },   // Tomato
  { name: 'Blue', hex: '#1E90FF' },  // DodgerBlue
  { name: 'Black', hex: '#000000' }, // Black
  { name: 'Yellow', hex: '#FFD700' } // Gold
];

export default function App() {
  const [bgColor, setBgColor] = useState('#fff');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Tap a button to change background</Text>
      {colors.map((color) => (
        <TouchableOpacity
          key={color.hex}
          style={[styles.button, { backgroundColor: color.hex }]}
          onPress={() => setBgColor(color.hex)}
        >
          <Text style={[styles.buttonText, { color: color.hex === '#000000' ? 'white' : 'black' }]}>
            {color.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
