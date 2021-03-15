// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi. Dopo 30
// secondi l'utente deve inserire, uno alla volta, i numeri
// che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati.

//generiamo 5 numeri random
$(document).ready(function() {
  random();
  var numeri = [];
  var numeri_utente = [];
  var note = [];
  while (numeri.length < 5) {
     var numeri_random = random(1, 100);
    if (!numeri.includes(numeri_random)) {
        numeri.push(numeri_random);
        $('#numeri-random').text(numeri);
    }

     console.log(numeri);

  }

    //CREO IL TIMER CHE FA SCOMPARIRE I NUMERI RANDOM
    var count = 30;
    var id = setInterval(function () {
     if (count > 0) {
      $('#tempo').text(count);
     } else {
     clearInterval(id);
     $('#tempo').hide();
     $('#numeri-random').hide();
     $('h2').hide();
     }
     count--;
    }, 1000);


    //L'UTENTE CERCA DI ricordare i numeri

  setTimeout(function(){
    while (numeri_utente.length < 5) {
      var darenum =  parseInt(prompt("inserisci i numeri che ricordi"));
      //creo array vuoto per controllare che l'utente non scrive numeri doppi
       if (numeri_utente.includes(darenum)) {
           alert("Non puoi selezionare due numeri uguali inserisci un numero diverso");
       }else {
         numeri_utente.push(darenum);
   //verifico se il numero inserito dall'utente è ugule ai nmeri random lo salvo nel dom
         if (numeri.includes(darenum)) {
           note.push(darenum);
          }
        }
        if (note == 0) {
          $('#num').text("Hai indovinato" + " " + note.length + " " + "numeri."  + note);
        }else if (note == 1) {
          $('#num').text("Hai indovinato" + " " + note.length + " " + "numero." + " " + "Il numero è:" + " " + note);
        }else {
          console.log(note);
          $('#num').text("Hai indovinato" + " " + note.length + " " + "numeri." + " " + "I numeri sono:" + " " + note);
        }
    }
  },32000);

})

//funzione  genera numeri casuali

function random(min , max){
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  }else {
    return Math.floor(Math.random()*(max-min +1)+1);
  }
}
