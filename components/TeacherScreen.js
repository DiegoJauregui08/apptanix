import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TeacherScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [selectedCuatri, setSelectedCuatri] = useState('');
  const [selectedGrado, setSelectedGrado] = useState('');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const students = [
    { id: '1', matricula: 'A001', nombre: 'Juan', apellidoP: 'Pérez', apellidoM: 'Ramírez', cuatri: '3°', materia: 'Matemáticas' },
    { id: '2', matricula: 'A002', nombre: 'Ana', apellidoP: 'López', apellidoM: 'Martínez', cuatri: '2°', materia: 'Física' },
    { id: '3', matricula: 'A003', nombre: 'Luis', apellidoP: 'García', apellidoM: 'Fernández', cuatri: '4°', materia: 'Química' },
    { id: '4', matricula: 'A004', nombre: 'María', apellidoP: 'Sánchez', apellidoM: 'Hernández', cuatri: '1°', materia: 'Historia' },
  ];

  const notas = [
    { id: '1', matricula: 'A001', nombre: 'Juan', apellidoP: 'Pérez', apellidoM: 'Ramírez', cuatri: '3°', materia: 'Matemáticas', nota: '90' },
    { id: '2', matricula: 'A002', nombre: 'Ana', apellidoP: 'López', apellidoM: 'Martínez', cuatri: '2°', materia: 'Física', nota: '85' },
    { id: '3', matricula: 'A003', nombre: 'Luis', apellidoP: 'García', apellidoM: 'Fernández', cuatri: '4°', materia: 'Química', nota: '78' },
    { id: '4', matricula: 'A004', nombre: 'María', apellidoP: 'Sánchez', apellidoM: 'Hernández', cuatri: '1°', materia: 'Historia', nota: '95' },
  ];

  const handleSubmitTask = () => {
    if (!taskName || !taskDescription || !deadline || !selectedCuatri || !selectedGrado) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    Alert.alert('Éxito', '¡Tarea subida correctamente!');
    setTaskName('');
    setTaskDescription('');
    setDeadline('');
    setSelectedCuatri('');
    setSelectedGrado('');
  };

  const handleDeleteTask = () => {
    setTaskName('');
    setTaskDescription('');
    setDeadline('');
    setSelectedCuatri('');
    setSelectedGrado('');
    Alert.alert('Tarea eliminada', 'La información de la tarea ha sido borrada.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Panel de Profesor</Text>

      {/* Lista de Cursos Asignados */}
      <TouchableOpacity style={styles.sectionButton} onPress={() => toggleSection('cursos')}>
        <Text style={styles.sectionTitle}>📘 Lista de Cursos Asignados</Text>
      </TouchableOpacity>
      {expandedSection === 'cursos' && (
        <FlatList
          data={['Matemáticas', 'Física', 'Química', 'Historia']}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.listItem}>• {item}</Text>}
        />
      )}

      {/* Lista de Alumnos */}
      <TouchableOpacity style={styles.sectionButton} onPress={() => toggleSection('alumnos')}>
        <Text style={styles.sectionTitle}>👨‍🎓 Lista de Alumnos</Text>
      </TouchableOpacity>
      {expandedSection === 'alumnos' && (
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableHeader}>Matrícula</Text>
            <Text style={styles.tableHeader}>Nombre</Text>
            <Text style={styles.tableHeader}>Apellidos</Text>
            <Text style={styles.tableHeader}>Cuatrimestre</Text>
            <Text style={styles.tableHeader}>Materia</Text>
          </View>
          {students.map((alumno) => (
            <View style={styles.tableRow} key={alumno.id}>
              <Text style={styles.tableCell}>{alumno.matricula}</Text>
              <Text style={styles.tableCell}>{alumno.nombre}</Text>
              <Text style={styles.tableCell}>{alumno.apellidoP} {alumno.apellidoM}</Text>
              <Text style={styles.tableCell}>{alumno.cuatri}</Text>
              <Text style={styles.tableCell}>{alumno.materia}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Crear Tareas */}
      <TouchableOpacity style={styles.sectionButton} onPress={() => toggleSection('tareas')}>
        <Text style={styles.sectionTitle}>📝 Crear Tareas</Text>
      </TouchableOpacity>
      {expandedSection === 'tareas' && (
        <View style={styles.taskContainer}>
          <TextInput style={styles.input} placeholder="Nombre de la tarea" value={taskName} onChangeText={setTaskName} />
          <TextInput style={styles.input} placeholder="Descripción" value={taskDescription} onChangeText={setTaskDescription} multiline />
          <TextInput style={styles.input} placeholder="Fecha límite (dd/mm/aaaa)" value={deadline} onChangeText={setDeadline} />
          <Picker selectedValue={selectedCuatri} style={styles.picker} onValueChange={(itemValue) => setSelectedCuatri(itemValue)}>
            <Picker.Item label="Selecciona Cuatrimestre" value="" />
            <Picker.Item label="1°" value="1" />
            <Picker.Item label="2°" value="2" />
            <Picker.Item label="3°" value="3" />
            <Picker.Item label="4°" value="4" />
          </Picker>
          <Picker selectedValue={selectedGrado} style={styles.picker} onValueChange={(itemValue) => setSelectedGrado(itemValue)}>
            <Picker.Item label="Selecciona Grado" value="" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
          </Picker>
          <TouchableOpacity style={styles.uploadButton} onPress={handleSubmitTask}>
            <Text style={styles.uploadButtonText}>📤 Subir Tarea</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.uploadButton, { backgroundColor: 'red' }]} onPress={handleDeleteTask}>
            <Text style={styles.uploadButtonText}>🗑 Eliminar Tarea</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Notas */}
      <TouchableOpacity style={styles.sectionButton} onPress={() => toggleSection('notas')}>
        <Text style={styles.sectionTitle}>📊 Notas</Text>
      </TouchableOpacity>
      {expandedSection === 'notas' && (
        <View style={styles.table}>
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableHeader}>Matrícula</Text>
            <Text style={styles.tableHeader}>Nombre</Text>
            <Text style={styles.tableHeader}>Apellidos</Text>
            <Text style={styles.tableHeader}>Cuatrimestre</Text>
            <Text style={styles.tableHeader}>Materia</Text>
            <Text style={styles.tableHeader}>Nota</Text>
          </View>
          {notas.map((nota) => (
            <View style={styles.tableRow} key={nota.id}>
              <Text style={styles.tableCell}>{nota.matricula}</Text>
              <Text style={styles.tableCell}>{nota.nombre}</Text>
              <Text style={styles.tableCell}>{nota.apellidoP} {nota.apellidoM}</Text>
              <Text style={styles.tableCell}>{nota.cuatri}</Text>
              <Text style={styles.tableCell}>{nota.materia}</Text>
              <Text style={styles.tableCell}>{nota.nota}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  sectionButton: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, marginVertical: 8 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  listItem: { fontSize: 16, paddingVertical: 4, marginLeft: 10 },
  table: { marginTop: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, overflow: 'hidden' },
  tableRowHeader: { flexDirection: 'row', backgroundColor: '#007bff', padding: 8 },
  tableHeader: { flex: 1, color: '#fff', fontWeight: 'bold', fontSize: 12, textAlign: 'center' },
  tableRow: { flexDirection: 'row', backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 6 },
  tableCell: { flex: 1, fontSize: 12, textAlign: 'center' },
  taskContainer: { marginTop: 10, backgroundColor: '#fff', padding: 15, borderRadius: 8, elevation: 2 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6, marginBottom: 10 },
  picker: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  uploadButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 10, marginTop: 10 },
  uploadButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});

export default TeacherScreen;
