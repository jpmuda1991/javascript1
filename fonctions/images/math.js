 //mes nombres
 var nombre1 = 10;
 var nombre2 = 5;

 //poids
 var monpoids = 155
 var ratio = 2.2


 function masomme(nombre1, nombre2) {

     return nombre1 + nombre2

 }
 document.getElementById("idsomme").innerHTML = masomme(nombre1, nombre2);


 function madiff(nombre1, nombre2) {

     return nombre1 - nombre2

 }
 document.getElementById("iddiff").innerHTML = madiff(nombre1, nombre2);

 function monprod(nombre1, nombre2) {


     return nombre1 * nombre2

 }
 document.getElementById("idprod").innerHTML = monprod(nombre1, nombre2);

 function monquot(nombre1, nombre2) {

     return nombre1 / nombre2

 }
 document.getElementById("idquod").innerHTML = monquot(nombre1, nombre2);

 function convertir(monpoids, ratio) {

     return monpoids / ratio


 }
 document.getElementById("idpoids").innerHTML = convertir(monpoids, ratio);