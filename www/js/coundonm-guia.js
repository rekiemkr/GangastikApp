function cuentaRegresiva (fechaRc, $scope, $timeout) {
  var restante;
  var sepfechaHora = fechaRc.split(' ');
  var sepFecha = sepfechaHora[0].split('-');
  var sepHora = sepfechaHora[1].split(':');
  var Yr = sepFecha[0];
  var Mr = sepFecha[1];
  var Dr = sepFecha[2];
  var Hr = sepHora[0];
  var Nr = sepHora[1];
  var Sr = sepHora[2];
  //var fecha = new Date('2016','11','10','21','00','00');
  var fecha = new Date(Yr,Mr,Dr,Hr,Nr,Sr);
  var hoy = new Date();
  var dias = 0;
  var horas = 0;
  var minutos = 0;
  var segundos = 0;
  if (fecha > hoy){
    var diferencia = (fecha.getTime()-hoy.getTime())/1000;
    dias = Math.floor(diferencia/86400);
    diferencia = diferencia-(86400*dias);
    horas = Math.floor(diferencia/3600);
    diferencia = diferencia-(3600*horas);
    minutos = Math.floor(diferencia/60);
    diferencia = diferencia-(60*minutos);
    segundos = Math.floor(diferencia);

    //console.log('Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos');

    if (dias>0 || horas>0 || minutos>0 || segundos>0){
      //scope.d = dias;
      restante= {
        d: dias,
        h: horas,
        m: minutos,
        s: segundos
      }
      $scope.value = segundos;
      console.log($scope.value);
      //setTimeout("cuentaRegresiva(\"" + fechaRc + "\",\""+ $scope +"\")",1000);
      //setTimeout(cuentaRegresiva(fechaRc, scope),1000);
      //$timeout(cuentaRegresiva(fechaRc, scope, $timeout), 1000)
    }


    //return restante;
  }
  else{
    //console.log('Quedan ' + dias + ' D&iacute;as, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos');
    restante= {
      d: dias,
      h: horas,
      m: minutos,
      s: segundos
    }
    console.log('no - '+restante);
    scope.value = restante;
      setTimeout("cuentaRegresiva(\"" + fechaRc + "\",\""+ scope +"\")",1000);

    //return restante;
  }
}