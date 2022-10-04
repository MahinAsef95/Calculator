
// var resultScreen = $("#result");


function insertNumber(number){

    var existingNumber = $("#result").val();

    $("#result").val(existingNumber + number);
}

function clearResult(){

    $("#result").val('');

}

function calculate(){

    var result = eval($("#result").val());

    $("#result").val(result);
}

function deleteNumber(){

    var presentNumber = $("#result").val();

    if(presentNumber != ''){

        $("#result").val(presentNumber.slice(0,-1));
    }
}