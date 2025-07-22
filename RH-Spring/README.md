# ☕ Sistema de Recursos Humanos - Backend (Spring Boot)

## 📋 Descripción
API REST desarrollada con Spring Boot para el Sistema de Recursos Humanos. Proporciona endpoints para gestionar empleados, incluyendo operaciones CRUD completas con persistencia en base de datos y arquitectura en capas.

## 🚀 Características

- **API RESTful**: Endpoints siguiendo principios REST
- **CRUD Completo**: Crear, leer, actualizar y eliminar empleados
- **Persistencia de Datos**: JPA/Hibernate para manejo de base de datos
- **Arquitectura en Capas**: Separación clara de responsabilidades
- **Validación de Datos**: Validación robusta de entidades
- **Manejo de Excepciones**: Gestión centralizada de errores
- **CORS Configurado**: Comunicación fluida con frontend React
- **Documentación API**: Swagger/OpenAPI para documentación interactiva

## 🛠️ Tecnologías Utilizadas

- **Spring Boot 3.x**: Framework principal
- **Spring Data JPA**: Persistencia de datos
- **Spring Web**: Desarrollo de APIs REST
- **Hibernate**: ORM para mapeo objeto-relacional
- **MySQL/PostgreSQL**: Base de datos relacional
- **Maven**: Gestión de dependencias
- **Java 17+**: Lenguaje de programación
- **Swagger/OpenAPI 3**: Documentación de API

## 📁 Estructura del Proyecto

```
src/main/java/com/rh/
├── RhApplication.java              # Clase principal
├── controlador/
│   └── EmpleadoControlador.java    # Controlador REST
├── modelo/
│   └── Empleado.java               # Entidad JPA
├── repositorio/
│   └── EmpleadoRepositorio.java    # Repositorio JPA
├── servicio/
│   ├── IEmpleadoServicio.java      # Interfaz de servicio
│   └── EmpleadoServicio.java       # Implementación del servicio
├── excepcion/
│   └── RecursoNoEncontradoExcepcion.java  # Excepciones personalizadas
└── configuracion/
    └── CorsConfig.java             # Configuración CORS
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- Java 17 o superior
- Maven 3.8+
- MySQL 8.0+ o PostgreSQL 13+
- IDE (IntelliJ IDEA, Eclipse, VS Code)

### Pasos de Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/Eliseo-Sanchez/RH-SpringBoot.git
cd RH-SpringBoot
```

2. **Configurar Base de Datos**:
Crear base de datos MySQL:
```sql
CREATE DATABASE recursos_humanos_db;
```

3. **Configurar `application.properties`**:
```properties
# Configuración de Base de Datos
spring.datasource.url=jdbc:mysql://localhost:3306/recursos_humanos_db
spring.datasource.username=root
spring.datasource.password=tu_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Configuración JPA/Hibernate
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect

# Configuración del Servidor
server.port=8080
server.servlet.context-path=/rh-app

# Configuración de Logging
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
```

4. **Instalar dependencias**:
```bash
mvn clean install
```

5. **Ejecutar la aplicación**:
```bash
mvn spring-boot:run
```

La API estará disponible en `http://localhost:8080/rh-app`

## 🌐 API Endpoints

### Empleados

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/empleados` | Obtener todos los empleados |
| `GET` | `/empleados/{id}` | Obtener empleado por ID |
| `POST` | `/empleados` | Crear nuevo empleado |
| `PUT` | `/empleados/{id}` | Actualizar empleado existente |
| `DELETE` | `/empleados/{id}` | Eliminar empleado |

### Ejemplos de Uso

#### Obtener todos los empleados
```bash
GET /rh-app/empleados
```

#### Crear nuevo empleado
```bash
POST /rh-app/empleados
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "departamento": "Desarrollo",
  "sueldo": 45000.00
}
```

#### Actualizar empleado
```bash
PUT /rh-app/empleados/1
Content-Type: application/json

