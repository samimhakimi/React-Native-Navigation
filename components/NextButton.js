import React from 'react';
import { Text , StyleSheet, TouchableOpacity } from 'react-native';

function NextButton({ title, onPress, color, size, textSize }) {

  // TODO: dit moet handig
  size = size || 50;
  textSize = textSize || 20;
  const defaultColors = { backgroundColor:"#0009EE", textColor:"#fff", height: size, borderRadius: size/2, width: size*4,};
  color = Object.assign(defaultColors, color);
  const defaultText = { fontSize: textSize, height: textSize };
  textSize = Object.assign(defaultText, textSize);
  
  return (
    <TouchableOpacity
        style={[styles.button, defaultColors]}
        onPress={onPress}
        underlayColor='#fff'>
        <Text style={[styles.text, {color:color.textColor}, textSize]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign:'center',
    fontFamily: 'CooperHewitt-Heavy',
    padding:1,
  }
});

export default NextButton
