# Instalación

Por ultimo para instalar indicadores se requiere descargar el archivo zip con todo el paquete de [instalcion]() y descomprimirlo en una Capeta llamada Indicadores 

## Rutinas Bantotal
luego de tener el paquede de instalacion configuramos el archivo config.js y realizamos la siguiente modificacion  

* **url del ambiente donde se instalara indicadores**

``` js

// Initialize variables globales 
// url ambiente - ejemplo:
/*
    url ambiente = http://appjava2019:10222/desaprodv2r3orcl/servlet/com.dlya.bantotal.odwsbt_Authenticate_v1
    GetUrlPro = http://pioneroapp:6004/productogx16/servlet/
*/

window.GetUrlPro= "https://applicencias.dlya.corp:8367/bantotaluy/servlet/"

```

* **sufijo del ambiente**

```js
//sufijo del ambiente - ejemplo
/*
    url ambiente = http://appjava2019:10222/desaprodv2r3orcl/servlet/com.dlya.bantotal.odwsbt_Authenticate_v1
    GetSufijo = odwsbt
*/
window.GetSufijo= "ardwsbt"

```

* **version de bts**

```js
//Version auth 
/*
    url ambiente = http://appjava2019:10222/desaprodv2r3orcl/servlet/com.dlya.bantotal.odwsbt_Authenticate_v1
    GetSufijo = v1
*/
window.GetVrSer= "v1"

```
