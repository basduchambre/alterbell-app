import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Button} from 'react-native';
import Notification from './Notification';
import AppHeader from './AppHeader';

const ScreenHome = ({navigation}) => {
  const [apiKey, setApiKey] = useState({valid: true, key: ''});

  const checkConnection = () => {
    // if (!apiKey.valid) {
    //   // setLoading(false);
    // }
  };

  useEffect(() => {
    checkConnection();
  });

  const renderNotConnected = () => {
    if (!apiKey.valid) {
      return (
        <Notification
          title="Je account is nog niet verbonden"
          text="Klik hieronder om naar instellingen te gaan en je account te koppelen."
          style={{marginBottom: 32}}
        />
      );
    }
    return (
      <Text style={styles.sectionDescription}>
        Je account is succesvol verbonden. Zodra iemand de QR code scant, zal je
        een push-notificatie ontvangen om een videocall te starten.
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.sectionContainer}>
        <AppHeader title="AlterBell" />
        {renderNotConnected()}
        <View style={styles.settings}>
          <Button
            title="Instellingen"
            color="white"
            accessibilityLabel="Ga naar instellingen"
            onPress={() => navigation.navigate('Settings')}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#2742C4',
    height: '100%',
  },
  sectionContainer: {
    textColor: 'white',
    padding: 24,
    flex: 1,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    lineHeight: 24,
    marginBottom: 32,
  },
  settings: {
    marginTop: 'auto',
  },
});

export default ScreenHome;
