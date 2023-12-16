/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { Pressable, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignInForm from './src/components/SignInForm.tsx';

function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./src/assets/XENEIZE.png')} style={styles.logo} />
      <View style={styles.titles}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.clubNameText}>Xeneize Hockey Club App</Text>
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.buttonFacebook}
          onPress={() => console.log('Login with Facebook')}>
          <Text style={styles.buttonText}>Login With Facebook</Text>
        </Pressable>
        <Pressable
          style={styles.buttonGoogle}
          onPress={() => console.log('Login with Google')}>
          <Text style={styles.buttonText}>Login With Google</Text>
        </Pressable>
        <Pressable
          style={styles.buttonSignIn}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonTextSignIn}>SIGN IN</Text>
        </Pressable>
      </View>
      <SignInForm
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fondo negro
    alignItems: 'center', // Centra contenido horizontalmente
  },
  logo: {
    marginTop: 40,
    width: 200, // Ancho del logo
    height: 200, // Altura del logo
    resizeMode: 'contain', // Asegura que el logo se escale correctamente
  },
  titles: {
    marginVertical: 40,
  },
  welcomeText: {
    marginTop: 40,
    fontSize: 24,
    color: 'white', // Texto blanco
    textAlign: 'center', // Alinea el texto al centro
  },
  clubNameText: {
    marginTop: 10,
    fontSize: 30,
    color: '#F6B5CD', // Texto blanco
    textAlign: 'center', // Alinea el texto al centro
  },
  btnContainer: {
    width: '100%',
    marginVertical: 40,
  },
  buttonFacebook: {
    marginVertical: 10,
    backgroundColor: '#3b5998', // Color de fondo para botón de Facebook
    padding: 15,
    borderRadius: 52,
  },
  buttonGoogle: {
    backgroundColor: '#db4437', // Color de fondo para botón de Google
    padding: 15,
    borderRadius: 52,
    marginVertical: 10,
  },
  buttonSignIn: {
    marginVertical: 10,
    backgroundColor: '#F6B5CD', // Botón de Sign In blanco
    padding: 15,
    borderRadius: 52,
  },
  buttonText: {
    color: 'white', // Texto blanco para los botones de Facebook y Google
    fontWeight: 'bold',
    textAlign: 'center', // Alinea el texto al centro
  },
  buttonTextSignIn: {
    color: '#1B1717', // Texto blanco para los botones de Facebook y Google
    fontWeight: 'bold',
    textAlign: 'center', // Alinea el texto al centro
  },
});

export default App;
