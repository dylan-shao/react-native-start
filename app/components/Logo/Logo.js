import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';

import styles from './styles';
import background from './images/background.png';
import logo from './images/logo.png';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground resizeMode="contain" style={styles.containerImage} source={background} >
      <Image resizeMode="contain" style={styles.image} source={logo} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
