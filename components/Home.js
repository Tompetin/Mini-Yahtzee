import React from 'react';
import { useState } from 'react';
import { Text, TextInput, View, Pressable, Keyboard } from 'react-native';
import MaterialcommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from './Header';
import Footer from './Footer';
import styles from '../style/style';
import {
    NBR_OF_DICES,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS} from '../constants/Game'

export default Home = () => {
    
    const [playerName, setPlayername] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().lenght > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

  return (
    <View>
      <Text>Home is here</Text>
    </View>
  )
}