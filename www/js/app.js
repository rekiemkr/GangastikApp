// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//globales

var itemsRs = [];
var productoT = [];
var axpr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

//


angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'ionicLazyLoad', 'ngCordova', 'angular-owl-carousel', 'satellizer', 'ngAnimate', 'ionic-datepicker', 'ngOpenFB', 'ionic-modal-select'])
.run(function($ionicPlatform, $rootScope, $ionicConfig, $timeout, $ionicPopup, $state,ngFB, $http, $ionicLoading, productosDato, $ionicHistory, $cordovaSplashscreen, $cordovaKeyboard) {
  $ionicPlatform.ready(function() {
    if(navigator.splashscreen){
      $cordovaSplashscreen.hide();
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      //cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    //comprobar conexion internet
    
    ngFB.init({appId: '517668868431659'});

    $rootScope.cerrarBuscardor = function () {
      $rootScope.buscadorStyl = {display:'none'};
    }

    $rootScope.buscarProducto = function () {
      if (localStorage.getItem('iduser')) {
        var texto = this.nombreProducto;
        if (texto == undefined || texto == '') {
          popupN('ooooppppsss', 'Ingrese la palabra de busqueda', 'advertencia', $ionicPopup);
        }
        else{
          ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            'http://gangastik.com/app/services/ProductosService.php',
            {
              actionType: 'getProductosBuscador',
              iduser: parseInt(localStorage.getItem('iduser')),
              busqueda: texto
            },
            resultBusqueda($rootScope, $http, $ionicLoading, $ionicPopup, productosDato, $ionicHistory, $cordovaKeyboard)
          );
        }
      }
    }
    
    if (window.Connection) {
      var conexionNavi = navigator.connection.type;
      var networkState = navigator.connection.type;
      var states = {};

      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.CELL]     = 'Cell generic connection';
      states[Connection.NONE]     = 'No network connection';

      //alert('Connection type: ' + states[networkState]);

      if (conexionNavi == Connection.NONE) {
        $rootScope.sinconex={display: 'block'};
        $ionicPopup.confirm({
          title: 'Sin conexión a internet',
          content: 'El Internet está desconectado en su dispositivo'
        })
        .then(function (result) {
          if (!result) {
            ionic.Platform.exitApp();
          }
        });
      }
      else{
        $rootScope.sinconex={display: 'none'};
      }
    }
   // cenpunex()
   StatusBar.overlaysWebView(false);
  });
  $rootScope.$on('$ionicView.afterEnter', function () {
    setTimeout(function () {
      document.getElementById('custom-overlay').style.display = 'none';
    }, 5000);
  });
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if(toState.name.indexOf('auth.walkthrough') > -1)
    {
      // set transitions to android to avoid weird visual effect in the walkthrough transitions
      $timeout(function(){
        $ionicConfig.views.transition('android');
        $ionicConfig.views.swipeBackEnabled(false);
        console.log("setting transition to android and disabling swipe back");
      }, 0);
    }

    //console.log(toState.data)

    /*if (toState.data.authenticate && !Parse.User.current()) {
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault(); 
      //console.log($state.transitionTo('login'))
    }*/
  });
  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
    if(toState.name.indexOf('app.feeds-categories') > -1)
    {
      // Restore platform default transition. We are just hardcoding android transitions to auth views.
      $ionicConfig.views.transition('platform');
      // If it's ios, then enable swipe back again
      if(ionic.Platform.isIOS())
      {
        $ionicConfig.views.swipeBackEnabled(false);
        StatusBar.overlaysWebView(false);
      }
      console.log("enabling swipe back and restoring transition to platform default", $ionicConfig.views.transition());
    }
  });
  $ionicConfig.views.swipeBackEnabled(false);

  $rootScope.tituloGeneral = "";
})
.config(ionicDatePiker)
.config(viewsTt)
.animation('.kanasanimar', animaricionocarr)
.directive('clickAnimar', ['$animate', animarclick])
.directive('resize', ['$window', colocarAlto])
.directive('centhorizontal', ['$window', colocarHorizontal])
.directive('centhorizontalSinw', ['$window', colocarHorizontalSinwidth])
.directive('alturaPorcentaje', ['$window', colocarAlturaPorcentaje])
.directive('alturaPorcentajeDiv', ['$window', colocarAlturaDivPorcentaje])
.directive('imageFondo', ['$window', colocarImagenFondo])
.directive('centerAbsolute', ['$window', centrarDiv])
.directive('botomAbsoluteDiv', ['$window', botomdivabsoluteDiv])
.directive('botomAbsoluteWindow', ['$window', botomdivaboluteWindow])
.directive('topAbsoluteDiv', [topdivabosoluteDiv])
.directive('ciudades', ['$http', colciudades])
.directive('sinConexion', ['$window', sinconexion])
.directive('countDown', ['$timeout', cuentAtras])
.directive('autofocus', [autofocusc])
.directive('broweTo', ['$ionicGesture',direcionarBrowser])
.directive('noScroll', scrollNo)
.directive('datoHtml', ['$compile', colhmltdato])
.directive('ionDiseno', [loadingDisenn])
.directive('ionProductoCard', ['$http', directiveProducto])
.directive('preloadImagen', ['$rootScope', loadingImagen])
.directive('buscadorProducto', ['$http', directiveBuscar])
.directive('splash', [directiveSpashScreen])
.directive('circleImagen', [directiveCircle])
.factory('preguntasProducto', ['$http', globalPreguntasProductos])
.factory('productosDato', ['$http',globalfactProducto])
.factory('urlRoot', rooturl)
.factory('historialPagina', paginaHistorial)
.factory('usuario', ['$http', globalUsuarios])
.config(routers)
.controller('menuctrl', ['$scope', '$ionicSideMenuDelegate', '$ionicPopup', '$http', '$ionicLoading','urlRoot', '$ionicHistory', 'historialPagina', '$rootScope', menucontrol])
.controller('homectrl', ['$scope', homecontrolG])
.controller('dosctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', '$state', '$q', 'UserService', 'urlRoot', '$auth', 'RequestsService','ngFB', doscontrolG])
.controller('registroctrl', ['$scope', '$http', '$state','$ionicPopup','$timeout','$ionicLoading','urlRoot', 'usuario', 'ionicDatePicker', controlregistro])
.controller('ingresoctrl', ['$scope','$http', '$state','$ionicPopup','$timeout', '$ionicLoading','urlRoot', controlingreso])
.controller('recordarctrl', ['$scope', '$http','$ionicPopup','$ionicLoading','$timeout','urlRoot', controlrecordar])
.controller('complectrl', ['$scope', '$ionicLoading', controlregcompletado])
.controller('masctrl', ['$scope', controlmas])
.controller('amigoctrl', ['$scope', '$http','$ionicPopup', '$ionicLoading','urlRoot', controlamigos])
.controller('cuatroctrl', ['$scope', cuatrocomplet])
.controller('corazonctrl', ['$scope', '$http','$ionicPopup','urlRoot', corazoncontrol])
.controller('marcasctrl', ['$scope', '$http','$ionicPopup','urlRoot', controlmarcas])
.controller('generoctrl', ['$scope', '$http','$ionicPopup','urlRoot', controlgenero])
.controller('regfinalctrl', ['$scope', '$http','$ionicPopup','$ionicLoading', 'urlRoot', '$ionicHistory', controlfinalreg])
.controller('inicioctrl', ['$scope', '$http', '$ionicSideMenuDelegate', '$ionicPopup', '$ionicLoading','urlRoot', 'historialPagina','$rootScope','$state', controliniciog])
.controller('productoGctrl', ['$scope', '$timeout', '$http','$ionicPopup', '$ionicLoading', 'productosDato','urlRoot', '$ionicSlideBoxDelegate', '$interpolate', '$stateParams', '$animate','historialPagina', '$cordovaGeolocation', '$timeout', '$rootScope', '$ionicHistory', controlfproductoG])
.controller('productoInformaGctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'productosDato','urlRoot', '$ionicSlideBoxDelegate', '$interpolate', '$stateParams', '$animate','historialPagina', '$cordovaGeolocation', '$timeout', '$rootScope', controlInfoProductoG])
.controller('productoImagesGctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'productosDato','urlRoot', '$ionicSlideBoxDelegate', '$interpolate', '$stateParams', '$animate','historialPagina', '$cordovaGeolocation', '$timeout', '$rootScope', controlImagenProductoG])
.controller('productoColocarctrl', ['$scope', '$timeout', '$http','$ionicPopup', '$ionicLoading', 'productosDato','urlRoot', '$ionicSlideBoxDelegate', '$interpolate', '$stateParams', '$animate','historialPagina', '$cordovaGeolocation', '$timeout', '$rootScope', '$ionicHistory', controlColocarProducto])
.controller('CardCtrl', controlcard)
.controller('perfil', ['$scope','$http', '$ionicHistory', '$ionicPopup','$ionicLoading','urlRoot', '$rootScope', controlperfil])
.controller('perfilEdit', ['$scope','$http', '$ionicHistory', '$ionicPopup','$ionicLoading','urlRoot', 'ionicDatePicker','$rootScope', controleditperfil])
.controller('cedulactrl', ['$scope','$http', '$ionicPopup', '$ionicLoading','urlRoot', 'historialPagina','$rootScope',  controlcedula])
.controller('compartirPctrl', ['$scope','$http','$ionicPopup','$ionicLoading','urlRoot', 'productosDato', 'ngFB', '$cordovaSocialSharing','$rootScope', '$ionicHistory', controlcompP])
.controller('canastikactrl', ['$scope','$http', '$ionicHistory', '$ionicLoading', '$ionicPopup','urlRoot', 'productosDato','$rootScope', '$ionicHistory','$window', controlcanastika])
.controller('juegoctrl', ['$scope','$http', '$ionicPopup', '$ionicSlideBoxDelegate', '$ionicLoading','urlRoot','historialPagina', '$rootScope', controljuego])
.controller('marcaspasoact', ['$scope', '$http', '$ionicPopup','$ionicLoading', '$stateParams','urlRoot','productosDato', 'preguntasProducto', 'historialPagina','$rootScope', controlmarcasAa])
.controller('estadocivilyan', ['$scope', '$http', '$ionicPopup','urlRoot','$rootScope', controletadocivl])
.controller('marcaspasobct', ['$scope', '$http', '$ionicPopup','urlRoot','$rootScope', controlmarcasBb])
.controller('recibicasactrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading','urlRoot', 'productosDato','$rootScope', cotrolrecibircasa])
.controller('piezascomctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','$rootScope', controlpiezascom])
.controller('gangaenviarcomctrl', ['$scope', '$http', '$ionicPopup','$ionicLoading', 'urlRoot', 'productosDato','$rootScope', controleviargang])
.controller('ganstrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading','urlRoot', 'historialPagina','$rootScope', controlgans])
.controller('califgangctrl', ['$scope', '$http', '$ionicPopup','$ionicLoading', 'urlRoot', 'productosDato','$rootScope', 'historialPagina', controlcalifgang])
.controller('patrocinactrl', ['$scope', '$timeout', '$ionicScrollDelegate', '$http', '$ionicPopup', '$ionicLoading','urlRoot','$rootScope', controlpatrocinio])
.controller('variunoctrl', ['$scope', '$http', '$ionicPopup','urlRoot','$rootScope', controlvariauno])
.controller('productocalifctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','$rootScope', califproductoG])
.controller('yagankanasticactrl', ['$scope','$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','$rootScope','$window', controlyagankastica])
.controller('regpreguntasctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', '$stateParams','urlRoot', 'usuario','$rootScope', '$ionicHistory', funpreguntasreg])
.controller('contactoctrl', ['$scope','$window','$http','$ionicPopup','$ionicLoading','urlRoot','$rootScope', controlcontacto])
.controller('yangaredimirctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato', '$rootScope','$window', funyangredimir])
.controller('yangredpuntctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','$rootScope', funyanpunto])
.controller('yaganunoctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','$rootScope','$ionicHistory', funyanuno])
.controller('yangaocho', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','preguntasProducto','$rootScope', yangocho])
.controller('tipsjsctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot','$rootScope', funtipsjsgans])
.controller('tipsgans', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot','$rootScope', funtipsgans])
.controller('condicionesctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot','$rootScope', funcondicion])
.controller('condicionesBBctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot','$rootScope', funcondicion])
.controller('dondectrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'productosDato','$rootScope', fundondecomprar])
.controller('amigoappctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot','$rootScope', funtamigoBB])
.controller('cincoctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'historialPagina','$rootScope', funcinco])
.controller('seisctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'historialPagina','$rootScope', funseis])
.controller('nuevectrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'historialPagina', 'productosDato','$rootScope', funnueve])
.controller('RegistroFacebookCtrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'historialPagina', 'ionicDatePicker','$rootScope', registroFacebook])
.controller('terminosctrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', 'historialPagina', '$rootScope', controlterminos])
.controller('productoBusquedactrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'productosDato','urlRoot', '$stateParams', '$animate','historialPagina', '$cordovaGeolocation', '$timeout', '$rootScope', controlBusquedaProducto])
.controller('procesadocasactrl', ['$scope', '$http', '$ionicPopup', '$ionicLoading', 'urlRoot', '$ionicHistory', terminadocasa])
.service('UserService', serviciosUser)
.service('RequestsService', ['$http', '$q', '$ionicLoading', '$timeout', '$ionicPopup', RequestsService]);

function ionicDatePiker (ionicDatePickerProvider) {
  var datePickerObj = {
    inputDate: new Date(),
    titleLabel: 'Select a Date',
    setLabel: 'Set',
    todayLabel: 'Today',
    closeLabel: 'Close',
    mondayFirst: false,
    weeksList: ["D", "L", "M", "M", "J", "V", "S"],
    monthsList: ["Ene", "Feb", "Marz", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    templateType: 'modal',
    from: new Date(1940, 1, 1),
    to: new Date(),
    showTodayButton: true,
    dateFormat: 'yyyy-MM-dd',
    closeOnSelect: false,
    disableWeekdays: []
  };
  ionicDatePickerProvider.configDatePicker(datePickerObj);
}

function viewsTt ($ionicConfigProvider) {
  var deviceInformation = ionic.Platform.device();
  var isWebView = ionic.Platform.isWebView();
  var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();
  var isWindowsPhone = ionic.Platform.isWindowsPhone();

  if (isIOS) {
     $ionicConfigProvider.views.transition('none');
  }
}

function routers ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homectrl'
    })

    .state('dos', {
      url: '/dos',
      templateUrl: 'templates/2.html',
      controller: 'dosctrl',
      data: {
        authenticate: false
      }
    })

    .state('ingreso', {
      url: '/ingreso',
      templateUrl: 'templates/2-1.html',
      controller: 'ingresoctrl'
    })

    .state('recordar', {
      url: '/recordar',
      templateUrl: 'templates/2-1-1.html',
      controller: 'recordarctrl'
    })

    .state('registro', {
      url: '/registro',
      templateUrl: 'templates/2-2.html',
      controller: 'registroctrl'
    })

    .state('completarRegistroFacebook', {
      url: '/completarRegistroFacebook',
      templateUrl: 'templates/completarRegistroFacebook.html',
      controller: 'RegistroFacebookCtrl'
    })

    .state('tres', {
      url: '/reg-completado',
      templateUrl: 'templates/3.html',
      controller: 'complectrl'
    })

    .state('conocemas', {
      url: '/reg-conocemas',
      templateUrl: 'templates/3-1.html',
      controller: 'masctrl'
    })

    .state('invitaramigo', {
      url: '/invitar',
      templateUrl: 'templates/3-2.html',
      controller: 'amigoctrl'
    })

    .state('cuatro', {
      url: '/reg-terminado',
      templateUrl: 'templates/4.html',
      controller: 'cuatroctrl'
    })

    .state('preguntasregistro', {
      url: '/preguntasregistro/:id',
      templateUrl: 'templates/preguntasreg.html',
      controller: 'regpreguntasctrl'
    })

    .state('corazon', {
      url: '/reg-corazon',
      templateUrl: 'templates/4-1.html',
      controller: 'corazonctrl'
    })

    .state('marcas', {
      url: '/reg-marcas',
      templateUrl: 'templates/4-2.html',
      controller: 'marcasctrl'
    })

    .state('genero', {
      url: '/reg-genero',
      templateUrl: 'templates/4-3.html',
      controller: 'generoctrl'
    })

    .state('finalreg', {
      url: '/reg-final',
      templateUrl: 'templates/5.html',
      controller: 'regfinalctrl'
    })

    .state('app',{
      url: '/app',
      abstract: true,
      templateUrl: 'templates/home/menuslide.html',
      controller: 'menuctrl'
    })

    .state('app.home', {
      url: '/inicio',
      views:{
        'menuContent':{
          templateUrl: 'templates/home/6.html',
          controller: 'inicioctrl'
        }
      }
    })

    .state('app.producto', {
      url: '/productos/:categoria',
      views:{
        'menuContent':{
          templateUrl: 'templates/home/6-1.html',
          controller: 'productoGctrl'
        }
      }
    })

    .state('app.productoinformacion', {
      url: '/productosinformacion/:id',
      views:{
        'menuContent':{
          templateUrl: 'templates/home/producto-informacion.html',
          controller: 'productoInformaGctrl'
        }
      }
    })

    .state('app.productoimagen', {
      url: '/productoimagen/:id',
      views:{
        'menuContent':{
          templateUrl: 'templates/home/producto-images.html',
          controller: 'productoImagesGctrl'
        }
      }
    })

    .state('app.productobusqueda', {
      url: '/productobusqueda',
      views:{
        'menuContent':{
          templateUrl: 'templates/home/producto-busqueda.html',
          controller: 'productoBusquedactrl'
        }
      }
    })

    .state('app.productocolocar', {
      url: '/productocolocar/:id',
      views:{
        'menuContent':{
          templateUrl: 'templates/home/producto-colocar.html',
          controller: 'productoColocarctrl'
        }
      }
    })

    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-1-1.html',
          controller: 'perfil'
        }
      }
    })

    .state('app.perfiledit', {
      url: '/perfiledit',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-1-2.html',
          controller: 'perfilEdit'
        }
      }
    })

    .state('app.cedula', {
      url: '/cedula',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/12.html',
          controller: 'cedulactrl'
        }
      }
    })

    .state('app.compartirp', {
      url: '/compartirproducto',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/7-2.html',
          controller: 'compartirPctrl'
        }
      }
    })

    .state('app.terminos', {
      url: '/terminos',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-1-3.html',
          controller: 'terminosctrl'
        }
      }
    })

    .state('app.contacto', {
      url: '/contacto',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-1-4.html',
          controller: 'contactoctrl'
        }
      }
    })

    .state('app.canastika', {
      url: '/canastika',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-2.html',
          controller: 'canastikactrl'
        }
      }
    })

    .state('app.juego', {
      url: '/juego',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-3.html',
          controller: 'juegoctrl'
        }
      }
    })

    .state('app.tipsj', {
      url: '/tipsj',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-4.html',
          controller: 'tipsjsctrl'
        }
      }
    })

    .state('app.tipsjtodos', {
      url: '/tipsjtodos',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-4-1.html',
          controller: 'tipsgans'
        }
      }
    })

    .state('app.gangs', {
      url: '/gangs',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/6-4-2.html',
          controller: 'ganstrl'
        }
      }
    })

    .state('app.yagans', {
      url: '/yagans',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/8.html',
          controller: 'yangaocho'
        }
      }
    })

    .state('app.yagansmarcasa', {
      url: '/yagansmarcasa/:id',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/8-1.html',
          controller: 'marcaspasoact'
        }
      }
    })

    .state('app.yagansestadocivil', {
      url: '/yagansestadocivil',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/8-2.html',
          controller: 'estadocivilyan'
        }
      }
    })

    .state('app.yaganmarcasb', {
      url: '/yaganmarcasb',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/8-3.html',
          controller: 'marcaspasobct'
        }
      }
    })

    .state('app.yagansgangasg', {
      url: '/yagansgangasg',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/9.html',
          controller: 'nuevectrl'
        }
      }
    })

    .state('app.yagankanastica', {
      url: '/yagankanastica',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11.html',
          controller: 'yagankanasticactrl'
        }
      }
    })

    .state('app.yaganredimir',{
      url: '/yaganredimir',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-1.html',
          controller: 'yangaredimirctrl'
        }
      }
    })

    .state('app.yaganredimirpunto', {
      url: '/yaganredimirpunto',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-1-1.html',
          controller: 'yangredpuntctrl'
        }
      }
    })

    .state('app.yaganlistouno', {
      url: '/yaganlistouno',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-1-2.html',
          controller: 'yaganunoctrl'
        }
      }
    })

    .state('app.yaganrecibicasa', {
      url: '/yaganrecibicasa',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-2.html',
          controller: 'recibicasactrl'
        }
      }
    })

    .state('app.yagansoliporcesada', {
      url: '/yagansoliporcesada',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-2-1.html',
          controller: 'procesadocasactrl'
        }
      }
    })

    .state('app.piezascompletado', {
      url: '/piezascompletado',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-1-3.html',
          controller: 'piezascomctrl'
        }
      }
    })

    .state('app.gangaenviar', {
      url: '/gangaenviar',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-1-3-1.html',
          controller: 'gangaenviarcomctrl'
        }
      }
    })

    .state('app.calificaciongan', {
      url: '/calificaciongan',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/11-1-3-2.html',
          controller: 'califgangctrl'
        }
      }
    })

    .state('app.patrocinadores', {
      url: '/patrocinadores',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/13.html',
          controller: 'patrocinactrl'
        }
      }
    })

    .state('app.variableuno', {
      url: '/variableuno',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/variables1.html',
          controller: 'variunoctrl'
        }
      }
    })

    .state('app.variabledos', {
      url: '/variabledos',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/producto-calificacion.html'
        }
      }
    })

    .state('app.variablecuatro', {
      url: '/variablecuatro',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/variables5.html',
          controller: 'cincoctrl'
        }
      }
    })

    .state('app.variablecinco', {
      url: '/variablecinco',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/variables6.html',
          controller: 'seisctrl'
        }
      }
    })

    .state('app.productoCalif', {
      url: '/productoCalif',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/variables3.html',
          controller: 'productocalifctrl'
        }
      }
    })

    .state('app.condiciones', {
      url: '/condiciones',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/condiciones-envio.html',
          controller: 'condicionesctrl'
        }
      }
    })

    .state('app.condicionesBB', {
      url: '/condicionesBB',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/condiciones-envioBB.html',
          controller: 'condicionesBBctrl'
        }
      }
    })

    .state('app.dondecomprar', {
      url: '/dondecomprar',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/donde-comprar.html',
          controller: 'dondectrl'
        }
      }
    })

    .state('app.dondecomprarBB', {
      url: '/dondecomprarBB',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/donde-comprarBB.html',
          controller: 'dondectrl'
        }
      }
    })

    .state('app.inviteamigo', {
      url: '/inviteamigo',
      views: {
        'menuContent':{
          templateUrl: 'templates/home/invitar-amigo.html',
          controller: 'amigoappctrl'
        }
      }
    })

  $urlRouterProvider.otherwise('/home');
}

function animaricionocarr () {
  return{
    enter: function (element, doneFn) {
      jQuery(element).animation({width:'215%', bottom:139}, doneFn);
    }
    //timeout despues de cargar se llama el servicio
  }
}

function animarclick ($animate) {
  return{
    retric: 'A',
    scope:{
      'clickAnimar': '&  '
    },
    link: function (scope, element, attr) {
      scope.clickAnimar = scope.clickAnimar || (function () {});
      element.on('click', function () {
        scope.$apply(function () {
          $animate.on('enter', element, function (doselement, phase) {
            jQuery(element).animation({width:'215%', bottom:139});
            console.log(doselement);
            console.log(pahse);
          })
        });
      })
    }
  };
}

function globalPreguntasProductos ($http) {
  var dato, encontrado, respuestas, numPreguntas;
  var respuestaItem = [];
  return{
    nuevaPregunta: function (idP, tipo, preguntas, nombre) {
      dato = {
        id: idP,
        tipo: tipo,
        preguntas: preguntas,
        nombre: nombre
      };
    },
    getPreguntas: function () {
      if (dato == undefined || dato == '') {
        return false;
      }
      else if (dato == null || dato == 0) {
        return false;
      }
      else{
        return dato;
      }
    },
    buscarPregunta: function (id, preguntas, num) {
      preguntas.forEach(function (date, index) {
        date['key'] = index;
      });
      encontrado = findBusquedaB(num, preguntas);
      numPreguntas = preguntas.length;
      console.log(encontrado);
      if (encontrado == undefined) {
        return false;
      }
      else{
        respuestas = {
          selected: null,
          router:'',
          pregunta: encontrado,
          ordenSumado: num,
          divitems: {
            numSel: num,
            total: numPreguntas,
            preguntasO : preguntas
          },
          items:[
            {num:1,opcion:encontrado.opcion1},
            {num:2,opcion:encontrado.opcion2},
            {num:3,opcion:encontrado.opcion3},
            {num:4,opcion:encontrado.opcion4},
            {num:5,opcion:encontrado.opcion5},
            {num:6,opcion:encontrado.opcion6},
            {num:7,opcion:encontrado.opcion7},
            {num:8,opcion:encontrado.opcion8},
            {num:9,opcion:encontrado.opcion9},
            {num:10,opcion:encontrado.opcion10}
          ]
        }
        return respuestas;
      }
    },
    nuevaRespuesta: function (dato) {
      respuestaItem.push(dato);
    },
    getRespuestas: respuestaItem,
    removeRespuestas: function () {
      respuestaItem.length = 0;
    }
  }
}

function globalfactProducto ($http) {
  var redencion, producto, calificacion, estrellas, arrayBusqueda, datoInfoP, click;
  var datoP = {
    nombre: 'app',
    nuevoProducto: function (idP, tipo) {
      producto = {
        id: idP,
        tipo: tipo
      };
    },
    getProductos: function () {
      if (producto == '' || producto == undefined) {
        return false;
      }
      else if (producto == null || producto == 0) {
        return false;
      }
      else{
        return producto;
      }
    },
    removeProductos: function () {
      producto = false;
    },
    nuevoRedeccion: function (idP, idC, tipo, codigo, secreto, clickTipo) {
      if (clickTipo == '' || clickTipo == undefined) {
        click = 0;
      }
      else if (clickTipo == null) {
        click = 0;
      }
      else if (clickTipo == 'canastika') {
        click = 1;
      }
      else{
        click = 0;
      }
      redencion = idP + '-' + idC + '-' + tipo + '-' + codigo + '-' + secreto + '-' + click;
      localStorage.setItem('redencion', redencion);
    },
    getRedeccion: function () {
      if (localStorage.getItem('redencion') == null) {
        return false;
      }
      else{
        redencion = localStorage.getItem('redencion').split('-');
        return {
          id_producto: parseInt(redencion[0]),
          id_canasta: parseInt(redencion[1]),
          tipo: redencion[2],
          codigo: redencion[3],
          secreto: redencion[4],
          click: redencion[5]
        }
      }
    },
    removeRedeccion: function () {
      if (localStorage.getItem('redencion')) {
        localStorage.removeItem('redencion');
        return true;
      }
      else{
        return false;
      }
    },
    nuevoTerRedeccion: function () {
      if (localStorage.getItem('redencion') == null || localStorage.getItem('redencion')) {
        localStorage.setItem('terredencion', localStorage.getItem('redencion'));
        return true;
      }
      else{
        return false;
      }
    },
    getTerRedeccion: function () {
      if (localStorage.getItem('terredencion') == null || !localStorage.getItem('terredencion')) {
        return false;
      }
      else{
        redencion = localStorage.getItem('terredencion').split('-');
        return {
          id_producto: parseInt(redencion[0]),
          id_canasta: parseInt(redencion[1]),
          tipo: redencion[2],
          codigo: redencion[3]
        }
      }
    },
    nuevoCalificacion: function (idP, idC, tipo, codigo, secreto) {
      calificacion = {
        id_producto: idP,
        id_canasta: idC,
        codigo: codigo,
        secreto: secreto,
        tipo: tipo
      }
    },
    getCalificacion: function () {
      if (calificacion == '' || calificacion == undefined) {
        return false;
      }
      else if (calificacion == null) {
        return false;
      }
      else{
        return calificacion;
      }
    },
    removeCalifiacion: function () {
      calificacion = null;
    },
    nuevaEstrella: function (num) {
      estrellas = num;
      console.log(estrellas);
    },
    getEstrella: function () {
      return estrellas;
    },
    nuevoBusqueda: function (dato) {
      arrayBusqueda = dato;
    },
    getBusqueda: function () {
      if (arrayBusqueda == undefined || arrayBusqueda == null) {
        return false;
      }
      else if (arrayBusqueda == '' || arrayBusqueda.length == 0) {
        return false;
      }
      else{
        return arrayBusqueda;
      }
    },
    removeBusqueda: function () {
      arrayBusqueda.length = 0;
    },
    nuevoProductoUno: function (dato) {
      datoInfoP = dato.id + '&' + dato.tipo + '&' + dato.categoria + '&' + dato.date + '&' + dato.marca + '&' + dato.posicion;
      localStorage.setItem('datoInfoP', datoInfoP);
    },
    getProductoUno: function () {
      console.log(localStorage.getItem('datoInfoP'));
      if (localStorage.getItem('datoInfoP') == '' || localStorage.getItem('datoInfoP') == null) {
        return false;
      }
      else if (localStorage.getItem('datoInfoP') == undefined) {
        return false;
      }
      else{
        datoInfoP = localStorage.getItem('datoInfoP').split('&');
        var deDato = {
          id: datoInfoP[0],
          tipo: datoInfoP[1],
          categoria: datoInfoP[2],
          fecha: datoInfoP[3],
          idmarca: datoInfoP[4],
          distancia: datoInfoP[5]
        };
        return deDato;
      }
    },
    removeProductoUno: function () {
      datoInfoP = localStorage.removeItem('datoInfoP');
    }
  };
  return datoP;
} 

