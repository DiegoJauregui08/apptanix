import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function EnergyDashboard() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Datos simulados
  const consumoTiempoReal = {
    total: "450 kW",
    eficiencia: "82%",
    estado: "Estable",
  };

  const alertas = [
    { tipo: "Sobreconsumo", mensaje: "Motor principal superó los 500 kW", nivel: "⚠️" },
    { tipo: "Fallo eléctrico", mensaje: "Anomalía detectada en sala de máquinas", nivel: "❌" },
  ];

  const historial = [
    { fecha: "01/10/2025", trayecto: "Puerto A → Puerto B", consumo: "1200 kW" },
    { fecha: "28/09/2025", trayecto: "Puerto B → Puerto C", consumo: "980 kW" },
    { fecha: "25/09/2025", trayecto: "Ruta interna", consumo: "600 kW" },
  ];

  const recomendaciones = [
    "Reducir velocidad en trayectos cortos para optimizar consumo",
    "Verificar aislamiento eléctrico en generadores",
    "Programar mantenimiento preventivo mensual",
  ];

  const sensores = [
    { zona: "Sala de máquinas", voltaje: "220V", consumo: "300 kW" },
    { zona: "Cubierta superior", voltaje: "110V", consumo: "80 kW" },
    { zona: "Sistema climatización", voltaje: "220V", consumo: "70 kW" },
  ];

  const flotas = [
    { barco: "Nautilus I", eficiencia: "85%", huella: "Baja" },
    { barco: "Poseidón", eficiencia: "78%", huella: "Media" },
    { barco: "Ocean Explorer", eficiencia: "90%", huella: "Muy baja" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌊 Panel Energético IoT</Text>

      {/* Consumo en tiempo real */}
      <SectionCard title="📊 Consumo en tiempo real" section="tiempoReal" activeSection={activeSection} toggleSection={toggleSection}>
        <View style={styles.infoBox}>
          <Text style={styles.bigText}>{consumoTiempoReal.total}</Text>
          <Text style={styles.infoText}>Eficiencia: {consumoTiempoReal.eficiencia}</Text>
          <Text style={styles.infoText}>Estado: {consumoTiempoReal.estado}</Text>
        </View>
      </SectionCard>

      {/* Alertas */}
      <SectionCard title="⚠️ Alertas Inteligentes" section="alertas" activeSection={activeSection} toggleSection={toggleSection}>
        {alertas.map((a, i) => (
          <View key={i} style={styles.alertBox}>
            <Text style={styles.alertTitle}>{a.nivel} {a.tipo}</Text>
            <Text style={styles.alertText}>{a.mensaje}</Text>
          </View>
        ))}
      </SectionCard>

      {/* Historial */}
      <SectionCard title="📜 Historial de Consumo" section="historial" activeSection={activeSection} toggleSection={toggleSection}>
        {historial.map((h, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.tableCell}>{h.fecha}</Text>
            <Text style={styles.tableCell}>{h.trayecto}</Text>
            <Text style={styles.tableCell}>{h.consumo}</Text>
          </View>
        ))}
      </SectionCard>

      {/* Recomendaciones */}
      <SectionCard title="💡 Recomendaciones" section="recomendaciones" activeSection={activeSection} toggleSection={toggleSection}>
        {recomendaciones.map((r, i) => (
          <Text key={i} style={styles.infoText}>• {r}</Text>
        ))}
      </SectionCard>

      {/* Diagnóstico Técnico */}
      <SectionCard title="🛠️ Diagnóstico Técnico" section="tecnicos" activeSection={activeSection} toggleSection={toggleSection}>
        {sensores.map((s, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.tableCell}>{s.zona}</Text>
            <Text style={styles.tableCell}>{s.voltaje}</Text>
            <Text style={styles.tableCell}>{s.consumo}</Text>
          </View>
        ))}
      </SectionCard>

      {/* Flotas */}
      <SectionCard title="⚓ Gestión de Flotas y Sostenibilidad" section="flotas" activeSection={activeSection} toggleSection={toggleSection}>
        {flotas.map((f, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.tableCell}>{f.barco}</Text>
            <Text style={styles.tableCell}>{f.eficiencia}</Text>
            <Text style={styles.tableCell}>{f.huella}</Text>
          </View>
        ))}
      </SectionCard>
    </ScrollView>
  );
}

function SectionCard({ title, section, activeSection, toggleSection, children }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => toggleSection(section)}>
      <Text style={styles.cardTitle}>{title}</Text>
      {activeSection === section && <View style={styles.cardContent}>{children}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f9ff",
    alignItems: "center",
    paddingVertical: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#003366",
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 18,
    borderRadius: 14,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 8,
  },
  cardContent: {
    marginTop: 10,
  },
  infoBox: {
    backgroundColor: "#eef6ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bigText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003366",
  },
  infoText: {
    fontSize: 15,
    marginTop: 4,
    color: "#333",
    textAlign: "center",
  },
  alertBox: {
    backgroundColor: "#ffe6e6",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  alertTitle: {
    fontWeight: "bold",
    color: "#cc0000",
    marginBottom: 2,
  },
  alertText: {
    fontSize: 14,
    color: "#333",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 6,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    color: "#333",
  },
});
