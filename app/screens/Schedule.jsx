import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import Item from '../components/Item';

export default function Schedule() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([
    {id: 1, name: 'DOCTOR 1'},
    {id: 2, name: 'DOCTOR 2'},
    {id: 3, name: 'DOCTOR 3'},
  ]);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [value, setValue] = useState();
  const [horarios, setHorario] = useState([
    {
      id: 1,
      horario: '08:00-08:20',
    },
    {
      id: 2,
      horario: '08:20-08:40',
    },
    {
      id: 3,
      horario: '08:40-09:00',
    },
    {
      id: 4,
      horario: '09:00-09:20',
    },
    {
      id: 5,
      horario: '09:20-09:40',
    },
    {
      id: 6,
      horario: '09:40-10:00',
    },
    {
      id: 7,
      horario: '10:00-10:20',
    },
    {
      id: 8,
      horario: '10:20-10:40',
    },
    {
      id: 9,
      horario: '10:40-11:00',
    },
    {
      id: 10,
      horario: '11:00-11:20',
    },
    {
      id: 11,
      horario: '11:20-11:40',
    },
    {
      id: 12,
      horario: '11:40-12:00',
    },
    {
      id: 13,
      horario: '14:00-14:20',
    },
    {
      id: 14,
      horario: '14:20-14:40',
    },
    {
      id: 15,
      horario: '14:40-15:00',
    },
    {
      id: 16,
      horario: '15:00-15:20',
    },
    {
      id: 17,
      horario: '15:20-15:40',
    },
    {
      id: 18,
      horario: '15:40-16:00',
    },
    {
      id: 19,
      horario: '16:00-16:20',
    },
    {
      id: 20,
      horario: '16:20-16:40',
    },
    {
      id: 21,
      horario: '16:40-17:00',
    },
  ]);

  const sintomas = [
    {id: 1, value: 'Fiebre'},
    {id: 2, value: 'Tos'},
    {id: 3, value: 'Dolor de garganta'},
    {id: 4, value: 'Dolor de cabeza'},
    {id: 5, value: 'Dolor de cuerpo'},
    {id: 6, value: 'Dolor de estómago'},
    {id: 7, value: 'Diarrea'},
    {id: 8, value: 'Dificultad para respirar'},
    {id: 9, value: 'Pérdida de gusto'},
    {id: 10, value: 'Pérdida de olfato'},
  ];

  const [selected, setSelected] = useState([]);


  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
      <View style={stylesSchedule.container}>
        <View style={stylesSchedule.section}>
          <Text style={stylesSchedule.label}>Médico</Text>
          <Dropdown
            style={stylesSchedule.dropdown}
            data={data}
            search
            labelField={'name'}
            valueField={'id'}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            placeholder="Seleccione"
            searchPlaceholder="Buscar..."
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={stylesSchedule.section}>
          <Text style={stylesSchedule.label}> Calendario</Text>
          <Calendar
            onDayPress={day => {
              console.log('selected day', day);
            }}
          />
        </View>

        <View style={stylesSchedule.section}>
          <Text style={stylesSchedule.label}>Turno</Text>
          <Dropdown
            style={stylesSchedule.dropdown}
            data={horarios}
            search
            labelField={'horario'}
            valueField={'id'}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            placeholder="Seleccione"
            searchPlaceholder="Buscar..."
            onChange={item => {
              setValue(item.horario);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={stylesSchedule.section}>
          <Text>Síntomas</Text>
          <MultiSelect
            style={stylesSchedule.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            search
            data={sintomas}
            labelField="value"
            valueField="id"
            placeholder="Seleccionar"
            searchPlaceholder="Buscar..."
            value={selected}
            onChange={item => {
              setSelected(item);
            }}  
            selectedStyle={styles.selectedStyle}
          />

        
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});

const stylesSchedule = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: '100%',
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    shadowOpacity: 0.1,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  dropdown: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  list: {
    marginHorizontal: 'auto',
  },
});