function globalUsuarios ($http) {
  var localregistro, inforegistro, datoRegistro;
  return{
    historialRegistro: function (dato) {
      localregistro = dato.nombre + '-' + dato.apellido + '-' + dato.email + '-' + dato.password + '-' + dato.nacimiento + '-' + parseInt(dato.idciudad);
      console.log(localregistro);
      localStorage.setItem('registro', localregistro);
    },
    getRegistro: function () {
      if (localStorage.getItem('registro') == null) {
        return false;
      }
      else{
        inforegistro = localStorage.getItem('registro').split('-');
        datoRegistro = {
          nombre: inforegistro[0],
          apellido: inforegistro[1],
          email: inforegistro[2],
          password: inforegistro[3],
          nacimiento: inforegistro[4] + '-' + inforegistro[5],
          idciudad: inforegistro[6]
        };
        return datoRegistro;
      }
    }
  }
}

function paginaHistorial () {
  var tipsInfo, juegoInfo, productoCard, getProductoCard, hisBeneficio, totalSumaPreguntas, califiacionAppService;
  return{
    setHistorialJuego:function () {
      localStorage.setItem('juegoh', true);
    },
    getHistorialJuego:function () {
      juegoInfo = localStorage.getItem('juegoh');
      if (juegoInfo == null || juegoInfo == '') {
        return false;
      }
      else if (juegoInfo == undefined) {
        return false;
      }
      else{
        return juegoInfo;
      }
    },
    setHistorialTips: function () {
      localStorage.setItem('tips', true);
    },
    getHistorialTips: function () {
      tipsInfo = localStorage.getItem('tips');
      if (tipsInfo == null || tipsInfo == '') {
        return false;
      }
      else if (tipsInfo == undefined) {
        return false;
      }
      else{
        return tipsInfo;  
      }
    },
    setHistorialCards: function (num, id, tipo, categoria, boolean) {
      productoCard = true + '-' + id + '-' + tipo + '-' + categoria + '-' + 1;
      localStorage.setItem('cardproduct', productoCard);
    },
    getHistorialCards: function () {
      if (localStorage.getItem('cardproduct') == null || localStorage.getItem('cardproduct') == '') {
        return false;
      }
      else if (localStorage.getItem('cardproduct') == undefined) {
        return false;
      }
      else{
        getProductoCard = localStorage.getItem('cardproduct').split('-');
        if (getProductoCard[0]) {
          return {
            numFool: getProductoCard[0],
            id_producto: parseInt(getProductoCard[1]),
            tipo: getProductoCard[2],
            categoria: parseInt(getProductoCard[3]),
            keyBeneficio: parseInt(getProductoCard[4])
          };
        }
        else{
          return false;
        }
      }
    },
    setHistorialBeneficio: function (beneficio) {
      hisBeneficio = beneficio;
    },
    getHistorialBeneficio: function () {
      if (hisBeneficio == null || hisBeneficio == '') {
        return false;
      }
      else if (hisBeneficio == undefined) {
        return false;
      }
      else{
        return hisBeneficio;
      }
    },
    removeHistorialBeneficio: function () {
      hisBeneficio = null;
    },
    setSumaPreguntas: function (total) {
      totalSumaPreguntas = total;
    },
    getSumaPreguntas: function () {
      return totalSumaPreguntas;
    },
    removeSumaPreguntas: function () {
      totalSumaPreguntas = null;
    },
    setHistorialPatrocinadores: function () {
      localStorage.setItem('patrocinHistorial', true);
    },
    getHistorialPatrocinadores: function () {
      if (localStorage.getItem('patrocinHistorial') == null || localStorage.getItem('patrocinHistorial') == undefined) {
        return false;
      }
      else if (localStorage.getItem('patrocinHistorial') == '') {
        return false;
      }
      else{
        return localStorage.getItem('patrocinHistorial');
      }
    },
    setCalificacionGeneral: function (num) {
      localStorage.setItem('calificacion_general', num);
    },
    getCalificacionGeneral: function () {
      if (localStorage.getItem('calificacion_general') == undefined || localStorage.getItem('calificacion_general') == null) {
        return false;
      }
      else if (localStorage.getItem('calificacion_general') == '') {
        return false;
      }
      else{
        return localStorage.getItem('calificacion_general');
      }
    },
    removeCalificacionGeneral: function () {
      localStorage.removeItem('calificacion_general');
    },
    setEliminarCache: function () {
      localStorage.setItem('clearCache', true);
    },
    getEliminarCache: function () {
      if (localStorage.getItem('clearCache') == undefined || localStorage.getItem('clearCache') == null) {
        return false;
      }
      else if (localStorage.getItem('clearCache') == '') {
        return false;
      }
      else{
        return localStorage.getItem('clearCache');
      }
    },
    removeEliminarCache: function () {
      localStorage.removeItem('clearCache');
    },
    setBeneficio: function (dato) {
      var beneficioEnviar = dato.idBeneficio + '|' + dato.gangsBeneficio + '|' + dato.cantidad + '|' + dato.codigo + '|' + dato.nombre;
      localStorage.setItem('obeneterBeneficio', beneficioEnviar);
    },
    getBeneficio: function () {
      if (localStorage.getItem('obeneterBeneficio') == undefined || localStorage.getItem('obeneterBeneficio') == null) {
        return false;
      }
      else if (localStorage.getItem('obeneterBeneficio') == '') {
        return false;
      }
      else{
        var recibirBenficioE = localStorage.getItem('obeneterBeneficio').split('|');
        return {
          id_benficio: recibirBenficioE[0],
          gangs_beneficio: recibirBenficioE[1],
          cantidad: recibirBenficioE[2],
          codigo: recibirBenficioE[3],
          nombre: recibirBenficioE[4]
        };
      }
    },
    removeBeneficio: function () {
      localStorage.removeItem('obeneterBeneficio');
    }
  };
}

function serviciosUser () {
  var setUser = function (user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };
  var getUser = function () {
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  }
}

function RequestsService ($http, $q, $ionicLoading, $timeout, $ionicPopup) {
  var base_url = 'http://localhost:8100';

        var me = this;

        me.timeout = {
            value: 20000,
            message: 'Please check your internet connection and re-launch the app'
        };

        function requestTimeout(deferred){

            var timer = $timeout(function(){

                $ionicLoading.hide();

                $ionicPopup.alert({
                    'title': me.timeout.message
                });

                deferred.reject();

            }, me.timeout.value);

            return timer;

        };

        function sendData(data){

            var deferred = $q.defer();

            var timer = requestTimeout(deferred);

            $ionicLoading.show();

            $http.post(base_url + '/data', {'data' : data})
                .success(function(response){

                    $timeout.cancel(timer);
                    $ionicLoading.hide();

                    $ionicPopup.alert({
                        'title': response.message
                    });

                    deferred.resolve(response);

                })
                .error(function(data){
                    deferred.reject();
                });

            return deferred.promise;

        };


        function uploadPhoto(photo_url, params){

            var deferred = $q.defer();

            var options = new FileUploadOptions();
            options.fileKey = 'file';
            options.fileName = photo_url.substr(photo_url.lastIndexOf('/') + 1).split('?')[0];
            options.mimeType = 'image/jpeg';
            options.params = params;

            var ft = new FileTransfer();
            ft.upload(
                photo_url, base_url + '/upload',
                function(result){
                  deferred.resolve(result);
                },
                function(err){
                  deferred.reject(err);
                },
                options
            );

            return deferred.promise;
        }


        return {
            sendData: sendData,
            uploadPhoto: uploadPhoto
        };
}

function rooturl () {
  var dato = {
    urlAjax: 'http://gangastik.com/app/services/',
    urlImages: 'http://gangastik.com/assets/images/'
  };
  return dato;
}

function scrollNo () {
  return {
    retric: 'A',
    link: function ($scope, element, attr) {
      element.on('touchmove', function (e) {
        e.preventDefault();
      });
    }
  }
}

function colciudades ($http) {
  return{
    retric: 'E',
    transclude: true,
    template: '<select id="ciudad" ng-model="ciudad" ng-options="item as item.nombre for item in ciudades track by item.id"><option value="">Selecione</option></select>',
    scope: true,
    link: function (scope, element) {
      ajaxhttp(
        $http,
        'POST',
        'http://grancomunicaciones.com/clientes/gangastik/app/services/CiudadesService.php',
        {
          actionType: 'get'
        },
        resciudades(scope)
      );
    }
  }
}

function resciudades ($scope, $ionicLoading) {
  return function (res) {
    $ionicLoading.hide();
    var dato = checkjsondat(res);
    console.log(dato);
    $scope.ciudades = dato.ciudades
  }
}

function colocarAlto ($window) {
  return {
    link: function ($scope, element) {
      var altov = $window.innerHeight + 'px';
      element.css({height: altov});
    }
    // porcentaje * altura del padre / 100
  }
}

function colocarHorizontal ($window) {
  return {
    link: function ($scope, element) {
      var anchoV = $window.innerWidth;
      var caja = element.css('width');
      var calc = (anchoV - caja) / 2;
      element.css({left:calc + 'px'});
    }
  }
}

function colocarHorizontalSinwidth ($window) {
  return {
    link: function ($scope, element) {
      var anchoV = $window.innerWidth;
      var caja = element[0].clientWidth;
      var calc = (anchoV - caja) / 2;
      element.css({left:calc + 'px'});
    }
  }
}

function centrarDiv ($window) {
  return{
    retric: 'A',
    link: function (scope, element) {
      var anchoV = $window.innerWidth;
      var anchoD = element[0].parentElement;
      console.log(element[0].parentElement.clientHeight);
      console.log(element)
    }
  }
}

function colocarAlturaPorcentaje ($window) {
  /*
    'E' - matchea con el nombre del tag
    'A' - matchea con el nombre de un atributo
    'C' - matchea con el nombre de un "class" (CSS).
  */
  return{
    retric: 'A',
    link: function (scope, element, attrs) {
      //obeter en valo de attr del mismo attrs.nobredirective
      //colocar texto scope.text='texto'
      var porcentaje = parseInt(attrs.alturaPorcentaje);
      var altoVentana = $window.innerHeight;
      var altP = (porcentaje * altoVentana) / 100;
      element.css({height: altP + 'px'});
    }
  }
}

function colocarAlturaDivPorcentaje ($window) {
  return{
    retric: 'A',
    link: function (scope, element, attrs) {
      var altoPadre = element[0].parentElement.clientHeight;
      var porcentaje = parseInt(attrs.alturaPorcentajeDiv);
      var altP = (porcentaje * altoPadre) / 100;
      element.css({height: altP + 'px'});
    }
  }
}

function colocarImagenFondo ($window) {
  return{
    retric: 'A',
    link: function (scope, element, attrs) {
      //obeter en valo de attr del mismo attrs.nobredirective
      //colocar texto scope.text='texto'
      var dato = attrs.imageFondo;
      console.log(attrs.imageFondo)
      element.css({'background-image': 'url('+dato+')'})
      /*var altoVentana = $window.innerHeight;
      var altP = (porcentaje * altoVentana) / 100;
      element.css({height: altP + 'px'});*/
    }
  }
}

function directiveCircle () {
  return{
    retric: 'A',
    link: function ($scope, element, attrs) {
      var movil = moviles();
      var Padre = element[0].parentElement;

      console.log(movil);

      if (movil == 'iOS' || movil == undefined) {
        element.removeClass('circle');
        element.addClass('circle-image');
        //padre.css({left: '-9px', width: '106%'});
      }
    }
  }
}

function botomdivabsoluteDiv ($window) {
  return{
    retric: 'A',
    link: function (scope, element, attrs) {
      //obeter en valo de attr del mismo attrs.nobredirective
      //colocar texto scope.text='texto'
      var altoPadre = element[0].parentElement.clientHeight;
      var porcentaje = parseInt(attrs.botomAbsoluteDiv);
      var altP = (porcentaje * altoPadre) / 100;
      element.css({bottom: altP + 'px'});
    }
  }
}

function botomdivaboluteWindow ($window) {
  return{
    retric: 'A',
    link: function (scope, element, attrs) {
      var altoV = $window.innerHeight;
      var porcentaje = parseInt(attrs.botomAbsoluteWindow);
      var pixel = (porcentaje * altoV) / 100;
      element.css({bottom:pixel + 'px'});
    }
  }
}

function topdivabosoluteDiv () {
  return{
    retric: 'A',
    link: function (scope, element, attrs) {
      var altoPadre = element[0].parentElement.clientHeight;
      var porcentaje = parseInt(attrs.topAbsoluteDiv);
      var pixel = (porcentaje * altoPadre) / 100;
      element.css({top: pixel + 'px'});
    }
  }
}

function sinconexion ($window) {
  return{
    retric: 'E',
    templateUrl: 'templates/emergentes/sinConexion.html'
  }
}

function directiveSpashScreen () {
  return{
    retric: 'E',
    templateUrl: 'templates/splashScreen.html'
  };
}

function directiveBuscar ($http) {
  return{
    retric: 'E',
    templateUrl: 'templates/buscador.html'
  };
}

function loadingDisenn () {
  return{
    retric: 'E',
    templateUrl: 'templates/emergentes/loading.html'
  }
}

function directiveProducto ($http){
  return{
    restrict: 'EA',
    templateUrl: 'templates/productoview.html',
    link: function ($scope, element, attr) {
      var idProducto = attr.id;
      var tipo = attr.tipo;
      var cateId = attr.categoria;
      var idmarcar = attr.marca;
      var fecha = attr.date;
      var distancia = (attr.posicion == undefined || attr.posicion == '') ? 0 : attr.posicion;
      console.log(idProducto + '-' + tipo);
      $http({
        method: 'post',
        url: 'http://gangastik.com/app/services/ProductosService.php',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data:{
          actionType: 'getInfo',
          idproducto: idProducto,
          tipo: tipo
        },
        timeout : 180000
      }).then(function (res) {
        console.log(res.data)
        datoProducto = new ObjProducto(idProducto, tipo, res.data.producto);
        var gansProducto = gangsProducto(datoProducto.informacion.precio_ahora);
        datoProducto['rootImg'] = 'http://gangastik.com/assets/images/';
        datoProducto['descuento'] = number_format(calcularPorcentaje(datoProducto.informacion.precio_antes, datoProducto.informacion.precio_ahora), 0);
        datoProducto['informacion']['precio_ahora'] = number_format(datoProducto.informacion.precio_ahora, 0);
        datoProducto['informacion']['precio_antes'] = number_format(datoProducto.informacion.precio_antes, 0);
        datoProducto['gangsP'] = calcurGang(gansProducto, 1);
        datoProducto['cantidad_comentarios'] = datoProducto.informacion.comentarios.length;
        datoProducto['categoria'] = cateId;
        datoProducto['distancia'] = number_format(distancia,0);
        datoProducto['patro_marginTop'] = (datoProducto.tipo == 'Patrocinado') ? '-7px' : '30px';
        datoProducto['patro_precioTop'] = (datoProducto.tipo == 'Patrocinado') ? '-45px' : '-23px';
        datoProducto['patro_botonTop'] = (datoProducto.tipo == 'Patrocinado') ? '-20px' : '0px';
        datoProducto['claficacionG'] = objetoCalificacion(datoProducto.informacion.total_calificacion);
        $scope.cardB = datoProducto;
        console.log(datoProducto);
      }, function (res) {
        console.log(res);
        if (res.status == -1) {
          //popupC('ooooppppsss: '+ res.status, 'Se pasó el tiempo de plazo buscando la información','location', $ionicPopup);
          console.log('ooooppppsss: '+ res.status + 'Se pasó el tiempo de plazo buscando la información');
        }
        else{
          alert('ooooppppsss: '+ res.status, res.statusText, $ionicPopup);
        }
      });
    }
  }
}

function cuentAtras ($timeout) {
  return{
    restrict: 'EA',
    scope:{
      date: '@',
      producto: '@'
    },
    templateUrl:'templates/countdown.html',
    link: function ($scope, element, attrs) {
      console.log(attrs.date);
      //cuentaRegresiva(attrs.date, $scope, $timeout);
      var product = attrs.producto;
      $timeout(function(){
        var arrfecha = attrs.date;
        //console.log(producto);
        console.log($scope.date, ' fecha')
        if (valfecha(attrs.date)) {
          $scope.count = {
            diaR: '-',
            horR: '-',
            mesR: '-',
            segR: '-'
          }
          var timer = setInterval(function () {
            var fechaRc = attrs.date;
            var sepfechaHora = fechaRc.split(' ');
            var sepFecha = sepfechaHora[0].split('-');
            var sepHora = sepfechaHora[1].split(':');
            var Yr = sepFecha[0];
            var Mr = sepFecha[1] - 1;
            var Dr = sepFecha[2];
            var Hr = sepHora[0];
            var Nr = sepHora[1];
            var Sr = sepHora[2];
            var fecha = new Date(Yr,Mr,Dr,Hr,Nr,Sr);
            var hoy = new Date();
            var dias, horas, minutos, segundos;
            var diferencia = (fecha.getTime()-hoy.getTime())/1000;
            dias = Math.floor(diferencia/86400);
            diferencia = diferencia-(86400*dias);
            horas = Math.floor(diferencia/3600);
            diferencia = diferencia-(3600*horas);
            minutos = Math.floor(diferencia/60);
            diferencia = diferencia-(60*minutos);
            segundos = Math.floor(diferencia);
            $scope.count = {
              diaR: dias,
              horR: horas,
              mesR: minutos,
              segR: segundos
            }
            $scope.$apply();
            //console.log($scope.count);
            cuentacero($scope.count, timer);
          }, 1000);
        }
        else{
          $scope.count = {
            diaR: 0,
            hoaR: 0,
            mesR: 0,
            egRs: 0
          }
        }
      },1000)
    }
  }
}

function autofocusc () {
  return{
    retric: 'A',
    link: function ($scope, element, attrs) {
      var valor = attrs.autofocus;
      console.log(valor);
      if (valor == 1) {
        console.log('si');
        element[0].focus();
      }
      else{
        console.log('no');
      }
    }
  }
}

function valfecha (date) {
  if (date == "" || date == undefined) {
    return false;
  }
  else{
    var sepfechaHora = date.split(' ');
    var sepFecha = sepfechaHora[0].split('-');
    var sepHora = sepfechaHora[1].split(':');
    var Yr = sepFecha[0];
    var Mr = sepFecha[1] - 1;
    var Dr = sepFecha[2];
    var Hr = sepHora[0];
    var Nr = sepHora[1];
    var Sr = sepHora[2];
    var fecha = new Date(Yr,Mr,Dr,Hr,Nr,Sr);
    var hoy = new Date();
    if (fecha > hoy) {
      return true;
    }
    else{
      return false;
    }
  }
}

function cuentacero (e, timer) {
  if (e.d == 0 && e.h == 0 && e.m == 0 && e.s == 0) {
    clearInterval(timer)
    //console.log(true + 'timer');
  }
  else{
    //console.log(false + 'timer');
  }
}

function loadingImagen ($rootScope) {
  return{
    retric:'E',
    template: '<div/>',
    transclude: false,
    replace: true,
    scope: {
      imgSrc: '@'
    },
    link: function ($scope, element, attrs) {
      var img = angular.element(new Image());
      var loadinImage = img.on('load', function (event) {
        console.log('image loaded: ' + img.attr('src'));
        stopLoadingCSS(img, element, attrs);
      })

      var errorLoadingImage = img.on('error', function (event) {
        console.log('imgWithLoading error Loading ' + $scope.imgSrc);
        element.removeClass(attrs.spinnerClass);
      })

      img.attr('src', attrs.imgSrc);
      startLoadingCSS(img, element, attrs);
      element.append(img);
      element.addClass('imgWithLoading');

      var unbind3 = $scope.$watch('imgSrc', function (newVal, oldVal) {
        if ( newVal===img.attr('src') ) return;
        startLoadingCSS(img, element, attrs);
        setHeight(img, element, attrs);
        img.attr('src', newVal);
        console.log('imgWithLoading: imgSrc mudou: ' + newVal );
        console.log('imgWithLoading: imgSrc antigo: ' + oldVal );
      });

      $scope.$on('destroy', function() {
        console.log('imgWithLoading: unbinding...');
        loadinImage(); errorLoadingImage(); unbind3();
      });
    }
  };
}

function colhmltdato ($compile) {
  return{
    retric: 'A',
    link: function ($scope, element, attrs) {
      $scope.$watch(function () {
        return $scope.$eval(attrs.datoHtml);
      }, function (value) {
        // Incase value is a TrustedValueHolderType, sometimes it
        // needs to be explicitly called into a string in order to
        // get the HTML string.
        element.html(value && value.toString());
        // If scope is provided use it, otherwise use parent scope
        var compileScope = $scope;
        if (attrs.datoHtml) {
          compileScope = $scope.$eval(attrs.datoHtml);
        }
        $compile(element.contents());//(compileScope)
      });
    }
  }
}

function direcionarBrowser ($ionicGesture) {
  return{
    retric: 'A',
    link: function ($scope, element, attrs) {
      console.log(attrs.broweTo + '-----');
      var handleTap = function (e) {
        var inAppBrowser = window.open(encodeURI(attrs.broweTo), '_system');
      };
      var tapGesture = $ionicGesture.on('tap', handleTap, element);
      $scope.$on('$destroy', function () {
        $ionicGesture.off(tapGesture, 'tap', handleTap);
      });
    }
  }
}

function homecontrolG ($scope) {
  localStorage.removeItem('iduser');
  localStorage.removeItem('idCategoriaSelecionada');
  localStorage.removeItem('registro');
  localStorage.removeItem('facebookRegistro');
  localStorage.removeItem('cardproduct');
  localStorage.removeItem('redencion');
  localStorage.removeItem('terredencion');
}

function doscontrolG ($scope, $http, $ionicPopup, $ionicLoading, $state, $q, UserService, urlRoot, $auth, RequestsService, ngFB) {
  localStorage.removeItem('iduser');
  localStorage.removeItem('idCategoriaSelecionada');
  localStorage.removeItem('registro');
  localStorage.removeItem('facebookRegistro');
  localStorage.removeItem('cardproduct');
  localStorage.removeItem('redencion');
  localStorage.removeItem('terredencion');


  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.fbRegistro = function () {
    var facebookRegistro;
    console.log('click login');
    ngFB.login({scope: 'email,publish_actions'}).then(
      function (response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded', response);
          $scope.show($ionicLoading);
          ngFB.api({
            path: '/me',
            params: {fields: 'id,first_name,last_name,email'}
          }).then(
            function (user) {
              $ionicLoading.hide();
              console.log(user);
              facebookRegistro = user.id + '-' + user.first_name + '-' + user.last_name + '-' + user.email;
              localStorage.setItem('facebookRegistro', facebookRegistro);
              direcionarGn('#/completarRegistroFacebook');
            },
            function (error) {
              $ionicLoading.hide();
              popupN('Facebook error: ', error.error_description, 'advertencia', $ionicPopup);
            });
        } else {
          popupN('Facebook login failed', 'Falló login facebook', 'advertencia', $ionicPopup);
        }
      });
  };

  $scope.fbLogin = function () {
    var facebookRegistro;
    console.log('click login');
    ngFB.login({scope: 'email,publish_actions'}).then(
      function (response) {
        if (response.status === 'connected') {
          console.log('Facebook login succeeded', response);
          $scope.show($ionicLoading);
          ngFB.api({
            path: '/me',
            params: {fields: 'id,first_name,last_name,email'}
          }).then(
            function (user) {
              $ionicLoading.hide();
              console.log(user);
              facebookRegistro = user.id + '-' + user.first_name + '-' + user.last_name + '-' + user.email;
              localStorage.setItem('facebookRegistro', facebookRegistro);
              ajaxhttp(
                $http,
                $ionicLoading,
                $ionicPopup,
                'POST',
                urlRoot.urlAjax + 'LoginService.php',
                {
                  actionType: 'loginFB',
                  fid: user.id
                },
                respuestaingreso($ionicLoading, $ionicPopup)
              );
            },
            function (error) {
              $ionicLoading.hide();
              popupN('Facebook error: ', error.error_description, 'advertencia', $ionicPopup);
            });
        } else {
          popupN('Facebook login failed', 'Falló login facebook', 'advertencia', $ionicPopup);
        }
      });
  };
}

