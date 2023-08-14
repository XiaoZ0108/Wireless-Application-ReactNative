const {Component} = require('react');
const {TextInput, StyleSheet, View} = require('react-native');
import Button from './Button';
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
  }
  handleInputChange(enteredtext) {
    this.setState(prevState => {
      return {userInput: enteredtext};
    });
  }
  clickHandle() {
    console.log(this.state.userInput);
    this.setState({userInput: ''});
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
        <Button click={this.clickHandle.bind(this)}>Search</Button>
      </View>
    );
  }
}
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: 350,
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
  btt: {},
});
