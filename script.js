$(document).ready(function(){
    var words = ["later", "water", "adieu", "prick", "mouse", "glass", "wires", "chair", "stand", "board", "plant"]
    var randint = Math.floor((Math.random() * 10) + 0);
    var todayWord = words[randint];
    var currentRow = 0;

    $("textarea").prop('disabled', true);

    console.log("Todays Random Number is " + randint);
    console.log("Todays Random Word is " + todayWord);
    console.log(currentRow)
   

    if (currentRow == 0)
    {
        $("#1-1").prop('disabled', false);
        $("#1-2").prop('disabled', false);
        $("#1-3").prop('disabled', false);
        $("#1-4").prop('disabled', false);
        $("#1-5").prop('disabled', false);

    }
    if (currentRow == 1)
    {
        $("#2-1").prop('disabled', false);
        $("#2-2").prop('disabled', false);
        $("#2-3").prop('disabled', false);
        $("#2-4").prop('disabled', false);
        $("#2-5").prop('disabled', false);

    }
    if (currentRow == 2)
    {
        $("#3-1").prop('disabled', false);
        $("#3-2").prop('disabled', false);
        $("#3-3").prop('disabled', false);
        $("#3-4").prop('disabled', false);
        $("#3-5").prop('disabled', false);
    }
    if (currentRow == 3)
    {
        $("#4-1").prop('disabled', false);
        $("#4-2").prop('disabled', false);
        $("#4-3").prop('disabled', false);
        $("#4-4").prop('disabled', false);
        $("#4-5").prop('disabled', false);

    }
    if (currentRow == 4)
    {
        $("#5-1").prop('disabled', false);
        $("#5-2").prop('disabled', false);
        $("#5-3").prop('disabled', false);
        $("#5-4").prop('disabled', false);
        $("#5-5").prop('disabled', false);

    }
    if (currentRow == 5)
    {
        $("#6-1").prop('disabled', false);
        $("#6-2").prop('disabled', false);
        $("#6-3").prop('disabled', false);
        $("#6-4").prop('disabled', false);
        $("#6-5").prop('disabled', false);
    }


    $("#Submit").click(function(){
        console.log("Todays Word is " + todayWord);
        console.log("checking word...");
        if (currentRow == 0)
        {
            var checkword = $("#1-1").val() + $("#1-2").val() + $("#1-3").val() + $("#1-4").val() + $("#1-5").val();
        }
        else if (currentRow == 1)
        {
            var checkword = $("#2-1").val() + $("#2-2").val() + $("#2-3").val() + $("#2-4").val() + $("#2-5").val();
        }
        else if (currentRow == 2)
        {
            var checkword = $("#3-1").val() + $("#3-2").val() + $("#3-3").val() + $("#3-4").val() + $("#3-5").val();
        }
        else if (currentRow == 3)
        {
            var checkword = $("#4-1").val() + $("#4-2").val() + $("#4-3").val() + $("#4-4").val() + $("#4-5").val();
        }
        else if (currentRow == 4)
        {
            var checkword = $("#5-1").val() + $("#5-2").val() + $("#5-3").val() + $("#5-4").val() + $("#5-5").val();
        }
        else if (currentRow == 5)
        {
            var checkword = $("#6-1").val() + $("#6-2").val() + $("#6-3").val() + $("#6-4").val() + $("#6-5").val();
        }

        

        console.log("User tried: " + checkword);
        if((words.indexOf(checkword) > -1) && (checkword != todayWord)){
            //should progress to next row
            console.log("Wrong!");
            currentRow = currentRow + 1;
            console.log("Current row is now: " + currentRow);

            if (currentRow == 0)
    {
        $("#1-1").prop('disabled', false);
        $("#1-2").prop('disabled', false);
        $("#1-3").prop('disabled', false);
        $("#1-4").prop('disabled', false);
        $("#1-5").prop('disabled', false);
    }
    else{
        $("#1-1").prop('disabled', true);
        $("#1-2").prop('disabled', true);
        $("#1-3").prop('disabled', true);
        $("#1-4").prop('disabled', true);
        $("#1-5").prop('disabled', true);
    }
    if (currentRow == 1)
    {
        $("#2-1").prop('disabled', false);
        $("#2-2").prop('disabled', false);
        $("#2-3").prop('disabled', false);
        $("#2-4").prop('disabled', false);
        $("#2-5").prop('disabled', false);

    }
    else{
        $("#1-1").prop('disabled', true);
        $("#1-2").prop('disabled', true);
        $("#1-3").prop('disabled', true);
        $("#1-4").prop('disabled', true);
        $("#1-5").prop('disabled', true);
    }
    if (currentRow == 2)
    {
        $("#3-1").prop('disabled', false);
        $("#3-2").prop('disabled', false);
        $("#3-3").prop('disabled', false);
        $("#3-4").prop('disabled', false);
        $("#3-5").prop('disabled', false);
    }
    else{
        $("#1-1").prop('disabled', true);
        $("#1-2").prop('disabled', true);
        $("#1-3").prop('disabled', true);
        $("#1-4").prop('disabled', true);
        $("#1-5").prop('disabled', true);
    }
    if (currentRow == 3)
    {
        $("#4-1").prop('disabled', false);
        $("#4-2").prop('disabled', false);
        $("#4-3").prop('disabled', false);
        $("#4-4").prop('disabled', false);
        $("#4-5").prop('disabled', false);

    }
    else{
        $("#1-1").prop('disabled', true);
        $("#1-2").prop('disabled', true);
        $("#1-3").prop('disabled', true);
        $("#1-4").prop('disabled', true);
        $("#1-5").prop('disabled', true);
    }
    if (currentRow == 4)
    {
        $("#5-1").prop('disabled', false);
        $("#5-2").prop('disabled', false);
        $("#5-3").prop('disabled', false);
        $("#5-4").prop('disabled', false);
        $("#5-5").prop('disabled', false);

    }
    else{
        $("#1-1").prop('disabled', true);
        $("#1-2").prop('disabled', true);
        $("#1-3").prop('disabled', true);
        $("#1-4").prop('disabled', true);
        $("#1-5").prop('disabled', true);
    }
    if (currentRow == 5)
    {
        $("#6-1").prop('disabled', false);
        $("#6-2").prop('disabled', false);
        $("#6-3").prop('disabled', false);
        $("#6-4").prop('disabled', false);
        $("#6-5").prop('disabled', false);
    }
    else{
        $("#1-1").prop('disabled', true);
        $("#1-2").prop('disabled', true);
        $("#1-3").prop('disabled', true);
        $("#1-4").prop('disabled', true);
        $("#1-5").prop('disabled', true);
    }


        for (var y = 0; y < todayWord.length; y++)
        {
            var currentCell = "#" + currentRow + "-" + (y + 1);
            var c = checkword.charAt(y);
            var d = todayWord.charAt(y);
            {
                        console.log("currently checking " + currentCell)
                        if(c == d)
                        {
                            console.log("matches at pos " + y + " AKA '" + currentCell + "'")
                            if($(currentCell).val() == d)
                            {
                                console.log("changing textarea " + y + " to green")
                                $(currentCell).css("background-color", "green")
                            }
                        }
                        else if((c != d) && (todayWord.includes(c)))
                        {
                            console.log("letter found in wrong pos")
                            console.log("changing textarea " + y + " to orange")
                            $(currentCell).css("background-color", "orange")

                        }

                        else{
                            console.log("No Match")
                        }
                    
            }
        }

        }
        else if((words.indexOf(checkword) <= -1)){
            //should do nothing
            console.log("Word not in list!");
        }
        else if(checkword = todayWord){
            //correct word
            $("#row" + (currentRow + 1) + " textarea").css("background-color", "green");
            alert("good shit");
        }

    
        
    });
});