function controlregistro ($scope, $http, $state, $ionicPopup, $timeout, $ionicLoading, urlRoot, usuario, ionicDatePicker) {
  localStorage.removeItem('iduser');
  localStorage.removeItem('idCategoriaSelecionada');
  localStorage.removeItem('registro');
  localStorage.removeItem('facebookRegistro');
  localStorage.removeItem('cardproduct');
  localStorage.removeItem('redencion');
  localStorage.removeItem('terredencion');
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  var movil = moviles();

  $scope.ios = (movil == 'iOS') ? true : false;
  $scope.android = (movil == 'Android') ? true : false;

  $scope.removePlaceholder = function () {
    angular.element(document.querySelector('.dateclass')).removeClass('placeholderclass');
  }

  var ipObj1 = {
    callback: function (val) {
      console.log(val);
      console.log(new Date(val));
      var fechaSeleccion = new Date(val);

      $scope.fecha = fechaSeleccion.getFullYear()+'-'+ (parseInt(fechaSeleccion.getMonth()) + 1) +'-'+fechaSeleccion.getDate();
    },
    closeOnSelect: true
  };

  $scope.openDatePicker = function () {
    ionicDatePicker.openDatePicker(ipObj1);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CiudadesService.php',
    {
      actionType: 'get'
    },
    resciudades($scope, $ionicLoading)
  );

  $scope.registro = function () {
    var malcolor = {color: 'red'};
    var biencolor = {color: '#9c9d9e'};
    var name = this.nombre;
    var apellido = this.apellido;
    var email = this.email;
    var pasa = this.passa;
    var pasb = this.passb;
    var ciudad = this.ciudad;

    if (movil == 'iOS') {
      var fecha = angular.element(document.getElementById('fechaios')).val();
    }
    else{
      var fecha = this.fecha;
    }

    var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/
    if (name == undefined || name == '') {
      colerrres('#texto','#nombre','mal','Ingrese el nombre');
      $scope.stynombre = malcolor;
    }
    else{
      $scope.stynombre = biencolor;
      colerrres('#texto','#nombre','bien','');
      if (apellido == undefined || apellido == '') {
        colerrres('#texto','#apellido','mal','Ingrese el apellido');
        $scope.styapellido = malcolor;
      }
      else{
        colerrres('#texto','#apellido','bien','');
        $scope.styapellido = biencolor;
        if (email == undefined || !expr.test(email)) {
          colerrres('#texto','#email', 'mal', 'Ingrese correo valido');
          $scope.styemail = malcolor;
        }
        else{
          $scope.styemail = biencolor;
          colerrres('#texto','#email', 'bien', '');
          if (fecha == undefined || fecha == '') {
            if (movil == 'iOS') {
              colerrres('#texto','#fechaios', 'mal', 'Ingrese la fecha de nacimiento');
            }
            else{
              colerrres('#texto','#fecha', 'mal', 'Ingrese la fecha de nacimiento');
            }
            $scope.styfecha = malcolor;
          }
          else{
            $scope.styfecha = biencolor;
            if (movil == 'iOS') {
              colerrres('#texto','#fechaios', 'bien', '');
            }
            else{
              colerrres('#texto','#fecha', 'bien', '');
            }
            if (ciudad == undefined || ciudad == '') {
              colerrres('#texto','#ciudad', 'mal', 'Selecione la ciudad');
              $scope.styciudad = malcolor;
            }
            else{
              $scope.styciudad = biencolor;
              colerrres('#texto','#ciudad', 'bien', '')
              if (pasa == undefined || pasa.length < 6) {
                colerrres('#texto','#passa', 'mal', 'Contraseña mínimo 6 dígitos');
                $scope.stypassa = malcolor;
              }
              else{
                $scope.stypassa = biencolor;
                colerrres('#texto','#passa', 'bien', '');
                if (pasb != pasa) {
                  colerrres('#texto','#passb', 'mal', 'Las contraseñas no coinciden');
                  $scope.stypassb = malcolor;
                }
                else{
                  $scope.stypassb = biencolor;
                  colerrres('#texto','#passb', 'bien', '');
                  $scope.show($ionicLoading);
                  var registroDato = {
                    nombre:name,
                    apellido:apellido,
                    email:email,
                    password:pasa,
                    nacimiento:fecha,
                    idciudad:ciudad.id
                  };
                  console.log(fecha)
                  usuario.historialRegistro(registroDato);
                  $scope.show($ionicLoading);
                  //direcionarGn('#/reg-completado');
                  ajaxhttp(
                    $http,
                    $ionicLoading,
                    $ionicPopup,
                    'POST',
                    urlRoot.urlAjax + 'RegistroService.php',
                    {
                      actionType: 'registro',
                      nombre:name,
                      apellido:apellido,
                      email:email,
                      password:pasa,
                      nacimiento:fecha,
                      idciudad:ciudad.id
                    },
                    respuestaregistro($ionicLoading,$ionicPopup)
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  $scope.buscarCiudadReg = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'CiudadesService.php',
      {
        actionType: 'get'
      },
      resciudades($scope, $ionicLoading)
    );
  }
}

function controlingreso ($scope, $http, $state, $ionicPopup, $timeout, $ionicLoading, urlRoot) {
  localStorage.removeItem('iduser');
  localStorage.removeItem('idCategoriaSelecionada');
  localStorage.removeItem('registro');
  localStorage.removeItem('facebookRegistro');
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.ingreso = function () {
    console.log(this)
    var correo = this.coring
    var password = this.passing

    if (correo == undefined || correo == '') {
      colerrres('.textog','#coring','mal','Ingrese el correo')
    }
    else{
      colerrres('.textog','#coring','bien','')
      if (password == undefined || password == '') {
        colerrres('.textog','#passing','mal','Ingrese la constraseña')
      }
      else{
        colerrres('.textog','#passing','normal','')
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'LoginService.php',
          {
            actionType: 'loginMail',
            email: correo,
            password: password
          },
          respuestaingreso($ionicLoading, $ionicPopup)
        );
      }
    }
  }
}

function controlrecordar ($scope, $http, $ionicPopup, $ionicLoading, $timeout, urlRoot) {
  localStorage.removeItem('iduser');
  localStorage.removeItem('idCategoriaSelecionada');
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.recordar = function () {
    var correo = this.correo;
    if (correo == undefined || correo == null) {
      colerrres('.textog','#email','mal','Ingrese el correo');
    }
    else{
      colerrres('.textog','#email','normal','');
      if (correo == '' || !axpr.test(correo)) {
        colerrres('.textog','#email','mal','Ingrese un correo valido');
      }
      else{
        colerrres('.textog','#email','normal','');
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'RecuperarContrasenaService.php',
          {
            actionType: 'recuperarContrasena',
            email: correo
          },
          resOlvidarPassword($scope, $ionicLoading, $ionicPopup, urlRoot)
        );
      }
    }
  }
}

function resOlvidarPassword($scope, $ionicLoading, $ionicPopup, urlRoot) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      popupD('¡Ey!',res.result, '#/ingreso', 'bien', $ionicPopup);
    }
    else{
      popupN('ooooppppsss', res.error + '<br><br> codigo: ' + res.code, 'advertencia', $ionicPopup);
    }
  }
}

function controlregcompletado ($scope, $ionicLoading) {
  $ionicLoading.hide();
  $scope.direcionar = function (url) {
    direcionarGn(url);
  }
}

function controlmas ($scope) {
  $scope.direcionar = function (url) {
    direcionarGn(url);
  }
}

function controlamigos ($scope, $http, $ionicPopup, $ionicLoading, urlRoot) {
  var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.texto = 'ENVIAR';

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.autofok = 0;
  $scope.direcionar = function (url) {
    direcionarGn(url);
  }
  $scope.agregarOtro = function () {
    /*if ($scope.activado === 'active') {
      $scope.activado = '';
    }
    else{
      $scope.activado = 'active';
    }*/
    $scope.correoStyle = {display:'block'};
    $scope.otroAmigo = {display: 'none'};
    $scope.texto = 'SIGUIENTE';
    $scope.amigoInv = '';
    $scope.autofok = 1;
    angular.element(document.getElementById('censinbord').value = '');
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Menu invita amigo'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Menu invita amigo')
  );

  $scope.agregarAmigo = function () {
    var correo = this.amigoInv;
    console.log(correo);
    if (correo == undefined || !expr.test(correo)) {
      popupN('ooooppppsss', 'Ingrese un correo válido', 'advertencia', $ionicPopup);
    }
    else{
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'EnviarInvitacionService.php',
        {
          actionType: 'enviarInvitacion',
          iduser: localStorage.getItem('iduser'),
          email: correo
        },
        respuestaamigo($ionicLoading,$ionicPopup, $scope)
      );
      this.amigoInv = '';
    }
  }
}

function funtamigoBB ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  $rootScope.tituloGeneral = 'Invite a un amigo';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.texto = 'ENVIAR';

  $scope.autofok = 0;
  $scope.direcionar = function (url) {
    direcionarGn(url);
  }
  $scope.activado = '';
  $scope.agregarOtro = function () {
    /*console.log($scope.activado)
    if ($scope.activado === 'active') {
      $scope.activado = '';
    }
    else{
      $scope.activado = 'active';
    }*/
    $scope.correoStyle = {display:'block'};
    $scope.otroAmigo = {display: 'none'};
    $scope.texto = 'SIGUIENTE';
    $scope.amigoInvBB = '';
    $scope.autofok = 1;
    document.getElementById('censinbord').value = '';
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Menu invita amigo'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Menu invita amigo')
  );


  $scope.agregarAmigo = function () {
    var correo = this.amigoInvBB;
    console.log(correo);
    if (correo == undefined || !expr.test(correo)) {
      popupN('ooooppppsss', 'Ingrese un correo válido', 'advertencia', $ionicPopup);
    }
    else{
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'EnviarInvitacionService.php',
        {
          actionType: 'enviarInvitacion',
          iduser: localStorage.getItem('iduser'),
          email: correo
        },
        respuestaamigoBB($ionicLoading,$ionicPopup, $scope)
      );
      this.amigoInvBB = '';
    }
  }
}

function respuestaamigo ($ionicLoading,$ionicPopup, $scope) {
  return function (res) {
    $ionicLoading.hide();
    var url = '#/reg-terminado';
    console.log(res);
    if (!checkJSON(res)) {
      var result = res;
      if (result.code != 0 || result.code != '0') {
        popupN('ooooppppsss', result.error, 'advertencia', $ionicPopup);
      }
      else{
        if (res.status == 0) {
          popupN('ooooppppsss', 'ooooppppsss status 0', 'advertencia', $ionicPopup);
        }
        else{
          if ($scope.activado === 'active'){
            popupSelecion(result.result, '¿Deseas agergar otro amigo?', url, 'bien', $ionicPopup, $scope);
          }
          else{
            popupN('TU MENSAJE HA SIDO ENVIADO', 'Ya tu amigo ha recibido tu invitación', 'bien', $ionicPopup);
            $scope.correoStyle = {display:'none'};
            $scope.otroAmigo = {display: 'block'};
            $scope.texto = 'SIGUIENTE';
            $scope.amigoInv = '';
          }
        } 
      }
    }
  }
}

function respuestaamigoBB ($ionicLoading,$ionicPopup, $scope) {
  return function (res) {
    $ionicLoading.hide();
    var url = '#/app/inviteamigo';
    console.log(res);
    console.log($scope);
    if (!checkJSON(res)) {
      var result = res;
      if (result.code != 0 || result.code != '0') {
        popupN('ooooppppsss', result.error, 'advertencia', $ionicPopup);
      }
      else{
        if (res.status == 0) {
          popupN('ooooppppsss', 'ooooppppsss status 0', 'advertencia', $ionicPopup);
        }
        else{
          if ($scope.activado === 'active'){
            popupSelecion(result.result, '¿Deseas agregar otro amigo?', url, 'bien', $ionicPopup, $scope);
          }
          else{
            popupN('TU MENSAJE HA SIDO ENVIADO', 'Ya tu amigo ha recibido tu invitación', 'bien', $ionicPopup);
            $scope.correoStyle = {display:'none'};
            $scope.otroAmigo = {display: 'block'};
            $scope.texto = 'SIGUIENTE';
          }
        } 
      }
    }
  }
}

function cuatrocomplet ($scope) {
  $scope.direcionar = function (url) {
    direcionarGn(url);
  }
}

function erroGeneral ($ionicPopup) {
  $ionicPopup.alert({
    title: 'Login failed!',
    template: 'Please check your credentials!'
  });
}

function ajaxhttp($http,$ionicLoading,$ionicPopup,method,url,data,funrespuesta) {
  $http({
    method: method,
    url: url,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data:data,
    timeout : 180000
  }).then(function (res) {
    funrespuesta(res.data)
  }, function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.status == -1) {
      //popupC('ooooppppsss: '+ res.status, 'Se pasó el tiempo de plazo buscando la información','location', $ionicPopup);
      console.log('ooooppppsss: '+ res.status + 'Se pasó el tiempo de plazo buscando la información');
      ajaxhttp($http,$ionicLoading, $ionicPopup, method, url, data, funrespuesta);
    }
    else{
      popupN('ooooppppsss: '+ res.status, res.statusText, 'advertencia', $ionicPopup);
    }
  });
}

function respuestaregistro ($ionicLoading, $ionicPopup) {
  return function (res) {
    console.log(res);
    $ionicLoading.hide();
    if (res.code == 0) {
      popupN('Resultado', 'Te has registrado exitosamente', 'bien', $ionicPopup);
      localStorage.setItem('iduser',res.iduser);
      direcionarGn('#/reg-completado');
    }
    else if (res.code == 1) {
       popupN('ooooppppsss', res.error, 'advertencia', $ionicPopup);
    }
    else{
       popupN('ooooppppsss', 'Ha ocurrido un error', 'advertencia', $ionicPopup);
    }
  }
}

function respuestaingreso ($ionicLoading, $ionicPopup) {
  return function (res) {
    $ionicLoading.hide();
    if (!checkJSON(res)) {
      //var result = JSON.parse(res);
      //showError(result.code, result.error);
      console.log(res);
      if (res.code == 0) {
        var user = res.usuario;
        localStorage.setItem('iduser', user.id);
        if (user.preguntasRegistro) {
          direcionarGn('#/app/inicio');
        }
        else{
          direcionarGn('#/preguntasregistro/0');
        }
      }
      else{
        if (res.code == 1) {
          popupN('ooooppppsss',res.error, 'advertencia', $ionicPopup);
        }
        else{
          popupN('ooooppppsss', 'Ha ocurrido un error', 'advertencia', $ionicPopup);
        }
      }
    }
  }
}

function checkjsondat (res) {
  if (!checkJSON(res)) {
    //var result = JSON.parse(res);
    var result = res;
    if (result.code != 0 || result.code != '0') {
      showError(result.code, result.error);
    }
    else{
      if (res.status == 0) {
        return res;
      }
      else{
        return  res;
      } 
    }
  }
}

function checkJSON(jsonString) {
  var json = null;
  try
  {
    json = JSON.parse(jsonString);
  }
  catch(error)
  {
    showError("10", jsonString);
  }
  
  if(json === null){
    return false;
  }
  else{
    return true;
  }
}

function showError(code, message) {
 //Distractor.hide();
  if(code == 101)
  {
    console.log(message);
  }
  else{
    //console.log(message);
  }
}

function direcionarGn (url) {
  window.location.href=url;
}

function corazoncontrol ($scope, $http, $ionicPopup) {
  $scope.classee1 = '';
  $scope.sel1 = function () {
    if ($scope.classee1 === 'activeC') {
      $scope.classee1 = '';
    }
    else{
      $scope.classee2 = '';
      $scope.classee3 = '';
      $scope.classee4 = '';
      $scope.classee1 = 'activeC';
    }
  }

  $scope.classee2 = '';
  $scope.sel2 = function () {
    if ($scope.classee2 === 'activeC') {
      $scope.classee2 = '';
    }
    else{
      $scope.classee1 = '';
      $scope.classee3 = '';
      $scope.classee4 = '';
      $scope.classee2 = 'activeC';
    }
  }

  $scope.classee3 = '';
  $scope.sel3 = function () {
    if ($scope.classee3 === 'activeC') {
      $scope.classee3 = '';
    }
    else{
      $scope.classee1 = '';
      $scope.classee2 = '';
      $scope.classee4 = '';
      $scope.classee3 = 'activeC';
    }
  }

  $scope.classee4 = '';
  $scope.sel4 = function () {
    if ($scope.classee4 === 'activeC') {
      $scope.classee4 = '';
    }
    else{
      $scope.classee1 = '';
      $scope.classee2 = '';
      $scope.classee3 = '';
      $scope.classee4 = 'activeC';
    }
  }

  $scope.sig1 = function (e) {
    var numactive = document.querySelectorAll('#for1 .activeC').length;
    if (numactive > 0) {
      var dato = document.querySelector('#for1 .activeC')
        .getAttribute('data-sl');
      ajaxhttp(
        $http,
        'POST',
        'http://grancomunicaciones.com/clientes/gangastik/host/registro-ingreso/corazon.php',
        {a:dato},
        rescorazon
      );
    }
    else{
      var alertPopup = $ionicPopup.alert({
        title: 'ooooppppsss',
        'template': 'Selecione el estado civil'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    }
  }
}

function rescorazon (res) {
  if (res.status == 0) {
    window.location.href="#/reg-marcas";
  }
  else{
    alert('ocurrió un error');
  }
}

function controlmarcas ($scope, $http, $ionicPopup) {
  $scope.marcasS = {
    selected: null,
    items:[
      {id: 1, img: 'marca1.jpg'},
      {id: 2, img: 'marca2.jpg'},
      {id: 3, img: 'marca3.jpg'},
      {id: 4, img: 'marca4.jpg'}
    ]
  };

  $scope.sig2 = function (e) {
    var numactive = document.querySelectorAll('#for2 .overlay').length;
    if (numactive > 0) {
      console.log(numactive);
      var dato = document.querySelector('#for2 .overlay')
        .getAttribute('data-id');
      ajaxhttp(
        $http,
        'POST',
        'http://grancomunicaciones.com/clientes/gangastik/host/registro-ingreso/marcas.php',
        {a:dato},
        resmarca
      );
    }
    else{
      var alertPopup = $ionicPopup.alert({
        title: 'Alerta',
        'template': 'Selecione una opcion'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    }
  }
}

function resmarca (res) {
  if (res.status == 0) {
    window.location.href='#/reg-genero';
  }
  else{
    alert('ocurrió un error');
  }
}

function controlgenero ($scope, $http, $ionicPopup) {
  $scope.generosS = {
    ed: null,
    items:[
      {id:1,gen: 'f', titulo: 'Femenino', classFondo:'female'},
      {id:2,gen: 'm', titulo: 'Masculino', classFondo:'male'}
    ]
  };

  $scope.sig3 = function (e) {
    var numactive = document.querySelectorAll('#for3 .activeC').length;
    if (numactive > 0) {
      console.log(numactive);
      var dato = document.querySelector('#for3 .activeC')
        .getAttribute('data-genero');
      ajaxhttp(
        $http,
        'POST',
        'http://grancomunicaciones.com/clientes/gangastik/host/registro-ingreso/genero.php',
        {a:dato},
        resgenero
      );
    }
    else{
      var alertPopup = $ionicPopup.alert({
        title: 'Alerta',
        'template': 'Selecione una opcion'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    }
  }
}

function resgenero (res) {
  console.log(res)
  if (res.status == 0) {
    window.location.href='#/reg-final';
  }
  else{
    alert('ocurrió un error');
  }
}

function controlfinalreg ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, $ionicHistory) {
  setTimeout(direcionarA, 60000);
  localStorage.setItem('alertaRegistro', true);
  $ionicHistory.clearHistory();
  $ionicHistory.clearCache();
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'UsuarioIntroService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser')
    },
    resTerminarRegistro
  );
  /*ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'GangsService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      tipo: 'inicio',
      gangs: 2000
    },
    resIngresarGeneral($scope, $http, $ionicPopup, $ionicLoading, urlRoot)
  );*/
  $scope.sigu4 = function () {
    direcionarGn('#/app/inicio');
  }
}

function resTerminarRegistro (res) {
  console.log(res);
  if (res.code == '0') {
    console.log('si');
  }
  else{
    alert(res.error);
  }
}

function direcionarA () {
  window.location.href="#/app/inicio"
}

function menucontrol ($scope, $ionicSideMenuDelegate, $ionicPopup, $http, $ionicLoading, urlRoot, $ionicHistory, historialPagina, $rootScope) {
  var historiaNavegacion = $ionicHistory.currentStateName();
  var nombreTitulo = historiaNavegacion.split('.');
  var historiaPatrocinio = historialPagina.getHistorialPatrocinadores();
  var movil = moviles();

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $rootScope.abrirBuscador = function () {
    $rootScope.buscadorStyl = {display:'block'};
    direcionarGn('#/app/inicio');
  }
  $scope.direcionarMenu = function (url) {
    direcionarGn(url);  
  }
  $scope.cerrarSesion = function () {
    localStorage.removeItem('iduser');
    localStorage.removeItem('idCategoriaSelecionada');
    direcionarGn('#/home');
  }
  $scope.suscriptoPetrocinio = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PatrocinadoresService.php',
      {
        actionType: 'documento',
        iduser: localStorage.getItem('iduser')
      },
      existePatrocinadores($scope, $http, $ionicPopup, $ionicLoading, 0)
    );
  }
    /*console.log(historiaPatrocinio);
    if (historiaPatrocinio) {
      direcionarGn('#/app/patrocinadores');
    }
    else{
      direcionarGn('#/app/cedula');
    }*/
  var quesIos = iosVersion();
  console.log(movil);
  console.log(quesIos);
  if (movil == 'iOS') {
    $scope.headerIos = {position: 'relative', top: '11px'};
  }
  clickmenu ($scope, $ionicSideMenuDelegate);

  console.log(nombreTitulo[1]);
  $scope.tituloNavegacion = nombreTitulo[1];
}

function controliniciog ($scope, $http, $ionicSideMenuDelegate, $ionicPopup, $ionicLoading, urlRoot, historialPagina, $rootScope, $state) {
  existeLocalStorage();
  var historial = historialPagina.getHistorialTips();
  var historiaPatrocinio = historialPagina.getHistorialPatrocinadores();
  var alertaRegistro = localStorage.getItem('alertaRegistro');
  $rootScope.tituloGeneral = 'Inicio';
  console.log($rootScope);
  $scope.direcionarP = function (url) {
    console.log(url);
    direcionarGn(url);
  }
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.irProductosB = function () {
    $state.go('app.producto', {}, {location: 'replace'});
    //direcionarGn('#/app/productos/');
  }

  $scope.show($ionicLoading);

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CategoriasService.php',
    {
      actionType: 'get'
    },
    rescategorias($scope, $ionicPopup, $ionicLoading)
  );

  $scope.dirProducto = function (id) {
    localStorage.setItem('idCategoriaSelecionada', id);
    historialPagina.setEliminarCache();
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'InteraccionesService.php',
      {
        actionType: 'set',
        iduser: localStorage.getItem('iduser'),
        seccion: 'Categoria producto',
        idcategoria: id
      },
      relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Categoria producto')
    );

    direcionarGn('#/app/productos/'+id);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'GangsService.php',
    {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    },
    relgans($scope, $ionicPopup, $ionicLoading)
  );

  $scope.show($ionicLoading);
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PiezasAvatarService.php',
    {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    },
    relJuego($scope, $ionicPopup, $http, $ionicLoading, urlRoot)
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Menu home'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Menu home')
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PatrocinadoresService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    mostrarTotalPatrocinadores($scope, $http, $ionicPopup, $ionicLoading, urlRoot)
  );

  if (alertaRegistro) {
    popupN('¡Ya estás adentro!', 'Prepárate porque vamos con toda', 'bien', $ionicPopup);
  }

  localStorage.removeItem('alertaRegistro');

    /*console.log(historiaPatrocinio);
    var clickPatrocinio = 0 + '|' + false;
    localStorage.setItem('patroProducto', clickPatrocinio);
    if (historiaPatrocinio) {
      direcionarGn('#/app/patrocinadores');
    }
    else{
      direcionarGn('#/app/cedula');
    }*/
  $scope.direcionarPatrociadores = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PatrocinadoresService.php',
      {
        actionType: 'documento',
        iduser: localStorage.getItem('iduser')
      },
      existePatrocinadores($scope, $http, $ionicPopup, $ionicLoading, 0)
    );
  }

  $scope.abrirTips  = function () {
    if (historial) {
      direcionarGn('#/app/gangs');
    }
    else{
      direcionarGn('#/app/tipsj');
    }
  }
}