{
  "idEmpleado": 1,
  "nombre": "Juan Pérez García",
  "departamento": "Desarrollo Senior",
  "sueldo": 55000.00
}
```

## 📊 Modelo de Datos

### Entidad Empleado
```java
@Entity
@Table(name = "empleados")
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmpleado;
    
    @Column(nullable = false)
    private String nombre;
    
    @Column(nullable = false)
    private String departamento;
    
    @Column(nullable = false)
    private Double sueldo;
    
    // Getters, setters, constructores
}
```

## 🏗️ Arquitectura

### Patrón MVC
- **Controlador**: Maneja las peticiones HTTP
- **Servicio**: Lógica de negocio
- **Repositorio**: Acceso a datos
- **Modelo**: Entidades de dominio

### Flujo de Datos
```
Cliente → Controlador → Servicio → Repositorio → Base de Datos
```

## 🔐 Seguridad y Validación

### Validaciones Implementadas
- Validación de campos obligatorios
- Validación de tipos de datos
- Validación de rangos de valores
- Manejo de excepciones personalizadas

### CORS Configuration
```java
@Configuration
public class CorsConfig {
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        return source;
    }
}
```

## 📦 Dependencias Principales

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
</dependencies>
```

## 🧪 Testing

### Ejecutar Pruebas
```bash
mvn test
```

### Tipos de Pruebas
- Pruebas unitarias de servicios
- Pruebas de integración de repositorios
- Pruebas de controladores con MockMvc
- Pruebas de endpoints con TestRestTemplate

## 📚 Documentación API

### Swagger UI
Acceder a la documentación interactiva en:
```
http://localhost:8080/rh-app/swagger-ui.html
```

### Postman Collection
Importar la colección de Postman desde:
```
/docs/postman/RH-API.postman_collection.json
```

## 🚀 Despliegue

### Perfil de Producción
```properties
# application-prod.properties
spring.datasource.url=jdbc:mysql://prod-server:3306/recursos_humanos_db
spring.jpa.hibernate.ddl-auto=validate
logging.level.org.hibernate.SQL=WARN
```

### Docker
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/recursos-humanos-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Construir JAR
```bash
mvn clean package
java -jar target/recursos-humanos-0.0.1-SNAPSHOT.jar
```

## 📈 Monitoreo y Métricas

### Actuator Endpoints
```properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always
```

### Health Check
```
GET /rh-app/actuator/health
```

## 🔧 Configuración Adicional

### Profiles
- `dev`: Desarrollo local
- `test`: Pruebas
- `prod`: Producción

### Variables de Entorno
```bash
export DB_HOST=localhost
export DB_PORT=3306
export DB_NAME=recursos_humanos_db
export DB_USER=root
export DB_PASSWORD=password
```

## 🐛 Solución de Problemas

### Problemas Comunes

1. **Error de Conexión a BD**
   - Verificar credenciales en `application.properties`
   - Confirmar que la base de datos esté ejecutándose

2. **Puerto ya en uso**
   - Cambiar puerto en `application.properties`
   - Matar proceso que usa puerto 8080

3. **Problemas de CORS**
   - Verificar configuración CORS
   - Confirmar origen del frontend

## 📋 Roadmap

- [ ] Implementar autenticación JWT
- [ ] Añadir paginación y ordenamiento
- [ ] Implementar búsqueda avanzada
- [ ] Añadir auditoría de cambios
- [ ] Implementar caché con Redis
- [ ] Añadir métricas personalizadas

## 📞 Contacto

**Desarrollador**: Eliseo Sanchez  
**GitHub**: [Eliseo-Sanchez](https://github.com/Eliseo-Sanchez)  
**Repositorio**: [RH-SpringBoot](https://github.com/Eliseo-Sanchez/RH-SpringBoot)  
**Proyecto**: Sistema de Recursos Humanos Full Stack  

---

## 📚 Recursos Adicionales

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Reference](https://spring.io/projects/spring-data-jpa)
- [Hibernate Documentation](https://hibernate.org/orm/documentation/)
- [MySQL Documentation](https://dev.mysql.com/doc/)

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
