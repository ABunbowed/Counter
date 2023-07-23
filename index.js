let count = 0

$("#decrease").click(function () { 
    count--;
    $("h2").text(count)
    if(count < 0){
        $("h2").css("color", "red")
    } if(count === 0){
        $("h2").css("color", "black")
    }
});

$("#increase").click(function () { 
    count++;
    $("h2").text(count)
    if(count > 0){
        $("h2").css("color", "green")
    } if(count === 0){
        $("h2").css("color", "black")
    }
});

$("#reset").click(function () { 
    count = 0;
    $("h2").text(count)
    if(count === 0){
        $("h2").css("color", "black")
    }
});