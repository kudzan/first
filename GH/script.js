$('document').ready(function(){
  $('input').on('keyup', function(){
    var value1, value2, value3, value4;
    value1=$('#val1').val();
    value2=$('#val2').val();

    value1=parseInt(value1)*parseInt(value1);
    value2=parseInt(value2)*parseInt(value2);

    value3 = value1+value2;
    value4 = Math.sqrt(value3);

    $('#result').html(value4);

  });
});
