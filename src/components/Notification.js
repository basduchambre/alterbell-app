import {StyleSheet, Text, View} from 'react-native';

const Notification = ({title, text}) => {
  return (
    <View style={styles.notification}>
      <Text style={styles.notificationHeading}>{title}</Text>
      <Text style={styles.notificationText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    backgroundColor: 'white',
    borderLeftColor: '#081B75',
    borderLeftWidth: 8,
    padding: 16,
  },
  notificationHeading: {
    fontWeight: '700',
    fontSize: 20,
    color: '#2742C4',
    marginBottom: 8,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default Notification;
