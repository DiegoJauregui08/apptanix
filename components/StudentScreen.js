import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function StudentScreen() {
  const [activeSection, setActiveSection] = useState(null);

  const materias = ['Matemáticas', 'Programación', 'Física', 'Historia', 'Inglés'];

  const horarios = [
    { dia: 'Lunes', materia: 'Matemáticas', horario: '8:00 - 10:00', aula: 'Aula 101' },
    { dia: 'Lunes', materia: 'Inglés', horario: '10:00 - 12:00', aula: 'Aula 102' },
    { dia: 'Martes', materia: 'Programación', horario: '9:00 - 11:00', aula: 'Aula 203' },
    { dia: 'Miércoles', materia: 'Física', horario: '11:00 - 13:00', aula: 'Aula 305' },
    { dia: 'Jueves', materia: 'Historia', horario: '8:00 - 10:00', aula: 'Aula 404' },
    { dia: 'Viernes', materia: 'Matemáticas', horario: '10:00 - 12:00', aula: 'Aula 101' },
  ];

  const calificaciones = {
    'Matemáticas': [90, 85, null],
    'Programación': [95, 92, null],
    'Física': [80, 78, null],
    'Historia': [88, 90, null],
    'Inglés': [92, 94, null],
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Panel del Estudiante</Text>

      {/* Materias */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('materias')}>
        <Text style={styles.cardTitle}>📚 Materias</Text>
        {activeSection === 'materias' && (
          <View style={styles.tableBox}>
            {materias.map((mat, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{index + 1}</Text>
                <Text style={styles.tableCell}>{mat}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Horarios y aulas */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('horarios')}>
        <Text style={styles.cardTitle}>📅 Horarios y aulas</Text>
        {activeSection === 'horarios' && (
          <View style={styles.tableBox}>
            {/* Agrupamos por días */}
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((dia) => (
              <View key={dia} style={{ marginBottom: 10 }}>
                <Text style={styles.dayTitle}>{dia}</Text>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={[styles.tableCell, styles.headerText]}>Materia</Text>
                  <Text style={[styles.tableCell, styles.headerText]}>Horario</Text>
                  <Text style={[styles.tableCell, styles.headerText]}>Aula</Text>
                </View>
                {horarios
                  .filter((item) => item.dia === dia)
                  .map((item, index) => (
                    <View key={index} style={styles.tableRow}>
                      <Text style={styles.tableCell}>{item.materia}</Text>
                      <Text style={styles.tableCell}>{item.horario}</Text>
                      <Text style={styles.tableCell}>{item.aula}</Text>
                    </View>
                  ))}
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Calificaciones */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('calificaciones')}>
        <Text style={styles.cardTitle}>📝 Calificaciones</Text>
        {activeSection === 'calificaciones' && (
          <View style={styles.tableBox}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.headerText]}>Materia</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Parcial 1</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Parcial 2</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Parcial 3</Text>
            </View>
            {Object.entries(calificaciones).map(([materia, notas], index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{materia}</Text>
                <Text style={styles.tableCell}>{notas[0] ?? '-'}</Text>
                <Text style={styles.tableCell}>{notas[1] ?? '-'}</Text>
                <Text style={styles.tableCell}>{notas[2] ?? '-'}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Subir tareas */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('tareas')}>
        <Text style={styles.cardTitle}>⬆️ Subir tareas</Text>
        {activeSection === 'tareas' && (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Arrastra tus archivos aquí 📂</Text>
            <Text style={styles.infoText}>O presiona para seleccionar un archivo</Text>
            <View style={styles.uploadBox}>
              <Text style={styles.uploadText}>[ Zona de carga simulada ]</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f6fc',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#1e3d59',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff',
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#1e3d59',
  },
  tableBox: {
    marginTop: 10,
    backgroundColor: '#eef3fc',
    borderRadius: 10,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  tableHeader: {
    backgroundColor: '#dbe7ff',
    borderBottomWidth: 2,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#1e3d59',
  },
  infoBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#eef3fc',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  uploadBox: {
    marginTop: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: '#007bff',
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 14,
    color: '#007bff',
  },
});
