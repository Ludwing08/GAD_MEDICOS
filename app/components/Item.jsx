import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Items = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.horario}</Text>
  </TouchableOpacity>
);

export default function Item({item}) {
    const [selectedId, setSelectedId] = useState();

    
  const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
  const color = item.id === selectedId ? 'white' : 'black';
  return (
    <Items
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={backgroundColor}
      textColor={color}
    />
  );
}

const styles = StyleSheet.create({
    
    item: {
      padding: 15,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 15,
    },
  });
  
