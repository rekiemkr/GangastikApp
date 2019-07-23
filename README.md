# Instalación

Instalación de node:

	https://nodejs.org/en/

Instalacion de paquetes antes del proyecto:
	
	npm install -g cordova
	npm install -g ionic
	npm install -g bower

Instalacion de paquetes para el proyecto:

	npm install
	bower install

Cordova plugin o extensiones para android:
	
	cordova platform update android
	cordova plugin add cordova-plugin-network-information
	cordova plugin add cordova-plugin-compat
	cordova plugin add cordova-plugin-console
	cordova plugin add cordova-plugin-device
	cordova plugin add cordova-plugin-geolocation
	cordova plugin add cordova-plugin-inappbrowser
	cordova plugin add cordova-plugin-splashscreen
	cordova plugin add cordova-plugin-statusbar
	cordova plugin add cordova-plugin-whitelist
	cordova plugin add cordova-plugin-x-socialsharing
	cordova plugin add ionic-plugin-keyboard
	cordova plugin rm com.lampa.startapp

# paginas
[Tinder cards 2](https://github.com/loringdodge/ionic-ion-tinder-cards-2)

[Lampa (abrir apps de android)](https://github.com/lampaa/com.lampa.startapp)

[Cordova network informaion (Estado de conexion)](http://ngcordova.com/docs/plugins/network/)

[Plugin facebook](https://ccoenraets.github.io/ionic-tutorial/ionic-facebook-integration.html)


# Guia Facebook 

## Paso 1: Crear una aplicación de Facebook

1. Inicia sesión para Facebook.
2. Acceso [https://developers.facebook.com/apps](https://developers.facebook.com/apps) , y haga clic en Añadir Nueva Aplicación
3. Seleccione www como la plataforma
4. Escriba un nombre único para su aplicación y haga clic en Crear nueva aplicación de Facebook ID
5. Especificar una categoría y haga clic en Crear ID de la aplicación
6. Haga clic en Mis Aplicaciones en el menú y seleccione la aplicación que acaba de crear
7. Haga clic en Configuración en la barra de navegación izquierda
8. Haga clic en la ficha Opciones avanzadas
9. En la configuración de OAuth , añada las siguientes direcciones URL en el OAuth Válido redirigen URI de campo:  

>
  * http://localhost:8100/oauthcallback.html (para el acceso vía iónica sirven)
  * https://www.facebook.com/connect/login_success.html (para el acceso de Córdoba)

10. Haga clic en Guardar cambios

## Paso 2: Iniciar OpenFB

* Añadir los archivos OpenFB a su aplicación

> 
* Copiar openfb.js y ngopenfb.js desde ionic-tutorial/resources a app/www/js.
* Copiar oauthcallback.html y logoutcallback.html from ionic-tutorial/resources a conference/www  en la raiz del proyecto.
* En conference/www/index.html, añadir etiquetas de secuencia de comandos para incluir openfb.js y ngopenfb.js (antes app.js):

> 
```html
<script src="js/openfb.js"></script>
<script src="js/ngopenfb.js"></script>
```
>
ngOpenFB es sólo un envoltorio angular alrededor de la biblioteca OpenFB. Se le permite utilizar OpenFB "la forma angular": 
como un servicio angular (llamado NGFB) en lugar de un objeto global, y el uso de promesas en lugar de devoluciones de llamada.

* Abrir conference/www/js/app.js, y agregar ngOpenFB como una dependencia al arranque del módulo:

```javascript
angular.module('starter', ['ionic', 'starter.controllers', 'ngOpenFB'])
```

* Inyectar ngFB en la en la declaración de la función  run():

```javascript
.run(function ($ionicPlatform, ngFB) {
```

* Inicializar OpenFB en la primera línea de la función run (). Reemplazar **YOUR_FB_APP_ID** con el ID de aplicación de la aplicación de Facebook.

```javascript
ngFB.init({appId: 'YOUR_FB_APP_ID'});
```

## Paso 3: Añadir Facebook login

* Abrir login.html en el directorio conference/www/templates. Agregar un boton **Login with Facebook** right after the existing **Log In button:

```html
<label class="item">
    <button class="button button-block button-positive" ng-click="fbLogin()">
    Login with Facebook
    </button>
</label>
```
>
Notice that fbLogin() is called on ng-click. You define the fbLogin() function in the next step.

* Aberir app/www/js/controllers.js, i agregar **ngOpenFB** como una dependencia de el modulo controllador **starter.controllers*:

```javascript
angular.module('starter.controllers', ['starter.services', 'ngOpenFB'])
```

* Inyectar **ngFB** en el **AppCtrl** controller:

```javascript
.controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB) {
```

* Añadir la función **FBLogin** en el AppCtrl controlador (justo después de la función doLogin):

```javascript
$scope.fbLogin = function () {
    //$scope.show($ionicLoading);
    var facebookRegistro;
    console.log('click login');
    ngFB.login({scope: 'email,publish_actions'}).then(
      function (response) {
        $ionicLoading.hide();
        if (response.status === 'connected') {
          console.log('Facebook login succeeded', response);
          //$scope.closeLogin();
          ngFB.api({
            path: '/me',
            params: {fields: 'id,first_name,last_name,email'}
          }).then(
            function (user) {
              console.log(user);
            },
            function (error) {
              popupN('Facebook error: ', error.error_description, 'advertencia', $ionicPopup);
            });
        } else {
          popupN('Facebook login failed', 'Falló login facebook', 'advertencia', $ionicPopup);
        }
      });
  };
```

* Prueba de la aplicación.

>
* Asegúrese **ionic serve** (el servidor web local)  todavía se está ejecutando. Si se está ejecutando, pero se cerró página de la aplicación en el navegador, puede volver a cargar la aplicación accediendo a la siguiente URL: http: // localhost: 8100 . Si no se está ejecutando, abra un símbolo del sistema, navegue (cd) al **iónica-tutorial** directorio y escriba:

>

    ionic serve
    
>
* En la aplicación, abra el menú lateral y seleccione **Inicio de sesión**
* Haga clic en el **Inicio de sesión con Facebook**
* Introduzca sus credenciales de Facebook en la pantalla de inicio de sesión de Facebook, y autorizar la aplicación
* Abra la consola de navegador: usted debe ver el *usuario de Facebook tuvo éxito* mensaje


>
La próxima vez que se conecte, no se le preguntó por sus credenciales de nuevo, puesto que ya tiene un token válido. 
Para probar el proceso de inicio de sesión de nuevo, simplemente cierra sesión en Facebook. 
La biblioteca OpenFB tiene métodos adicionales para cerrar la sesión y revocar los permisos que están más allá del alcance de este tutorial.

## Paso 4: Prueba de la integración de Facebook en el dispositivo 

Añadir **InAppBrowser** plug-in utilizado por OpenFB cuando se ejecuta en Córdoba. En la línea de comandos, vaya a la ionic-tutorial/app y escriba:

    cordova plugins add org.apache.cordova.inappbrowser
    
    