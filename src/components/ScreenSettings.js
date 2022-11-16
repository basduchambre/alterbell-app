import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import AppHeader from './AppHeader';
import BottomNav from './BottomNav';

const ScreenSettings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.sectionContainer}>
        <AppHeader title="Instellingen" />
        <Text style={styles.sectionDescription}>
          Vul hier de API key in die je via AlterBell.com kunt aanmaken en
          configureren. Via de website kun je ook een QR code genereren.
        </Text>
        <View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Jouw API Key</Text>
            <TextInput
              style={styles.input}
              placeholder="Vul hier je API key in ..."
            />
          </View>
          <Button title="Instellingen opslaan" color="white"></Button>
        </View>

        <View style={styles.bottomNav}>
          <BottomNav navigation={navigation}></BottomNav>
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
    color: 'white',
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
  label: {
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  formGroup: {
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    margin: 4,
    color: 'black',
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  bottomNav: {
    marginTop: 'auto',
  },
});

export default ScreenSettings;
