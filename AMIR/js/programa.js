$(document).ready(function() {
    $("#titulo").mouseenter(function() {
           $(this).css("background-color", "lightgray");
        $("#titulo").css("color","black");
    })

    $("#titulo").mouseleave(function() {
        $("#titulo").css("background-color","black");
        $("#titulo").css("color","blue");
    })
});


$(document).ready(function(){
    $("a").click(function(){
        var valor = $("#numero4D").val();

    var cantidadPares = 0;
    var cantidadInpares = 0;
    var cantidadCeros = 0;
    var result = 0;
    var i = 0;
    var numero = [4];

    var numero4D =parseInt( document.getElementById('numero4D').value);
    if (numero4D <= 1000){
        alert("La cantidad ingresada tiene que ser mayor a 1000 ");
    }else{
         while(numero4D>0){
             numero[i] = numero4D%10;
             numero4D = parseInt(numero4D/10);

             if(numero[i] == 0){
                 cantidadCeros ++;
            }else if(numero[i]%2 == 0){
                cantidadPares ++;            
            }else{
                cantidadInpares ++;
            }
             i++;
         } 
         
    }

    $("#pares").val(cantidadPares);
    $("#impares").val(cantidadInpares);
    $("#ceros").val(cantidadCeros);

    });
  });
