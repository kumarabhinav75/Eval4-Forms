import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    width: 300,
    marginBottom: 20,
    // minHeight: 250,
    color: 'white',
  },
  cardText1: {
    alignSelf:'center',
    color: 'white',
    fontSize: 15,
    margin: 20,
    minHeight: 150,
  },
  cardText2: {
    alignSelf:'center',
    color: 'yellow',
    fontSize: 15,
    margin: 20,
  },
});