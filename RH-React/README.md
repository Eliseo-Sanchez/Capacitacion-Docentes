# 🏢 Sistema de Recursos Humanos - Frontend (React)

## 📋 Descripción
Frontend desarrollado en React para el Sistema de Recursos Humanos. Esta aplicación web permite gestionar empleados de una empresa a través de una interfaz intuitiva y moderna, conectándose con una API REST desarrollada en Spring Boot.

## 🚀 Características

- **Listado de Empleados**: Visualiza todos los empleados registrados en una tabla responsive
- **Agregar Empleado**: Formulario para registrar nuevos empleados con validación
- **Editar Empleado**: Modificar información existente de empleados
- **Eliminar Empleado**: Remover empleados del sistema con confirmación
- **Navegación Intuitiva**: Barra de navegación con Bootstrap para fácil acceso
- **Diseño Responsivo**: Interfaz adaptable a diferentes tamaños de pantalla

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0**: Biblioteca principal para la UI
- **React Router DOM 7.6.3**: Manejo de rutas y navegación
- **Axios 1.10.0**: Cliente HTTP para consumir la API REST
- **Bootstrap 5**: Framework CSS para el diseño responsivo
- **React Number Format 5.4.4**: Formateo de números y moneda
- **JavaScript ES6+**: Sintaxis moderna de JavaScript

## 📁 Estructura del Proyecto

```
src/
├── App.js                     # Componente principal con rutas
├── index.js                   # Punto de entrada de la aplicación
├── empleados/
│   ├── ListadoEmpleados.js    # Componente para mostrar lista de empleados
│   ├── AgregarEmpleado.js     # Formulario para agregar empleados
│   └── EditarEmpleado.js      # Formulario para editar empleados
└── plantilla/
    └── Navegacion.js          # Barra de navegación
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js 16 o superior
- npm o yarn
- Backend de Spring Boot ejecutándose en puerto 8080

### Pasos de Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/Eliseo-Sanchez/RH-React.git
cd RH-React
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar el proxy** (ya configurado en `package.json`):
```json
"proxy": "http://localhost:8080"
```

4. **Ejecutar la aplicación**:
```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`

## 🌐 API Endpoints

El frontend consume los siguientes endpoints del backend:

- `GET /rh-app/empleados` - Obtener todos los empleados
- `POST /rh-app/empleados` - Crear nuevo empleado
- `GET /rh-app/empleados/{id}` - Obtener empleado por ID
- `PUT /rh-app/empleados/{id}` - Actualizar empleado
- `DELETE /rh-app/empleados/{id}` - Eliminar empleado

## 📱 Funcionalidades Principales

### 1. **Listado de Empleados**
- Tabla con información completa de empleados
- Botones de acción para editar y eliminar
- Diseño responsive con Bootstrap

### 2. **Gestión de Empleados**
- Formularios validados para agregar y editar
- Campos: ID, Nombre, Departamento, Sueldo
- Navegación fluida entre vistas

### 3. **Interfaz de Usuario**
- Navegación con Bootstrap navbar
- Diseño moderno y profesional
- Feedback visual para acciones del usuario

## 🔄 Scripts Disponibles

```bash
npm start          # Ejecutar en modo desarrollo
npm run build      # Construir para producción
npm test           # Ejecutar pruebas
npm run eject      # Eyectar configuración (no recomendado)
```

## 🌟 Características Técnicas

- **Arquitectura**: Componentes funcionales con hooks
- **Estado**: Manejo con useState y useEffect
- **Routing**: React Router DOM con rutas protegidas
- **HTTP Client**: Axios para peticiones al backend
- **Estilos**: Bootstrap 5 con clases utilitarias
- **Validación**: Validación de formularios en tiempo real

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.6.3",
  "axios": "^1.10.0",
  "react-number-format": "^5.4.4",
  "bootstrap": "^5.x.x"
}
```

## 🚀 Despliegue

### Construcción para Producción
```bash
npm run build
```

### Variables de Entorno
Crear archivo `.env` en la raíz del proyecto:
```
REACT_APP_API_URL=http://localhost:8080
REACT_APP_VERSION=1.0.0
```

## 🔧 Configuración Adicional

### Proxy para Desarrollo
El proyecto incluye configuración de proxy para evitar problemas de CORS:
```json
"proxy": "http://localhost:8080"
```

### Bootstrap Integration
Bootstrap está integrado via CDN en `public/index.html` o instalado como dependencia.

## 📋 Tareas Pendientes

- [ ] Implementar autenticación de usuarios
- [ ] Añadir paginación en el listado
- [ ] Implementar búsqueda y filtros
- [ ] Añadir validación avanzada de formularios
- [ ] Implementar notificaciones toast
- [ ] Añadir modo oscuro

## 🐛 Solución de Problemas

### Error de Conexión con Backend
1. Verificar que el backend esté ejecutándose en puerto 8080
2. Revisar configuración de proxy en `package.json`
3. Verificar endpoints en el código

### Problemas de Build
1. Limpiar cache: `npm start -- --reset-cache`
2. Reinstalar dependencias: `rm -rf node_modules && npm install`
3. Verificar versiones de Node.js y npm

## 📞 Contacto

**Desarrollador**: Eliseo Sanchez  
**GitHub**: [Eliseo-Sanchez](https://github.com/Eliseo-Sanchez)  
**Repositorio**: [RH-React](https://github.com/Eliseo-Sanchez/RH-React)  
**Proyecto**: Sistema de Recursos Humanos Full Stack  

---

## 📚 Notas Adicionales

- Este proyecto es parte de una aplicación full-stack que incluye un backend en Spring Boot
- El proxy está configurado para desarrollo local
- Para producción, ajustar las URLs de la API según el entorno
- Asegurar que el backend esté ejecutándose antes de iniciar el frontend

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

*Desarrollado con ❤️ por Eliseo Sanchez*

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
