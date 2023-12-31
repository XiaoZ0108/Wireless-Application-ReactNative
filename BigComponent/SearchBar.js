import {Component} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Button from '../Component/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../Component/Card.';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }
  handleInputChange(enteredtext) {
    this.setState(prev => {
      return {...prev, userInput: enteredtext};
    });
    this.props.search(enteredtext);
  }

  clickHandle() {
    this.props.search(this.state.userInput);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Item U want"
          onChangeText={this.handleInputChange.bind(this)}
          value={this.state.userInput}
        />
        <Button click={this.clickHandle.bind(this)}>
          <Icon name="search" color={'black'} size={18} />
        </Button>
      </View>
    );
  }
}
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 10,
    flexDirection: 'row',
  },
  textInput: {
    flex: 8,
    fontSize: 16,
  },
});
