import {StyleSheet, View} from 'react-native';

import {Component} from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.container, this.props.styles]}>
        {this.props.children}
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 200,
    width: 170,
    borderRadius: 14,
    margin: 5,
  },
});