function rescategorias ($scope, $ionicPopup, $ionicLoading) {
  return function (res) {
    var posicion;
    var categG = [];
    $ionicLoading.hide();
    if (res.code == '0') {
      res.categorias.forEach(function (dat, key) {
        if (key % 2 == 0) {
          posicion = 'itemDescription';
        }
        else{
          posicion = 'itemDescriptionR';
        }
        dat['posicion'] = posicion;
        categG.push(dat);
      });
      console.log(categG);
      $scope.categorias = {
        router: 'http://gangastik.com/assets/images/',
        items: categG
      };
      console.log($scope.categorias);
    }
    else{
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function controlfproductoG ($scope, $timeout, $http, $ionicPopup, $ionicLoading, productosDato, urlRoot, $ionicSlideBoxDelegate, $interpolate, $stateParams, $animate, historialPagina, $cordovaGeolocation, $timeout, $rootScope){
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Productos';
  var typeT, cardTypes, beneficiosT, beneficioLocal, countProductoId, productoSelecionado, productoSelecionadoB, existePatrocinioProducto;
  var posOptions = {maximumAge: 30000,timeout: 60000, enableHighAccuracy: false};
  var countDato = 0;
  var countSwith = 0;
  var countSwithB = 1;
  var countCards = 0;
  var localPatroProducto = localStorage.getItem('patroProducto');
  var cacheHys = historialPagina.getEliminarCache();
  var clickDoble = false;
  
  var cateId = ($stateParams.categoria == '') ? 0 : $stateParams.categoria;

  $scope.noDisponible = {display:'none'};

  //------------------------

  //Existe patrocinadores
  if (localPatroProducto == null || localPatroProducto == undefined) {
    existePatrocinioProducto = false;
  }
  else if (localPatroProducto == '') {
    existePatrocinioProducto = false;
  }
  else{
    var clickPa = localPatroProducto.split('|');
    if (clickPa[1]) {
      existePatrocinioProducto = true;
    }
    else if (clickPa[1] == null || clickPa[1] == undefined) {
      existePatrocinioProducto = false;
    }
    else if (clickPa[1] == '') {
      existePatrocinioProducto = false;
    }
    else{
      existePatrocinioProducto = false;
    }
  }

  console.log(existePatrocinioProducto);

  $scope.cards = [];

  $cordovaGeolocation
   .getCurrentPosition(posOptions)
   .then(function (position) {
     var lat = position.coords.latitude;
     var long = position.coords.longitude;
     var posicion = lat + '|' + long;
     console.log(lat + ', ' + long);
     localStorage.setItem('geolocation', posicion);
   }, function (error) {
     console.log(error)
   })

  var posicionDato = localStorage.getItem('geolocation');
  console.log(posicionDato);
  if (cateId != 0) {
    console.log(1)
    if (posicionDato == undefined || posicionDato == null) {
      typeT = {
        actionType: 'getProductosCategoria',
        iduser: localStorage.getItem('iduser'),
        idcategoria: cateId
      };
    }
    else if (posicionDato == '') {
      typeT = {
        actionType: 'getProductosCategoria',
        iduser: localStorage.getItem('iduser'),
        idcategoria: cateId
      };
    }
    else{
      var latLong = posicionDato.split('|');
      typeT = {
        actionType: 'getProductosCategoria',
        iduser: localStorage.getItem('iduser'),
        idcategoria: cateId,
        lat: latLong[0],
        lon: latLong[1]
      };
    }
    beneficiosT = {
      actionType: 'get',
      iduser: localStorage.getItem('iduser'),
      idcategoria: cateId
    };
  }
  else if (existePatrocinioProducto) {
    var Patro = localPatroProducto.split('|');
    var objectoPatrocinio = {id_patrocinador:Patro[0],click_patrocinio:Patro[1]};
    console.log(objectoPatrocinio);
    if (posicionDato == undefined || posicionDato == null){
      typeT = {
        actionType: 'getProductosPatrocinados',
        iduser: localStorage.getItem('iduser'),
        idpatrocinador: objectoPatrocinio.id_patrocinador
      };
    }
    else if (posicionDato == '') {
      typeT = {
        actionType: 'getProductosPatrocinados',
        iduser: localStorage.getItem('iduser'),
        idpatrocinador: objectoPatrocinio.id_patrocinador
      };
    }
    else{
      var latLong = posicionDato.split('|');
      typeT = {
        actionType: 'getProductosPatrocinados',
        iduser: localStorage.getItem('iduser'),
        idpatrocinador: objectoPatrocinio.id_patrocinador,
        lat: latLong[0],
        lon: latLong[1]
      }
    }
  }
  else{
    console.log(0)
    if (posicionDato == undefined || posicionDato == null) {
      typeT = {
        actionType: 'get',
        iduser: localStorage.getItem('iduser')
      };
    }
    else if (posicionDato == '') {
      typeT = {
        actionType: 'get',
        iduser: localStorage.getItem('iduser')
      };
    }
    else{
      var latLong = posicionDato.split('|');
      typeT = {
        actionType: 'get',
        iduser: localStorage.getItem('iduser'),
        lat: latLong[0],
        lon: latLong[1]
      };
    }
    beneficiosT = {
      actionType: 'get',
      iduser: localStorage.getItem('iduser'),
      idcategoria: cateId
    };
  }

  console.log(typeT);

  $scope.addCard = function (dato) {
    countCards++;
    console.log(countCards)
    $scope.noDisponible = {display:'block'};
    if (countCards > 0) {
      $scope.disponible = true;
    }
    else{
      $scope.disponible = false;
    }
    dato['patro_marginTop'] = (dato.tipo == 'Patrocinado') ? '-7px' : '30px';
    dato['patro_precioTop'] = (dato.tipo == 'Patrocinado') ? '-45px' : '-23px';
    dato['patro_botonTop'] = (dato.tipo == 'Patrocinado') ? '-20px' : '0px';
    //cambiar informacion
   /* var gansProducto = gangsProducto(dato.informacion.precio_ahora);
    dato['rootImg'] = urlRoot.urlImages;
    dato['informacion']['precio_ahora'] = number_format(dato.informacion.precio_ahora, 0);
    dato['informacion']['precio_antes'] = number_format(dato.informacion.precio_antes, 0);
    dato['gangsP'] = calcurGang(gansProducto, 1);
    dato['descuento'] = number_format(calcularPorcentaje(dato.informacion.precio_antes, dato.informacion.precio_ahora), 0);
    dato['cantidad_comentarios'] = dato.informacion.comentarios.length;
    dato['categoria'] = cateId;*/

    //todo el resultado
    dato['categoria'] = cateId;
    var newCard = dato;
    console.log(newCard);
    $scope.cards.unshift(angular.extend({}, newCard));
  }

  $scope.addCards = function (count) {
    countProductoId = 0;
    productoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', typeT).then(function (dato) {
      console.log(dato);
      if (dato.length <= 0) {$scope.noDisponible = {display:'block'};}
      /*dato[0]['todosProductos'] = dato;
      dato[0]['totalProductos'] = dato.length;
      $scope.addCard(dato[0])*/
      angular.forEach(dato, function (dt) {
        countProductoId = countProductoId + 1;
        if (countProductoId < 3) {
          dt['todosProductos'] = dato;
          dt['totalProductos'] = dato.length;
          dt['key'] = countProductoId;
          $scope.addCard(dt)
          /*productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php',dt).then(function (det) {
            det['TodosProducto'] = dato;
            $scope.addCard(det);
          })*/
        }
      })
    });
  }

  $scope.addCards();

  //console.log($scope);

  localStorage.removeItem('patroProducto');

  $scope.transitionRight = function (card) {
    if (card.key == undefined || card.key == null) {
      countSwith = countSwith + 1;
    }
    else if (card.key == NaN || card.key == '') {
      countSwith = countSwith + 1;
    }
    else{
      if (card.key == 2) {
        if (card.key < card.totalProductos) {
          countSwith = countSwith + 3;
        }
        else{
          countSwith = countSwith + 1;
        }
      }
      else{
        countSwith = countSwith + 1;
      }
    }
    console.log(card);
    console.log(countSwith);
    if (countSwith == card.totalProductos) {
      productoSelecionado = card.todosProductos[0];
      countSwith = 0;
    }
    else{
      productoSelecionado = card.todosProductos[countSwith];
    }

    productoSelecionado['todosProductos'] = card.todosProductos;
    productoSelecionado['totalProductos'] = card.todosProductos.length;
    productoSelecionado['key'] = null;

    console.log(productoSelecionado);

    $scope.addCards = function (count) {
      $scope.addCard(productoSelecionado);
    }
    $scope.addCard = function (dato){
      var newCardA = dato;
      $scope.cards.unshift(angular.extend({}, newCardA));
    }

    $scope.addCards();

    //================== beneficios ====================================================================
    var dateBenef = {
      iduser: localStorage.getItem('iduser'),
      categoria: card.categoria
    };
    existeBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'BeneficiosService.php', dateBenef)
      .then(function (existe) {
        console.log(existe);
        if (existe.boolean) {
          historialPagina.setHistorialCards(0, card.id, card.tipo, card.categoria, false);
          var numeroRandom = aleatorioRamdon(0,50);
          console.log(numeroRandom);
          if (numeroRandom >= 45 && numeroRandom < 50) {
            direcionarGn('#/app/variablecuatro');
          }
        }
      })
    //==================================================================================================
  }

  $scope.transitionLeft = function (card) {
    if (card.key == undefined || card.key == null) {
      countSwith = countSwith + 1;
    }
    else if (card.key == NaN || card.key == '') {
      countSwith = countSwith + 1;
    }
    else{
      if (card.key == 2) {
        if (card.key < card.totalProductos) {
          countSwith = countSwith + 3;
        }
        else{
          countSwith = countSwith + 1;
        }
      }
      else{
        countSwith = countSwith + 1;
      }
    }
    console.log(card);
    console.log(countSwith);
    if (countSwith == card.totalProductos) {
      productoSelecionado = card.todosProductos[0];
      countSwith = 0;
    }
    else{
      productoSelecionado = card.todosProductos[countSwith];
    }

    productoSelecionado['todosProductos'] = card.todosProductos;
    productoSelecionado['totalProductos'] = card.todosProductos.length;
    productoSelecionado['key'] = null;

    console.log(productoSelecionado);

    $scope.addCards = function (count) {
      $scope.addCard(productoSelecionado);
    }
    $scope.addCard = function (dato){
      var newCardA = dato;
      $scope.cards.unshift(angular.extend({}, newCardA));
    }

    $scope.addCards();

    //================== beneficios ====================================================================
    var dateBenef = {
      iduser: localStorage.getItem('iduser'),
      categoria: card.categoria
    };
    console.log(card.categoria);
    existeBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'BeneficiosService.php', dateBenef)
      .then(function (existe) {
        console.log(existe);
        console.log(existe.boolean);
        if (existe.boolean) {
          historialPagina.setHistorialCards(0, card.id, card.tipo, card.categoria, false);
          var numeroRandom = aleatorioRamdon(0,50);
          console.log(numeroRandom);
          if (numeroRandom >= 45 && numeroRandom < 50) {
            direcionarGn('#/app/variablecuatro');
          }
        }
      })
    //==================================================================================================
  }

  //console.log($scope.addCards());

  $scope.abrirDescripcion = function () {
    $scope.descrip = '';

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'InteraccionesService.php',
      {
        actionType: 'set',
        iduser: localStorage.getItem('iduser'),
        seccion: 'Info producto'
      },
      relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Info producto')
    );

    if ($scope.descrip === '') {
      $scope.descrip = 'open';
      $scope.icondis ={
        display: 'none'
      }
    }
    else{
      $scope.descrip = '';
    }
  }
  $scope.cerrarDescripcion = function () {
    if ($scope.descrip === '') {
      $scope.descrip = 'open';
      $scope.icondis ={
        display: 'none'
      }
    }
    else{
      $scope.icondis ={
        display: 'block'
      }
      $scope.descrip = '';
    }
  }
  $scope.abrirComents = function () {
    $scope.texto = {display: 'none'}
    $scope.coment = {display: 'block'}
  }
  $scope.regInfo = function () {
    $scope.texto = {display: 'block'}
    $scope.coment = {display: 'none'}
  }
  $scope.colhtml = function (html) {
    console.log(html);
    $scope.colhtml = $interpolate(html);
  }

  $scope.clickInfoP = function () {
    $scope.puntosInfo = {top: '-9px'};
    $scope.circP1 = 'open';
    $scope.circP2 = '';
    $scope.circP3 = '';
    $scope.infoproducto = {display: 'block'};
    $scope.oferta = {display: 'none'};
    $scope.infocomprar = {display: 'none'};
  }
  $scope.clickInfoO = function () {
    $scope.puntosInfo = {top: '-9px'};
    $scope.circP2 = 'open';
    $scope.circP1 = '';
    $scope.circP3 = '';
    $scope.infoproducto = {display: 'none'};
    $scope.oferta = {display: 'block'};
    $scope.infocomprar = {display: 'none'};
  }
  $scope.clickInfoC = function () {
    $scope.puntosInfo = {top: '-9px'};
    $scope.circP3 = 'open';
    $scope.circP2 = '';
    $scope.circP1 = '';
    $scope.infoproducto = {display: 'none'};
    $scope.oferta = {display: 'none'};
    $scope.infocomprar = {display: 'block'};
  }

  $ionicSlideBoxDelegate.autoPlay();
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.done = function () {
    alert(88);
  }

  $scope.divSepa = '';
  $scope.divAnimar = '';
  $scope.diviconoCar = '';

  $scope.agregarCanastika = function (id, tipo, nombre, preguntas, restantes) {
    /*$animate.on('enter', ngViewElement ,function (elemetn, pahse) {
      console.log(element);
    })*/

    if (!clickDoble) {
      clickDoble = true;
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'InteraccionesService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          seccion: 'Carro producto',
          idproducto: id
        },
        relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Carro producto')
      );

      $scope.divSepa = 'active';
      $scope.divAnimar = 'carritoAnimar';
      $scope.diviconoCar = 'active';

      $timeout(function () {
        $scope.divSepa = '';
        $scope.divAnimar = '';
        $scope.diviconoCar = '';
        var cantidadPreguntas = preguntas.length;
        var respondioP = respondioPreguntasProducto(id, tipo, cantidadPreguntas);
        console.log(id + '-' + tipo + '-' + restantes);
        if (id == undefined || id == '') {
          clickDoble = false;
          popupN('ooooppppsss', 'Id de proucto no disponible', 'advertencia', $ionicPopup);
        }
        else if (tipo == undefined || tipo == '') {
          clickDoble = false;
          popupN('ooooppppsss', 'Tipo de producto no disponible', 'advertencia', $ionicPopup);
        }
        else if (parseInt(restantes) <= 0) {
          clickDoble = false;
          popupN('ooooppppsss', '¡Chanfle! ¡Se nos agoto este producto, pero tenemos muchos mas para ti!', 'advertencia', $ionicPopup);
        }
        else if (respondioP) {
          console.log(respondioP);
          var datoService = {
            actionType: 'get',
            iduser: localStorage.getItem('iduser'),
            idproducto: id
          };
          $scope.show($ionicLoading);
          perguntasBuscarProducto($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + respondioP.tipoService,datoService)
            .then(function (date) {
              console.log(date);
              if (!date) {
                ajaxhttp(
                  $http,
                  $ionicLoading,
                  $ionicPopup,
                  'POST',
                  urlRoot.urlAjax + 'CanastikaService.php',
                  {
                    actionType: 'agregar',
                    iduser: localStorage.getItem('iduser'),
                    tipo: tipo,
                    idproducto: id
                  },
                  resAgregarCan($ionicLoading, $ionicPopup, urlRoot, nombre, 3)
                );
                clickDoble = false;
              }
              else{
                clickDoble = false;
                productosDato.nuevoProducto(id, tipo);
                direcionarGn('#/app/yagans');
              }
            });
        }
        else{
          console.log('noRespondio')
          $scope.show($ionicLoading);
          ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            urlRoot.urlAjax + 'CanastikaService.php',
            {
              actionType: 'agregar',
              iduser: localStorage.getItem('iduser'),
              tipo: tipo,
              idproducto: id
            },
            resAgregarCan($ionicLoading,$ionicPopup,urlRoot, nombre, 1)
          );
          clickDoble = false;
        }
      }, 500)
    }
  }

  $scope.compartir = function (idP, tipo) {
    productosDato.nuevoRedeccion(idP,false, tipo, false, false);
    direcionarGn('#/app/compartirproducto');
  }

  $scope.verInformacion = function (id, tipo) {
    direcionarGn('#/app/productosinformacion/' + id + '-' + tipo);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Productos para ti'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Productos para ti')
  );

  productosDato.removeProductoUno();
}

function controlInfoProductoG ($scope, $http, $ionicPopup, $ionicLoading, productosDato,urlRoot, $ionicSlideBoxDelegate, $interpolate, $stateParams, $animate,historialPagina, $cordovaGeolocation, $timeout, $rootScope) {
  existeLocalStorage();
  var dt, productoRecibido;
  var movil = moviles();
  $rootScope.tituloGeneral = 'Productos';
  var posOptions = {maximumAge: 30000,timeout: 60000, enableHighAccuracy: false};
  var idP = ($stateParams.id == '') ? 0 : $stateParams.id;
  var clickDoble = false;

  $cordovaGeolocation
   .getCurrentPosition(posOptions)
   .then(function (position) {
     var lat = position.coords.latitude;
     var long = position.coords.longitude;
     var posicion = lat + '|' + long;
     console.log(lat + ', ' + long);
     localStorage.setItem('geolocation', posicion);
   }, function (error) {
     console.log(error)
   })

  if (movil == 'iOS') {
    $scope.movilSO = {
      ios: true,
      android: false,
      pc: true
    };
  }
  else if (movil == 'android') {
    $scope.movilSO = {
      ios: false,
      android: true,
      pc: false
    };
  }
  else{
    $scope.movilSO = {
      ios: false,
      android: false,
      pc: false
    };
  }

  if (idP == 0 || idP == '0') {
    direcionarGn('#/app/productos/');
  }
  else{
    productoRecibido = idP.split('-');
    dt = {
      id: parseInt(productoRecibido[0]),
      tipo: productoRecibido[1]
    };
    console.log(dt);
    productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php',dt).then(function (det) {
      var gansProducto = gangsProducto(det.informacion.precio_ahora);
      det['rootImg'] = 'http://gangastik.com/assets/images/';
      det['descuento'] = number_format(calcularPorcentaje(det.informacion.precio_antes, det.informacion.precio_ahora), 0);
      det['informacion']['precio_ahora'] = number_format(det.informacion.precio_ahora, 0);
      det['informacion']['precio_antes'] = number_format(det.informacion.precio_antes, 0);
      det['gangsP'] = calcurGang(gansProducto, 1);
      det['cantidad_comentarios'] = det.informacion.comentarios.length;
      det['patro_marginTop'] = (det.tipo == 'Patrocinado') ? '-7px' : '30px';
      det['patro_precioTop'] = (det.tipo == 'Patrocinado') ? '-45px' : '-23px';
      det['patro_botonTop'] = (det.tipo == 'Patrocinado') ? '-20px' : '0px';
      det['claficacionG'] = objetoCalificacion(det.informacion.total_calificacion);
      $scope.cardB = det;
      console.log($scope.cardB);
      $ionicSlideBoxDelegate.update();
    });

    $ionicSlideBoxDelegate.start();
    $ionicSlideBoxDelegate.autoPlay();
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    $scope.abrirComents = function () {
      $scope.texto = {display: 'none'}
      $scope.coment = {display: 'block'}
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'InteraccionesService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          seccion: 'Producto comentarios',
          idproducto: dt.id
        },
        relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Producto comentarios')
      );
    }
    $scope.regInfo = function () {
      $scope.texto = {display: 'block'}
      $scope.coment = {display: 'none'}
    }
    $scope.colhtml = function (html) {
      console.log(html);
      $scope.colhtml = $interpolate(html);
    }

    if (movil == 'iOS' || movil == undefined) {
      $scope.puntosInfo = {left:'-10px', width: '107%'};
    }

    $scope.clickInfoP = function () {
      if (movil == 'iOS' || movil == undefined) {
        $scope.puntosInfo = {left:'-10px', width: '107%'};
      }
      else{
        $scope.puntosInfo = {top: '-9px'};
      }
      $scope.circP1 = 'open';
      $scope.circP2 = '';
      $scope.circP3 = '';
      $scope.infoproducto = {display: 'block'};
      $scope.oferta = {display: 'none'};
      $scope.infocomprar = {display: 'none'};
    }
    $scope.clickInfoO = function () {
      if (movil == 'iOS' || movil == undefined) {
        $scope.puntosInfo = {left:'-10px', width: '107%'};
      }
      else{
        $scope.puntosInfo = {top: '-9px'};
      }
      $scope.circP2 = 'open';
      $scope.circP1 = '';
      $scope.circP3 = '';
      $scope.infoproducto = {display: 'none'};
      $scope.oferta = {display: 'block'};
      $scope.infocomprar = {display: 'none'};
    }
    $scope.clickInfoC = function () {
      if (movil == 'iOS' || movil == undefined) {
        $scope.puntosInfo = {left:'-10px', width: '107%'};
      }
      else{
        $scope.puntosInfo = {top: '-9px'};
      }
      $scope.circP3 = 'open';
      $scope.circP2 = '';
      $scope.circP1 = '';
      $scope.infoproducto = {display: 'none'};
      $scope.oferta = {display: 'none'};
      $scope.infocomprar = {display: 'block'};
    }

    $scope.verImagenes = function (id, tipo) {
      direcionarGn('#/app/productoimagen/' + id + '-' + tipo);
    }

    $scope.agregarCanastika = function (id, tipo, nombre, preguntas, restantes) {
      /*$animate.on('enter', ngViewElement ,function (elemetn, pahse) {
        console.log(element);
      })*/
      if (!clickDoble) {
        clickDoble = true;
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'InteraccionesService.php',
          {
            actionType: 'set',
            iduser: localStorage.getItem('iduser'),
            seccion: 'Carro producto',
            idproducto: id
          },
          relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Carro producto')
        );

        $scope.divSepa = 'active';
        $scope.divAnimar = 'carritoAnimar';
        $scope.diviconoCar = 'active';

        $timeout(function () {
          $scope.divSepa = '';
          $scope.divAnimar = '';
          $scope.diviconoCar = '';
          var cantidadPreguntas = preguntas.length;
          var respondioP = respondioPreguntasProducto(id, tipo, cantidadPreguntas);
          console.log(id + '-' + tipo + '-' + restantes);
          if (id == undefined || id == '') {
            popupN('ooooppppsss', 'Id de proucto no disponible', 'advertencia', $ionicPopup);
            clickDoble = false;
          }
          else if (tipo == undefined || tipo == '') {
            popupN('ooooppppsss', 'Tipo de producto no disponible', 'advertencia', $ionicPopup);
            clickDoble = false;
          }
          else if (parseInt(restantes) <= 0) {
            popupN('Alerta', 'EL producto se ha agotado', 'advertencia', $ionicPopup);
            clickDoble = false;
          }
          else if (respondioP) {
            console.log(respondioP);
            var datoService = {
              actionType: 'get',
              iduser: localStorage.getItem('iduser'),
              idproducto: id
            };
            $scope.show($ionicLoading);
            perguntasBuscarProducto($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + respondioP.tipoService,datoService)
              .then(function (date) {
                console.log(date);
                if (!date) {
                  ajaxhttp(
                    $http,
                    $ionicLoading,
                    $ionicPopup,
                    'POST',
                    urlRoot.urlAjax + 'CanastikaService.php',
                    {
                      actionType: 'agregar',
                      iduser: localStorage.getItem('iduser'),
                      tipo: tipo,
                      idproducto: id
                    },
                    resAgregarCan($ionicLoading, $ionicPopup, urlRoot, nombre, 3)
                  );
                  clickDoble = false;
                }
                else{
                  clickDoble = false;
                  productosDato.nuevoProducto(id, tipo);
                  direcionarGn('#/app/yagans');
                }
              });
          }
          else{
            $scope.show($ionicLoading);
            ajaxhttp(
              $http,
              $ionicLoading,
              $ionicPopup,
              'POST',
              urlRoot.urlAjax + 'CanastikaService.php',
              {
                actionType: 'agregar',
                iduser: localStorage.getItem('iduser'),
                tipo: tipo,
                idproducto: id
              },
              resAgregarCan($ionicLoading,$ionicPopup,urlRoot, nombre, 1)
            );
            clickDoble = false;
          }
        }, 500)
      }
    }

    $scope.compartir = function (idP, tipo) {
      productosDato.nuevoRedeccion(idP,false, tipo, false, false);
      direcionarGn('#/app/compartirproducto');
    }

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'InteraccionesService.php',
      {
        actionType: 'set',
        iduser: localStorage.getItem('iduser'),
        seccion: 'Info producto',
        idproducto: dt.id
      },
      relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Info producto')
    );
  }
}

function controlImagenProductoG ($scope, $http, $ionicPopup, $ionicLoading, productosDato,urlRoot, $ionicSlideBoxDelegate, $interpolate, $stateParams, $animate,historialPagina, $cordovaGeolocation, $timeout, $rootScope) {
  existeLocalStorage();
  var dt, productoRecibido;
  var posOptions = {maximumAge: 30000,timeout: 60000, enableHighAccuracy: false};
  $rootScope.tituloGeneral = 'Productos';
  var idP = ($stateParams.id == '') ? 0 : $stateParams.id;

  $cordovaGeolocation
   .getCurrentPosition(posOptions)
   .then(function (position) {
     var lat = position.coords.latitude;
     var long = position.coords.longitude;
     var posicion = lat + '|' + long;
     console.log(lat + ', ' + long);
     localStorage.setItem('geolocation', posicion);
   }, function (error) {
     console.log(error)
   })

  if (idP == 0 || idP == '0') {
    direcionarGn('#/app/productos/');
  }
  else{
    productoRecibido = idP.split('-');
    dt = {
      id: parseInt(productoRecibido[0]),
      tipo: productoRecibido[1]
    };
    console.log(dt);
    productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php',dt).then(function (det) {
      var gansProducto = gangsProducto(det.informacion.precio_ahora);
      det['rootImg'] = 'http://gangastik.com/assets/images/';
      det['descuento'] = number_format(calcularPorcentaje(det.informacion.precio_antes, det.informacion.precio_ahora), 0);
      det['informacion']['precio_ahora'] = number_format(det.informacion.precio_ahora, 0);
      det['informacion']['precio_antes'] = number_format(det.informacion.precio_antes, 0);
      det['gangsP'] = calcurGang(gansProducto, 1);
      det['cantidad_comentarios'] = det.informacion.comentarios.length;
      det['patro_marginTop'] = (det.tipo == 'Patrocinado') ? '-7px' : '30px';
      det['patro_precioTop'] = (det.tipo == 'Patrocinado') ? '-45px' : '-23px';
      det['patro_botonTop'] = (det.tipo == 'Patrocinado') ? '-20px' : '0px';
      det['claficacionG'] = objetoCalificacion(det.informacion.total_calificacion);
      $scope.cardB = det;
      console.log($scope.cardB);
       $ionicSlideBoxDelegate.update();
    });

    $ionicSlideBoxDelegate.start();
    $ionicSlideBoxDelegate.autoPlay();
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    $scope.agregarCanastika = function (id, tipo, nombre, preguntas, restantes) {
      /*$animate.on('enter', ngViewElement ,function (elemetn, pahse) {
        console.log(element);
      })*/

      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'InteraccionesService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          seccion: 'Carro producto',
          idproducto: id
        },
        relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Carro producto')
      );

      $scope.divSepa = 'active';
      $scope.divAnimar = 'carritoAnimar';
      $scope.diviconoCar = 'active';

      $timeout(function () {
        $scope.divSepa = '';
        $scope.divAnimar = '';
        $scope.diviconoCar = '';
        var cantidadPreguntas = preguntas.length;
        var respondioP = respondioPreguntasProducto(id, tipo, cantidadPreguntas);
        console.log(id + '-' + tipo + '-' + restantes);
        if (id == undefined || id == '') {
          popupN('ooooppppsss', 'Id de proucto no disponible', 'advertencia', $ionicPopup);
        }
        else if (tipo == undefined || tipo == '') {
          popupN('ooooppppsss', 'Tipo de producto no disponible', 'advertencia', $ionicPopup);
        }
        else if (parseInt(restantes) <= 0) {
          popupN('Alerta', 'EL producto se ha agotado', 'advertencia', $ionicPopup);
        }
        else if (respondioP) {
          console.log(respondioP);
          var datoService = {
            actionType: 'get',
            iduser: localStorage.getItem('iduser'),
            idproducto: id
          };
          perguntasBuscarProducto($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + respondioP.tipoService,datoService)
            .then(function (date) {
              console.log(date);
              if (!date) {
                ajaxhttp(
                  $http,
                  $ionicLoading,
                  $ionicPopup,
                  'POST',
                  urlRoot.urlAjax + 'CanastikaService.php',
                  {
                    actionType: 'agregar',
                    iduser: localStorage.getItem('iduser'),
                    tipo: tipo,
                    idproducto: id
                  },
                  resAgregarCan($ionicLoading, $ionicPopup, urlRoot, nombre, 3)
                );
              }
              else{
                productosDato.nuevoProducto(id, tipo);
                direcionarGn('#/app/yagans');
              }
            });
        }
        else{
          $scope.show($ionicLoading);
          ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            urlRoot.urlAjax + 'CanastikaService.php',
            {
              actionType: 'agregar',
              iduser: localStorage.getItem('iduser'),
              tipo: tipo,
              idproducto: id
            },
            resAgregarCan($ionicLoading,$ionicPopup,urlRoot, nombre, 1)
          );
        }
      }, 500)
    }

    $scope.verInformacion = function (id, tipo) {
      direcionarGn('#/app/productosinformacion/' + id + '-' + tipo);
    }

    $scope.compartir = function (idP, tipo) {
      productosDato.nuevoRedeccion(idP,false, tipo, false, false);
      direcionarGn('#/app/compartirproducto');
    }
  }
}

