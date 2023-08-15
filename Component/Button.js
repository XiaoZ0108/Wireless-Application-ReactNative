import {StyleSheet, View, Pressable, Text} from 'react-native';

const {Component} = require('react');

class Button extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <Pressable
          style={[styles.container, this.props.style]}
          onPress={this.props.click}
          android_ripple={{color: '#d42f82'}}>
          <Text style={styles.text}>{this.props.children}</Text>
        </Pressable>
      </View>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'pink',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    width: 50,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
