# 🏢 corporateAppNoelia

> Aplicación móvil corporativa multiplataforma desarrollada con **Ionic**, **Angular (Standalone Components)** y **Capacitor**, con despliegue continuo en **Vercel** y compilación nativa para **Android**.

---

## 📱 Descripción del Proyecto

**corporateAppNoelia** es una aplicación corporativa diseñada bajo una arquitectura moderna orientada a componentes independientes (*Standalone Components*). La aplicación permite explorar el catálogo de productos de la empresa, consultar información corporativa calculando la distancia en tiempo real respecto a la sede física, y enviar mensajes de contacto con soporte para almacenamiento persistente local.

---

## 🛠️ Tecnologías y Herramientas

* **Frontend:** [Ionic Framework](https://ionicframework.com/) + [Angular](https://angular.dev/) (Standalone Components)
* **Runtime Nativo:** [Capacitor](https://capacitorjs.com/)
* **Plugins Nativos:**
  * `@capacitor/geolocation` (Cálculo de posición y distancia geográfica)
  * `@capacitor/preferences` (Persistencia local de mensajes)
* **Despliegue & CI/CD:** [Vercel](https://vercel.com/)
* **Plataforma Móvil:** Android Studio (API 35 / Pixel 9)
* **Control de Versiones:** Git & GitHub

---

## ✨ Funcionalidades Principales

### 🏠 Home & Menú Horizontal
* Barra de navegación horizontal interactiva (`ion-segment`) que facilita la navegación directa entre las diferentes secciones corporativas.

### 📦 Catálogo de Productos
* Carga asíncrona de datos desde almacenamiento local en formato JSON (`assets/data/products.json`).
* Representación estructurada mediante rejilla responsiva (`ion-grid`) con imágenes, existencias y precios actualizados.

### 📍 Nosotros & Geolocalización
* Detección automática de la ubicación actual del usuario a través del GPS del dispositivo (`@capacitor/geolocation`).
* Cálculo matemático de la distancia real en línea recta respecto a las oficinas centrales (Arcos de Jalón 18, Madrid) implementando la **fórmula Haversine**:

$$d = 2R \cdot \arcsin\left(\sqrt{\sin^2\left(\frac{\Delta\varphi}{2}\right) + \cos(\varphi_1)\cos(\varphi_2)\sin^2\left(\frac{\Delta\lambda}{2}\right)}\right)$$

### ✉️ Formulario de Contacto & Persistencia
* Formulario bidireccional (`ngModel`) para la recogida de correo electrónico y mensaje del usuario.
* Almacenamiento local estructurado mediante `@capacitor/preferences` para garantizar la persistencia de datos en el cliente.

---
