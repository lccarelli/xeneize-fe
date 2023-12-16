import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class SignInForm extends React.Component<{
  modalVisible: any;
  setModalVisible: (visible: boolean) => void;
}> {
  render() {
    const {modalVisible, setModalVisible} = this.props;
    return (
      <Modal animationType="slide" visible={modalVisible}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>Sign In</Text>
          </View>
          <View>
            <Text style={styles.paragraph}>
              Amet minim mollit non deserunt ullamcoei sitaliqua dolor do amet
              sintelit officia.
            </Text>
          </View>
          <View style={styles.containerSection}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'#0E0E0E'}
            />
          </View>
          <View style={styles.containerSection}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              placeholderTextColor={'#0E0E0E'}
            />
          </View>
          <View style={styles.containerSection}>
            <Pressable style={styles.btnLogin}>
              <Text style={styles.textBtnLogin}>LOGIN</Text>
            </Pressable>
          </View>
          <View style={styles.containerSection}>
            <Pressable
              style={styles.btnLogin}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textBtnLogin}>BACK</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    marginTop: 40,
    marginHorizontal: 20,
    color: '#F6B5CD',
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 20,
  },
  paragraph: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: '#8A8A8A',
    fontSize: 16,
  },
  containerSection: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  label: {
    color: '#8A8A8A',
    marginBottom: 10,
    marginTop: 30,
    fontSize: 15,
  },
  input: {
    color: '#FFF',
    borderBottomColor: '#F6B5CD',
    borderBottomWidth: 1, // Establece el grosor del borde inferior
    borderLeftWidth: 0, // Elimina el borde izquierdo
    borderRightWidth: 0, // Elimina el borde derecho
    borderTopWidth: 0, // Elimina el borde superior
  },
  btnLogin: {
    marginVertical: 20,
    backgroundColor: '#F6B5CD',
    borderRadius: 52,
  },
  textBtnLogin: {
    color: '#0E0E0E',
    padding: 20,
    textAlign: 'center',
  },
});
export default SignInForm;
