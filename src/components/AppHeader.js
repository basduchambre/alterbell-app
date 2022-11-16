import {StyleSheet, Text, View} from 'react-native';

const AppHeader = ({title}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
  },
  divider: {
    backgroundColor: 'white',
    width: 32,
    height: 8,
    marginBottom: 16,
    marginTop: 16,
  },
});

export default AppHeader;
