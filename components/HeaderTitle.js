import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

function HeaderTitle({name, jobTitle, imageSource}) {
  return (
    <View style={styles.container}>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 154,
    // alignItems: 'start',
    justifyContent: 'center',
  },
  jobTitle: {
    color:'#fff',
    fontSize: 20,
  },
  text: {
    fontSize: 36,
    color:'#fff',
  },
  
});

export default HeaderTitle