function controlBusquedaProducto ($scope, $http, $ionicPopup, $ionicLoading, productosDato, urlRoot, $stateParams, $animate,historialPagina, $cordovaGeolocation, $timeout, $rootScope) {
  existeLocalStorage();
  var dt, productoRecibido, countProductoId;
  var countDato = 0;
  var countSwith = 0;
  var countSwithB = 1;
  var countCards = 0;
  var clickDoble = false;
  $rootScope.tituloGeneral = 'Productos';
  $rootScope.buscadorStyl = {display: 'none'};

  productoRecibido = productosDato.getBusqueda();

  console.log(productoRecibido);
  if (!productoRecibido) {
    direcionarGn('#/app/productos/');
  }
  else{
    $scope.cards = [];

    $scope.addCard = function (dato) {
      countCards++;
      console.log(countCards)
      if (countCards > 0) {
        $scope.disponible = true;
      }
      else{
        $scope.disponible = false;
      }
      dato['patro_marginTop'] = (dato.tipo == 'Patrocinado') ? '-7px' : '30px';
      dato['patro_precioTop'] = (dato.tipo == 'Patrocinado') ? '-45px' : '-23px';
      dato['patro_botonTop'] = (dato.tipo == 'Patrocinado') ? '-20px' : '0px';

      //todo el resultado
      var newCard = dato;
      console.log(newCard);
      $scope.cards.unshift(angular.extend({}, newCard));
    }

    $scope.addCards = function (count) {
      countProductoId = 0;
      angular.forEach(productoRecibido, function (dt) {
        countProductoId = countProductoId + 1;
        if (countProductoId < 3) {
          dt['todosProductos'] = productoRecibido;
          dt['totalProductos'] = productoRecibido.length;
          dt['key'] = countProductoId;
          $scope.addCard(dt)
        }
      })
    }

    $scope.addCards();
  }

  $scope.transitionRight = function (card) {
    if (card.key == undefined || card.key == null) {
      countSwith = countSwith + 1;
    }
    else if (card.key == NaN || card.key == '') {
      countSwith = countSwith + 1;
    }
    else{
      if (card.key == 2) {
        if (card.key < card.totalProductos) {
          countSwith = countSwith + 3;
        }
        else{
          countSwith = countSwith + 1;
        }
      }
      else{
        countSwith = countSwith + 1;
      }
    }
    console.log(card);
    console.log(countSwith);
    if (countSwith == card.totalProductos) {
      productoSelecionado = card.todosProductos[0];
      countSwith = 0;
    }
    else{
      productoSelecionado = card.todosProductos[countSwith];
    }

    productoSelecionado['todosProductos'] = card.todosProductos;
    productoSelecionado['totalProductos'] = card.todosProductos.length;
    productoSelecionado['key'] = null;

    console.log(productoSelecionado);

    $scope.addCards = function (count) {
      $scope.addCard(productoSelecionado);
    }
    $scope.addCard = function (dato){
      var newCardA = dato;
      $scope.cards.unshift(angular.extend({}, newCardA));
    }

    $scope.addCards();

    //================== beneficios ====================================================================
    var dateBenef = {
      iduser: localStorage.getItem('iduser'),
      categoria: card.categoria
    };
    existeBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'BeneficiosService.php', dateBenef)
      .then(function (existe) {
        console.log(existe);
        if (existe.boolean) {
          historialPagina.setHistorialCards(0, card.id, card.tipo, card.categoria, false);
          var numeroRandom = aleatorioRamdon(0,50);
          console.log(numeroRandom);
          if (numeroRandom >= 45 && numeroRandom < 50) {
            direcionarGn('#/app/variablecuatro');
          }
        }
      })
    //==================================================================================================
  }

  $scope.transitionLeft = function (card) {
    if (card.key == undefined || card.key == null) {
      countSwith = countSwith + 1;
    }
    else if (card.key == NaN || card.key == '') {
      countSwith = countSwith + 1;
    }
    else{
      if (card.key == 2) {
        if (card.key < card.totalProductos) {
          countSwith = countSwith + 3;
        }
        else{
          countSwith = countSwith + 1;
        }
      }
      else{
        countSwith = countSwith + 1;
      }
    }
    console.log(card);
    console.log(countSwith);
    if (countSwith == card.totalProductos) {
      productoSelecionado = card.todosProductos[0];
      countSwith = 0;
    }
    else{
      productoSelecionado = card.todosProductos[countSwith];
    }

    productoSelecionado['todosProductos'] = card.todosProductos;
    productoSelecionado['totalProductos'] = card.todosProductos.length;
    productoSelecionado['key'] = null;

    console.log(productoSelecionado);

    $scope.addCards = function (count) {
      $scope.addCard(productoSelecionado);
    }
    $scope.addCard = function (dato){
      var newCardA = dato;
      $scope.cards.unshift(angular.extend({}, newCardA));
    }

    $scope.addCards();

    //================== beneficios ====================================================================
    var dateBenef = {
      iduser: localStorage.getItem('iduser'),
      categoria: card.categoria
    };
    existeBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'BeneficiosService.php', dateBenef)
      .then(function (existe) {
        console.log(existe);
        if (existe.boolean) {
          historialPagina.setHistorialCards(0, card.id, card.tipo, card.categoria, false);
          var numeroRandom = aleatorioRamdon(0,50);
          console.log(numeroRandom);
          if (numeroRandom >= 45 && numeroRandom < 50) {
            direcionarGn('#/app/variablecuatro');
          }
        }
      })
    //==================================================================================================
  }

  $scope.divSepa = '';
  $scope.divAnimar = '';
  $scope.diviconoCar = '';

  $scope.agregarCanastika = function (id, tipo, nombre, preguntas, restantes) {
    /*$animate.on('enter', ngViewElement ,function (elemetn, pahse) {
      console.log(element);
    })*/
    if (!clickDoble) {
      clickDoble = true;
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'InteraccionesService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          seccion: 'Carro producto',
          idproducto: id
        },
        relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Carro producto')
      );

      $scope.divSepa = 'active';
      $scope.divAnimar = 'carritoAnimar';
      $scope.diviconoCar = 'active';

      $timeout(function () {
        $scope.divSepa = '';
        $scope.divAnimar = '';
        $scope.diviconoCar = '';
        var cantidadPreguntas = preguntas.length;
        var respondioP = respondioPreguntasProducto(id, tipo, cantidadPreguntas);
        console.log(id + '-' + tipo + '-' + restantes);
        if (id == undefined || id == '') {
          popupN('ooooppppsss', 'Id de proucto no disponible', 'advertencia', $ionicPopup);
          clickDoble = false;
        }
        else if (tipo == undefined || tipo == '') {
          popupN('ooooppppsss', 'Tipo de producto no disponible', 'advertencia', $ionicPopup);
          clickDoble = false;
        }
        else if (parseInt(restantes) <= 0) {
          popupN('Alerta', 'EL producto se ha agotado', 'advertencia', $ionicPopup);
          clickDoble = false;
        }
        else if (respondioP) {
          console.log(respondioP);
          var datoService = {
            actionType: 'get',
            iduser: localStorage.getItem('iduser'),
            idproducto: id
          };
          $scope.show($ionicLoading);
          perguntasBuscarProducto($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + respondioP.tipoService,datoService)
            .then(function (date) {
              console.log(date);
              if (!date) {
                ajaxhttp(
                  $http,
                  $ionicLoading,
                  $ionicPopup,
                  'POST',
                  urlRoot.urlAjax + 'CanastikaService.php',
                  {
                    actionType: 'agregar',
                    iduser: localStorage.getItem('iduser'),
                    tipo: tipo,
                    idproducto: id
                  },
                  resAgregarCan($ionicLoading, $ionicPopup, urlRoot, nombre, 3)
                );
                clickDoble = false;
              }
              else{
                clickDoble = false;
                productosDato.nuevoProducto(id, tipo);
                direcionarGn('#/app/yagans');
              }
            });
        }
        else{
          $scope.show($ionicLoading);
          ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            urlRoot.urlAjax + 'CanastikaService.php',
            {
              actionType: 'agregar',
              iduser: localStorage.getItem('iduser'),
              tipo: tipo,
              idproducto: id
            },
            resAgregarCan($ionicLoading,$ionicPopup,urlRoot, nombre, 1)
          );
          clickDoble = false;
        }
      }, 500)
    }
  }

  $scope.compartir = function (idP, tipo) {
    productosDato.nuevoRedeccion(idP,false, tipo, false, false);
    direcionarGn('#/app/compartirproducto');
  }

  $scope.verInformacion = function (id, tipo) {
    direcionarGn('#/app/productosinformacion/' + id + '-' + tipo);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Productos para ti'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Productos para ti')
  );
}

function controlColocarProducto ($scope, $timeout, $http, $ionicPopup, $ionicLoading, productosDato, urlRoot, $ionicSlideBoxDelegate, $interpolate, $stateParams, $animate, historialPagina, $cordovaGeolocation, $timeout, $rootScope) {
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Productos';
  var typeT, cardTypes, beneficiosT, beneficioLocal, countProductoId, productoSelecionado, productoSelecionadoB, existePatrocinioProducto, productoUno;
  var posOptions = {maximumAge: 30000,timeout: 60000, enableHighAccuracy: false};
  var countDato = 0;
  var countSwith = 0;
  var countSwithB = 1;
  var countCards = 0;
  var localPatroProducto = localStorage.getItem('patroProducto');
  var cacheHys = historialPagina.getEliminarCache();
  var clickDoble = false;
  
  var idP = ($stateParams.id == '') ? 0 : $stateParams.id;

  $scope.noDisponible = {display:'none'};

  $cordovaGeolocation
   .getCurrentPosition(posOptions)
   .then(function (position) {
     var lat = position.coords.latitude;
     var long = position.coords.longitude;
     var posicion = lat + '|' + long;
     console.log(lat + ', ' + long);
     localStorage.setItem('geolocation', posicion);
   }, function (error) {
     console.log(error)
   })

  var posicionDato = localStorage.getItem('geolocation');
  console.log(posicionDato);

  if (idP == 0 || idP == '0') {
    direcionarGn('#/app/productos/');
  }
  else if (idP == '' || idP == undefined) {
    direcionarGn('#/app/productos/');
  }
  else{
    productoRecibido = idP.split('&');
    dt = {
      id: parseInt(productoRecibido[0]),
      tipo: productoRecibido[1],
      categoria: 0,
      fecha: productoRecibido[2],
      idmarca: productoRecibido[3],
      distancia: 0
    };

    console.log(dt);

    if (posicionDato == undefined || posicionDato == null) {
      typeT = {
        actionType: 'get',
        iduser: localStorage.getItem('iduser')
      };
    }
    else if (posicionDato == '') {
      typeT = {
        actionType: 'get',
        iduser: localStorage.getItem('iduser')
      };
    }
    else{
      var latLong = posicionDato.split('|');
      typeT = {
        actionType: 'get',
        iduser: localStorage.getItem('iduser'),
        lat: latLong[0],
        lon: latLong[1]
      };
    }

    $scope.cards = [];

    $scope.addCard = function (dato) {
      countCards++;
      console.log(countCards)
      $scope.noDisponible = {display:'block'};
      if (countCards > 0) {
        $scope.disponible = true;
      }
      else{
        $scope.disponible = false;
      }
      dato['patro_marginTop'] = (dato.tipo == 'Patrocinado') ? '-7px' : '30px';
      dato['patro_precioTop'] = (dato.tipo == 'Patrocinado') ? '-45px' : '-23px';
      dato['patro_botonTop'] = (dato.tipo == 'Patrocinado') ? '-20px' : '0px';

      //todo el resultado
      var newCard = dato;
      console.log(newCard);
      $scope.cards.unshift(angular.extend({}, newCard));
    }

    $scope.addCards = function (count) {
      $scope.addCard(dt);
      countProductoId = 0;
      productoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', typeT).then(function (dato) {
        angular.forEach(dato, function (dt) {
          countProductoId = countProductoId + 1;
          if (countProductoId < 3) {
            dt['todosProductos'] = dato;
            dt['totalProductos'] = dato.length;
            dt['key'] = countProductoId;
            $scope.addCard(dt)
          }
        })
      });
    }

    $scope.addCards();
  }

  $scope.transitionRight = function (card) {
    if (card.key == undefined || card.key == null) {
      countSwith = countSwith + 1;
    }
    else if (card.key == NaN || card.key == '') {
      countSwith = countSwith + 1;
    }
    else{
      if (card.key == 2) {
        if (card.key < card.totalProductos) {
          countSwith = countSwith + 3;
        }
        else{
          countSwith = countSwith + 1;
        }
      }
      else{
        countSwith = countSwith + 1;
      }
    }
    console.log(card);
    console.log(countSwith);
    if (countSwith == card.totalProductos) {
      productoSelecionado = card.todosProductos[0];
      countSwith = 0;
    }
    else{
      productoSelecionado = card.todosProductos[countSwith];
    }

    productoSelecionado['todosProductos'] = card.todosProductos;
    productoSelecionado['totalProductos'] = card.todosProductos.length;
    productoSelecionado['key'] = null;

    console.log(productoSelecionado);

    $scope.addCards = function (count) {
      $scope.addCard(productoSelecionado);
    }
    $scope.addCard = function (dato){
      var newCardA = dato;
      $scope.cards.unshift(angular.extend({}, newCardA));
    }

    $scope.addCards();

    //================== beneficios ====================================================================
    var dateBenef = {
      iduser: localStorage.getItem('iduser'),
      categoria: card.categoria
    };
    existeBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'BeneficiosService.php', dateBenef)
      .then(function (existe) {
        console.log(existe);
        if (existe.boolean) {
          historialPagina.setHistorialCards(0, card.id, card.tipo, card.categoria, false);
          var numeroRandom = aleatorioRamdon(0,50);
          console.log(numeroRandom);
          if (numeroRandom >= 45 && numeroRandom < 50) {
            direcionarGn('#/app/variablecuatro');
          }
        }
      })
    //==================================================================================================
  }

  $scope.transitionLeft = function (card) {
    if (card.key == undefined || card.key == null) {
      countSwith = countSwith + 1;
    }
    else if (card.key == NaN || card.key == '') {
      countSwith = countSwith + 1;
    }
    else{
      if (card.key == 2) {
        if (card.key < card.totalProductos) {
          countSwith = countSwith + 3;
        }
        else{
          countSwith = countSwith + 1;
        }
      }
      else{
        countSwith = countSwith + 1;
      }
    }
    console.log(card);
    console.log(countSwith);
    if (countSwith == card.totalProductos) {
      productoSelecionado = card.todosProductos[0];
      countSwith = 0;
    }
    else{
      productoSelecionado = card.todosProductos[countSwith];
    }

    productoSelecionado['todosProductos'] = card.todosProductos;
    productoSelecionado['totalProductos'] = card.todosProductos.length;
    productoSelecionado['key'] = null;

    console.log(productoSelecionado);

    $scope.addCards = function (count) {
      $scope.addCard(productoSelecionado);
    }
    $scope.addCard = function (dato){
      var newCardA = dato;
      $scope.cards.unshift(angular.extend({}, newCardA));
    }

    $scope.addCards();

    //================== beneficios ====================================================================
    var dateBenef = {
      iduser: localStorage.getItem('iduser'),
      categoria: card.categoria
    };
    existeBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'BeneficiosService.php', dateBenef)
      .then(function (existe) {
        console.log(existe);
        if (existe.boolean) {
          historialPagina.setHistorialCards(0, card.id, card.tipo, card.categoria, false);
          var numeroRandom = aleatorioRamdon(0,50);
          console.log(numeroRandom);
          if (numeroRandom >= 45 && numeroRandom < 50) {
            direcionarGn('#/app/variablecuatro');
          }
        }
      })
    //==================================================================================================
  }

  $scope.divSepa = '';
  $scope.divAnimar = '';
  $scope.diviconoCar = '';

  $scope.agregarCanastika = function (id, tipo, nombre, preguntas, restantes) {
    /*$animate.on('enter', ngViewElement ,function (elemetn, pahse) {
      console.log(element);
    })*/
    if (!clickDoble) {
      clickDoble = true;
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'InteraccionesService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          seccion: 'Carro producto',
          idproducto: id
        },
        relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Carro producto')
      );

      $scope.divSepa = 'active';
      $scope.divAnimar = 'carritoAnimar';
      $scope.diviconoCar = 'active';

      $timeout(function () {
        $scope.divSepa = '';
        $scope.divAnimar = '';
        $scope.diviconoCar = '';
        var cantidadPreguntas = preguntas.length;
        var respondioP = respondioPreguntasProducto(id, tipo, cantidadPreguntas);
        console.log(id + '-' + tipo + '-' + restantes);
        if (id == undefined || id == '') {
          popupN('ooooppppsss', 'Id de proucto no disponible', 'advertencia', $ionicPopup);
          clickDoble = false;
        }
        else if (tipo == undefined || tipo == '') {
          popupN('ooooppppsss', 'Tipo de producto no disponible', 'advertencia', $ionicPopup);
          clickDoble = false;
        }
        else if (parseInt(restantes) <= 0) {
          popupN('Alerta', 'EL producto se ha agotado', 'advertencia', $ionicPopup);
          clickDoble = false;
        }
        else if (respondioP) {
          console.log(respondioP);
          $scope.show($ionicLoading);
          var datoService = {
            actionType: 'get',
            iduser: localStorage.getItem('iduser'),
            idproducto: id
          };
          $scope.show($ionicLoading);
          perguntasBuscarProducto($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + respondioP.tipoService,datoService)
            .then(function (date) {
              console.log(date);
              if (!date) {
                ajaxhttp(
                  $http,
                  $ionicLoading,
                  $ionicPopup,
                  'POST',
                  urlRoot.urlAjax + 'CanastikaService.php',
                  {
                    actionType: 'agregar',
                    iduser: localStorage.getItem('iduser'),
                    tipo: tipo,
                    idproducto: id
                  },
                  resAgregarCan($ionicLoading, $ionicPopup, urlRoot, nombre, 3)
                );
                clickDoble = false;
              }
              else{
                clickDoble = false;
                productosDato.nuevoProducto(id, tipo);
                direcionarGn('#/app/yagans');
              }
            });
        }
        else{
          $scope.show($ionicLoading);
          ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            urlRoot.urlAjax + 'CanastikaService.php',
            {
              actionType: 'agregar',
              iduser: localStorage.getItem('iduser'),
              tipo: tipo,
              idproducto: id
            },
            resAgregarCan($ionicLoading,$ionicPopup,urlRoot, nombre, 1)
          );
          clickDoble = false;
        }
      }, 500)
    }
  }

  $scope.compartir = function (idP, tipo) {
    productosDato.nuevoRedeccion(idP,false, tipo, false, false);
    direcionarGn('#/app/compartirproducto');
  }

  $scope.verInformacion = function (id, tipo) {
    direcionarGn('#/app/productosinformacion/' + id + '-' + tipo);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Productos para ti'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Productos para ti')
  );
}

function resAgregarCan ($ionicLoading,$ionicPopup,urlRoot, nombre, opcion) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      //popupN('Producto' + nombre, 'Se agregó al la canástika', $ionicPopup);
      if (opcion == 2) { direcionarGn('#/app/yagansgangasg'); }
      else if (opcion == 3) { direcionarGn('#/app/canastika'); }
      else{ direcionarGn('#/app/canastika'); }
    }
    else{
      console.log(res);
      if (res.code == '1'){
        popupD('ooooppppsss', res.error, '#/app/productos/', 'advertencia', $ionicPopup);
      }
      else{
        popupN('ooooppppsss', res.error, 'advertencia', $ionicPopup);
      }
      if (opcion == 2) { direcionarGn('#/app/productos/'); }
    }
  }
}

function califproductoG ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, $rootScope) {
  existeLocalStorage();
  var dato;
  var producto = productosDato.getCalificacion();
  console.log('dfghj');
  console.log(producto);
  $rootScope.tituloGeneral = 'Calificación';

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  if (producto) {
    dato = {id: producto.id_producto, tipo: producto.tipo};
    productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
      .then(function (date) {
        var gansProducto = gangsProducto(date.informacion.precio_ahora);
        $ionicLoading.hide();
        date['rootImg'] = urlRoot.urlImages;
        date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
        date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
        date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
        date['gangsP'] = calcurGang(gansProducto, 1);
        console.log(date);
        $scope.dato = date;
      })
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'ProductosService.php',
      {
        actionType: 'getCalificacion',
        idproducto: producto.id_producto,
        iduser: localStorage.getItem('iduser'),
        tipo: producto.tipo
      },
      resulgetCalificacionCOmentario($scope, $http, $ionicLoading, $ionicPopup, urlRoot, productosDato)
    );

    $scope.enviarComentario = function (id) {
      var texto = (this.califComent.comentarios == undefined) ? '' : this.califComent.comentarios;
      var num_calficacion = (productosDato.getEstrella() == undefined || productosDato.getEstrella() == null) ? 0 : productosDato.getEstrella();
      if (num_calficacion == 0) {
        popupN('ooooppppsss', 'Debes calificar el producto', 'advertencia', $ionicPopup);
      }
      else{
        console.log({
            actionType: 'calificar',
            idproducto: parseInt(producto.id_producto),
            iduser: parseInt(localStorage.getItem('iduser')),
            calificacion: parseInt(num_calficacion),
            texto: texto,
            tipo: producto.tipo
          });
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'ProductosService.php',
          {
            actionType: 'calificar',
            idproducto: parseInt(producto.id_producto),
            iduser: parseInt(localStorage.getItem('iduser')),
            calificacion: parseInt(num_calficacion),
            texto: texto,
            tipo: producto.tipo
          },
          resultEnviarCalificacion($scope, $http, $ionicLoading, $ionicPopup, urlRoot, productosDato)
        );
      }
    }
  }
  else{
    direcionarGn('#/app/canastika');
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Producto comentarios'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Producto comentarios')
  );
}

function resulgetCalificacionCOmentario ($scope, $http, $ionicLoading, $ionicPopup, urlRoot, productosDato) {
  return function (res) {
    var numCalificacion, clase1, clase2, clase3, clase4, clase5;
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      if (res.calificacion == null || res.calificacion == '') {
        numCalificacion = 0;
        clase1 = 'staroff';
        clase2 = 'staroff';
        clase3 = 'staroff';
        clase4 = 'staroff';
        clase5 = 'staroff';
      }
      else{
        numCalificacion = parseInt(res.calificacion);
        switch (numCalificacion) {
          case 1:
            clase1 = 'staron';
            clase2 = 'staroff';
            clase3 = 'staroff';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
          case 2:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staroff';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
          case 3:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staron';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
          case 4:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staron';
            clase4 = 'staron';
            clase5 = 'staroff';
            break;
          case 5:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staron';
            clase4 = 'staron';
            clase5 = 'staron';
            break;
          default:
            clase1 = 'staroff';
            clase2 = 'staroff';
            clase3 = 'staroff';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
        }
      }
      $scope.califComent = {
        calificacion: numCalificacion,
        comentarios: (res.comentario == null) ? '' : res.comentario,
        num_estrellas: [
          {selected: null,calif: clase1, num:1},
          {selected: null,calif: clase2, num:2},
          {selected: null,calif: clase3, num:3},
          {selected: null,calif: clase4, num:4},
          {selected: null,calif: clase5, num:5}
        ]
      };
      console.log($scope.califComent);
      $scope.selecionarEstrella = function (data) {
        for (var i = 0; i < $scope.califComent.num_estrellas.length; i++) {
          if ($scope.califComent.num_estrellas[i].num <= data.num) {
            $scope.califComent.num_estrellas[i].selected = true;
          }
          else{
            $scope.califComent.num_estrellas[i].selected = false;
          }
        }
        productosDato.nuevaEstrella(data.num);
      }
      //console.log($scope.califComent);
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function objetoCalificacion (califiacionTotal) {
  var numCalificacion, clase1, clase2, clase3, clase4, clase5;
  if (califiacionTotal == null || califiacionTotal == 0) {
    numCalificacion = 0;
    clase1 = 'staroff';
    clase2 = 'staroff';
    clase3 = 'staroff';
    clase4 = 'staroff';
    clase5 = 'staroff';
  }
  else if (califiacionTotal == '' || califiacionTotal == undefined) {
    numCalificacion = 0;
    clase1 = 'staroff';
    clase2 = 'staroff';
    clase3 = 'staroff';
    clase4 = 'staroff';
    clase5 = 'staroff';
  }
  else{
    numCalificacion = parseInt(califiacionTotal);
    switch (numCalificacion) {
      case 1:
        clase1 = 'staron';
        clase2 = 'staroff';
        clase3 = 'staroff';
        clase4 = 'staroff';
        clase5 = 'staroff';
        break;
      case 2:
        clase1 = 'staron';
        clase2 = 'staron';
        clase3 = 'staroff';
        clase4 = 'staroff';
        clase5 = 'staroff';
        break;
      case 3:
        clase1 = 'staron';
        clase2 = 'staron';
        clase3 = 'staron';
        clase4 = 'staroff';
        clase5 = 'staroff';
        break;
      case 4:
        clase1 = 'staron';
        clase2 = 'staron';
        clase3 = 'staron';
        clase4 = 'staron';
        clase5 = 'staroff';
        break;
      case 5:
        clase1 = 'staron';
        clase2 = 'staron';
        clase3 = 'staron';
        clase4 = 'staron';
        clase5 = 'staron';
        break;
      default:
        clase1 = 'staroff';
        clase2 = 'staroff';
        clase3 = 'staroff';
        clase4 = 'staroff';
        clase5 = 'staroff';
        break;
    }
  }
  var dato =  {
    calificacion: numCalificacion,
    num_estrellas: [
      {selected: null,calif: clase1, num:1},
      {selected: null,calif: clase2, num:2},
      {selected: null,calif: clase3, num:3},
      {selected: null,calif: clase4, num:4},
      {selected: null,calif: clase5, num:5}
    ]
  };
  return dato;
}

function relCalificacionRigthLeft(idProducto, tipo, $scope) {
  return function (res) {
    var numCalificacion, clase1, clase2, clase3, clase4, clase5;
    console.log(res);
    var calif = res.data;
    if (res.code == '0') {
      if (res.calificacion == null || res.calificacion == '') {
        numCalificacion = 0;
        clase1 = 'staroff';
        clase2 = 'staroff';
        clase3 = 'staroff';
        clase4 = 'staroff';
        clase5 = 'staroff';
      }
      else{
        numCalificacion = parseInt(res.calificacion);
        switch (numCalificacion) {
          case 1:
            clase1 = 'staron';
            clase2 = 'staroff';
            clase3 = 'staroff';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
          case 2:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staroff';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
          case 3:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staron';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
          case 4:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staron';
            clase4 = 'staron';
            clase5 = 'staroff';
            break;
          case 5:
            clase1 = 'staron';
            clase2 = 'staron';
            clase3 = 'staron';
            clase4 = 'staron';
            clase5 = 'staron';
            break;
          default:
            clase1 = 'staroff';
            clase2 = 'staroff';
            clase3 = 'staroff';
            clase4 = 'staroff';
            clase5 = 'staroff';
            break;
        }
      }
      $scope.califComent = {
        calificacion: numCalificacion,
        comentarios: (res.comentario == null) ? '' : res.comentario,
        num_estrellas: [
          {selected: null,calif: clase1, num:1},
          {selected: null,calif: clase2, num:2},
          {selected: null,calif: clase3, num:3},
          {selected: null,calif: clase4, num:4},
          {selected: null,calif: clase5, num:5}
        ]
      };
      console.log($scope.califComent);
    }
    else{
      console.log('ooooppppsss: ' + res.code + '-' +  res.error);
    }
  }
}

function resultEnviarCalificacion ($scope, $http, $ionicLoading, $ionicPopup, urlRoot, productosDato) {
  return function (res) {
    console.log(res);
    if (res.code == '0') {
      popupD('Producto calificado', 'Gracias por tu calificación', '#/app/inicio', 'bien', $ionicPopup);
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function gangsProducto (number) {
  var numero = number.split(',');
  return numero[0];
}

function resulProductos ($scope, $timeout, $http, $ionicPopup, $ionicLoading) {
  return function (res) {
    var dato, prod, datoProducto;
    var promise = new Promise();
    //console.log(res);
    if (res.code == '0') {
      prod = res.productos;
      prod.forEach(function (dat1) {
        //dato = new ObjProducto(dat1.id, dat1.tipo,findGeneral(dat1.id, 'tipo', dat1))
        //buscarInfoProducto($scope, $http, $ionicPopup, $ionicLoading, dat1.id, dat1.tipo)
        //console.log(dato);
      });

      return promise;
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function productoUrl ($scope, $http, $ionicPopup, $ionicLoading, url, dato) {
  var promise = new Promise();
  var prod, datoProducto;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    url,
    dato,
    function (res) {
      $ionicLoading.hide();
      if (res.code == '0') {
        prod = res.productos;
        promise.done(prod);
      }
      else{
        console.log(res)
      }
    }
  );
  return promise;
}

function productoInfoUrl ($scope, $http, $ionicPopup, $ionicLoading, url, dato) {
  var promise = new Promise();
  var datoProducto;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    url,
    {
      actionType: 'getInfo',
      idproducto: dato.id,
      tipo: dato.tipo
    },
    function (res) {
      $ionicLoading.hide();
      if (res.code == '0') {
        datoProducto = new ObjProducto(dato.id, dato.tipo, res.producto);
        promise.done(datoProducto);
      }
      else{
        datoProducto = new ObjProducto(dato.id, dato.tipo, res);
        promise.done(datoProducto);
        console.log(res)
      }
    }
  );
  return promise;
}

function beneficiosInfo ($scope, $http, $ionicPopup, $ionicLoading, url, dato) {
  var promise = new Promise();
  var datoProducto;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    url,
    dato,
    function (res) {
      $ionicLoading.hide();
      if (res.code == '0') {
        promise.done(res.beneficio);
      }
      else{
        console.log(res)
      }
    }
  );
  return promise;
}

function buscarInfoProducto ($scope, $http, $ionicPopup, $ionicLoading, id, tipo) {
  var datoProducto;
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    'http://grancomunicaciones.com/clientes/gangastik/app/services/ProductosService.php',
    {
      actionType: 'getInfo',
      idproducto: id,
      tipo: tipo
    },
    function (res) {
      if (res.code == '0') {
        console.log(res);
        datoProducto = new ObjProducto(id, tipo, res.producto);
        productoT.push(datoProducto);
      }
      else if (res.code == '54') {
        popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
      }
      else{
        console.log(res)
      }
    }
  );
}

function ObjProducto (id, tipo, dato) {
  this.id = id,
  this.tipo = tipo,
  this.informacion = dato
}

function controlcard ($scope) {
  /*$scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE' + index);
    console.log($scope.cards.active);
    //$scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE' + index);
    console.log($scope.cards.active);
    //$scope.addCard();
  };*/
}

function controlperfil ($scope, $http, $ionicHistory, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  existeLocalStorage();
  var datFace = localStorage.getItem('facebookRegistro');
  $rootScope.tituloGeneral = 'Tu Perfil';
 $scope.backButtom = function () {
  var his = $ionicHistory.goBack(-1);
  console.log(his)
 }

 $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.show($ionicLoading);

  if (datFace == null || datFace == undefined) {
    $scope.facebook = false;
  }
  else if (datFace == '') {
    $scope.facebook = false;
  }
  else{
    $scope.facebook = true;
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Menu perfil'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Menu perfil')
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'UsuarioService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    relperfil($scope, $ionicPopup, 1, $ionicLoading)
  );
}

function relperfil($scope, $ionicPopup, tipo, $ionicLoading) {
  return function (res) {
    $ionicLoading.hide();
    var user;
    console.log(res)
    if (res.code == '0') {
      user = res.usuario;
      $scope.dato ={
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        cc: user.documento,
        email: user.email,
        tipo: tipo,
        idciudad: user.idciudad,
        nacimiento: user.nacimiento,
        nombre_ciudad: user.ciudad
      };
    }
    else{
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function controleditperfil ($scope, $http, $ionicHistory, $ionicPopup, $ionicLoading, urlRoot, ionicDatePicker, $rootScope) {
  existeLocalStorage();
  var faceObjecto;
  var datFace = localStorage.getItem('facebookRegistro');
  var movil = moviles();
  $rootScope.tituloGeneral = 'Tu Perfil';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.ios = (movil == 'iOS') ? true : false;
  $scope.android = (movil == 'Android') ? true : false;

  $scope.removePlaceholder = function () {
    angular.element(document.querySelector('.dateclass')).removeClass('placeholderclass');
  }

  $scope.hide = function(){
    $ionicLoading.hide();
  };
  $scope.show($ionicLoading);

  if (datFace == null || datFace == undefined) {
    $scope.facebook = false;
  }
  else if (datFace == '') {
    $scope.facebook = false;
  }
  else{
    $scope.facebook = true;
  }


  var ipObj1 = {
    callback: function (val) {
      console.log(val);
      console.log(new Date(val));
      var fechaSeleccion = new Date(val);

      $scope.dato.nacimiento = fechaSeleccion.getFullYear()+'-'+(parseInt(fechaSeleccion.getMonth()) + 1)+'-'+fechaSeleccion.getDate();
    },
    closeOnSelect: true
  };

  $scope.openDatePicker = function () {
    ionicDatePicker.openDatePicker(ipObj1);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CiudadesService.php',
    {
      actionType: 'get'
    },
    resciudades($scope, $ionicLoading)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'UsuarioService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    relperfil($scope, $ionicPopup, 2, $ionicLoading)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Editar perfil'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Editar perfil')
  );
  $scope.actualizarPerfil = function (id) {
    console.log(this.dato.nombre);
    var nombre = this.dato.nombre;
    var apellido = this.dato.apellido;
    var email = this.dato.email;
    var cc = this.dato.cc;
    var passa = this.dato.passaAct;
    var passb = this.dato.passbAct;
    var nacimiento = (this.nacimiento == undefined || this.nacimiento == null) ? $scope.dato.nacimiento : this.nacimiento;
    var ciudad = (this.ciudad == undefined || this.ciudad == null) ? $scope.dato.idciudad : this.ciudad;
    console.log(ciudad);
    console.log(nacimiento);
    console.log('this: ' + this.nacimiento);
    if ($scope.facebook) {
      datFace = datFace.split('-');
      faceObjecto = {
        idF: datFace[0],
        nombreF: datFace[1],
        apellidoF: datFace[2],
        correoF: datFace[3]
      };

      console.log(faceObjecto);

      if (id == undefined || id == '') {
        popupN('ooooppppsss', 'Id no disponible', 'advertencia', $ionicPopup);
      }
      else if (nombre == '' || nombre == undefined) {
        popupN('ooooppppsss', 'Ingrese el nombre y apellido', 'advertencia', $ionicPopup);
      }
      else if (cc == undefined || cc.length < 5) {
        popupN('ooooppppsss', 'Ingrese el número de documento', 'advertencia', $ionicPopup);
      }
      else{
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'UsuarioService.php',
          {
            actionType: 'edit',
            iduser: localStorage.getItem('iduser'),
            nombre: nombre,
            apellido: apellido,
            documento: cc,
            email: faceObjecto.correoF,
            fid: faceObjecto.idF,
            nacimiento: nacimiento,
            idciudad: ciudad
          },
          resultEditPerfil($scope, $ionicPopup, $ionicLoading)
        );
      }
    }
    else{
      console.log(passa);
      if (id == undefined || id == '') {
        popupN('ooooppppsss', 'Id no disponible', 'advertencia', $ionicPopup);
      }
      else if (nombre == '' || nombre == undefined) {
        popupN('ooooppppsss', 'Ingrese el nombre y apellido', 'advertencia', $ionicPopup);
      }
      else if (email == undefined || !axpr.test(email)) {
        popupN('ooooppppsss', 'Ingrese un correo válido', 'advertencia', $ionicPopup);
      }
      else if (cc == undefined || cc.length < 5) {
        popupN('ooooppppsss', 'Ingrese el número de documento', 'advertencia', $ionicPopup);
      }
      else if (passa == undefined || passa == '') {
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'UsuarioService.php',
          {
            actionType: 'edit',
            iduser: localStorage.getItem('iduser'),
            nombre: nombre,
            apellido: apellido,
            documento: cc,
            email: email,
            nacimiento: nacimiento,
            idciudad: ciudad
          },
          resultEditPerfil($scope, $ionicPopup, $ionicLoading)
        );
      }
      else if (passa.length < 6) {
        popupN('ooooppppsss', 'Contraseña mínimo 6 dígitos', 'advertencia', $ionicPopup);
      }
      else if (passa != passb) {
        console.log(passb)
        popupN('ooooppppsss', 'Las contraseñas no coinciden', 'advertencia', $ionicPopup);
      }
      else{
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'UsuarioService.php',
          {
            actionType: 'edit',
            iduser: localStorage.getItem('iduser'),
            nombre: nombre,
            apellido: apellido,
            documento: cc,
            email: email,
            password: passa,
            nacimiento: nacimiento,
            idciudad: ciudad
          },
          resultEditPerfil($scope, $ionicPopup, $ionicLoading)
        );
      }
    }
  }
}

function resultEditPerfil ($scope, $ionicPopup, $ionicLoading) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      popupN('¡Super!', 'Datos actualizados', 'bien', $ionicPopup);
      direcionarGn('#/app/perfil');
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup)
    }
  }
}

