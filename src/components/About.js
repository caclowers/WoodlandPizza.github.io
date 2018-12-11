import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';



class About extends React.Component {
 
  static navigationOptions = {
    title: 'ABOUT'
  }


  render() {
 
 
    return (
      <View style={styles.container}>
            <Text>ABOUT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  scanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default About;