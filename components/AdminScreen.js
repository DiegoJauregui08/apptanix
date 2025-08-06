import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AdminScreen() {
  const [activeSection, setActiveSection] = useState(null);

  const usuarios = [
    { nombre: 'Ana María López García', rol: 'Estudiante' },
    { nombre: 'Luis Fernando García Torres', rol: 'Profesor' },
    { nombre: 'Sofía Isabel Torres Ramírez', rol: 'Estudiante' },
    { nombre: 'Carlos Andrés Ruiz Mendoza', rol: 'Profesor' },
    { nombre: 'Laura Beatriz Pérez Herrera', rol: 'Administrador' },
  ];

  const cursos = [
    { curso: 'Matemáticas', asignatura: 'Álgebra' },
    { curso: 'Programación', asignatura: 'React Native' },
    { curso: 'Física', asignatura: 'Mecánica' },
  ];

  const asignaciones = [
    { profesor: 'Luis Fernando García Torres', materia: 'Matemáticas' },
    { profesor: 'Carlos Andrés Ruiz Mendoza', materia: 'Física' },
  ];

  const matriculas = [
    { estudiante: 'Ana María López García', curso: 'Matemáticas', estado: 'Activa' },
    { estudiante: 'Sofía Isabel Torres Ramírez', curso: 'Programación', estado: 'Activa' },
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Panel del Administrador</Text>

      {/* Crear y administrar usuarios */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('usuarios')}>
        <Text style={styles.cardTitle}>👤 Crear y administrar usuarios</Text>
        {activeSection === 'usuarios' && (
          <View style={styles.tableBox}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.headerText]}>Nombre completo</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Rol</Text>
            </View>
            {usuarios.map((user, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{user.nombre}</Text>
                <Text style={styles.tableCell}>{user.rol}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Crear cursos y asignaturas */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('cursos')}>
        <Text style={styles.cardTitle}>📚 Crear cursos y asignaturas</Text>
        {activeSection === 'cursos' && (
          <View style={styles.tableBox}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.headerText]}>Curso</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Asignatura</Text>
            </View>
            {cursos.map((c, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{c.curso}</Text>
                <Text style={styles.tableCell}>{c.asignatura}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Asignar profesores a materias */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('asignaciones')}>
        <Text style={styles.cardTitle}>👨‍🏫 Asignar profesores a materias</Text>
        {activeSection === 'asignaciones' && (
          <View style={styles.tableBox}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.headerText]}>Profesor</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Materia</Text>
            </View>
            {asignaciones.map((a, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{a.profesor}</Text>
                <Text style={styles.tableCell}>{a.materia}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Control de matrículas */}
      <TouchableOpacity style={styles.card} onPress={() => toggleSection('matriculas')}>
        <Text style={styles.cardTitle}>📋 Control de matrículas</Text>
        {activeSection === 'matriculas' && (
          <View style={styles.tableBox}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableCell, styles.headerText]}>Estudiante</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Curso</Text>
              <Text style={[styles.tableCell, styles.headerText]}>Estado</Text>
            </View>
            {matriculas.map((m, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{m.estudiante}</Text>
                <Text style={styles.tableCell}>{m.curso}</Text>
                <Text style={styles.tableCell}>{m.estado}</Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#f4f6fc', alignItems: 'center', paddingVertical: 30 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, color: '#1e3d59' },
  card: { backgroundColor: '#ffffff', width: '90%', padding: 20, borderRadius: 15, marginVertical: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#007bff' },
  tableBox: { marginTop: 10, backgroundColor: '#eef3fc', borderRadius: 10, padding: 10 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 8 },
  tableHeader: { backgroundColor: '#dbe7ff', borderBottomWidth: 2 },
  tableCell: { flex: 1, textAlign: 'center', fontSize: 14, color: '#333' },
  headerText: { fontWeight: 'bold', color: '#1e3d59' },
});