function clickmenu ($scope, $ionicSideMenuDelegate) {
  console.log($scope)
  $scope.toggleLeft = function () {
    if ($ionicSideMenuDelegate.isOpen()) {
      $ionicSideMenuDelegate.toggleLeft(false);//close
    }
    else{
      $ionicSideMenuDelegate.toggleLeft();//open
    }
  }
}

function controlcedula ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, $rootScope) {
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Patrocinadores';
  $scope.cerraInfo = function (){
    $scope.info = {display: 'none'};
  }
  $scope.abrirInfo = function () {
    $scope.info = {display: 'block'};
  }

  $scope.cedulaPatrocinadores = function () {
    var cc = this.ccc;
    if (cc == undefined || cc.length < 5) {
      popupN('ooooppppsss', 'Ingrese el múmero de cédula válido', 'advertencia', $ionicPopup);
    }
    else{
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'UsuarioService.php',
        {
          actionType: 'patrocinio',
          iduser: localStorage.getItem('iduser'),
          documento: cc
        },
        resulPatrocinadores($scope, $http, $ionicPopup, $ionicLoading, historialPagina)
      );
    }
  }
}

function resulPatrocinadores ($scope, $http, $ionicPopup, $ionicLoading, historialPagina) {
  return function (res) {
    console.log(res);
    if (res.code == '0') {
      $scope.ccc = '';
      popupD('¡Ya está hecho!', 'Ahora prepárate porque comenzarás a recibir regalos de las empresas de las cuales eres cliente ¡Relájate y déjate atender!', '#/app/patrocinadores', 'bien', $ionicPopup)
      historialPagina.setHistorialPatrocinadores();
    }
    else{
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function controlcompP ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, ngFB, $cordovaSocialSharing, $rootScope, $ionicHistory) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Compartir';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  localRedencion = productosDato.getRedeccion();

  existeRedencion(localRedencion);

  dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
  $scope.redencion = localRedencion;
  console.log(productosDato.getRedeccion());
  productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
    .then(function (date) {
      $ionicLoading.hide();
      var gansProducto = gangsProducto(date.informacion.precio_ahora);
      date['rootImg'] = urlRoot.urlImages;
      date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
      date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
      date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
      date['gangsP'] = calcurGang(gansProducto, 1);
      date['twiter_compartir_url'] = date.informacion.nombre + ' ' + date.rootImg +date.informacion.imagenes[0].imagen;
      console.log(date);
      $scope.dato = date;
    })

  console.log($cordovaSocialSharing);
  $scope.shareAnywhere = function (message, info, link) {
    var image = urlRoot.urlImages + info.imagenes[0].imagen;
    $cordovaSocialSharing.share(message, message, image, link).then(function (result) {
      $ionicLoading.hide();
      console.log(result);
      popupN('shared', 'ha sido compartido', 'bien', $ionicPopup);
    }, function (error) {
      console.log(error);
    });
  }

  $scope.shareViaTwitter = function(message, info, link) {
    console.log(info);
    var image = urlRoot.urlImages + info.imagenes[0].imagen;
    $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
    //$cordovaSocialSharing.shareViaTwitter(message, image, link).then(function(result){
      console.log(result);
    }, function(error) {
      console.log(error);
      alert("Cannot share on Twitter");
    });
  }

  $scope.compartirNavegador = function (message, info, link) {
    var image = urlRoot.urlImages + info.imagenes[0].imagen;
    var mensajeTw = 'Encuentra productos como este en GANGASTIK, la primera App que reúne las mejores marcas para ti';
    window.open('http://twitter.com/share?text=' + mensajeTw + '&url=http://bit.ly/2f0jAZ6', '_system', 'location=no'); 
    return false;
  }

  $scope.compartirFacebook = function (id, info, tipo) {
    $scope.show($ionicLoading);
    console.log(id+'-'+info+'-'+tipo);
    ngFB.api({
      method: 'POST',
      path: '/me/feed',
      params: {
        message: "¿Ya conoces esta aventura? Encuentra muchos productos como este en GANGASTIK, la primera App que reúne las mejores marcas para ti Producto: "+info.nombre+" http://bit.ly/2f0jAZ6",
        link: urlRoot.urlImages + info.imagenes[0].imagen
      }
    }).then(
      function (result) {
        $ionicLoading.hide();
        console.log(result);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'GangsService.php',
          {
            actionType: 'set',
            iduser: localStorage.getItem('iduser'),
            tipo: 'compartir',
            gangs: 500
          },
          function (res) {
            console.log(res);
          }
        );
        popupN('¡Listo!', '¡Has compartido esta aventura con tus amigos!', 'bien', $ionicPopup);
      },
      function (error) {
        $ionicLoading.hide();
        console.log(error);
        if (error.code == 190 || error.code == '190') {
          ngFB.login({scope: 'email,publish_actions'}).then(
            function (response) {
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
        }
        else{
          console.log(error);
          popupN('ooooppppsss: ' + error.code, error.message, 'advertencia', $ionicPopup);
        }
      });
  }

  $scope.buscarProducto = function (dato) {
    var datoInfoP = dato.id + '&' + dato.tipo + '&' + dato.informacion.vencimiento + '&' + dato.informacion.idmarca;
    direcionarGn('#/app/productocolocar/' + datoInfoP);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Compartir producto',
      idproducto: dato.id
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Compartir producto')
  );
}

function controlcanastika ($scope,$http, $ionicHistory, $ionicLoading, $ionicPopup, urlRoot, productosDato, $rootScope, $window) {
  existeLocalStorage();
  var history = $ionicHistory.currentStateName();
  var movil = moviles();

  console.log(movil);
  $rootScope.tituloGeneral = 'Mi Canástika';

  var altoW = $window.innerHeight;
  var anchoW = $window.innerWidth;

  if (movil == 'iOS') {
    if (anchoW <= 320 && altoW <= 568) {
      $scope.btnredimir = {'font-size':'6px'};
    }
    else{
      $scope.btnredimir = {'font-size':'7px'};
    }
  }

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };


  console.log(history);
  $scope.seran = function () {
    $scope.iner1 = {display:'block'}
    $scope.iner2 = {display:'none'}

    $scope.tbacl1 = 'tabOn';
    $scope.tbacl2 = 'tabOff';
  }
  $scope.fueron = function () {
    $scope.iner1 = {display:'none'}
    $scope.iner2 = {display:'block'}

    $scope.tbacl1 = 'tabOff';
    $scope.tbacl2 = 'tabOn';
  }

  $scope.redimirProducto = function (idP, idC, tipo, codigo, secreto) {
    productosDato.nuevoRedeccion(idP,idC, tipo, codigo, secreto);
    ajaxhttp(
    $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'InteraccionesService.php',
      {
        actionType: 'set',
        iduser: localStorage.getItem('iduser'),
        seccion: 'Canastika redimir',
        idproducto: idP
      },
      relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Canastika redimir')
    );
    direcionarGn('#/app/yagankanastica');
  }

  $scope.dondeComprar = function (idP, idC, tipo, codigo, secreto) {
    productosDato.nuevoRedeccion(idP,idC, tipo, codigo, secreto, 'canastika');
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'InteraccionesService.php',
      {
        actionType: 'set',
        iduser: localStorage.getItem('iduser'),
        seccion: 'Canastika donde comprar',
        idproducto: idP
      },
      relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Canastika donde comprar')
    );
    direcionarGn('#/app/dondecomprar');
  }

  $scope.calificar = function (idP, idC, tipo, codigo, secreto) {
    productosDato.nuevoCalificacion(idP, idC, tipo, codigo, secreto);
    console.log(productosDato.getCalificacion());
    direcionarGn('#/app/productoCalif');
  }

  $scope.show($ionicLoading);
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CanastikaService.php',
    {
      actionType: 'seran',
      iduser: localStorage.getItem('iduser')
    },
    resulcanastikaA($scope,$http, $ionicLoading, $ionicPopup, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CanastikaService.php',
    {
      actionType: 'fueron',
      iduser: localStorage.getItem('iduser')
    },
    resulcanastikaB($scope,$http, $ionicLoading, $ionicPopup, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Canastika'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Canastika')
  );
}

function resulcanastikaA ($scope,$http, $ionicLoading, $ionicPopup, urlRoot) {
  return function (res) {
    console.log(res);
    var producto, datos, dt, imagen;
    var arrayP = [];
    $ionicLoading.hide();
    if (res.code == "0") {
      producto = res.productos;
      producto.forEach(function (dat) {
        console.log(dat);
        var gansProducto = dat.precio_ahora;
        datos = {
          id: dat.id,
          can_id: dat.idcon,
          codigo: dat.codigo,
          nombre: dat.nombre,
          tipo: dat.tipo,
          root: urlRoot.urlImages,
          imagen:dat.imagen,
          anterior: number_format(dat.precio_antes, 2),
          actual: number_format(dat.precio_ahora, 2),
          cantidad_restante: dat.restantes,
          vencimiento: dat.vencimiento,
          descuento: number_format(calcularPorcentaje(dat.precio_antes, dat.precio_ahora), 0),
          gangsP: calcurGang(gansProducto, 1),
          secreto: dat.palabraclave,
          restantes: parseInt(dat.restantes),
          texto_vencido: (parseInt(dat.restantes) == 0) ? 'AGOTADO' : 'VENCIDO',
          informacion_restante: dat
        }
        console.log(datos)
        arrayP.push(datos);
      });
      $scope.seranB = arrayP;
      console.log($scope.seranB);
    }
    else{
      //console.log(res);
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup)
    }
  }
}
function resulcanastikaB ($scope,$http, $ionicLoading, $ionicPopup, urlRoot) {
  return function (res) {
    var producto, datos;
    var arrayP = [];
    $ionicLoading.hide();
    if (res.code == "0") {
      producto = res.productos;
      producto.forEach(function (dat) {
        console.log(dat)
        var gansProducto = dat.precio_ahora;
        datos = {
          id: dat.idproducto,
          can_id: dat.id,
          nombre: dat.nombre,
          tipo: dat.tipo,
          root: urlRoot.urlImages,
          imagen:dat.imagen,
          anterior: number_format(dat.precio_antes, 2),
          actual: number_format(dat.precio_ahora, 2),
          cantidad: dat.restantes,
          vencimiento: dat.vencimiento,
          descuento: number_format(calcularPorcentaje(dat.precio_antes, dat.precio_ahora), 0),
          gangsP: calcurGang(gansProducto, 1),
          codigo: dat.codigo,
          secreto: dat.palabraclave,
          informacion_restante: dat
        }
        arrayP.push(datos);
      });
      $scope.fueronB = arrayP;
      console.log($scope.fueronB);
    }
    else{
      //console.log(res);
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup)
    }
  }
}

function controljuego ($scope, $http, $ionicPopup, $ionicSlideBoxDelegate, $ionicLoading, urlRoot, historialPagina, $rootScope) {
  $rootScope.tituloGeneral = 'Avatars';
  existeLocalStorage();
  var historial = historialPagina.getHistorialTips();
  var historialJuego = historialPagina.getHistorialJuego();
  var historiaPatrocinio = historialPagina.getHistorialPatrocinadores();
  $scope.options = {
    loop: false,
    effect: 'fase',
    speed: 500
  }

  if (historialJuego) {
    $scope.tipjuego = {display:'none'};
  }
  else{
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'UsuarioTipsService.php',
      {
        actionType: 'setAvatar',
        iduser: localStorage.getItem('iduser')
      },
      relTips($scope, $ionicPopup, $ionicLoading, urlRoot)
    );
  }

  $scope.cerrartips = function () {
    historialPagina.setHistorialJuego();
    $scope.tipjuego = {display:'none'};
  }

  $scope.abrirDescripcionuJuego = function () {
    $scope.show($ionicLoading);
    $scope.tipjuego = {
      display: '-webkit-box',
      display: '-webkit-flex',
      display: '-moz-box',
      display: '-moz-flex',
      display: '-ms-flexbox',
      display: 'flex'
    };
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'UsuarioTipsService.php',
      {
        actionType: 'setAvatar',
        iduser: localStorage.getItem('iduser')
      },
      relTips($scope, $ionicPopup, $ionicLoading, urlRoot)
    );
  }

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PiezasAvatarService.php',
    {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    },
    relJuego($scope, $ionicPopup, $http, $ionicLoading, urlRoot)
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'GangsService.php',
    {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    },
    relgans($scope, $ionicPopup, $ionicLoading, urlRoot)
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PatrocinadoresService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    mostrarTotalPatrocinadores($scope, $http, $ionicPopup, $ionicLoading, urlRoot)
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Avatar'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Avatar')
  );

  $scope.direcionarPatrociadores = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PatrocinadoresService.php',
      {
        actionType: 'documento',
        iduser: localStorage.getItem('iduser')
      },
      existePatrocinadores($scope, $http, $ionicPopup, $ionicLoading, 0)
    );
  }
  $scope.abrirTips  = function () {
    if (historial) {
      direcionarGn('#/app/gangs');
    }
    else{
      direcionarGn('#/app/tipsj');
    }
  }
}

function relJuego ($scope, $ionicPopup, $http, $ionicLoading, urlRoot) {
  return function (res) {
    $ionicLoading.hide();
    var datoAvatar, datoPieza;
    var avats = [];
    var piezs = [];
    console.log(res);
    if (res.code == 0) {
      if (res.avatares > 0) {
        for (var i = 1; i <= res.avatares; i++) {
          avats.push({num: i});
        }

        if (res.avatares.length_cantidad > 1) {
          posicionAvatar = 'matrix(1 0 0 1 40.999 39.5747)';
        }
        else{
          posicionAvatar = 'matrix(1 0 0 1 44.999 39.5747)';
        }
        datoAvatar = {
          cantidad: avats,
          total:res.avatares,
          svg_posicionX: posicionAvatar
        }
      }
      else{
        avats = {num: 0};
        datoAvatar = {
          cantidad: avats,
          total:0,
          svg_posicionX: 'matrix(1 0 0 1 44.999 39.5747)'
        }
      }

      if (res.piezas > 0 || res.piezas != '') {
        for (var j = 1; j <= res.piezas; j++) {
          piezs.push({num: j});
        }
        datoPieza = {
          cantidad: piezs,
          total: res.piezas
        }
      }
      else{
        piezs = {num: 0};
        datoPieza = {
          cantidad: piezs,
          total: 0
        }
      }

      ajaxhttp(
        $http,
        $ionicLoading,
         $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'UsuarioService.php',
        {
          actionType: 'get',
          iduser: localStorage.getItem('iduser')
        },
        colocarAvatarsPiezas($scope, $ionicPopup, datoPieza, datoAvatar)
      );
    }
    else{
      popupN('ooooppppsss', res.error + '<br> codigo: '+ res.code, 'advertencia', $ionicPopup);
    }
  }
}

function relTips ($scope, $ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {}
    else{
      popupN('ooooppppsss', res.error + '<br> codigo: '+ res.code, 'advertencia', $ionicPopup);
    }
  }
}

function colocarAvatarsPiezas ($scope, $ionicPopup, piezas, avatars) {
  return function (res) {
    console.log(res)
    var imgGenero, imgPerfil, urlGenero, faltante;
    var silueta = funcioMatt(piezas.total) - 1;
    console.log(silueta);
    faltante = 3 - silueta;
    if (res.code == '0') {
      if (res.usuario.genero == 'Masculino') {
        imgGenero = 'amigo-p.png';
        imgPerfil = 'amigo2_' + silueta +'.png';
        urlGenero = 'hombre';
      }
      else{
        imgGenero = 'amiga-p.png';
        imgPerfil = 'amigo5_' + silueta +'.png';
        urlGenero = 'mujer';
      }
      $scope.avatarsG = {
        faltantes: faltante,
        colocarS:(faltante > 1) ? 'S' : '',
        piezas: piezas,
        avatars: avatars,
        genero_img_avatar: imgGenero,
        imagenP: imgPerfil,
        genero: res.usuario.genero,
        genero_url: urlGenero,
        num_silueta: silueta,
        backgroundClass:(silueta >= 3) ? 'compl-avatar' : '',
        quitarFondo:(silueta >= 3) ? 'background:none;' : '',
        siluetas: {
          sil1: (silueta >= 1) ? '' : 'silueta',
          sil2: (silueta >= 2) ? '' : 'silueta',
          sil3: (silueta >= 3) ? '' : 'silueta'
        }
      }

      console.log($scope.avatarsG);
    }
  }
}

function controlgans ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, $rootScope) {
  existeLocalStorage();
  historialPagina.setHistorialTips();
  $rootScope.tituloGeneral = 'Tus Gangs';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PiezasAvatarService.php',
    {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    },
    relJuego($scope, $ionicPopup, $http, $ionicLoading, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PatrocinadoresService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    mostrarTotalPatrocinadores($scope, $http, $ionicPopup, $ionicLoading, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'GangsService.php',
    {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    },
    relgans($scope, $ionicPopup, $ionicLoading, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'GangsService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    relgansB($scope, $ionicPopup, $ionicLoading, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'GangsService.php',
    {
      actionType: 'getMonths',
      iduser: localStorage.getItem('iduser')
    },
    relgansC($scope, $ionicPopup, $ionicLoading, urlRoot)
  );
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Gangs'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Gangs')
  );

  $scope.direcionarPatrociadores = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PatrocinadoresService.php',
      {
        actionType: 'documento',
        iduser: localStorage.getItem('iduser')
      },
      existePatrocinadores($scope, $http, $ionicPopup, $ionicLoading, 0)
    );
  }
}

