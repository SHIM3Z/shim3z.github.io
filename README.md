# 🫀 PulseAI - Documentación Pública

## 📋 Descripción

**PulseAI** es una aplicación web innovadora que utiliza Inteligencia Artificial para el análisis médico automatizado. El sistema permite a profesionales de la salud y estudiantes realizar predicciones y análisis sobre:

- **Células Sanguíneas**: Clasificación automática de 8 tipos diferentes de células
- **Señales Cardíacas**: Análisis de patrones de latidos cardíacos (ECG)

## 🎯 Objetivos del Proyecto

- Democratizar el acceso a herramientas de análisis médico basadas en IA
- Proporcionar una interfaz intuitiva para la visualización de datos médicos
- Facilitar el aprendizaje de patrones en hematología y cardiología
- Demostrar la aplicación práctica de Machine Learning en medicina

## ✨ Características Principales

### 🩸 Módulo de Hematología

El módulo de análisis sanguíneo permite:

- **Clasificación Automática**: Identifica 8 tipos de células sanguíneas

  - Basófilos
  - Eosinófilos
  - Eritroblastos
  - Granulocitos Inmaduros
  - Linfocitos
  - Monocitos
  - Neutrófilos
  - Plaquetas

- **Visualización Microscópica**: Renderizado de imágenes de células en formato 28x28 píxeles
- **Análisis Probabilístico**: Muestra la confianza del modelo para cada clase
- **Comparación Automática**: Contrasta predicción vs. etiqueta real
- **Dataset**: BloodMNIST con más de 3,000 muestras de prueba

### 💓 Módulo de Cardiología

El módulo de análisis cardíaco ofrece:

- **Análisis de ECG**: Procesamiento de señales de electrocardiograma
- **Detección de Patrones**: Identificación de diferentes tipos de latidos
- **Visualización Interactiva**: Gráficas en tiempo real con Chart.js
- **Configuración de Umbrales**: Ajuste personalizable de sensibilidad
- **Múltiples Fuentes**: Soporte para diferentes tipos de señales

## 🛠️ Stack Tecnológico

### Frontend

- **Framework**: Angular 20.3.0 (última versión)
- **Lenguaje**: TypeScript 5.9.2
- **Arquitectura**: Standalone Components
- **State Management**: Angular Signals
- **Visualización**: Chart.js 4.5.1
- **Estilos**: CSS moderno con variables nativas

### Características Técnicas

- ✅ Componentes standalone sin módulos
- ✅ Lazy loading para optimización de carga
- ✅ Diseño responsive y adaptable
- ✅ Modo oscuro/claro dinámico
- ✅ TypeScript en modo estricto
- ✅ Animaciones CSS fluidas

## 🎨 Interfaz de Usuario

### Diseño

- **Sistema de diseño**: Minimalista y profesional
- **Paleta de colores**: Variables CSS personalizables
- **Tipografía**: Sistema font moderno
- **Iconografía**: SVG inline optimizados
- **Responsive**: Mobile-first approach

### Experiencia de Usuario

- Navegación intuitiva y clara
- Feedback visual en tiempo real
- Estados de carga elegantes
- Mensajes de error informativos
- Accesibilidad mejorada

## 📊 Casos de Uso

### Para Estudiantes

- Aprendizaje de clasificación de células sanguíneas
- Comprensión de patrones en señales cardíacas
- Experimentación con diferentes muestras
- Estudio de precisión de modelos de IA

### Para Profesionales

- Validación rápida de diagnósticos
- Herramienta de segunda opinión
- Análisis de casos complejos
- Demostración educativa para pacientes

### Para Investigadores

- Evaluación de rendimiento de modelos
- Comparación de diferentes algoritmos
- Análisis estadístico de predicciones
- Validación de datasets médicos

## 🚀 Cómo Funciona

### Flujo de Trabajo - Hematología

1. **Selección de Muestra**

   - El usuario selecciona un índice del dataset (0-3420)
   - Opción de selección aleatoria disponible

2. **Análisis**

   - El sistema envía la muestra al modelo de IA
   - Se procesa la imagen de 28x28 píxeles

3. **Resultados**
   - Visualización de la célula
   - Predicción con porcentaje de confianza
   - Distribución de probabilidades para todas las clases
   - Comparación con etiqueta real

### Flujo de Trabajo - Cardiología

1. **Configuración**

   - Selección del tipo de señal
   - Ajuste de umbral de detección
   - Carga de muestra (aleatoria o específica)

2. **Visualización**

   - Gráfico interactivo del ECG
   - Marcadores de puntos clave

3. **Predicción**
   - Clasificación del tipo de latido
   - Información detallada del diagnóstico

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móviles (iOS/Android)

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte de un programa de maestría, demostrando:

- Integración de tecnologías web modernas
- Aplicación práctica de Machine Learning
- Diseño de interfaces para sistemas médicos
- Gestión de proyectos de software complejos

## 📈 Roadmap

### Características Futuras Planeadas

- [ ] Soporte para más tipos de células
- [ ] Análisis batch de múltiples muestras
- [ ] Exportación de reportes en PDF
- [ ] Historial de análisis
- [ ] Comparación lado a lado
- [ ] API pública para desarrolladores
- [ ] Modo colaborativo multi-usuario
- [ ] Integración con sistemas hospitalarios

## 🔗 Demo

Para solicitar acceso a una demostración en vivo o más información sobre el proyecto, contacta al autor.

## 📞 Contacto

- **Proyecto**: Maestría en [Tu Universidad]
- **Año**: 2025
- **Tipo**: Tesis/Proyecto de Investigación

---

## 🙏 Agradecimientos

- Dataset **BloodMNIST** por MedMNIST
- Comunidad de **Angular**
- Librerías open-source utilizadas

---

> **Nota**: Esta es la documentación pública del proyecto. Para acceso al código fuente completo, configuración técnica detallada o información sobre la API backend, se requiere autorización específica.

**Última actualización**: Diciembre 2025
