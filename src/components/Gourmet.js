import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Gourmet extends React.Component {

  static navigationOptions = {
    title: 'Gourmet Pizzas'
  }
 
  onButtonPressHome = () => {
    this.props.navigation.navigate('home');
  }


  render() {


    return (
      <View style={styles.container}>
        <View className="App-header" style={styles.header}>
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }} />
        </View >
        <Button
            title="HOME"
            onPress={this.onButtonPressHome}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default Gourmet;