function relgans ($scope, $ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    var lengCantidad, posicion;
    $ionicLoading.hide();
    console.log(res)
    if (res.code == 0) {
      lengCantidad = res.cantidad.length; 
      if (lengCantidad > 1) {
        posicion = 'matrix(1 0 0 1 40.999 39.5747)';
      }
      else{
        posicion = 'matrix(1 0 0 1 44.999 39.5747)';
      }
      $scope.gans = {
        cantidad: res.cantidad,
        total: res.total_gangs,
        length_cantidad: lengCantidad,
        svg_posicionX: posicion
      }
      console.log($scope.gans);
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function relgansB ($scope, $ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    console.log(res);
    if (res.code == 0) {
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function relgansC ($scope, $ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    var mesAnt, mesesAnt, dato, separarFecha;
    $ionicLoading.hide();
    if (res.code == 0) {
      mesAnt = res.gangs;
      mesesAnt = [];
      mesAnt.forEach(function (dat) {
        separarFecha = dat.fecha.split('-');
        dato = {
          fecha: formatmeses(parseInt(separarFecha[1])).substr(0,3) + '-' + separarFecha[0],
          total: dat.total
        };
        mesesAnt.push(dato);
      });
      $scope.meses = mesesAnt;
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function relgansPromise ($http, $scope, $ionicPopup, $ionicLoading, url, dato) {
  var promise = new Promise();
  var datoProducto;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    url,
    dato,
    function (res) {
      $ionicLoading.hide();
      if (res.code == '0') {
        promise.done(res);
      }
      else{
        console.log(res)
      }
    }
  );
  return promise;
}

function controlmarcasAa ($scope, $http, $ionicPopup, $ionicLoading, $stateParams, urlRoot, productosDato, preguntasProducto, historialPagina, $rootScope) {
  existeLocalStorage();
  historialPagina.removeSumaPreguntas();
  var dato, buscarPregunta, sumid, idPregunta;
  var preguntas = preguntasProducto.getPreguntas();
  $rootScope.tituloGeneral = 'Preguntas producto';
  console.log($stateParams.id);
  console.log(preguntas);
  console.log(productosDato.getProductos());

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  if (preguntas) {
    var totalPreguntas = preguntas.preguntas.length;
    console.log(totalPreguntas)
    if ($stateParams.id == undefined) {
      /*sumid = preguntas.preguntas[0].id;
      idPregunta = 0;*/
      idPregunta = 1;
      sumid = 0;
    }
    else if ($stateParams.id == '' || $stateParams.id == null) {
      /*sumid = preguntas.preguntas[0].id;
      idPregunta = 0;*/
      idPregunta = 1;
      sumid = 0;
      console.log(idPregunta)
    }
    else{
      idPregunta = parseInt($stateParams.id) + 1;
      console.log('key:' + $stateParams.id);
      console.log(idPregunta)
      if (idPregunta < totalPreguntas) {
        sumid = preguntas.preguntas[idPregunta].id;
      }
      else{
        sumid = totalPreguntas + idPregunta + 1;
      }
    }

    console.log('sumid: ' + sumid);

    buscarPregunta = preguntasProducto.buscarPregunta(sumid, preguntas.preguntas, idPregunta);

    if (buscarPregunta) {
      buscarPregunta['router'] = urlRoot.urlImages;
      $scope.pregunta = buscarPregunta;
      console.log($scope.pregunta);
    }
    else{
      console.log(preguntasProducto.getRespuestas);
      sumarPuntospreguntasGans($http, $scope, $ionicPopup, $ionicLoading, preguntasProducto.getRespuestas, urlRoot, historialPagina);
      $scope.show($ionicLoading);
      if (preguntas.tipo == 'normal') {
        var urlServiceRes = 'PreguntasProductosService.php';
      }
      else if (preguntas.tipo == 'Patrocinado') {
        var urlServiceRes = 'PreguntasProductosPatrocinadosService.php';
      }
      else{
        var urlServiceRes = 'PreguntasProductosService.php';
      }

      console.log(urlServiceRes);

      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + urlServiceRes,
        {
          actionType: 'respuesta',
          iduser: localStorage.getItem('iduser'),
          respuestas: preguntasProducto.getRespuestas
        },
        relEnviarRespuestasProducto($http, $scope,$ionicPopup, $ionicLoading, preguntasProducto.getRespuestas, urlRoot, preguntasProducto)
      );
    }
  }
  else{
    direcionarGn('#/app/productos/');
  }

  $scope.sigPregunta = function (key, id, tipo, seleccion, orden) {
    var ordb, resClassSel, textoError, idSelec, numSelec, claseG,
        div, divimage, datoRes, unimul, resMult;

    console.log(key + '-' + id + '-' + tipo + '-' + seleccion + '-' + orden);

    if (tipo == 'texto') {
      resClassSel = document.querySelectorAll('#for2 .classee1').length;
      claseG = '#for2 .classee1';
    }
    else{
      resClassSel = document.querySelectorAll('#for2 .overlay').length;
      claseG = '#for2 .overlay';
    }

    if (seleccion == 'unica') {
      textoError = 'Debes selecionar la respuesta';
      unimul = true;
    }
    else{
      textoError = 'Debes selecionar mínimo una opcion';
      unimul = false;
    }

    console.log(resClassSel);

    if (resClassSel > 0) {
      if (unimul) {
        numSelec = document.querySelector(claseG).getAttribute('data-selc');
        datoRes = {
          idpregunta: id, 
          respuesta: numSelec
        };
        preguntasProducto.nuevaRespuesta(datoRes);
        div = angular.element(document.querySelectorAll('.classee1'));
        divimage = angular.element(document.querySelectorAll('.overlay'));
        div.removeClass('classee1');
        divimage.removeClass('overlay');
        console.log(preguntasProducto.getRespuestas);
        direcionarGn('#/app/yagansmarcasa/'+ orden);
      }
      else{
        numSelec = angular.element(document.querySelectorAll(claseG));
        angular.forEach(angular.element(numSelec), function (value, key) {
          resMult = angular.element(value)
          resMult = resMult.attr('data-selc');
          datoRes = {
            idpregunta: id, 
            respuesta: resMult
          };
          preguntasProducto.nuevaRespuesta(datoRes);
        })
        div = angular.element(document.querySelectorAll('.classee1'));
        divimage = angular.element(document.querySelectorAll('.overlay'));
        div.removeClass('classee1');
        divimage.removeClass('overlay');
        console.log(preguntasProducto.getRespuestas);
        direcionarGn('#/app/yagansmarcasa/'+ orden);
      }
    }
    else{
      popupN('ooooppppsss', textoError, 'advertencia', $ionicPopup);
    }
  }
}

function relEnviarRespuestasProducto ($http, $scope,$ionicPopup, $ionicLoading, respuestas, urlRoot, preguntasProducto) {
  return function (res) {
    console.log(res);
    var producto = preguntasProducto.getPreguntas();
    $ionicLoading.hide();
    console.log(producto);
    if (res.code == '0') {
      $scope.show($ionicLoading);
      preguntasProducto.removeRespuestas();
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'CanastikaService.php',
        {
          actionType: 'agregar',
          iduser: localStorage.getItem('iduser'),
          tipo: producto.tipo,
          idproducto: producto.id
        },
        resAgregarCan($ionicLoading,$ionicPopup,urlRoot, producto.nombre, 2)
      );
    }
    else{
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function sumarPuntospreguntasGans ($http, $scope, $ionicPopup, $ionicLoading, respuestas, urlRoot, historialPagina) {
  var puntos = 0;
  for (var i = 0; i < respuestas.length; i++) {
    puntos = puntos + 100;
  }
  historialPagina.setSumaPreguntas(puntos);
  console.log(puntos);  
}

function controletadocivl ($scope, $http, $ionicPopup) {
  $scope.estadicv = {
    selected: null,
    items:[
      {id: 1, title: 'Casado'},
      {id: 2, title: 'Soltero con novio (a)'},
      {id: 3, title: 'Soltero sin novio (a)'},
      {id: 4, title: 'Separado / Divorciado'}
    ]
  };
}

function controlmarcasBb ($scope, $http, $ionicPopup) {
  $scope.marcasS = {
    selected: null,
    items:[
      {id: 1, img: 'marca1.jpg'},
      {id: 2, img: 'marca2.jpg'},
      {id: 3, img: 'marca3.jpg'},
      {id: 4, img: 'marca4.jpg'}
    ]
  };
}

function cotrolrecibircasa ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, $rootScope) {
  var dato, localRedencion, type;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir en casa';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.selectionPago = [
    {id: 'Tarjeta', nombre: 'Pago Contra-Entrega con Tarjeta débito/crédito'},
    {id: 'Efectivo', nombre: 'Pago Contra-Entrega en efectivo'},
    {id: 'efecty', nombre: 'Pago punto Baloto/Efecty'}
  ];

  localRedencion = productosDato.getRedeccion();

  existeRedencion(localRedencion);

  dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
  console.log(productosDato.getRedeccion());
  productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
    .then(function (date) {
      var gansProducto = gangsProducto(date.informacion.precio_ahora);
      date['rootImg'] = urlRoot.urlImages;
      date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
      date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
      date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
      date['gangsP'] = calcurGang(gansProducto, 1);
      console.log(date);
      $scope.dato = date;
    })

  if (localRedencion.tipo == 'Patrocinado') {
    type = {
      actionType: 'comprarPatrocinado',
      idcon: localRedencion.id_canasta,
      iduser: localStorage.getItem('iduser'),
      idproducto: localRedencion.id_producto,
      codigo: localRedencion.codigo,
      redencion: 'Domicilio'
    };
  }
  else if (localRedencion.tipo == 'Normal') {
    type = {
      actionType: 'comprarNormal',
      idcon: localRedencion.id_canasta,
      iduser: localStorage.getItem('iduser'),
      idproducto: localRedencion.id_producto,
      codigo: localRedencion.codigo,
      redencion: 'Domicilio'
    };
  }
  else{
    type = false;
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CiudadesService.php',
    {
      actionType: 'get'
    },
    resciudades($scope, $ionicLoading)
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Redencion casa',
      idproducto: dato.id
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Redencion casa')
  );


  if ($scope.formapago == undefined || $scope.formapago == '') {
    $scope.textoSelect = 'Seleccione tipo de pago';
  }
  else{
    $scope.textoSelect = $scope.formapago.name;
  }

  $scope.buscarCiudadReg = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'CiudadesService.php',
      {
        actionType: 'get'
      },
      resciudades($scope, $ionicLoading)
    );
  }

  $scope.recibircasa = function () {
    var da = this.direccion
    var db = this.tipocasa
    var dc = this.ciudad
    var dd = this.barrio
    var de = this.telefono
    var df = this.formapago
    console.log(df)

    if (da == '' || da == undefined) {
      regisPopup('ooooppppsss','mal','Ingrese la dirección', $scope, 'advertencia', $ionicPopup);
    }
    else if (db == '' || db == undefined) {
      regisPopup('ooooppppsss','mal','Para que no nos perdamos, dinos a qué torre, apto o casa debemos llegar.', $scope, 'advertencia', $ionicPopup);
    }
    else if (dc == undefined || dc == '0') {
      regisPopup('ooooppppsss','mal','Seleccione la ciudad', $scope, 'advertencia', $ionicPopup);
    }
    else if (dd == undefined || dd == '') {
      regisPopup('ooooppppsss','mal','Ingrese el barrio', $scope, 'advertencia', $ionicPopup);
    }
    else if (de == undefined ||de.length < 7) {
      regisPopup('ooooppppsss','mal','Numero de telefono no permitido', $scope, 'advertencia', $ionicPopup);
    }
    else if (df == undefined || df == '0') {
      regisPopup('ooooppppsss','mal','Selecione la forma de pago', $scope, 'advertencia', $ionicPopup);
    }
    else if (!type) {
      popupN('ooooppppsss', 'Tipo de producto no disponibe', 'advertencia', $ionicPopup);
    }
    else{
      type['direccion'] = da;
      type['com_direccion'] = db;
      type['idciudad'] = dc.id;
      type['barrio'] = dd;
      type['telefono'] = parseInt(de);
      type['pago'] = df.id;
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'ComprarProductoService.php',
        type,
        resRedimirCasa($scope,$ionicLoading,$ionicPopup,urlRoot, productosDato, $http)
      );
      //direcionarGn('#/app/yagansoliporcesada');
    }
  }
}

function resRedimirCasa ($scope, $ionicLoading, $ionicPopup, urlRoot, productosDato, $http) {
  return function (res) {
    $ionicLoading.hide();
    var localRedencion = productosDato.getRedeccion();
    var dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
    console.log(res)
    if (res.code == '0') {
      productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
        .then(function (date) {
          var gansProducto = gangsProducto(date.informacion.precio_ahora);
          console.log(gansProducto);
          /*ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            urlRoot.urlAjax + 'GangsService.php',
            {
              actionType: 'set',
              iduser: localStorage.getItem('iduser'),
              tipo: 'compra',
              gangs: calcurGang(gansProducto, 1)
            },
            resIngresarGeneral($scope, $http, $ionicPopup, $ionicLoading, urlRoot)
          );*/
        })
      productosDato.removeRedeccion();
      direcionarGn('#/app/yagansoliporcesada')
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function terminadocasa ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, $ionicHistory) {
  existeLocalStorage();
  $ionicHistory.clearHistory();
  $ionicHistory.clearCache();
}

function controlpiezascom ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, $rootScope) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Avatar';

  localRedencion = productosDato.getTerRedeccion();
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  if (!localRedencion) {
  }
  else{
    $scope.show($ionicLoading);
    dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PiezasAvatarService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relJuego($scope, $ionicPopup, $http, $ionicLoading, urlRoot)
    );

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'GangsService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relgans($scope, $ionicPopup, $ionicLoading, urlRoot)
    );

    $scope.direSiCompleto = function (num) {
      console.log(num)
      if (num >= 3 || num <= 0) {
        direcionarGn('#/app/gangaenviar');
      }
      else{
        direcionarGn('#/app/productos/');
      }
    }
  }
  
  $scope.show($ionicLoading);

  $scope.cerrartips = function () {
    $scope.tipjuego = {display: 'none'};
  }
  $scope.abririnfo = function () {
     $scope.tipjuego = {display: 'block'};
  }
}

function controleviargang ($scope, $http, $ionicPopup,$ionicLoading, urlRoot, productosDato, $rootScope) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir';

  localRedencion = productosDato.getTerRedeccion();
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  if (!localRedencion) {
  }
  else{
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PiezasAvatarService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relJuego($scope, $ionicPopup, $http, $ionicLoading, urlRoot)
    );

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'GangsService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relgans($scope, $ionicPopup, $ionicLoading, urlRoot)
    );
  }

  $scope.enviarAmigo = function () {
    var email = this.email;
    var mensaje = this.mensaje;
    var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/

    if (email == undefined || !expr.test(email)) {
      regisPopup('ooooppppsss', 'mal', 'Ingrese un correo válido', $scope, 'advertencia', $ionicPopup);
    }
    else{
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'EnviarInvitacionService.php',
        {
          actionType: 'enviarInvitacion',
          iduser: localStorage.getItem('iduser'),
          email: email
        },
        respuestaamigoB($ionicLoading,$ionicPopup, $scope, urlRoot, productosDato)
      );
      //direcionarGn('#/app/calificaciongan');
    }
  }
}

function respuestaamigoB ($ionicLoading,$ionicPopup, $scope, urlRoot, productosDato) {
  return function (res) {
    $ionicLoading.hide();
    var url = '#/app/calificaciongan';
    console.log(res);
    if (!checkJSON(res)) {
      var result = res;
      if (result.code != 0 || result.code != '0') {
        popupN('ooooppppsss', result.error, 'advertencia', $ionicPopup);
      }
      else{
        if (res.status == 0) {
          popupN('ooooppppsss', 'ooooppppsss status 0', 'advertencia', $ionicPopup);
        }
        else{
          direcionarGn(url);
        } 
      }
    }
  }
}

function controlcalifgang ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, $rootScope, historialPagina){
  var dato, localRedencion, numCalificado = historialPagina.getCalificacionGeneral();
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir'

  localRedencion = productosDato.getTerRedeccion();
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  if (!localRedencion) {
  }
  else{
    $scope.show($ionicLoading);
    dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'PiezasAvatarService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relJuego($scope, $ionicPopup, $http, $ionicLoading, urlRoot)
    );

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'GangsService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relgans($scope, $ionicPopup, $ionicLoading, urlRoot)
    );
  }

   $scope.califComentGeneral = {
    calificacion: 0,
    comentarios: '',
    num_estrellas: [
      {selected: null,calif: 'staroff', num:1},
      {selected: null,calif: 'staroff', num:2},
      {selected: null,calif: 'staroff', num:3},
      {selected: null,calif: 'staroff', num:4},
      {selected: null,calif: 'staroff', num:5}
    ]
  };
  console.log($scope.califComentGeneral);

  $scope.opinion = function (){
    var mensaje = this.text;
    if (mensaje == undefined) {
      regisPopup('ooooppppsss', 'mal', 'Ingrese el mensaje', $scope, 'advertencia', $ionicPopup);
    }
    else{
      if (!numCalificado) {
        var numeroT = 0;
      }
      else{
        var numeroT = numCalificado;
      }
      console.log(numeroT);
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'CalificarAppService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          calificacion: numeroT,
          texto: mensaje
        },
        relCalifiacionGeneral($scope, $ionicPopup, $http, $ionicLoading, urlRoot, historialPagina)
      );
    }
  }

  $scope.selecionarEstrella = function (numero, data) {
    var numero = parseInt(numero);
    console.log(numero);

    for (var i = 0; i < $scope.califComentGeneral.num_estrellas.length; i++) {
      if ($scope.califComentGeneral.num_estrellas[i].num <= data.num) {
        $scope.califComentGeneral.num_estrellas[i].selected = true;
      }
      else{
        $scope.califComentGeneral.num_estrellas[i].selected = false;
      }
    }

    historialPagina.setCalificacionGeneral(numero);
    console.log(historialPagina);
  }
}

function relCalifiacionGeneral ($scope, $ionicPopup, $http, $ionicLoading, urlRoot, historialPagina) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      historialPagina.removeCalificacionGeneral();
      direcionarGn('#/app/productos/');
    }
    else{
      popupN('ooooppppsss: ', res.error + '<br>codigo: ' + res.code, 'advertencia', $ionicLoading);
    }
  }
}

function controlpatrocinio ($scope, $timeout, $ionicScrollDelegate, $http, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Patrocinadores';
  $scope.scrollTop = function () {
    console.log($ionicScrollDelegate);
    $ionicScrollDelegate.$getByHandle('small').scrollBottom();
  }

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  /*ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PatrocinadoresService.php',
    {
      actionType: 'check',
      iduser: localStorage.getItem('iduser')
    },
    existePatrocinadores($scope, $http, $ionicPopup, $ionicLoading, 1)
  );*/

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PatrocinadoresService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser')
    },
    resulPatrocinadoresUsers($scope, $http, $ionicPopup, $ionicLoading, urlRoot)
  );

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Patrocinio'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Patrocinio')
  );

  $scope.abrirProductos = function (id, nombre) {
    console.log(id + '-' + nombre);
    var clickPatrocinio = id + '|' + true;
    localStorage.setItem('patroProducto', clickPatrocinio);
    direcionarGn('#/app/productos/');
  }
}

function resulPatrocinadoresUsers ($scope, $http, $ionicPopup, $ionicLoading, urlRoot) {
 return function (res) {
  $ionicLoading.hide();
  console.log(res);
  if (res.code == '0') {
    var patrociG = {
      rootImg: urlRoot.urlImages,
      patrocinios: res.patrocinios,
      cantidad: res.patrocinios.length,
      existe: (res.patrocinios.length > 0) ? true : false
    };
    $scope.patrocinadores = patrociG;
    console.log($scope.patrocinadores);
  }
  else{
    popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicLoading);
  }
 }
}

function mostrarTotalPatrocinadores ($scope, $http, $ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      var leng_numero = res.patrocinios.length;
      if (leng_numero.length > 1) {
          posicionAvatar = 'matrix(1 0 0 1 40.999 39.5747)';
        }
        else{
          posicionAvatar = 'matrix(1 0 0 1 44.999 39.5747)';
        }
      $scope.numpatrocinadores = {
        total: leng_numero,
        svg_posicionX: posicionAvatar
      };
      console.log($scope.numpatrocinadores)
    }
    else{
      console.log(res);
    }
  }
}

function existePatrocinadores ($scope, $http, $ionicPopup, $ionicLoading, tipo) {
  return function (res) {
    $ionicLoading.hide();
    if (res.code == '0') {
      console.log(res);
      console.log(tipo);
      if (res.result) {
        if (tipo == 0) {
          direcionarGn('#/app/patrocinadores');
        }
      }
      else{
        direcionarGn('#/app/cedula');
      }
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', $ionicLoading)
    }
  }
}

function controlvariauno ($scope, $http, $ionicPopup) {
  // body...
}

function yangocho ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, preguntasProducto, $rootScope) {
  existeLocalStorage();
  var dato;
  var producto = productosDato.getProductos();
  console.log(producto);
  $rootScope.tituloGeneral = 'Redimir';

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };


  if (producto) {
    dato = {id: producto.id, tipo: producto.tipo};
    productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php',dato)
      .then(function (date) {
        var gansProducto = gangsProducto(date.informacion.precio_ahora);
        date['rootImg'] = urlRoot.urlImages;
        date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
        date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
        date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
        date['gangsP'] = calcurGang(gansProducto, 1);
        console.log(date);
        $scope.dato = date;
      })
    $scope.irPreguntas = function (id, tipo, preguntas, nombre) {
      if (preguntas.length > 0) {
        if (tipo == 'normal') {
          var urlService = 'PreguntasProductosService.php';
        }
        else if (tipo == 'Patrocinado') {
          var urlService = 'PreguntasProductosPatrocinadosService.php';
        }
        else{
          var urlService = 'PreguntasProductosService.php';
        }

        console.log(urlService);

        dato = {
          actionType: 'get',
          iduser: localStorage.getItem('iduser'),
          idproducto: id
        };
        console.log(dato)
        perguntasBuscarProducto($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + urlService,dato)
          .then(function (date) {
            console.log(date);
            if (!date) {
              
              ajaxhttp(
                $http,
                $ionicLoading,
                $ionicPopup,
                'POST',
                urlRoot.urlAjax + 'CanastikaService.php',
                {
                  actionType: 'agregar',
                  iduser: localStorage.getItem('iduser'),
                  tipo: tipo,
                  idproducto: id
                },
                resAgregarCan($ionicLoading, $ionicPopup, urlRoot, nombre, 3)
              );
            }
            else{
              preguntasProducto.nuevaPregunta(id, tipo, date, nombre);
              direcionarGn('#/app/yagansmarcasa/');
            }
          });
      }
      else{
        direcionarGn('#/app/productos/');
      }
    }
  }
  else{
    direcionarGn('#/app/productos/');
  }
}

function respondioPreguntasProducto (id, tipo, preguntas) {
  if (preguntas > 0) {
    if (tipo == 'normal') {
      var urlService = 'PreguntasProductosService.php';
    }
    else if (tipo == 'Patrocinado') {
      var urlService = 'PreguntasProductosPatrocinadosService.php';
    }
    else{
      var urlService = 'PreguntasProductosService.php';
    }
    dato = {
      actionType: 'get',
      iduser: localStorage.getItem('iduser'),
      idproducto: id,
      tipoService: urlService
    };
    return dato;
  }
  else{
    return false;
  }
}

function perguntasBuscarProducto ($scope, $http, $ionicPopup, $ionicLoading, url, dato) {
  var promise = new Promise();
  var preguntas;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    url,
    dato,
    function (res) {
      console.log(res);
      $ionicLoading.hide();
      if (res.code == '0') {
        if (res.preguntas.length > 0) {
          promise.done(res.preguntas)
        }
        else{
          promise.done(false);
        }
      }
      else{
        console.log(res)
      }
    }
  );
  return promise;
}

function controlyagankastica ($scope, $http, $ionicPopup, $ionicLoading,urlRoot,productosDato, $rootScope, $window) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir producto';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };
  var movil = moviles();
  var altoW = $window.innerHeight;
  var anchoW = $window.innerWidth;
  console.log(anchoW + '-' + altoW);
  if (movil == 'iOS'){
    if (anchoW <= 320 && altoW <= 568) {
      $scope.continuarios = {top: '83%'};
    }
    else if (anchoW <= 380 && altoW <= 680) {
      $scope.continuarios = {top: '80%'};
    }
    else if (altoW >= 700) {
      $scope.continuarios = {top: '80%'};
    }
    else{
      $scope.continuarios = {top: '90%'};
    }
  }

  localRedencion = productosDato.getRedeccion();

  existeRedencion(localRedencion);

  $scope.reden = productosDato.getRedeccion();

  $scope.dondeComprar = function () {
    direcionarGn('#/app/dondecomprar');
  }

  dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
  console.log(productosDato.getRedeccion());
  productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
    .then(function (date) {
      var gansProducto = gangsProducto(date.informacion.precio_ahora);
      date['rootImg'] = urlRoot.urlImages;
      date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
      date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
      date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
      date['gangsP'] = calcurGang(gansProducto, 1);
      console.log(date);
      $scope.dato = date;
    })
}

function funyangredimir ($scope, $http, $ionicPopup, $ionicLoading,urlRoot,productosDato, $rootScope, $window) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  localRedencion = productosDato.getRedeccion();

  existeRedencion(localRedencion);

  dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
  console.log(productosDato.getRedeccion());
  productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
    .then(function (date) {
      var gansProducto = gangsProducto(date.informacion.precio_ahora);
      date['rootImg'] = urlRoot.urlImages;
      date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
      date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
      date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
      date['gangsP'] = calcurGang(gansProducto, 1);
      console.log(date);
      $scope.dato = date;
    })

  $scope.redimirPuntoVenta = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'RedimirProductoService.php',
      {
        actionType: 'redimirTienda',
        iduser: localStorage.getItem('iduser'),
        idcanastika: localRedencion.id_canasta,
        idproducto: localRedencion.id_producto,
        tipo: localRedencion.tipo
      },
      resredimirPDV($ionicPopup, $ionicLoading, urlRoot)
    );
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'InteraccionesService.php',
      {
        actionType: 'set',
        iduser: localStorage.getItem('iduser'),
        seccion: 'Redencion punto de venta',
        idproducto: dato.id
      },
      relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Redencion punto de venta')
    );
  }
}

function resredimirPDV ($ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      direcionarGn('#/app/yaganredimirpunto');
    }
    else{
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function funyanpunto ($scope, $http, $ionicPopup, $ionicLoading,urlRoot,productosDato, $rootScope) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir punto de venta';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  localRedencion = productosDato.getRedeccion();

  existeRedencion(localRedencion);

  dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
  $scope.redencion = localRedencion;
  console.log(productosDato.getRedeccion());

  if (localRedencion.tipo == 'Patrocinado') {
    type = true;
  }
  else if (localRedencion.tipo == 'Normal') {
    type = true;
  }
  else{
    type = false;
  }

  productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
    .then(function (date) {
      $ionicLoading.hide();
      var gansProducto = gangsProducto(date.informacion.precio_ahora);
      date['rootImg'] = urlRoot.urlImages;
      date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
      date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
      date['gangsP'] = calcurGang(gansProducto, 1);
      date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
      console.log(date);
      $scope.dato = date;
    })


  $scope.hacerCompra = function () {
    if (!type) {
      popupN('ooooppppsss', 'Tipo de producto no disponibe', 'advertencia', $ionicPopup);
    }
    else{
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'RedimirProductoService.php',
        {
          actionType: 'validarRedencionTienda',
          iduser: localStorage.getItem('iduser'),
          idcanastika: localRedencion.id_canasta,
          idproducto: localRedencion.id_producto,
          tipo: localRedencion.tipo
        },
        hacerCompraTienda($ionicPopup, $ionicLoading, urlRoot, productosDato, $scope, $http)
      );
    }
  }
}

function hacerCompraTienda ($ionicPopup, $ionicLoading, urlRoot, productosDato, $scope, $http) {
  return function (res) {
    $ionicLoading.hide();
    var producto = productosDato.getRedeccion();
    console.log(res);
    if (res.code == '0') {
      if (res.redimido) {

        dato = {id: producto.id_producto, tipo: producto.tipo};
        productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
          .then(function (date) {
            var gansProducto = gangsProducto(date.informacion.precio_ahora);
            date['gangsP'] = calcurGang(gansProducto, 1);
            popupN('Tu código fue aceptado', 'Acabas de acumular <br>' + date.gangsP + ' GANGS', 'bien', $ionicPopup);
          })
        productosDato.nuevoTerRedeccion();
        productosDato.removeRedeccion();
        direcionarGn('#/app/yaganlistouno');
      }
      else{
        direcionarGn('#/app/yaganredimir');
      }
    }
    else{
      popupN('ooooppppsss: '+ res.code, res.error, 'advertencia', $ionicPopup);
    }
  }
}

function funyanuno ($scope, $http, $ionicPopup, $ionicLoading,urlRoot,productosDato, $rootScope, $ionicHistory) {
  var dato, localRedencion;
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Redimir';

  $ionicHistory.clearHistory();
  $ionicHistory.clearCache();

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };


  localRedencion = productosDato.getTerRedeccion();
  console.log(localRedencion);

  if (!localRedencion) {
    popupN('ooooppppsss', 'Hubo un error, no hay informacion en localStorage terredencion', 'advertencia', $ionicPopup);
  }
  else{
    dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
    productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
      .then(function (date) {
        $ionicLoading.hide();
        var gansProducto = gangsProducto(date.informacion.precio_ahora);
        date['rootImg'] = urlRoot.urlImages;
        date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
        date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
        date['gangsP'] = calcurGang(gansProducto, 1);
        date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
        console.log(date);
        $scope.dato = date;
      })

    $scope.agregarPieza = function () {
      //$scope.show($ionicLoading);
      direcionarGn('#/app/piezascompletado');
    }
  }
}

function resfanUno ($ionicPopup, $ionicLoading, urlRoot, productosDato) {
  return function (res) {
    $ionicLoading.hide();
    if (res.code == '0') {
      console.log(res);
      direcionarGn('#/app/piezascompletado');
    }
    else{
      popupN('ooooppppsss: ' + res.code, res.error, 'advertencia', ionicPopup);
    }
  }
}

function funpreguntasreg ($scope, $http, $ionicPopup, $ionicLoading, $stateParams, urlRoot, usuario, $rootScope, $ionicHistory) {
  var id = parseInt($stateParams.id);
  var sumid;

  $ionicHistory.clearHistory();
  $ionicHistory.clearCache();

  if (id == '0') {
    sumid = 1;
  }
  else{
    sumid = id + 1;
  }

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'PreguntasRegistroService.php',
    {
      actionType: 'get'
    },
    relpreguntasRegistros($http,$scope, $ionicPopup, $ionicLoading, sumid, urlRoot, usuario)
  );
}

