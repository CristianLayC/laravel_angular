### Proyecto: Gestión de Tareas (Laravel y Angular)

**Descripción:**

Este proyecto consiste en una aplicación web para la gestión de tareas, desarrollado con Laravel y Angular. La aplicación permite crear, leer, actualizar y eliminar tareas.

**Modelo de datos:**

La aplicación utiliza el siguiente modelo de datos para las tareas:

* **id:** Identificador único de la tarea (autoincremental).
* **titulo:** Título de la tarea.
* **descripcion:** Descripción detallada de la tarea.
* **estado:** Estado de la tarea (pendiente, en progreso, completada).
* **fecha_creacion:** Fecha y hora de creación de la tarea.
* **fecha_actualizacion:** Fecha y hora de la última actualización de la tarea.

**Endpoints:**

La API RESTful proporciona los siguientes endpoints:

* **GET /Tareas:** Devolver una lista de todas las tareas.
* **GET /Tareas/{id}:** Obtener los detalles de una tarea específica.
* **POST /Tareas:** Crear una nueva tarea.
* **PUT /Tareas/{id}:** Actualizar una tarea existente.
* **DELETE /Tareas/{id}:** Eliminar una tarea.

**Tecnologías:**

* **Backend:** Laravel v7.30.6
* **Frontend:** Angular v17.3.5
* **Base de datos:** MySQL

**Configuración:**

Para ejecutar la aplicación, siga estos pasos:

1. **Clonar el repositorio:**

```bash
git clone https://github.com/CristianLayC/laravel_angular.git
```

2. **Instalar dependencias:**

**En el backend (Laravel):**

```bash
composer install
```

**En el frontend (Angular):**

```bash
npm install
```

3. **Configurar la base de datos:**

Cree un archivo `.env` en la raíz del directorio del proyecto y configure la conexión a la base de datos.

4. **Ejecutar la aplicación:**

**En el backend (Laravel):**

```bash
php artisan serve
```

**En el frontend (Angular):**

```bash
ng serve
```

**Acceso a la aplicación:**

* La aplicación estará disponible en Laravel: `http://localhost:8000`
* La aplicación estará disponible en Angular: `http://localhost:4200`

**Uso de la aplicación:**

La aplicación permite crear, leer, actualizar y eliminar tareas. Para más información sobre cómo usar la aplicación, consulte la documentación del frontend (Angular).
