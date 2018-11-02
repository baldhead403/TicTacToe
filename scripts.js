$(document).ready(function () {
    let turn = 1
    let play = true



    $("#board tr td").click(function () {
        if ($(this).text() == "" && play) {
            if ((turn % 2) == 1) {
                $(this).append("X");
            } else {
                $(this).append("O");
            }
            turn++;
            if (winChk()!=-1 && winChk()!="") {
               
                if (winChk() == "X") 
                {
                    alert("Player 1 wins!")
                    document.getElementById("score1").innerHTML++
                    
                }
                else if (winChk() == "O") 
                {
                    alert("Player 2 wins!")
                    document.getElementById("score2").innerHTML++
                    
                }
                
            }
        }

    });
     
    
    

    function reset() {
        $("#board tr:nth-child(1) td:nth-child(1)").html('')
        $("#board tr:nth-child(1) td:nth-child(2)").html('')
        $("#board tr:nth-child(1) td:nth-child(3)").html('')
        $("#board tr:nth-child(2) td:nth-child(1)").html('')
        $("#board tr:nth-child(2) td:nth-child(2)").html('')
        $("#board tr:nth-child(2) td:nth-child(3)").html('')
        $("#board tr:nth-child(3) td:nth-child(1)").html('')
        $("#board tr:nth-child(3) td:nth-child(2)").html('')
        $("#board tr:nth-child(3) td:nth-child(3)").html('')

    }

    $("#reset").click(function () {
        let cell1 = $("#board tr:nth-child(1) td:nth-child(1)").html('')
        let cell2 = $("#board tr:nth-child(1) td:nth-child(2)").html('')
        let cell3 = $("#board tr:nth-child(1) td:nth-child(3)").html('')
        let cell4 = $("#board tr:nth-child(2) td:nth-child(1)").html('')
        let cell5 = $("#board tr:nth-child(2) td:nth-child(2)").html('')
        let cell6 = $("#board tr:nth-child(2) td:nth-child(3)").html('')
        let cell7 = $("#board tr:nth-child(3) td:nth-child(1)").html('')
        let cell8 = $("#board tr:nth-child(3) td:nth-child(2)").html('')
        let cell9 = $("#board tr:nth-child(3) td:nth-child(3)").html('')
        document.getElementById("score1").innerHTML = ""
        document.getElementById("score2").innerHTML = ""
    });

    $("#replay").click(function () {
        let cell1 = $("#board tr:nth-child(1) td:nth-child(1)").html('')
        let cell2 = $("#board tr:nth-child(1) td:nth-child(2)").html('')
        let cell3 = $("#board tr:nth-child(1) td:nth-child(3)").html('')
        let cell4 = $("#board tr:nth-child(2) td:nth-child(1)").html('')
        let cell5 = $("#board tr:nth-child(2) td:nth-child(2)").html('')
        let cell6 = $("#board tr:nth-child(2) td:nth-child(3)").html('')
        let cell7 = $("#board tr:nth-child(3) td:nth-child(1)").html('')
        let cell8 = $("#board tr:nth-child(3) td:nth-child(2)").html('')
        let cell9 = $("#board tr:nth-child(3) td:nth-child(3)").html('')
    });



});