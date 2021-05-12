$(document).ready(function(){
   $("button").click(function(){
     $("#div1").load("demo_test.txt");
   });
 });

$(function(){
   $('#ejecutar').click(function(){
      sumar($('#valor1').val(),$('#valor2').val());
               });
   function sumar(val1,val2){
      var parametros= {
         "val1":val1,
         "val2":val2
      }
      $.ajax({
            data:parametros,
            url:"suma.php",
            type:"post",
            beforeSend:function(){
               console.log("Se esta procesandotu petición");
            }

      })
      .done(function(data){
         $('#resultado').text(data);
      });
   }
});