function relpreguntasRegistros ($http,$scope, $ionicPopup, $ionicLoading, id, urlRoot, usuario) {
  return function (res) {
    var num, encontrado, encontB, preguntas, numPreguntas, userLocal;
    $ionicLoading.hide();
    if (res.code == '0') {
      preguntas = res.preguntas;
      numPreguntas = preguntas.length;
      //encontrado = preguntas.find(busquedaArrayA(id));  //verisiones android >= 4.5
      encontrado = findBusqueda(id, preguntas);
      console.log(encontrado);
      if (encontrado == undefined) {
        console.log(itemsRs);
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'PreguntasRegistroService.php',
          {
            actionType: 'respuesta',
            iduser: localStorage.getItem('iduser'),
            respuestas: itemsRs
          },
          relEnviarRespuestas($ionicPopup, $ionicLoading, itemsRs)
        );
        //=====================================================================
        /*console.log(usuario.getRegistro());
        userLocal = usuario.getRegistro();
        if (!userLocal) {
          direcionarGn('#/dos');
        }
        else{
          ajaxhttp(
            $http,
            $ionicLoading,
            $ionicPopup,
            'POST',
            urlRoot.urlAjax + 'RegistroService.php',
            {
              actionType: 'registro',
              nombre: userLocal.nombre,
              apellido: userLocal.apellido,
              email: userLocal.email,
              password: userLocal.password,
              nacimiento: userLocal.nacimiento,
              idciudad: userLocal.idciudad
            },
            function (resB) {
              $ionicLoading.hide();
              if (resB.code == 0) {
                console.log(resB);
                popupN('Resultado', 'Te has registrado exitoxamente', $ionicPopup);
                localStorage.setItem('iduser',resB.iduser);
                ajaxhttp(
                  $http,
                  $ionicLoading,
                  $ionicPopup,
                  'POST',
                  urlRoot.urlAjax + 'PreguntasRegistroService.php',
                  {
                    actionType: 'respuesta',
                    iduser: localStorage.getItem('iduser'),
                    respuestas: itemsRs
                  },
                  relEnviarRespuestas($ionicPopup, $ionicLoading, itemsRs)
                );
              }
              else if (resB.code == 1) {
                popupD('ooooppppsss', resB.error, '#/dos', $ionicPopup);
              }
              else{
                 popupN('ooooppppsss', 'Ha ocurrido un error', $ionicPopup);
              }
            }
          );
        }*/
        //================================================================================
      }
      else{
        $scope.respuestas = {
          selected: null,
          router:urlRoot.urlImages,
          items:[
            {num:1,opcion:encontrado.opcion1},
            {num:2,opcion:encontrado.opcion2},
            {num:3,opcion:encontrado.opcion3},
            {num:4,opcion:encontrado.opcion4},
            {num:5,opcion:encontrado.opcion5},
            {num:6,opcion:encontrado.opcion6},
            {num:7,opcion:encontrado.opcion7},
            {num:8,opcion:encontrado.opcion8},
            {num:9,opcion:encontrado.opcion9},
            {num:10,opcion:encontrado.opcion10}
          ]
        };
        $scope.preguntas = encontrado;
        $scope.divitems = {
          numSel: id,
          total: numPreguntas,
          preguntasO : preguntas
        }
        console.log($scope.divitems);
      }
    }
    else{
      popupN('ooooppppsss', res.error, 'advertencia', $ionicPopup);
    }

    $scope.sigPregunta = function (orden, id, tipo, seleccion) {
      var ordb, resClassSel, textoError, idSelec, numSelec, claseG,
        div, divimage, datoRes, unimul, resMult;

      if (tipo == 'texto') {
        resClassSel = document.querySelectorAll('#for2 .classee1').length;
        claseG = '#for2 .classee1';
      }
      else{
        resClassSel = document.querySelectorAll('#for2 .overlay').length;
        claseG = '#for2 .overlay';
      }

      if (seleccion == 'unica') {
        textoError = 'Debes selecionar la respuesta';
        unimul = true;
      }
      else{
        textoError = 'Debes selecionar mínimo una opcion';
        unimul = false;
      }

      console.log(resClassSel);

      if (resClassSel > 0) {
        if (unimul) {
          numSelec = document.querySelector(claseG).getAttribute('data-selc');
          datoRes = {
            idpregunta: id, 
            respuesta: numSelec
          };
          itemsRs.push(datoRes);
          div = angular.element(document.querySelectorAll('.classee1'));
          divimage = angular.element(document.querySelectorAll('.overlay'));
          div.removeClass('classee1');
          divimage.removeClass('overlay');
          console.log(itemsRs);
          direcionarGn('#/preguntasregistro/'+orden);
        }
        else{
          numSelec = angular.element(document.querySelectorAll(claseG));
          angular.forEach(angular.element(numSelec), function (value, key) {
            resMult = angular.element(value)
            resMult = resMult.attr('data-selc');
            datoRes = {
              idpregunta: id, 
              respuesta: resMult
            };
            itemsRs.push(datoRes);
          })
          div = angular.element(document.querySelectorAll('.classee1'));
          divimage = angular.element(document.querySelectorAll('.overlay'));
          div.removeClass('classee1');
          divimage.removeClass('overlay');
          console.log(itemsRs);
          direcionarGn('#/preguntasregistro/'+orden);
        }
      }
      else{
        popupN('ooooppppsss', textoError, 'advertencia', $ionicPopup);
      }
    }
  }
}

function relEnviarRespuestas ($ionicPopup, $ionicLoading, itemsRs) {
  return function (res) {
    $ionicLoading.hide();
    console.log(res);
    if (res.code == '0') {
      itemsRs = [];
      localStorage.removeItem('registro');
      direcionarGn('#/reg-final');
    }
    else{
      popupN('ooooppppsss', res.error, 'advertencia', $ionicPopup);
    }
  }
}

function controlcontacto ($scope, $window, $http, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  $rootScope.tituloGeneral = 'Contacto';

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Menu contacto'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Menu contacto')
  );

  $scope.abrirTelf = function () {
    //$window.open('https://es-la.facebook.com/', '_system', 'location=yes');
    $window.open('tel:' + 123456789, '_system');
  }

  $scope.abrirNavegador = function (url) {
    OpenUrlExt.open(url, function (succes) {
      console.log(succes);
    }, function (err) {
      console.log(err);
    });
    return false;
  }

  $scope.abrirNavegadorPrueba = function (url) {
    $window.open(url, '_system', 'hidden=no')
  }
}

function resIngresarGeneral ($scope, $http, $ionicPopup, $ionicLoading, urlRoot) {
  return function (res) {
    console.log(res);
    if (res.code == '0') {
      console.log(true);
    }
    else{
      //popupN('ooooppppsss: ' + res.code, res.error, $ionicPopup);
      console.log(res)
    }
  }
}
function relIntreacionService ($scope, $ionicPopup, $ionicLoading,interacion) {
  return function (res) {
    console.log(res);
    if (res.code == '0') {
      console.log('Interacion ' + interacion +' agregada')
    }
    else{
      //popupN('ooooppppsss: ' + res.code, res.error, $ionicPopup);
      console.log(res)
    }
  }
}

function funtipsjsgans ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  $rootScope.tituloGeneral = 'Tus Gangs';
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'UsuarioTipsService.php',
    {
      actionType: 'setGangs',
      iduser: localStorage.getItem('iduser')
    },
    relTips($scope, $ionicPopup, $ionicLoading, urlRoot)
  );
}

function funtipsgans ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  $rootScope.tituloGeneral = 'Tus Gangs';
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Tip como ganas mas'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Tip como ganas mas')
  );
}

function funcondicion ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, $rootScope) {
  $rootScope.tituloGeneral = 'Condiciones de envio';
}

function funcinco ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, $rootScope) {
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Beneficio';
  var historial = historialPagina.getHistorialCards();
  console.log(historial);


  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'BeneficiosService.php',
    {
      actionType: 'get',
      iduser: localStorage.getItem('iduser'),
      idcategoria: (isNaN(historial.categoria)) ? 0 : historial.categoria
    },
    resBeneficios($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina)
  );

  $scope.usarGansBeneficio = function (idProducto, categoria, tipo, idBeneficio, gangsBeneficio, cantidad, codigo, nombre) {
    var cantidad = parseInt(cantidad);
    var consoleV = {
      idBeneficio: idBeneficio,
      gangsBeneficio: gangsBeneficio,
      cantidad: cantidad,
      codigo: codigo,
      nombre: nombre
    }
    console.log({
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          idbeneficio: idBeneficio
        });
    historialPagina.setBeneficio(consoleV);
    console.log(consoleV);
    if (cantidad > 0) {
      $scope.show($ionicLoading);
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'BeneficiosService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          idbeneficio: idBeneficio
        },
        resEnviarBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina)
      );
    }
    else{
      popupN('Alerta', 'La cantidad del benficio ha sido agotado', 'advertencia', $ionicPopup);
    }
  }
}

function resBeneficios ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina) {
  return function (res) {
    $ionicLoading.hide();
    var historial = historialPagina.getHistorialCards();
    if (res.code == '0') {
      console.log(res);
      $scope.benef = {
        id_producto: historial.id_producto,
        categoria: (isNaN(historial.categoria)) ? 0 : historial.categoria,
        tipo: historial.tipo,
        rootImg: urlRoot.urlImages,
        beneficio: res.beneficio
      };
      historialPagina.setHistorialBeneficio(res.beneficio);
      console.log($scope.benef);
      historialPagina.setHistorialCards(5, historial.id_producto, historial.tipo, historial.categoria, true);
    }
    else{
      console.log(res);
      popupN('ooooppppsss', res.error, 'advertencia', $ionicPopup);
    }
  }
}

function existeBeneficio ($scope, $http, $ionicPopup, $ionicLoading, url, dato) {
  var promise = new Promise();
  var datoProducto;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    url,
    {
      actionType: 'get',
      iduser: dato.iduser,
      idcategoria: (isNaN(dato.categoria)) ? 0 : dato.categoria
    },
    function (res) {
      $ionicLoading.hide();
      if (res.code == '0') {
        console.log(res);
        if (res.beneficio == '' || res.beneficio == undefined) {
          promise.done({boolean: false, res: res});
        }
        else if (res.beneficio == null) {
          promise.done({boolean: false, res: res});
        }
        else{
          promise.done({boolean: true, res: res});
        }
      }
      else{
        promise.done({boolean: false, res: res});
      }
    }
  );
  return promise;
}

function resEnviarBeneficio($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina) {
  return function (res) {
    $ionicLoading.hide();
    var url = '#/app/productos/';
    console.log(res)
    if (res.code == '0') {
      direcionarGn('#/app/variablecinco');
    }
    else{
      popupN('ooooppppsss', res.error, 'advertencia', $ionicPopup);
    }
  }
}

function funseis ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, $rootScope) {
  existeLocalStorage();
  var historial = historialPagina.getHistorialBeneficio();
  var beneficio = historialPagina.getBeneficio();
  console.log(historial);
  console.log(beneficio);
  $rootScope.tituloGeneral = beneficio.nombre;

  $scope.beneficioG = beneficio;

  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  $scope.enviarProducto = function () {
    historialPagina.removeHistorialBeneficio();
    direcionarGn('#/app/productos/');
  }

  if (!historial) {
    $ionicLoading.hide();
    direcionarGn('#/app/productos/');
  }
  else{
    $scope.beneficio = historial;

    var datoGans = {
      actionType: 'total',
      iduser: localStorage.getItem('iduser')
    };

    relgansPromise($http, $scope, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'GangsService.php', datoGans)
      .then(function (date) {
        console.log(date)
        $scope.resta = date.total_gangs;
      });

    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'GangsService.php',
      {
        actionType: 'total',
        iduser: localStorage.getItem('iduser')
      },
      relgans($scope, $ionicPopup, $ionicLoading, urlRoot)
    );
  }
}

function fundondecomprar ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, productosDato, $rootScope) {
  var dato, localRedencion, movil = moviles();
  existeLocalStorage();
  $rootScope.tituloGeneral = 'Informacion producto';
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  localRedencion = productosDato.getRedeccion();

  existeRedencion(localRedencion);

  dato = {id: localRedencion.id_producto, tipo: localRedencion.tipo};
  $scope.redencion = localRedencion;
  console.log(productosDato.getRedeccion());
  productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
    .then(function (date) {
      $ionicLoading.hide();
      var gansProducto = gangsProducto(date.informacion.precio_ahora);
      date['rootImg'] = urlRoot.urlImages;
      date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
      date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
      date['gangsP'] = calcurGang(gansProducto, 1);
      date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
      date['cantidad_comentarios'] = date.informacion.comentarios.length;
      console.log(date);
      $scope.dato = date;
    })

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'ProductosService.php',
    {
      actionType: 'getCalificacion',
      idproducto: dato.id,
      iduser: localStorage.getItem('iduser'),
      tipo: dato.tipo
    },
    resulgetCalificacionCOmentario($scope, $http, $ionicLoading, $ionicPopup, urlRoot, productosDato)
  );

  $scope.abrirComents = function () {
    $scope.texto = {display: 'none'}
    $scope.coment = {display: 'block'}
  }
  $scope.regInfo = function () {
    $scope.texto = {display: 'block'}
    $scope.coment = {display: 'none'}
  }
  $scope.colhtml = function (html) {
    console.log(html);
    $scope.colhtml = $interpolate(html);
  }

  if (movil == 'iOS' || movil == undefined) {
    $scope.puntosInfo = {left:'-10px', width: '107%'};
  }

  $scope.clickInfoP = function () {
    if (movil == 'iOS' || movil == undefined) {
      $scope.puntosInfo = {left:'-10px', width: '107%'};
    }
    else{
      $scope.puntosInfo = {top: '-9px'};
    }
    $scope.circP1 = 'open';
    $scope.circP2 = '';
    $scope.circP3 = '';
    $scope.infoproducto = {display: 'block'};
    $scope.oferta = {display: 'none'};
    $scope.infocomprar = {display: 'none'};
    console.log(localRedencion);
    if (localRedencion.click == '1') {
      ajaxhttp(
        $http,
        $ionicLoading,
        $ionicPopup,
        'POST',
        urlRoot.urlAjax + 'InteraccionesService.php',
        {
          actionType: 'set',
          iduser: localStorage.getItem('iduser'),
          seccion: 'Canastika info',
          idproducto: localRedencion.id_producto
        },
        relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Canastika info')
      );
    }
  }
  $scope.clickInfoO = function () {
    if (movil == 'iOS' || movil == undefined) {
      $scope.puntosInfo = {left:'-10px', width: '107%'};
    }
    else{
      $scope.puntosInfo = {top: '-9px'};
    }
    $scope.circP2 = 'open';
    $scope.circP1 = '';
    $scope.circP3 = '';
    $scope.infoproducto = {display: 'none'};
    $scope.oferta = {display: 'block'};
    $scope.infocomprar = {display: 'none'};
  }
  $scope.clickInfoC = function () {
    if (movil == 'iOS' || movil == undefined) {
      $scope.puntosInfo = {left:'-10px', width: '107%'};
    }
    else{
      $scope.puntosInfo = {top: '-9px'};
    }
    $scope.circP3 = 'open';
    $scope.circP2 = '';
    $scope.circP1 = '';
    $scope.infoproducto = {display: 'none'};
    $scope.oferta = {display: 'none'};
    $scope.infocomprar = {display: 'block'};
  }
}

function funnueve ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, productosDato, $rootScope) {
  existeLocalStorage();
  var historial = historialPagina.getSumaPreguntas();
  var producto = productosDato.getProductos();
  console.log(historial);
  console.log(producto);
  $rootScope.tituloGeneral = '';

  $scope.puntos = historial;

  if (!producto) {
    direcionarGn('#/app/canastika');
  }
  else{
    dato = {id: producto.id, tipo: producto.tipo};
    console.log(productosDato.getRedeccion());
    productoInfoUrl($scope, $http, $ionicPopup, $ionicLoading, urlRoot.urlAjax + 'ProductosService.php', dato)
      .then(function (date) {
        var gansProducto = gangsProducto(date.informacion.precio_ahora);
        date['rootImg'] = urlRoot.urlImages;
        date['informacion']['precio_ahora'] = number_format(date.informacion.precio_ahora, 0);
        date['informacion']['precio_antes'] = number_format(date.informacion.precio_antes, 0);
        date['gangsP'] = calcurGang(gansProducto, 1);
        date['descuento'] = number_format(calcularPorcentaje(date.informacion.precio_antes, date.informacion.precio_ahora), 0);
        console.log(date);
        $scope.dato = date;
      })
  }
}

function registroFacebook ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, ionicDatePicker, $rootScope) {
  var faceObjecto;
  var datFace = localStorage.getItem('facebookRegistro');
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-diseno></ion-diseno>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

  $scope.show($ionicLoading);

  var ipObj1 = {
    callback: function (val) {
      console.log(val);
      console.log(new Date(val));
      var fechaSeleccion = new Date(val);

      $scope.fecha = fechaSeleccion.getFullYear()+'-'+ (parseInt(fechaSeleccion.getMonth()) + 1) +'-'+fechaSeleccion.getDate();
    },
    closeOnSelect: true
  };

  $scope.openDatePicker = function () {
    ionicDatePicker.openDatePicker(ipObj1);
  }

  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'CiudadesService.php',
    {
      actionType: 'get'
    },
    resciudades($scope, $ionicLoading)
  );

  if (datFace == null || datFace == undefined) {
    direcionarGn('#/dos');
  }
  else if (datFace == '') {
    direcionarGn('#/dos');
  }
  else{
    datFace = datFace.split('-');
    faceObjecto = {
      idF: datFace[0],
      nombreF: datFace[1],
      apellidoF: datFace[2],
      correoF: datFace[3]
    };

    console.log(faceObjecto);

    $scope.nombre = faceObjecto.nombreF;
    $scope.apellido = faceObjecto.apellidoF;
    $scope.email = faceObjecto.correoF;
  }

  $scope.registroFacebook = function () {
    var fecha = this.fecha;
    var ciudad = this.ciudad;
    if (faceObjecto.idF == '' || faceObjecto.idF == undefined) {
      popupD('ooooppppsss', 'Id facebook no disponibe', '#/dos', 'advertencia', $ionicPopup);
    }
    else if (faceObjecto.idF == null) {
      popupD('ooooppppsss', 'Id facebook no disponibe', '#/dos', 'advertencia', $ionicPopup);
    }
    else if (fecha == '' || fecha == undefined) {
      colerrres('#texto','#fecha', 'mal', 'Ingrese la fecha nacimiento');
    }
    else{
      colerrres('#texto','#fecha', 'bien', '');
      if (ciudad == undefined || ciudad == '') {
        colerrres('#texto','#ciudad', 'mal', 'Selecione la ciudad');
      }
      else{
        colerrres('#texto','#ciudad', 'bien', '');
        $scope.show($ionicLoading);
        ajaxhttp(
          $http,
          $ionicLoading,
          $ionicPopup,
          'POST',
          urlRoot.urlAjax + 'RegistroService.php',
          {
            actionType: 'registro',
            nombre:faceObjecto.nombreF,
            apellido:faceObjecto.apellidoF,
            email:faceObjecto.correoF,
            nacimiento:fecha,
            fid:faceObjecto.idF,
            idciudad:ciudad
          },
          respuestaregistro($ionicLoading,$ionicPopup)
        );
      }
    }
  }

  $scope.buscarCiudadReg = function () {
    $scope.show($ionicLoading);
    ajaxhttp(
      $http,
      $ionicLoading,
      $ionicPopup,
      'POST',
      urlRoot.urlAjax + 'CiudadesService.php',
      {
        actionType: 'get'
      },
      resciudades($scope, $ionicLoading)
    );
  }
}

function controlterminos ($scope, $http, $ionicPopup, $ionicLoading, urlRoot, historialPagina, $rootScope) {
  $rootScope.tituloGeneral = 'Términos y condiciones';
  ajaxhttp(
    $http,
    $ionicLoading,
    $ionicPopup,
    'POST',
    urlRoot.urlAjax + 'InteraccionesService.php',
    {
      actionType: 'set',
      iduser: localStorage.getItem('iduser'),
      seccion: 'Menu terminos'
    },
    relIntreacionService($scope, $ionicPopup, $ionicLoading, 'Tip como ganas mas')
  );
}

function resultBusqueda ($rootScope, $http, $ionicLoading, $ionicPopup, productosDato, $ionicHistory, $cordovaKeyboard) {
  return function (res) {
    $ionicLoading.hide();
    var historiaNavegacion = $ionicHistory.currentStateName();
    console.log(historiaNavegacion);
    $cordovaKeyboard.close();
    console.log(res);
    if (res.code == '0') {
      if (res.productos.length == 0) {
        popupN('ooooppppsss', '¡Ups! No hemos encontrado resultados para tu búsqueda, intenta de nuevo.', 'advertencia', $ionicPopup);
      }
      else{
        console.log(productosDato);
        productosDato.nuevoBusqueda(res.productos);
        if (historiaNavegacion == 'app.') {}
        direcionarGn('#/app/productobusqueda');
      }
    }
    else{
      popupN('ooooppppsss', res.error + '<br> codigo: ' + res.code, 'advertencia', $ionicPopup);
    }
  }
}

function busquedaArrayA(dato) {
  return function (element, index, array) {
    var datS = dato.toString();
    return element.orden === datS;
  }
}

function colerrres ($div1,$div2,tipo,texto) {
  if ($div2 != '') {
    if (tipo == 'mal') {
      document.querySelector($div1).innerHTML = texto;
      document.querySelector($div1).style.color='red';
      document.querySelector($div2).classList.add('mal');
      document.querySelector($div2).focus()
    }
    else{
      document.querySelector($div1).innerHTML = texto;
      document.querySelector($div1).style.color='#fff';
      document.querySelector($div2).classList.remove('mal');
    }
  }
  else{
    document.querySelector($div1).innerHTML = texto;
  }
}

function cenpunex () {
  var hpx = document.querySelector('.cja');
  var hvh = window.innerHeight();
  console.log(hpx);
  var topx = (hvh - hpx) / 2;
  if (topx < 0) { topx = 0}
  document.querySelector('.cja').style.top = topx;
}

function calcHeight(element) 
{ 
  //find the height of the internal page 
  var the_height=document.getElementById(element).contentWindow. 
  document.body.scrollHeight;   //change the height of the iframe 
  document.getElementById(element).height=the_height+10; 
}

function calcurGang (num, porcentaje) {
  var num = parseInt(num);
  var calcular = (num * porcentaje) / 100;
  return number_format(calcular, 0);
}

function selecionardv () {
  this.classList.toggle('active')
}

function regisPopup (titulo, tipo, mensaje, $scope, actividad, $ionicPopup) {
  var alertPopup = $ionicPopup.alert({
    title: titulo,
    cssClass: actividad,
    'template': mensaje
  });
  alertPopup.then(function(res) {
    console.log('then popup');
  });
}

function popupN(titulo, mensaje, actividad, $ionicPopup) {
  $ionicPopup.alert({
    title: titulo,
    cssClass:actividad,
    'template': mensaje
  });
}

function popupC(titulo, mensaje, tipo, actividad, $ionicPopup) {
  var alerta = $ionicPopup.alert({
    title: titulo,
    cssClass:actividad,
    'template': mensaje
  });
  alerta.then(function (res) {
    console.log(res);
    if (tipo == 'location') {
      //location.reload();
    }
  });
}

function popupD(titulo, mensaje, url, actividad, $ionicPopup) {
  var alerta = $ionicPopup.alert({
    title: titulo,
    cssClass:actividad,
    'template': mensaje
  });
  alerta.then(function (res) {
    console.log(res);
    direcionarGn(url);
  });
}

function popupSelecion (titulo, mensaje, url, actividad, $ionicPopup, $scope) {
  var confirmacion = $ionicPopup.confirm({
    title: titulo,
    cssClass:actividad,
    template: mensaje,
    cancelText: 'Cancelar',
    okText: 'Aceptar'
  });

  if (url != '') {
    confirmacion.then(function (res) {
      if (res) {
        $scope.amigoInv = '';
      }
      else{
        direcionarGn(url);
      }
    })
  }
}

function moviles () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i )) {
    return 'iOS'  
  }
  if (userAgent.match( /Android/i )) {return 'Android';} 
}

function iosVersion() {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    if (!!window.indexedDB) { return 'iOS8+'; }
    else if (!!window.SpeechSynthesisUtterance) { return 'iOS7'; }
    else if (!!window.webkitAudioContext) { return 'iOS6'; }
    else if (!!window.matchMedia) { return 'iOS5'; }
    else if (!!window.history && 'pushState' in window.history) { return 'iOS4'; }
    else{return 'iOS3';}
  }
  else{
    return 'Not an iOS device';
  }
}

function calcularPorcentaje(anterior, actual) {
  var total, num1, num2;
  num1 = parseFloat(anterior);
  num2 = parseFloat(actual);
  total = ((num1 - num2) * 100) / num1;
  if (total <= 0) {
    total = 0;
  }
  console.log(num1 + '-' + num2 +'x'+ 100 +'/' + num1);
  console.log(total);
  return total;
}

function number_format(number, decimals) {
  number += ''; // por si pasan un numero en vez de un string
  number = parseFloat(number.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

  decimals = decimals || 0; // por si la variable no fue fue pasada

  // si no es un numero o es igual a cero retorno el mismo cero
  if (isNaN(number) || number === 0){
    return parseFloat(0).toFixed(decimals);
  }

  // si es mayor o menor que cero retorno el valor formateado como numero
  number = '' + number.toFixed(decimals);

  var amount_parts = number.split('.'),
    regexp = /(\d+)(\d{3})/;

  while (regexp.test(amount_parts[0])){
    amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');
  }
  
  return amount_parts.join('.');
}

function formatmeses (num) {
  var nommes=[
    "Meses",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]
  return nommes[num]
}

function existeLocalStorage () {
  if (!localStorage.getItem('iduser')) {
    localStorage.removeItem('iduser');
    localStorage.removeItem('idCategoriaSelecionada');
    direcionarGn('#/home');
  }
}

function existeRedencion (redencion) {
  if (!redencion) {
    direcionarGn('#/app/productos/');
  }
}

function findBusquedaB (nameKey, myArray) {
  var datS = nameKey.toString();
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].orden === datS) {
      return myArray[i];
    }
  }
}

function findBusqueda (nameKey, myArray) {
  var datS = nameKey.toString();
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].orden === datS) {
      return myArray[i];
    }
  }
}

function findGeneral (nameKey, nameData, myArray) {
  var datS = nameKey.toString();
  console.log(myArray);
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].nameData === datS) {
      return myArray[i];
    }
  }
}

function funcioMatt (r) {
  var j = 1;
  for (var i = 0; i < r; i++) {
    if (j > 3) {
      j = 1;
    }
    j++;
  }
  return j;
}

function aleatorioRamdon (a,b) {
  var rand = Math.round(Math.random()*(b-a)+parseInt(a))
  return rand
}

function startLoadingCSS (img, element, attrs) {
  img.css({visibility: 'hidden'});
  element.addClass(attrs.spinnerClass);
}

function stopLoadingCSS (img, element, attrs) {
  img.css({visibility: 'visible'});
  element.removeClass(attrs.spinnerClass);
}

function setHeight(img, element, attrs) {
  var w = element.prop('offsetWidth');
  var h = attrs.heightMultiplier * w;
  if (w && h){
    element.css('height', h + 'px');
    console.log('imgWithLoading: [width x height] set to [' + w + ' x ' + h + ']');
  }
  else{
    console.log('imgWithLoading: height NOT set');
  }
}

/*function toArray(obj) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value)); // <- recursive call
        }
        else {
            result.push(value);
        }
    }
    return result;
}*/

function Promise () {
  this._callbacks = [];
}

Promise.prototype.then = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('[Promise.then] El argumento "callback" no es una función ' + typeof callback);
  }
  this._callbacks.push(callback);
}

Promise.prototype.done = function () {
  var callback;
  var args = arguments;
  for (var i = 0; i < this._callbacks.length; i++) {
    callback = this._callbacks[i];
    callback.apply(null, args);
  }
}