import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StackActions} from '@react-navigation/native';

import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colores} from '../utils/utils';

export default function Login() {
  const navigation = useNavigation();

  const [hovered, setHovered] = useState(false);

  const onSubmit = data => {
    console.log('data' + data.cedula);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo_gad.png')}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <View style={styles.login}>
          <View>
            <Text> Cedula </Text>
            <TextInput style={styles.input} placeholder="Cedula de ciudadanía" maxLength={10}>              
            </TextInput>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.dispatch({...StackActions.replace('MyTabs')})
            }>
            <Text style={styles.text_button}>INGRESAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    backgroundColor: '#0c9869',
  },

  card: {
    marginHorizontal: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 20,
    shadowColor: '#00000',
    shadowOffset: {width: 10, height: 50},
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
  },

  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    color: 'black',
  },

  login: {
    gap: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },

  button: {
    backgroundColor: Colores.secondary,
    color: 'white',
    borderColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,    
  },
  
  text_button: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  logo_container: {
    marginBottom: 15,
    alignItems: 'center',
  },

  logo: {
    width: Dimensions.get('window').width * 0.7, // Ajusta el ancho
    resizeMode: 'contain', // Mantiene la relación de aspecto
  },
});
