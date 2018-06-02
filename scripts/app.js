var sections = document.querySelectorAll('section');
var comenzar = document.querySelector('.comenzar');
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');
var calcular = document.querySelector('.calcular');
var currentSection = 0;

TweenMax.set('section',{display: 'none'});
TweenMax.set(sections[currentSection],{display: 'flex'});
TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

siguiente.forEach(btn => btn.addEventListener('click', function(e){
  e.preventDefault();
  currentSection +=1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

}));

calcular.addEventListener('click', function(e){
  e.preventDefault();
  currentSection +=1;
  
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

  var form = document.querySelector('form');
  var totales = document.querySelector('.totales');
  var mim = document.querySelector('.mim');
  var cph = document.querySelector('.cph');

  var horas = form.horas.value;
  var diassemanales = form.diasdesemana.value;
  var gastosdevivienda = form.gastosdevivienda.value;
  var gastosdeluz = form.gastosluz.value;
  var gastosteleinter = form.gastostelyint.value;
  var gastoscomida = form.gastoscomida.value;
  var gastostelefcel = form.gastoscelular.value;
  var gastostransporte = form.gastostransporte.value;
  var gastosentretenimiento = form.gastosentrete.value;
  var porcentajeganancia = form.porcentajeganancia.value;
  var porcentajejubilacion = form.porcentajejubi.value;


  var totalgastosmensuales = +gastosdevivienda + +gastosdeluz + +gastosteleinter + +gastoscomida + +gastostelefcel + +gastostransporte + +gastosentretenimiento;
  var gastosmasganancia = (+totalgastosmensuales + (+totalgastosmensuales*(+porcentajeganancia / 100)));
  var mim = (+gastosmasganancia + (+gastosmasganancia*(+porcentajejubilacion / 100)));
  var totaldehoras = (+horas * (+diassemanales * 5));
  var costoporhora = (+mim / +totaldehoras);

  console.log(totalgastosmensuales,mim,costoporhora);
  var totales=document.querySelector(".totales");
  var minimo=document.querySelector(".mim");
  var costo=document.querySelector(".cph");
  totales.innerHTML=totalgastosmensuales;
  minimo.innerHTML=mim;
  costo.innerHTML=costoporhora;

});

reiniciar.addEventListener('click', function(e){
    e.preventDefault();
    currentSection = 0;
    TweenMax.set('section',{display: 'none'});
    TweenMax.set(sections[currentSection],{display: 'flex'});
    TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
  });