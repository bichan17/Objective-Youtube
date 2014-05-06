function myfunc(){
    var x = $('#options option:selected').text();
    $("body").append('<div style="width:200px; height:200px; border: 1px solid red;"></div>');
}

$(document).ready(myfunc);