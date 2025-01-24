# Técnologías utilizadas

- Next.js: Es un framework de desarrollo web basado en React que permite crear aplicaciones web de alto rendimiento y estalabilidad.
- Ant Design: Es una biblioteca de componentes de interfaz de usuario de React de código abierto. Se utilizo para la creación de los formularios.
- Tailwind CSS: Es un framework de diseño de CSS que permite crear diseños personalizados y responsivos. Se utilizo para la personalización pequeña donde se necesitaba css personalizado.

# Pasos para ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instalar las dependencias:
```bash
npm install
```

3. Ejecutar el proyecto:
```bash
npm run dev
```

4. Abrir el navegador y acceder a la siguiente URL:
```bash
http://localhost:3000
```

# Esfuerzos adicionales
- Se añadio la funcionalidad de temas claros y oscuros. Para cambiar el tema se debe hacer clic en el botón de la esquina superior derecha. El tema seleccionado se guarda en el local storage del navegador. Existen componentes que no se ven afectados por el cambio de tema debido a la forma en que estan construidos por Ant Design.
- En el primer formulario se añadio la selección de municipio de acuerdo al departamento seleccionado. El listado de municipios y departamentos se obtuvo de la documentación técnica que se ofrece actualmente para la Factura Electrónica en El Salvador.