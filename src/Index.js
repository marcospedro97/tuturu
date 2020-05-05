import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

import tuturu from '../assets/tuturu.jpg'

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
});

export default function Index(){
  async function PlaySong(){
    const SoundObject = new Audio.Sound();

    await SoundObject.loadAsync(require('../assets/sounds/pikachu.mp3'));
    await SoundObject.playAsync();

  }
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => PlaySong()}>
        <Image source={tuturu} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}
