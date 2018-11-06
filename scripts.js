$(document).ready(function(){
    let turn = 1
    let play = true



    $("#board tr td").click(function(){
        if ($(this).text()=="" && play) {
            if ((turn % 2) == 1) {
                $(this).append("X");
            } else {
                $(this).append("O");
            }
            turn++;
            if (winChk()!=-1 && winChk()!=""){
                if (winChk() == "X"){
                    alert("Player 1 wins!");
                    document.getElementById("score1").innerHTML++  
                }
                else if (winChk() == "O"){
                    alert("Player 2 wins!");
                    document.getElementById("score2").innerHTML++
                }
                reset()
            }
        }

    });
    function winChk() {
        
        let cell1 = $("#board tr:nth-child(1) td:nth-child(1)").text()
        let cell2 = $("#board tr:nth-child(1) td:nth-child(2)").text()
        let cell3 = $("#board tr:nth-child(1) td:nth-child(3)").text()
        let cell4 = $("#board tr:nth-child(2) td:nth-child(1)").text()
        let cell5 = $("#board tr:nth-child(2) td:nth-child(2)").text()
        let cell6 = $("#board tr:nth-child(2) td:nth-child(3)").text()
        let cell7 = $("#board tr:nth-child(3) td:nth-child(1)").text()
        let cell8 = $("#board tr:nth-child(3) td:nth-child(2)").text()
        let cell9 = $("#board tr:nth-child(3) td:nth-child(3)").text()


        if ((cell1 == cell2) && (cell2 == cell3)) {
            return cell3
            
        } else if ((cell4 == cell5)&& (cell5 == cell6)) {
            return cell6
        }else if ((cell7 == cell8)&& (cell8 == cell9)) {
            return cell9
        }else if ((cell1 == cell4)&& (cell4 == cell7)) {
            return cell7
        }else if ((cell2 == cell5)&& (cell5 == cell8)) {
            return cell8
        }else if ((cell3 == cell6)&& (cell6 == cell9)) {
            return cell9
        }else if ((cell1 == cell5)&& (cell5 == cell9)) {
            return cell9
        }else if ((cell3 == cell5)&& (cell5 == cell7)) {
            return cell7
        } else{
            return -1
        }
    }
     
    
    

    function reset(){
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

    $("#reset").click(function(){
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

    $("#replay").click(function() {
         cell1 = $("#board tr:nth-child(1) td:nth-child(1)").html('')
         cell2 = $("#board tr:nth-child(1) td:nth-child(2)").html('')
         cell3 = $("#board tr:nth-child(1) td:nth-child(3)").html('')
         cell4 = $("#board tr:nth-child(2) td:nth-child(1)").html('')
         cell5 = $("#board tr:nth-child(2) td:nth-child(2)").html('')
         cell6 = $("#board tr:nth-child(2) td:nth-child(3)").html('')
         cell7 = $("#board tr:nth-child(3) td:nth-child(1)").html('')
         cell8 = $("#board tr:nth-child(3) td:nth-child(2)").html('')
         cell9 = $("#board tr:nth-child(3) td:nth-child(3)").html('')
    });



});