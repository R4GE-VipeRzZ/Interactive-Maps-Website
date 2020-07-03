$(document).ready( function () {
  onPageLoad();
});

var amountCorrect;
var stringTime;
var time = time = [0,0,":",0,0,":",0,0];
var startTime = false;
var atTimerLimit = false;
var unlimitedOption = true;
var allCorrect = false;

function updateScore(){
    $.get("score/highScore.txt", function(data){
        if(amountCorrect > data){
            ammountCorrectString = amountCorrect.toString();

            $.post("score.php", {                   /*This uses AJAX to send the high score to the php file so that the php file can then update the text file*/
                score: ammountCorrectString
            }, function(satus) {
                console.log("Sending new high score");
                location.reload();  /*Force a reload so that the old score file is removed from cache*/
            });
        }

        if(allCorrect == true){                 /*Checks the time if the user has got all the countries correct*/
            $.get("score/bestTime.txt", function(data){
                var bestTimeSplit = data.split(":");
                var timeSplit = stringTime.split(":");


                if(unlimitedOption == false){
                    timeSplit[1] = (14 - parseInt(timeSplit[1])).toString();
                    timeSplit[2] = (60 - parseInt(timeSplit[2])).toString();

                    var tempTime = ["00:","","",":","",""];

                    if((timeSplit[1]).length == 1){
                        tempTime[1] = "0";
                        tempTime[2] = timeSplit[1];
                    }
                    else{
                        tempTime[2] = timeSplit[1];
                    }
                    if((timeSplit[2]).length == 1){
                        tempTime[4] = 0;
                        tempTime[5] = timeSplit[2];
                    }
                    else{
                        tempTime[5] = timeSplit[2];
                    }
                    console.log(tempTime);

                    stringTime = ((tempTime).toString()).replace(/,/g, '');
                    timeSplit = stringTime.split(":");              /*Converts the time to time take if the user was on the timed mode*/
                }

                console.log("New Time ", stringTime);

                console.log(timeSplit[0], " = ", bestTimeSplit[0]);
                console.log(timeSplit[1], " = ", bestTimeSplit[1]);
                console.log(timeSplit[2], " = ", bestTimeSplit[2]);

                if(timeSplit[0] <= bestTimeSplit[0]){
                    if(timeSplit[1] <= bestTimeSplit[1]){
                        if(timeSplit[2] < bestTimeSplit[2]){
                            $.post("time.php", {                   /*This uses AJAX to send the high score to the php file so that the php file can then update the text file*/
                                time: stringTime
                            }, function(satus) {
                                console.log("Sending new best time");
                                location.reload();  /*Force a reload so that the old score file is removed from cache*/
                            });
                        }
                    }
                }
            });
        }
    });


};

function fillAnswers(){
    if(document.getElementById("e1").textContent != "Albania"){
        document.getElementById("e1").textContent = "Albania";
        document.getElementById("e1").style.color = "#fc031c";

        document.getElementById("albania").setAttribute("fill", "#db0000");
        document.getElementById("albania").setAttribute("xlink:title", "Albania");
    }
    
    if(document.getElementById("e2").textContent != "Andorra"){
        document.getElementById("e2").textContent = "Andorra";
        document.getElementById("e2").style.color = "#fc031c";

        document.getElementById("andorra").setAttribute("fill", "#db0000");
        document.getElementById("andorra").setAttribute("xlink:title", "Andorra");
    }
    
    if(document.getElementById("e3").textContent != "Austria"){
        document.getElementById("e3").textContent = "Austria";
        document.getElementById("e3").style.color = "#fc031c";

        document.getElementById("austria").setAttribute("fill", "#db0000");
        document.getElementById("austria").setAttribute("xlink:title", "Austria");
    }
    
    if(document.getElementById("e4").textContent != "Belarus"){
        document.getElementById("e4").textContent = "Belarus";
        document.getElementById("e4").style.color = "#fc031c";

        document.getElementById("belarus").setAttribute("fill", "#db0000");
        document.getElementById("belarus").setAttribute("xlink:title", "Belarus");
    }
    
    if(document.getElementById("e5").textContent != "Belgium"){
        document.getElementById("e5").textContent = "Belgium";
        document.getElementById("e5").style.color = "#fc031c";

        document.getElementById("belgium").setAttribute("fill", "#db0000");
        document.getElementById("belgium").setAttribute("xlink:title", "Belgium");
    }
    
    if((document.getElementById("e6").textContent).length != 22){
        document.getElementById("e6").textContent = "Bosnia And\nHerzegovina";
        document.getElementById("e6").style.color = "#fc031c";

        document.getElementById("bosnia_and_herzegovina").setAttribute("fill", "#db0000");
        document.getElementById("bosnia_and_herzegovina").setAttribute("xlink:title", "Bosnia And Herzegovina");
    }
    
    if(document.getElementById("e2").textContent != "Bulgaria"){
        document.getElementById("e7").textContent = "Bulgaria";
        document.getElementById("e7").style.color = "#fc031c";

        document.getElementById("bulgaria").setAttribute("fill", "#db0000");
        document.getElementById("bulgaria").setAttribute("xlink:title", "Bulgaria");
    }
    
    if(document.getElementById("e8").textContent != "Croatia"){
        document.getElementById("e8").textContent = "Croatia";
        document.getElementById("e8").style.color = "#fc031c";

        document.getElementById("croatia").setAttribute("fill", "#db0000");
        document.getElementById("croatia").setAttribute("xlink:title", "Croatia");
    }
    
    if(document.getElementById("e9").textContent != "Czech Republic"){
        document.getElementById("e9").textContent = "Czech Republic";
        document.getElementById("e9").style.color = "#fc031c";

        document.getElementById("czech_republic").setAttribute("fill", "#db0000");
        document.getElementById("czech_republic").setAttribute("xlink:title", "Czech Republic");
    }
    
    if(document.getElementById("e10").textContent != "Denmark"){
        document.getElementById("e10").textContent = "Denmark";
        document.getElementById("e10").style.color = "#fc031c";

        document.getElementById("denmark").setAttribute("fill", "#db0000");
        document.getElementById("denmark").setAttribute("xlink:title", "Denmark");
    }
    
    if(document.getElementById("e11").textContent != "England"){
        document.getElementById("e11").textContent = "England";
        document.getElementById("e11").style.color = "#fc031c";

        document.getElementById("england").setAttribute("fill", "#db0000");
        document.getElementById("england").setAttribute("xlink:title", "England");
        document.getElementById("turks_and_caicos_islands").setAttribute("fill", "#db0000");
        document.getElementById("turks_and_caicos_islands").setAttribute("xlink:title", "Turks And Caicos Islands (England)");
        document.getElementById("the_british_virgin_islands").setAttribute("fill", "#db0000");
        document.getElementById("the_british_virgin_islands").setAttribute("xlink:title", "The British Virgin Islands (England)");
        document.getElementById("anguila").setAttribute("fill", "#db0000");
        document.getElementById("anguila").setAttribute("xlink:title", "anguila (England)");
        document.getElementById("montserrat").setAttribute("fill", "#db0000");
        document.getElementById("montserrat").setAttribute("xlink:title", "Montserrat (England)");
    }
    
    if(document.getElementById("e12").textContent != "Estonia"){
        document.getElementById("e12").textContent = "Estonia";
        document.getElementById("e12").style.color = "#fc031c";

        document.getElementById("estonia").setAttribute("fill", "#db0000");
        document.getElementById("estonia").setAttribute("xlink:title", "Estonia");
    }
    
    if(document.getElementById("e13").textContent != "Finland"){
        document.getElementById("e13").textContent = "Finland";
        document.getElementById("e13").style.color = "#fc031c";

        document.getElementById("finland").setAttribute("fill", "#db0000");
        document.getElementById("finland").setAttribute("xlink:title", "Finland");
    }
    
    if(document.getElementById("e14").textContent != "France"){
        document.getElementById("e14").textContent = "France";
        document.getElementById("e14").style.color = "#fc031c";

        document.getElementById("france").setAttribute("fill", "#db0000");
        document.getElementById("france").setAttribute("xlink:title", "France");
        document.getElementById("new_caledonia").setAttribute("fill", "#db0000");
        document.getElementById("new_caledonia").setAttribute("xlink:title", "New Caledonia");
    }
    
    if(document.getElementById("e15").textContent != "Germany"){
        document.getElementById("e15").textContent = "Germany";
        document.getElementById("e15").style.color = "#fc031c";

        document.getElementById("germany").setAttribute("fill", "#db0000");
        document.getElementById("germany").setAttribute("xlink:title", "Germany");
    }
    
    if(document.getElementById("e16").textContent != "Greece"){
        document.getElementById("e16").textContent = "Greece";
        document.getElementById("e16").style.color = "#fc031c";

        document.getElementById("greece").setAttribute("fill", "#db0000");
        document.getElementById("greece").setAttribute("xlink:title", "Greece");
    }
    
    if(document.getElementById("e17").textContent != "Hungary"){
        document.getElementById("e17").textContent = "Hungary";
        document.getElementById("e17").style.color = "#fc031c";

        document.getElementById("hungary").setAttribute("fill", "#db0000");
        document.getElementById("hungary").setAttribute("xlink:title", "Hungary");
    }
    
    if(document.getElementById("e18").textContent != "Iceland"){
        document.getElementById("e18").textContent = "Iceland";
        document.getElementById("e18").style.color = "#fc031c";

        document.getElementById("iceland").setAttribute("fill", "#db0000");
        document.getElementById("iceland").setAttribute("xlink:title", "Iceland");
    }
    
    if(document.getElementById("e19").textContent != "Ireland"){
        document.getElementById("e19").textContent = "Ireland";
        document.getElementById("e19").style.color = "#fc031c";

        document.getElementById("ireland").setAttribute("fill", "#db0000");
        document.getElementById("ireland").setAttribute("xlink:title", "Ireland");
    }
    
    if(document.getElementById("e20").textContent != "Italy"){
        document.getElementById("e20").textContent = "Italy";
        document.getElementById("e20").style.color = "#fc031c";

        document.getElementById("italy").setAttribute("fill", "#db0000");
        document.getElementById("italy").setAttribute("xlink:title", "Italy");
    }
    
    if(document.getElementById("e21").textContent != "Kosovo"){
        document.getElementById("e21").textContent = "Kosovo";
        document.getElementById("e21").style.color = "#fc031c";

        document.getElementById("kosovo").setAttribute("fill", "#db0000");
        document.getElementById("kosovo").setAttribute("xlink:title", "Kosovo");
    }
    
    if(document.getElementById("e22").textContent != "Latvia"){
        document.getElementById("e22").textContent = "Latvia";
        document.getElementById("e22").style.color = "#fc031c";

        document.getElementById("latvia").setAttribute("fill", "#db0000");
        document.getElementById("latvia").setAttribute("xlink:title", "Latvia");
    }
    
    if(document.getElementById("e23").textContent != "Liechtenstein"){
        document.getElementById("e23").textContent = "Liechtenstein";
        document.getElementById("e23").style.color = "#fc031c";

        document.getElementById("liechtenstein").setAttribute("fill", "#db0000");
        document.getElementById("liechtenstein").setAttribute("xlink:title", "Liechtenstein");
    }
    
    if(document.getElementById("e24").textContent != "Lithuania"){
        document.getElementById("e24").textContent = "Lithuania";
        document.getElementById("e24").style.color = "#fc031c";

        document.getElementById("lithuania").setAttribute("fill", "#db0000");
        document.getElementById("lithuania").setAttribute("xlink:title", "Lithuania");
    }
    
    if(document.getElementById("e25").textContent != "Luxembourg"){
        document.getElementById("e25").textContent = "Luxembourg";
        document.getElementById("e25").style.color = "#fc031c";

        document.getElementById("luxembourg").setAttribute("fill", "#db0000");
        document.getElementById("luxembourg").setAttribute("xlink:title", "Luxembourg");
    }
    
    if(document.getElementById("e26").textContent != "Malta"){
        document.getElementById("e26").textContent = "Malta";
        document.getElementById("e26").style.color = "#fc031c";

        document.getElementById("malta").setAttribute("fill", "#db0000");
        document.getElementById("malta").setAttribute("xlink:title", "Malta");
    }
    
    if(document.getElementById("e27").textContent != "Moldova"){
        document.getElementById("e27").textContent = "Moldova";
        document.getElementById("e27").style.color = "#fc031c";

        document.getElementById("moldova").setAttribute("fill", "#db0000");
        document.getElementById("moldova").setAttribute("xlink:title", "Moldova");
    }
    
    if(document.getElementById("e28").textContent != "Monaco"){
        document.getElementById("e28").textContent = "Monaco";
        document.getElementById("e28").style.color = "#fc031c";

        document.getElementById("monaco").setAttribute("fill", "#db0000");
        document.getElementById("monaco").setAttribute("xlink:title", "Monaco");
    }
    
    if(document.getElementById("e29").textContent != "Montenegro"){
        document.getElementById("e29").textContent = "Montenegro";
        document.getElementById("e29").style.color = "#fc031c";

        document.getElementById("montenegro").setAttribute("fill", "#db0000");
        document.getElementById("montenegro").setAttribute("xlink:title", "Montenegro");
    }
    
    if(document.getElementById("e30").textContent != "Netherlands"){
        document.getElementById("e30").textContent = "Netherlands";
        document.getElementById("e30").style.color = "#fc031c";

        document.getElementById("netherlands").setAttribute("fill", "#db0000");
        document.getElementById("netherlands").setAttribute("xlink:title", "Netherlands");
    }
    
    if(document.getElementById("e31").textContent != "Northern Ireland"){
        document.getElementById("e31").textContent = "Northern Ireland";
        document.getElementById("e31").style.color = "#fc031c";

        document.getElementById("northern_ireland").setAttribute("fill", "#db0000");
        document.getElementById("northern_ireland").setAttribute("xlink:title", "Northern Ireland");
    }
    
    if(document.getElementById("e32").textContent != "North Macedonia"){
        document.getElementById("e32").textContent = "North Macedonia";
        document.getElementById("e32").style.color = "#fc031c";

        document.getElementById("north_macedonia").setAttribute("fill", "#db0000");
        document.getElementById("north_macedonia").setAttribute("xlink:title", "North Macedonia");
    }
    
    if(document.getElementById("e33").textContent != "Norway"){
        document.getElementById("e33").textContent = "Norway";
        document.getElementById("e33").style.color = "#fc031c";

        document.getElementById("norway").setAttribute("fill", "#db0000");
        document.getElementById("norway").setAttribute("xlink:title", "Norway");
    }
    
    if(document.getElementById("e34").textContent != "Poland"){
        document.getElementById("e34").textContent = "Poland";
        document.getElementById("e34").style.color = "#fc031c";

        document.getElementById("poland").setAttribute("fill", "#db0000");
        document.getElementById("poland").setAttribute("xlink:title", "Poland");
    }
    
    if(document.getElementById("e35").textContent != "Portugal"){
        document.getElementById("e35").textContent = "Portugal";
        document.getElementById("e35").style.color = "#fc031c";

        document.getElementById("portugal").setAttribute("fill", "#db0000");
        document.getElementById("portugal").setAttribute("xlink:title", "Portugal");
    }
    
    if(document.getElementById("e36").textContent != "Romania"){
        document.getElementById("e36").textContent = "Romania";
        document.getElementById("e36").style.color = "#fc031c";

        document.getElementById("romania").setAttribute("fill", "#db0000");
        document.getElementById("romania").setAttribute("xlink:title", "Romania");
    }
    
    if(document.getElementById("e37").textContent != "Russia"){
        document.getElementById("e37").textContent = "Russia";
        document.getElementById("e37").style.color = "#fc031c";

        document.getElementById("russia").setAttribute("fill", "#db0000");
        document.getElementById("russia").setAttribute("xlink:title", "Russia");
    }
    
    if(document.getElementById("e38").textContent != "San Marino"){
        document.getElementById("e38").textContent = "San Marino";
        document.getElementById("e38").style.color = "#fc031c";

        document.getElementById("san_marino").setAttribute("fill", "#db0000");
        document.getElementById("san_marino").setAttribute("xlink:title", "San Marino");
    }
    
    if(document.getElementById("e39").textContent != "Scotland"){
        document.getElementById("e39").textContent = "Scotland";
        document.getElementById("e39").style.color = "#fc031c";

        document.getElementById("scotland").setAttribute("fill", "#db0000");
        document.getElementById("scotland").setAttribute("xlink:title", "Scotland");
    }
    
    if(document.getElementById("e40").textContent != "Serbia"){
        document.getElementById("e40").textContent = "Serbia";
        document.getElementById("e40").style.color = "#fc031c";

        document.getElementById("serbia").setAttribute("fill", "#db0000");
        document.getElementById("serbia").setAttribute("xlink:title", "Serbia");
    }
    
    if(document.getElementById("e41").textContent != "Slovakia"){
        document.getElementById("e41").textContent = "Slovakia";
        document.getElementById("e41").style.color = "#fc031c";

        document.getElementById("slovakia").setAttribute("fill", "#db0000");
        document.getElementById("slovakia").setAttribute("xlink:title", "Slovakia");
    }
    
    if(document.getElementById("e42").textContent != "Slovenia"){
        document.getElementById("e42").textContent = "Slovenia";
        document.getElementById("e42").style.color = "#fc031c";

        document.getElementById("slovenia").setAttribute("fill", "#db0000");
        document.getElementById("slovenia").setAttribute("xlink:title", "Slovenia");
    }
    
    if(document.getElementById("e43").textContent != "Spain"){
        document.getElementById("e43").textContent = "Spain";
        document.getElementById("e43").style.color = "#fc031c";

        document.getElementById("spain").setAttribute("fill", "#db0000");
        document.getElementById("spain").setAttribute("xlink:title", "Spain");
    }
    
    if(document.getElementById("e44").textContent != "Sweden"){
        document.getElementById("e44").textContent = "Sweden";
        document.getElementById("e44").style.color = "#fc031c";

        document.getElementById("sweden").setAttribute("fill", "#db0000");
        document.getElementById("sweden").setAttribute("xlink:title", "Sweden");
    }
    
    if(document.getElementById("e45").textContent != "Switzerland"){
        document.getElementById("e45").textContent = "Switzerland";
        document.getElementById("e45").style.color = "#fc031c";

        document.getElementById("switzerland").setAttribute("fill", "#db0000");
        document.getElementById("switzerland").setAttribute("xlink:title", "Switzerland");
    }
    
    if(document.getElementById("e46").textContent != "Ukraine"){
        document.getElementById("e46").textContent = "Ukraine";
        document.getElementById("e46").style.color = "#fc031c";

        document.getElementById("ukraine").setAttribute("fill", "#db0000");
        document.getElementById("ukraine").setAttribute("xlink:title", "Ukraine");
    }
    
    if(document.getElementById("e47").textContent != "Vatican City"){
        document.getElementById("e47").textContent = "Vatican City";
        document.getElementById("e47").style.color = "#fc031c";

        document.getElementById("vatican_city").setAttribute("fill", "#db0000");
        document.getElementById("vatican_city").setAttribute("xlink:title", "Vatican City");
    }
    
    if(document.getElementById("e48").textContent != "Wales"){
        document.getElementById("e48").textContent = "Wales";
        document.getElementById("e48").style.color = "#fc031c";

        document.getElementById("wales").setAttribute("fill", "#db0000");
        document.getElementById("wales").setAttribute("xlink:title", "Wales");
    }
    
    if(document.getElementById("a1").textContent != "Afghanistan"){
        document.getElementById("a1").textContent = "Afghanistan";
        document.getElementById("a1").style.color = "#fc031c";

        document.getElementById("afghanistan").setAttribute("fill", "#db0000");
        document.getElementById("afghanistan").setAttribute("xlink:title", "Afghanistan");
    }
    
    if(document.getElementById("a2").textContent != "Armenia"){
        document.getElementById("a2").textContent = "Armenia";
        document.getElementById("a2").style.color = "#fc031c";

        document.getElementById("armenia").setAttribute("fill", "#db0000");
        document.getElementById("armenia").setAttribute("xlink:title", "Armenia");
    }
    
    if(document.getElementById("a3").textContent != "Azerbaijan"){
        document.getElementById("a3").textContent = "Azerbaijan";
        document.getElementById("a3").style.color = "#fc031c";

        document.getElementById("azerbaijan").setAttribute("fill", "#db0000");
        document.getElementById("azerbaijan").setAttribute("xlink:title", "Azerbaijan");
    }
    
    if(document.getElementById("a4").textContent != "Bahrain"){
        document.getElementById("a4").textContent = "Bahrain";
        document.getElementById("a4").style.color = "#fc031c";

        document.getElementById("bahrain").setAttribute("fill", "#db0000");
        document.getElementById("bahrain").setAttribute("xlink:title", "Bahrain");
    }
    
    if(document.getElementById("a5").textContent != "Bangladesh"){
        document.getElementById("a5").textContent = "Bangladesh";
        document.getElementById("a5").style.color = "#fc031c";

        document.getElementById("bangladesh").setAttribute("fill", "#db0000");
        document.getElementById("bangladesh").setAttribute("xlink:title", "Bangladesh");
    }
    
    if(document.getElementById("a6").textContent != "Bhutan"){
        document.getElementById("a6").textContent = "Bhutan";
        document.getElementById("a6").style.color = "#fc031c";

        document.getElementById("bhutan").setAttribute("fill", "#db0000");
        document.getElementById("bhutan").setAttribute("xlink:title", "Bhutan");
    }
    
    if(document.getElementById("a7").textContent != "Brunei"){
        document.getElementById("a7").textContent = "Brunei";
        document.getElementById("a7").style.color = "#fc031c";

        document.getElementById("brunei").setAttribute("fill", "#db0000");
        document.getElementById("brunei").setAttribute("xlink:title", "Brunei");
    }

    if(document.getElementById("a8").textContent != "Cambodia"){
        document.getElementById("a8").textContent = "Cambodia";
        document.getElementById("a8").style.color = "#fc031c";

        document.getElementById("cambodia").setAttribute("fill", "#db0000");
        document.getElementById("cambodia").setAttribute("xlink:title", "Cambodia");
    }
    
    if(document.getElementById("a9").textContent != "China"){
        document.getElementById("a9").textContent = "China";
        document.getElementById("a9").style.color = "#fc031c";

        document.getElementById("china").setAttribute("fill", "#db0000");
        document.getElementById("china").setAttribute("xlink:title", "China");
    }
    
    if(document.getElementById("a10").textContent != "Cyprus"){
        document.getElementById("a10").textContent = "Cyprus";
        document.getElementById("a10").style.color = "#fc031c";

        document.getElementById("cyprus").setAttribute("fill", "#db0000");
        document.getElementById("cyprus").setAttribute("xlink:title", "Cyprus");
    }
    
    if(document.getElementById("a11").textContent != "East Timor"){
        document.getElementById("a11").textContent = "East Timor";
        document.getElementById("a11").style.color = "#fc031c";

        document.getElementById("east_timor").setAttribute("fill", "#db0000");
        document.getElementById("east_timor").setAttribute("xlink:title", "East Timor");
    }
    
    if(document.getElementById("a12").textContent != "Georgia"){
        document.getElementById("a12").textContent = "Georgia";
        document.getElementById("a12").style.color = "#fc031c";

        document.getElementById("georgia").setAttribute("fill", "#db0000");
        document.getElementById("georgia").setAttribute("xlink:title", "Georgia");
    }
    
    if(document.getElementById("a13").textContent != "India"){
        document.getElementById("a13").textContent = "India";
        document.getElementById("a13").style.color = "#fc031c";

        document.getElementById("india").setAttribute("fill", "#db0000");
        document.getElementById("india").setAttribute("xlink:title", "India");
    }
    
    if(document.getElementById("a14").textContent != "Indonesia"){
        document.getElementById("a14").textContent = "Indonesia";
        document.getElementById("a14").style.color = "#fc031c";

        document.getElementById("indonesia").setAttribute("fill", "#db0000");
        document.getElementById("indonesia").setAttribute("xlink:title", "Indonesia");
    }
    
    if(document.getElementById("a15").textContent != "Iran"){
        document.getElementById("a15").textContent = "Iran";
        document.getElementById("a15").style.color = "#fc031c";

        document.getElementById("iran").setAttribute("fill", "#db0000");
        document.getElementById("iran").setAttribute("xlink:title", "Iran");
    }
    
    if(document.getElementById("a16").textContent != "Iraq"){
        document.getElementById("a16").textContent = "Iraq";
        document.getElementById("a16").style.color = "#fc031c";

        document.getElementById("iraq").setAttribute("fill", "#db0000");
        document.getElementById("iraq").setAttribute("xlink:title", "Iraq");
    }
    
    if(document.getElementById("a17").textContent != "Israel"){
        document.getElementById("a17").textContent = "Israel";
        document.getElementById("a17").style.color = "#fc031c";

        document.getElementById("israel").setAttribute("fill", "#db0000");
        document.getElementById("israel").setAttribute("xlink:title", "Israel");
    }
    
    if(document.getElementById("a18").textContent != "Japan"){
        document.getElementById("a18").textContent = "Japan";
        document.getElementById("a18").style.color = "#fc031c";

        document.getElementById("japan").setAttribute("fill", "#db0000");
        document.getElementById("japan").setAttribute("xlink:title", "Japan");
    }
    
    if(document.getElementById("a19").textContent != "Jordan"){
        document.getElementById("a19").textContent = "Jordan";
        document.getElementById("a19").style.color = "#fc031c";

        document.getElementById("jordan").setAttribute("fill", "#db0000");
        document.getElementById("jordan").setAttribute("xlink:title", "Jordan");
    }
    
    if(document.getElementById("a20").textContent != "Kazakhstan"){
        document.getElementById("a20").textContent = "Kazakhstan";
        document.getElementById("a20").style.color = "#fc031c";

        document.getElementById("kazakhstan").setAttribute("fill", "#db0000");
        document.getElementById("kazakhstan").setAttribute("xlink:title", "Kazakhstan");
    }
    
    if(document.getElementById("a21").textContent != "Kuwait"){
        document.getElementById("a21").textContent = "Kuwait";
        document.getElementById("a21").style.color = "#fc031c";

        document.getElementById("kuwait").setAttribute("fill", "#db0000");
        document.getElementById("kuwait").setAttribute("xlink:title", "Kuwait");
    }
    
    if(document.getElementById("a22").textContent != "Kyrgyzstan"){
        document.getElementById("a22").textContent = "Kyrgyzstan";
        document.getElementById("a22").style.color = "#fc031c";

        document.getElementById("kyrgyzstan").setAttribute("fill", "#db0000");
        document.getElementById("kyrgyzstan").setAttribute("xlink:title", "Kyrgyzstan");
    }
    
    if(document.getElementById("a23").textContent != "Laos"){
        document.getElementById("a23").textContent = "Laos";
        document.getElementById("a23").style.color = "#fc031c";

        document.getElementById("laos").setAttribute("fill", "#db0000");
        document.getElementById("laos").setAttribute("xlink:title", "Laos");
    }
    
    if(document.getElementById("a24").textContent != "Lebanon"){
        document.getElementById("a24").textContent = "Lebanon";
        document.getElementById("a24").style.color = "#fc031c";

        document.getElementById("lebanon").setAttribute("fill", "#db0000");
        document.getElementById("lebanon").setAttribute("xlink:title", "Lebanon");
    }
    
    if(document.getElementById("a25").textContent != "Malaysia"){
        document.getElementById("a25").textContent = "Malaysia";
        document.getElementById("a25").style.color = "#fc031c";

        document.getElementById("malaysia").setAttribute("fill", "#db0000");
        document.getElementById("malaysia").setAttribute("xlink:title", "Malaysia");
    }
    
    if(document.getElementById("a26").textContent != "Maldives"){
        document.getElementById("a26").textContent = "Maldives";
        document.getElementById("a26").style.color = "#fc031c";

        document.getElementById("maldives").setAttribute("fill", "#db0000");
        document.getElementById("maldives").setAttribute("xlink:title", "Maldives");
    }
    
    if(document.getElementById("a27").textContent != "Mongolia"){
        document.getElementById("a27").textContent = "Mongolia";
        document.getElementById("a27").style.color = "#fc031c";

        document.getElementById("mongolia").setAttribute("fill", "#db0000");
        document.getElementById("mongolia").setAttribute("xlink:title", "Mongolia");
    }
    
    if(document.getElementById("a28").textContent != "Myanmar"){
        document.getElementById("a28").textContent = "Myanmar";
        document.getElementById("a28").style.color = "#fc031c";

        document.getElementById("myanmar").setAttribute("fill", "#db0000");
        document.getElementById("myanmar").setAttribute("xlink:title", "Myanmar");
    }
    
    if(document.getElementById("a29").textContent != "Nepal"){
        document.getElementById("a29").textContent = "Nepal";
        document.getElementById("a29").style.color = "#fc031c";

        document.getElementById("nepal").setAttribute("fill", "#db0000");
        document.getElementById("nepal").setAttribute("xlink:title", "Nepal");
    }
    
    if(document.getElementById("a30").textContent != "North Korea"){
        document.getElementById("a30").textContent = "North Korea";
        document.getElementById("a30").style.color = "#fc031c";

        document.getElementById("north_korea").setAttribute("fill", "#db0000");
        document.getElementById("north_korea").setAttribute("xlink:title", "North Korea");
    }
    
    if(document.getElementById("a31").textContent != "Oman"){
        document.getElementById("a31").textContent = "Oman";
        document.getElementById("a31").style.color = "#fc031c";

        document.getElementById("oman").setAttribute("fill", "#db0000");
        document.getElementById("oman").setAttribute("xlink:title", "Oman");
    }
    
    if(document.getElementById("a32").textContent != "Pakistan"){
        document.getElementById("a32").textContent = "Pakistan";
        document.getElementById("a32").style.color = "#fc031c";

        document.getElementById("pakistan").setAttribute("fill", "#db0000");
        document.getElementById("pakistan").setAttribute("xlink:title", "Pakistan");
    }
    
    if(document.getElementById("a33").textContent != "Philippines"){
        document.getElementById("a33").textContent = "Philippines";
        document.getElementById("a33").style.color = "#fc031c";

        document.getElementById("philippines").setAttribute("fill", "#db0000");
        document.getElementById("philippines").setAttribute("xlink:title", "Philippines");
    }
    
    if(document.getElementById("a34").textContent != "Qatar"){
        document.getElementById("a34").textContent = "Qatar";
        document.getElementById("a34").style.color = "#fc031c";

        document.getElementById("qatar").setAttribute("fill", "#db0000");
        document.getElementById("qatar").setAttribute("xlink:title", "Qatar");
    }
    
    if(document.getElementById("a35").textContent != "Saudi Arabia"){
        document.getElementById("a35").textContent = "Saudi Arabia";
        document.getElementById("a35").style.color = "#fc031c";

        document.getElementById("saudi_arabia").setAttribute("fill", "#db0000");
        document.getElementById("saudi_arabia").setAttribute("xlink:title", "Saudi Arabia");
    }
    
    if(document.getElementById("a36").textContent != "Singapore"){
        document.getElementById("a36").textContent = "Singapore";
        document.getElementById("a36").style.color = "#fc031c";

        document.getElementById("singapore").setAttribute("fill", "#db0000");
        document.getElementById("singapore").setAttribute("xlink:title", "Singapore");
    }
    
    if(document.getElementById("a37").textContent != "South Korea"){
        document.getElementById("a37").textContent = "South Korea";
        document.getElementById("a37").style.color = "#fc031c";

        document.getElementById("south_korea").setAttribute("fill", "#db0000");
        document.getElementById("south_korea").setAttribute("xlink:title", "South Korea");
    }
    
    if(document.getElementById("a38").textContent != "Sri Lanka"){
        document.getElementById("a38").textContent = "Sri Lanka";
        document.getElementById("a38").style.color = "#fc031c";

        document.getElementById("sri_lanka").setAttribute("fill", "#db0000");
        document.getElementById("sri_lanka").setAttribute("xlink:title", "Sri Lanka");
    }
    
    if(document.getElementById("a39").textContent != "Syria"){
        document.getElementById("a39").textContent = "Syria";
        document.getElementById("a39").style.color = "#fc031c";

        document.getElementById("syria").setAttribute("fill", "#db0000");
        document.getElementById("syria").setAttribute("xlink:title", "Syria");
    }
    
    if(document.getElementById("a40").textContent != "Taiwan"){
        document.getElementById("a40").textContent = "Taiwan";
        document.getElementById("a40").style.color = "#fc031c";

        document.getElementById("taiwan").setAttribute("fill", "#db0000");
        document.getElementById("taiwan").setAttribute("xlink:title", "Taiwan");
    }
    
    if(document.getElementById("a41").textContent != "Tajikistan"){
        document.getElementById("a41").textContent = "Tajikistan";
        document.getElementById("a41").style.color = "#fc031c";

        document.getElementById("tajikistan").setAttribute("fill", "#db0000");
        document.getElementById("tajikistan").setAttribute("xlink:title", "Tajikistan");
    }
    
    if(document.getElementById("a42").textContent != "Thailand"){
        document.getElementById("a42").textContent = "Thailand";
        document.getElementById("a42").style.color = "#fc031c";

        document.getElementById("thailand").setAttribute("fill", "#db0000");
        document.getElementById("thailand").setAttribute("xlink:title", "Thailand");
    }
    
    if(document.getElementById("a43").textContent != "Turkey"){
        document.getElementById("a43").textContent = "Turkey";
        document.getElementById("a43").style.color = "#fc031c";

        document.getElementById("turkey").setAttribute("fill", "#db0000");
        document.getElementById("turkey").setAttribute("xlink:title", "Turkey");
    }
    
    if(document.getElementById("a44").textContent != "Turkmenistan"){
        document.getElementById("a44").textContent = "Turkmenistan";
        document.getElementById("a44").style.color = "#fc031c";

        document.getElementById("turkmenistan").setAttribute("fill", "#db0000");
        document.getElementById("turkmenistan").setAttribute("xlink:title", "Turkmenistan");
    }
    
    if(document.getElementById("a45").textContent != "United Arab Emirates"){
        document.getElementById("a45").textContent = "United Arab Emirates";
        document.getElementById("a45").style.color = "#fc031c";

        document.getElementById("uae").setAttribute("fill", "#db0000");
        document.getElementById("uae").setAttribute("xlink:title", "United Arabia Emirates");
    }
    
    if(document.getElementById("a46").textContent != "Uzbekistan"){
        document.getElementById("a46").textContent = "Uzbekistan";
        document.getElementById("a46").style.color = "#fc031c";

        document.getElementById("uzbekistan").setAttribute("fill", "#db0000");
        document.getElementById("uzbekistan").setAttribute("xlink:title", "Uzbekistan");
    }
    
    if(document.getElementById("a47").textContent != "Vietnam"){
        document.getElementById("a47").textContent = "Vietnam";
        document.getElementById("a47").style.color = "#fc031c";

        document.getElementById("vietnam").setAttribute("fill", "#db0000");
        document.getElementById("vietnam").setAttribute("xlink:title", "Vietnam");
    }
    
    if(document.getElementById("a48").textContent != "Yemen"){
        document.getElementById("a48").textContent = "Yemen";
        document.getElementById("a48").style.color = "#fc031c";

        document.getElementById("yemen").setAttribute("fill", "#db0000");
        document.getElementById("yemen").setAttribute("xlink:title", "Yemen");
    }
    
    if(document.getElementById("c1").textContent != "Algeria"){
        document.getElementById("c1").textContent = "Algeria";
        document.getElementById("c1").style.color = "#fc031c";

        document.getElementById("algeria").setAttribute("fill", "#db0000");
        document.getElementById("algeria").setAttribute("xlink:title", "Algeria");
    }
    
    if(document.getElementById("c2").textContent != "Angola"){
        document.getElementById("c2").textContent = "Angola";
        document.getElementById("c2").style.color = "#fc031c";

        document.getElementById("angola").setAttribute("fill", "#db0000");
        document.getElementById("angola").setAttribute("xlink:title", "Angola");
    }
    
    if(document.getElementById("c3").textContent != "Benin"){
        document.getElementById("c3").textContent = "Benin";
        document.getElementById("c3").style.color = "#fc031c";

        document.getElementById("benin").setAttribute("fill", "#db0000");
        document.getElementById("benin").setAttribute("xlink:title", "Benin");
    }
    
    if(document.getElementById("c4").textContent != "Botswana"){
        document.getElementById("c4").textContent = "Botswana";
        document.getElementById("c4").style.color = "#fc031c";

        document.getElementById("botswana").setAttribute("fill", "#db0000");
        document.getElementById("botswana").setAttribute("xlink:title", "Botswana");
    }
    
    if(document.getElementById("c5").textContent != "Burkina Faso"){
        document.getElementById("c5").textContent = "Burkina Faso";
        document.getElementById("c5").style.color = "#fc031c";

        document.getElementById("burkina_faso").setAttribute("fill", "#db0000");
        document.getElementById("burkina_faso").setAttribute("xlink:title", "Burkina Faso");
    }
    
    if(document.getElementById("c6").textContent != "Burundi"){
        document.getElementById("c6").textContent = "Burundi";
        document.getElementById("c6").style.color = "#fc031c";

        document.getElementById("burundi").setAttribute("fill", "#db0000");
        document.getElementById("burundi").setAttribute("xlink:title", "Burundi");
    }
    
    if(document.getElementById("c7").textContent != "Cameroon"){
        document.getElementById("c7").textContent = "Cameroon";
        document.getElementById("c7").style.color = "#fc031c";

        document.getElementById("cameroon").setAttribute("fill", "#db0000");
        document.getElementById("cameroon").setAttribute("xlink:title", "Cameroon");
    }
    
    if(document.getElementById("c8").textContent != "Cape Verde"){
        document.getElementById("c8").textContent = "Cape Verde";
        document.getElementById("c8").style.color = "#fc031c";

        document.getElementById("cape_verde").setAttribute("fill", "#db0000");
        document.getElementById("cape_verde").setAttribute("xlink:title", "Cape Verde");
    }
    
    if(document.getElementById("c9").textContent != "Central African Republic"){
        document.getElementById("c9").textContent = "Central African Republic";
        document.getElementById("c9").style.color = "#fc031c";

        document.getElementById("central_african_republic").setAttribute("fill", "#db0000");
        document.getElementById("central_african_republic").setAttribute("xlink:title", "Central African Republic");
    }
    
    if(document.getElementById("c10").textContent != "Chad"){
        document.getElementById("c10").textContent = "Chad";
        document.getElementById("c10").style.color = "#fc031c";

        document.getElementById("chad").setAttribute("fill", "#db0000");
        document.getElementById("chad").setAttribute("xlink:title", "Chad");
    }
    
    if(document.getElementById("c11").textContent != "Comoros"){
        document.getElementById("c11").textContent = "Comoros";
        document.getElementById("c11").style.color = "#fc031c";

        document.getElementById("comoros").setAttribute("fill", "#db0000");
        document.getElementById("comoros").setAttribute("xlink:title", "Comoros");
    }
    
    if(document.getElementById("c12").textContent != "Cote d'ivoire"){
        document.getElementById("c12").textContent = "Cote d'ivoire";
        document.getElementById("c12").style.color = "#fc031c";

        document.getElementById("cote_divoire").setAttribute("fill", "#db0000");
        document.getElementById("cote_divoire").setAttribute("xlink:title", "Cote d'ivoire");
    }
    
    if((document.getElementById("c13").textContent).length != 32){
        document.getElementById("c13").textContent = "Democratic Republic\nOf The Congo";
        document.getElementById("c13").style.color = "#fc031c";

        document.getElementById("democratic_republic_of_the_congo").setAttribute("fill", "#db0000");
        document.getElementById("democratic_republic_of_the_congo").setAttribute("xlink:title", "Democratic Republic Of The Congo");
    }
    
    if(document.getElementById("c14").textContent != "Djibouti"){
        document.getElementById("c14").textContent = "Djibouti";
        document.getElementById("c14").style.color = "#fc031c";

        document.getElementById("djibouti").setAttribute("fill", "#db0000");
        document.getElementById("djibouti").setAttribute("xlink:title", "Djibouti");
    }
    
    if(document.getElementById("c15").textContent != "Egypt"){
        document.getElementById("c15").textContent = "Egypt";
        document.getElementById("c15").style.color = "#fc031c";

        document.getElementById("egypt").setAttribute("fill", "#db0000");
        document.getElementById("egypt").setAttribute("xlink:title", "Egypt");
    }
    
    if(document.getElementById("c16").textContent != "Equatorial Guinea"){
        document.getElementById("c16").textContent = "Equatorial Guinea";
        document.getElementById("c16").style.color = "#fc031c";

        document.getElementById("equatorial_guinea").setAttribute("fill", "#db0000");
        document.getElementById("equatorial_guinea").setAttribute("xlink:title", "Equatorial Guinea");
    }
    
    if(document.getElementById("c17").textContent != "Eritrea"){
        document.getElementById("c17").textContent = "Eritrea";
        document.getElementById("c17").style.color = "#fc031c";

        document.getElementById("eritrea").setAttribute("fill", "#db0000");
        document.getElementById("eritrea").setAttribute("xlink:title", "Eritrea");
    }
    
    if(document.getElementById("c18").textContent != "Eswatini"){
        document.getElementById("c18").textContent = "Eswatini";
        document.getElementById("c18").style.color = "#fc031c";

        document.getElementById("eswatini").setAttribute("fill", "#db0000");
        document.getElementById("eswatini").setAttribute("xlink:title", "Eswatini");
    }
    
    if(document.getElementById("c19").textContent != "Ethiopia"){
        document.getElementById("c19").textContent = "Ethiopia";
        document.getElementById("c19").style.color = "#fc031c";

        document.getElementById("ethiopia").setAttribute("fill", "#db0000");
        document.getElementById("ethiopia").setAttribute("xlink:title", "Ethiopia");
    }
    
    if(document.getElementById("c20").textContent != "Gabon"){
        document.getElementById("c20").textContent = "Gabon";
        document.getElementById("c20").style.color = "#fc031c";

        document.getElementById("gabon").setAttribute("fill", "#db0000");
        document.getElementById("gabon").setAttribute("xlink:title", "Gabon");
    }
    
    if(document.getElementById("c21").textContent != "Ghana"){
        document.getElementById("c21").textContent = "Ghana";
        document.getElementById("c21").style.color = "#fc031c";

        document.getElementById("ghana").setAttribute("fill", "#db0000");
        document.getElementById("ghana").setAttribute("xlink:title", "Ghana");
    }
    
    if(document.getElementById("c22").textContent != "Guinea"){
        document.getElementById("c22").textContent = "Guinea";
        document.getElementById("c22").style.color = "#fc031c";

        document.getElementById("guinea").setAttribute("fill", "#db0000");
        document.getElementById("guinea").setAttribute("xlink:title", "Guinea");
    }
    
    if(document.getElementById("c23").textContent != "Guinea-bissau"){
        document.getElementById("c23").textContent = "Guinea-bissau";
        document.getElementById("c23").style.color = "#fc031c";

        document.getElementById("guinea_bissau").setAttribute("fill", "#db0000");
        document.getElementById("guinea_bissau").setAttribute("xlink:title", "Guinea-bissau");
    }
    
    if(document.getElementById("c24").textContent != "Kenya"){
        document.getElementById("c24").textContent = "Kenya";
        document.getElementById("c24").style.color = "#fc031c";

        document.getElementById("kenya").setAttribute("fill", "#db0000");
        document.getElementById("kenya").setAttribute("xlink:title", "Kenya");
    }
    
    if(document.getElementById("c25").textContent != "Lesotho"){
        document.getElementById("c25").textContent = "Lesotho";
        document.getElementById("c25").style.color = "#fc031c";

        document.getElementById("lesotho").setAttribute("fill", "#db0000");
        document.getElementById("lesotho").setAttribute("xlink:title", "Lesotho");
    }
    
    if(document.getElementById("c26").textContent != "Liberia"){
        document.getElementById("c26").textContent = "Liberia";
        document.getElementById("c26").style.color = "#fc031c";

        document.getElementById("liberia").setAttribute("fill", "#db0000");
        document.getElementById("liberia").setAttribute("xlink:title", "Liberia");
    }
    
    if(document.getElementById("c27").textContent != "Libya"){
        document.getElementById("c27").textContent = "Libya";
        document.getElementById("c27").style.color = "#fc031c";

        document.getElementById("libya").setAttribute("fill", "#db0000");
        document.getElementById("libya").setAttribute("xlink:title", "Libya");
    }
    
    if(document.getElementById("c28").textContent != "Madagascar"){
        document.getElementById("c28").textContent = "Madagascar";
        document.getElementById("c28").style.color = "#fc031c";

        document.getElementById("madagascar").setAttribute("fill", "#db0000");
        document.getElementById("madagascar").setAttribute("xlink:title", "Madagascar");
    }
    
    if(document.getElementById("c29").textContent != "Malawi"){
        document.getElementById("c29").textContent = "Malawi";
        document.getElementById("c29").style.color = "#fc031c";

        document.getElementById("malawi").setAttribute("fill", "#db0000");
        document.getElementById("malawi").setAttribute("xlink:title", "Malawi");
    }
    
    if(document.getElementById("c30").textContent != "Mali"){
        document.getElementById("c30").textContent = "Mali";
        document.getElementById("c30").style.color = "#fc031c";

        document.getElementById("mali").setAttribute("fill", "#db0000");
        document.getElementById("mali").setAttribute("xlink:title", "Mali");
    }
    
    if(document.getElementById("c31").textContent != "Mauritania"){
        document.getElementById("c31").textContent = "Mauritania";
        document.getElementById("c31").style.color = "#fc031c";

        document.getElementById("mauritania").setAttribute("fill", "#db0000");
        document.getElementById("mauritania").setAttribute("xlink:title", "Mauritania");
    }
    
    if(document.getElementById("c32").textContent != "Mauritius"){
        document.getElementById("c32").textContent = "Mauritius";
        document.getElementById("c32").style.color = "#fc031c";

        document.getElementById("mauritius").setAttribute("fill", "#db0000");
        document.getElementById("mauritius").setAttribute("xlink:title", "Mauritius");
    }
    
    if(document.getElementById("c33").textContent != "Morocco"){
        document.getElementById("c33").textContent = "Morocco";
        document.getElementById("c33").style.color = "#fc031c";

        document.getElementById("morocco").setAttribute("fill", "#db0000");
        document.getElementById("morocco").setAttribute("xlink:title", "Morocco");
    }
    
    if(document.getElementById("c34").textContent != "Mozambique"){
        document.getElementById("c34").textContent = "Mozambique";
        document.getElementById("c34").style.color = "#fc031c";

        document.getElementById("mozambique").setAttribute("fill", "#db0000");
        document.getElementById("mozambique").setAttribute("xlink:title", "Mozambique");
    }
    
    if(document.getElementById("c35").textContent != "Namibia"){
        document.getElementById("c35").textContent = "Namibia";
        document.getElementById("c35").style.color = "#fc031c";

        document.getElementById("namibia").setAttribute("fill", "#db0000");
        document.getElementById("namibia").setAttribute("xlink:title", "Namibia");
    }
    
    if(document.getElementById("c36").textContent != "Niger"){
        document.getElementById("c36").textContent = "Niger";
        document.getElementById("c36").style.color = "#fc031c";

        document.getElementById("niger").setAttribute("fill", "#db0000");
        document.getElementById("niger").setAttribute("xlink:title", "Niger");
    }
    
    if(document.getElementById("c37").textContent != "Nigeria"){
        document.getElementById("c37").textContent = "Nigeria";
        document.getElementById("c37").style.color = "#fc031c";

        document.getElementById("nigeria").setAttribute("fill", "#db0000");
        document.getElementById("nigeria").setAttribute("xlink:title", "Nigeria");
    }
    
    if(document.getElementById("c38").textContent != "Republic Of The Congo"){
        document.getElementById("c38").textContent = "Republic Of The Congo";
        document.getElementById("c38").style.color = "#fc031c";

        document.getElementById("republic_of_the_congo").setAttribute("fill", "#db0000");
        document.getElementById("republic_of_the_congo").setAttribute("xlink:title", "Republic Of The Congo");
    }
    
    if(document.getElementById("c39").textContent != "Rwanda"){
        document.getElementById("c39").textContent = "Rwanda";
        document.getElementById("c39").style.color = "#fc031c";

        document.getElementById("rwanda").setAttribute("fill", "#db0000");
        document.getElementById("rwanda").setAttribute("xlink:title", "Rwanda");
    }
    
    if(document.getElementById("c40").textContent != "São Tomé And Príncipe"){
        document.getElementById("c40").textContent = "São Tomé And Príncipe";
        document.getElementById("c40").style.color = "#fc031c";

        document.getElementById("sao_tome_and_principe").setAttribute("fill", "#db0000");
        document.getElementById("sao_tome_and_principe").setAttribute("xlink:title", "São Tomé And Príncipe");
    }
    
    if(document.getElementById("c41").textContent != "Senegal"){
        document.getElementById("c41").textContent = "Senegal";
        document.getElementById("c41").style.color = "#fc031c";

        document.getElementById("senegal").setAttribute("fill", "#db0000");
        document.getElementById("senegal").setAttribute("xlink:title", "Senegal");
    }
    
    if(document.getElementById("c42").textContent != "Seychelles"){
        document.getElementById("c42").textContent = "Seychelles";
        document.getElementById("c42").style.color = "#fc031c";

        document.getElementById("seychelles").setAttribute("fill", "#db0000");
        document.getElementById("seychelles").setAttribute("xlink:title", "Seychelles");
    }
    
    if(document.getElementById("c43").textContent != "Sierra Leone"){
        document.getElementById("c43").textContent = "Sierra Leone";
        document.getElementById("c43").style.color = "#fc031c";

        document.getElementById("sierra_leone").setAttribute("fill", "#db0000");
        document.getElementById("sierra_leone").setAttribute("xlink:title", "Sierra Leone");
    }
    
    if(document.getElementById("c44").textContent != "Somalia"){
        document.getElementById("c44").textContent = "Somalia";
        document.getElementById("c44").style.color = "#fc031c";

        document.getElementById("somalia").setAttribute("fill", "#db0000");
        document.getElementById("somalia").setAttribute("xlink:title", "Somalia");
    }
    
    if(document.getElementById("c45").textContent != "South Africa"){
        document.getElementById("c45").textContent = "South Africa";
        document.getElementById("c45").style.color = "#fc031c";

        document.getElementById("south_africa").setAttribute("fill", "#db0000");
        document.getElementById("south_africa").setAttribute("xlink:title", "South Africa");
    }
    
    if(document.getElementById("c46").textContent != "South Sudan"){
        document.getElementById("c46").textContent = "South Sudan";
        document.getElementById("c46").style.color = "#fc031c";

        document.getElementById("south_sudan").setAttribute("fill", "#db0000");
        document.getElementById("south_sudan").setAttribute("xlink:title", "South Sudan");
    }
    
    if(document.getElementById("c47").textContent != "Sudan"){
        document.getElementById("c47").textContent = "Sudan";
        document.getElementById("c47").style.color = "#fc031c";

        document.getElementById("sudan").setAttribute("fill", "#db0000");
        document.getElementById("sudan").setAttribute("xlink:title", "Sudan");
    }
    
    if(document.getElementById("c48").textContent != "Tanzania"){
        document.getElementById("c48").textContent = "Tanzania";
        document.getElementById("c48").style.color = "#fc031c";

        document.getElementById("tanzania").setAttribute("fill", "#db0000");
        document.getElementById("tanzania").setAttribute("xlink:title", "Tanzania");
    }
    
    if(document.getElementById("c49").textContent != "The Gambia"){
        document.getElementById("c49").textContent = "The Gambia";
        document.getElementById("c49").style.color = "#fc031c";

        document.getElementById("the_gambia").setAttribute("fill", "#db0000");
        document.getElementById("the_gambia").setAttribute("xlink:title", "The Gambia");
    }
    
    if(document.getElementById("c50").textContent != "Togo"){
        document.getElementById("c50").textContent = "Togo";
        document.getElementById("c50").style.color = "#fc031c";

        document.getElementById("togo").setAttribute("fill", "#db0000");
        document.getElementById("togo").setAttribute("xlink:title", "Togo");
    }
    
    if(document.getElementById("c51").textContent != "Tunisia"){
        document.getElementById("c51").textContent = "Tunisia";
        document.getElementById("c51").style.color = "#fc031c";

        document.getElementById("tunisia").setAttribute("fill", "#db0000");
        document.getElementById("tunisia").setAttribute("xlink:title", "Tunisia");
    }
    
    if(document.getElementById("c52").textContent != "Uganda"){
        document.getElementById("c52").textContent = "Uganda";
        document.getElementById("c52").style.color = "#fc031c";

        document.getElementById("uganda").setAttribute("fill", "#db0000");
        document.getElementById("uganda").setAttribute("xlink:title", "Uganda");
    }
    
    if(document.getElementById("c53").textContent != "Zambia"){
        document.getElementById("c53").textContent = "Zambia";
        document.getElementById("c53").style.color = "#fc031c";

        document.getElementById("zambia").setAttribute("fill", "#db0000");
        document.getElementById("zambia").setAttribute("xlink:title", "Zambia");
    }
    
    if(document.getElementById("c54").textContent != "Zimbabwe"){
        document.getElementById("c54").textContent = "Zimbabwe";
        document.getElementById("c54").style.color = "#fc031c";

        document.getElementById("zimbabwe").setAttribute("fill", "#db0000");
        document.getElementById("zimbabwe").setAttribute("xlink:title", "Zimbabwe");
    }
    
    if(document.getElementById("d1").textContent != "Antigua And Barbuda"){
        document.getElementById("d1").textContent = "Antigua And Barbuda";
        document.getElementById("d1").style.color = "#fc031c";

        document.getElementById("antigua_and_barbuda").setAttribute("fill", "#db0000");
        document.getElementById("antigua_and_barbuda").setAttribute("xlink:title", "Antigua And Barbuda");
    }
    
    if(document.getElementById("d2").textContent != "Barbados"){
        document.getElementById("d2").textContent = "Barbados";
        document.getElementById("d2").style.color = "#fc031c";

        document.getElementById("barbados").setAttribute("fill", "#db0000");
        document.getElementById("barbados").setAttribute("xlink:title", "Barbados");
    }
    
    if(document.getElementById("d3").textContent != "Belize"){
        document.getElementById("d3").textContent = "Belize";
        document.getElementById("d3").style.color = "#fc031c";

        document.getElementById("belize").setAttribute("fill", "#db0000");
        document.getElementById("belize").setAttribute("xlink:title", "Belize");
    }
    
    if(document.getElementById("d4").textContent != "Canada"){
        document.getElementById("d4").textContent = "Canada";
        document.getElementById("d4").style.color = "#fc031c";

        document.getElementById("canada").setAttribute("fill", "#db0000");
        document.getElementById("canada").setAttribute("xlink:title", "Canada");
    }
    
    if(document.getElementById("d5").textContent != "Costa Rica"){
        document.getElementById("d5").textContent = "Costa Rica";
        document.getElementById("d5").style.color = "#fc031c";

        document.getElementById("costa_rica").setAttribute("fill", "#db0000");
        document.getElementById("costa_rica").setAttribute("xlink:title", "Costa Rica");
    }
    
    if(document.getElementById("d6").textContent != "Cuba"){
        document.getElementById("d6").textContent = "Cuba";
        document.getElementById("d6").style.color = "#fc031c";

        document.getElementById("cuba").setAttribute("fill", "#db0000");
        document.getElementById("cuba").setAttribute("xlink:title", "Cuba");
    }
    
    if(document.getElementById("d7").textContent != "Dominica"){
        document.getElementById("d7").textContent = "Dominica";
        document.getElementById("d7").style.color = "#fc031c";

        document.getElementById("dominica").setAttribute("fill", "#db0000");
        document.getElementById("dominica").setAttribute("xlink:title", "Dominican");
    }
    
    if(document.getElementById("d8").textContent != "Dominican Republic"){
        document.getElementById("d8").textContent = "Dominican Republic";
        document.getElementById("d8").style.color = "#fc031c";

        document.getElementById("dominican_republic").setAttribute("fill", "#db0000");
        document.getElementById("dominican_republic").setAttribute("xlink:title", "Dominican Republic");
    }
    
    if(document.getElementById("d9").textContent != "El Salvador"){
        document.getElementById("d9").textContent = "El Salvador";
        document.getElementById("d9").style.color = "#fc031c";

        document.getElementById("el_salvador").setAttribute("fill", "#db0000");
        document.getElementById("el_salvador").setAttribute("xlink:title", "El Salvador");
    }
    
    if(document.getElementById("d10").textContent != "Grenada"){
        document.getElementById("d10").textContent = "Grenada";
        document.getElementById("d10").style.color = "#fc031c";

        document.getElementById("grenada").setAttribute("fill", "#db0000");
        document.getElementById("grenada").setAttribute("xlink:title", "Grenada");
    }
    
    if(document.getElementById("d11").textContent != "Guatemala"){
        document.getElementById("d11").textContent = "Guatemala";
        document.getElementById("d11").style.color = "#fc031c";

        document.getElementById("guatemala").setAttribute("fill", "#db0000");
        document.getElementById("guatemala").setAttribute("xlink:title", "Guatemala");
    }
    
    if(document.getElementById("d12").textContent != "Haiti"){
        document.getElementById("d12").textContent = "Haiti";
        document.getElementById("d12").style.color = "#fc031c";

        document.getElementById("haiti").setAttribute("fill", "#db0000");
        document.getElementById("haiti").setAttribute("xlink:title", "Haiti");
    }
    
    if(document.getElementById("d13").textContent != "Honduras"){
        document.getElementById("d13").textContent = "Honduras";
        document.getElementById("d13").style.color = "#fc031c";

        document.getElementById("honduras").setAttribute("fill", "#db0000");
        document.getElementById("honduras").setAttribute("xlink:title", "Honduras");
    }
    
    if(document.getElementById("d14").textContent != "Jamaica"){
        document.getElementById("d14").textContent = "Jamaica";
        document.getElementById("d14").style.color = "#fc031c";

        document.getElementById("jamaica").setAttribute("fill", "#db0000");
        document.getElementById("jamaica").setAttribute("xlink:title", "Jamaica");
    }
    
    if(document.getElementById("d15").textContent != "Mexico"){
        document.getElementById("d15").textContent = "Mexico";
        document.getElementById("d15").style.color = "#fc031c";

        document.getElementById("mexico").setAttribute("fill", "#db0000");
        document.getElementById("mexico").setAttribute("xlink:title", "Mexico");
    }
    
    if(document.getElementById("d16").textContent != "Nicaragua"){
        document.getElementById("d16").textContent = "Nicaragua";
        document.getElementById("d16").style.color = "#fc031c";

        document.getElementById("nicaragua").setAttribute("fill", "#db0000");
        document.getElementById("nicaragua").setAttribute("xlink:title", "Nicaragua");
    }
    
    if(document.getElementById("d17").textContent != "Panama"){
        document.getElementById("d17").textContent = "Panama";
        document.getElementById("d17").style.color = "#fc031c";

        document.getElementById("panama").setAttribute("fill", "#db0000");
        document.getElementById("panama").setAttribute("xlink:title", "Panama");
    }
    
    if(document.getElementById("d18").textContent != "Saint Kitts And Nevis"){
        document.getElementById("d18").textContent = "Saint Kitts And Nevis";
        document.getElementById("d18").style.color = "#fc031c";

        document.getElementById("st_kitts_and_nevis").setAttribute("fill", "#db0000");
        document.getElementById("st_kitts_and_nevis").setAttribute("xlink:title", "Saint Kitts And Nevis");
    }
    
    if(document.getElementById("d19").textContent != "Saint Lucia"){
        document.getElementById("d19").textContent = "Saint Lucia";
        document.getElementById("d19").style.color = "#fc031c";

        document.getElementById("st_lucia").setAttribute("fill", "#db0000");
        document.getElementById("st_lucia").setAttribute("xlink:title", "Saint Lucia");
    }
    
    if((document.getElementById("d20").textContent).length != 32){
        document.getElementById("d20").textContent = "Saint Vincent\nAnd The Grenadines";
        document.getElementById("d20").style.color = "#fc031c";

        document.getElementById("st_vincent_and_the_grenadines").setAttribute("fill", "#db0000");
        document.getElementById("st_vincent_and_the_grenadines").setAttribute("xlink:title", "Saint Vincent And The Grenadines");
    }
    
    if(document.getElementById("d21").textContent != "The Bahamas"){
        document.getElementById("d21").textContent = "The Bahamas";
        document.getElementById("d21").style.color = "#fc031c";

        document.getElementById("the_bahamas").setAttribute("fill", "#db0000");
        document.getElementById("the_bahamas").setAttribute("xlink:title", "The Bahamas");
    }
    
    if(document.getElementById("d22").textContent != "Trinidad And Tobago"){
        document.getElementById("d22").textContent = "Trinidad And Tobago";
        document.getElementById("d22").style.color = "#fc031c";

        document.getElementById("trinidad_and_tobago").setAttribute("fill", "#db0000");
        document.getElementById("trinidad_and_tobago").setAttribute("xlink:title", "Trinidad And Tobago");
    }
    
    if(document.getElementById("d23").textContent != "United States Of America"){
        document.getElementById("d23").textContent = "United States Of America";
        document.getElementById("d23").style.color = "#fc031c";

        document.getElementById("usa").setAttribute("fill", "#db0000");
        document.getElementById("usa").setAttribute("xlink:title", "United States Of America");
        document.getElementById("american_samoa").setAttribute("fill", "#db0000");
        document.getElementById("american_samoa").setAttribute("xlink:title", "American Samoa");
    }
    
    if(document.getElementById("b1").textContent != "Argentina"){
        document.getElementById("b1").textContent = "Argentina";
        document.getElementById("b1").style.color = "#fc031c";

        document.getElementById("argentina").setAttribute("fill", "#db0000");
        document.getElementById("argentina").setAttribute("xlink:title", "Argentina");
    }
    
    if(document.getElementById("b2").textContent != "Bolivia"){
        document.getElementById("b2").textContent = "Bolivia";
        document.getElementById("b2").style.color = "#fc031c";

        document.getElementById("bolivia").setAttribute("fill", "#db0000");
        document.getElementById("bolivia").setAttribute("xlink:title", "Bolivia");
    }
    
    if(document.getElementById("b3").textContent != "Brazil"){
        document.getElementById("b3").textContent = "Brazil";
        document.getElementById("b3").style.color = "#fc031c";

        document.getElementById("brazil").setAttribute("fill", "#db0000");
        document.getElementById("brazil").setAttribute("xlink:title", "Brazil");
    }
    
    if(document.getElementById("b4").textContent != "Chile"){
        document.getElementById("b4").textContent = "Chile";
        document.getElementById("b4").style.color = "#fc031c";

        document.getElementById("chile").setAttribute("fill", "#db0000");
        document.getElementById("chile").setAttribute("xlink:title", "Chile");
    }
    
    if(document.getElementById("b5").textContent != "Colombia"){
        document.getElementById("b5").textContent = "Colombia";
        document.getElementById("b5").style.color = "#fc031c";

        document.getElementById("colombia").setAttribute("fill", "#db0000");
        document.getElementById("colombia").setAttribute("xlink:title", "Colombia");
    }
    
    if(document.getElementById("b6").textContent != "Ecuador"){
        document.getElementById("b6").textContent = "Ecuador";
        document.getElementById("b6").style.color = "#fc031c";

        document.getElementById("ecuador").setAttribute("fill", "#db0000");
        document.getElementById("ecuador").setAttribute("xlink:title", "Ecuador");
    }
    
    if(document.getElementById("b7").textContent != "Guyana"){
        document.getElementById("b7").textContent = "Guyana";
        document.getElementById("b7").style.color = "#fc031c";

        document.getElementById("guyana").setAttribute("fill", "#db0000");
        document.getElementById("guyana").setAttribute("xlink:title", "Guyana");
    }
    
    if(document.getElementById("b8").textContent != "Paraguay"){
        document.getElementById("b8").textContent = "Paraguay";
        document.getElementById("b8").style.color = "#fc031c";

        document.getElementById("paraguay").setAttribute("fill", "#db0000");
        document.getElementById("paraguay").setAttribute("xlink:title", "Paraguay");
    }
    
    if(document.getElementById("b9").textContent != "Peru"){
        document.getElementById("b9").textContent = "Peru";
        document.getElementById("b9").style.color = "#fc031c";

        document.getElementById("peru").setAttribute("fill", "#db0000");
        document.getElementById("peru").setAttribute("xlink:title", "Peru");
    }
    
    if(document.getElementById("b10").textContent != "Suriname"){
        document.getElementById("b10").textContent = "Suriname";
        document.getElementById("b10").style.color = "#fc031c";

        document.getElementById("suriname").setAttribute("fill", "#db0000");
        document.getElementById("suriname").setAttribute("xlink:title", "suriname");
    }
    
    if(document.getElementById("b11").textContent != "Uruguay"){
        document.getElementById("b11").textContent = "Uruguay";
        document.getElementById("b11").style.color = "#fc031c";

        document.getElementById("uruguay").setAttribute("fill", "#db0000");
        document.getElementById("uruguay").setAttribute("xlink:title", "Uruguay");
    }
    
    if(document.getElementById("b12").textContent != "Venezuela"){
        document.getElementById("b12").textContent = "Venezuela";
        document.getElementById("b12").style.color = "#fc031c";

        document.getElementById("venezuela").setAttribute("fill", "#db0000");
        document.getElementById("venezuela").setAttribute("xlink:title", "Venezuela");
    }
    
    if(document.getElementById("f1").textContent != "Australia"){
        document.getElementById("f1").textContent = "Australia";
        document.getElementById("f1").style.color = "#fc031c";

        document.getElementById("australia").setAttribute("fill", "#db0000");
        document.getElementById("australia").setAttribute("xlink:title", "Australia");
    }
    
    if((document.getElementById("f2").textContent).length != 30){
        document.getElementById("f2").textContent = "Federated States\nOf Micronesia";
        document.getElementById("f2").style.color = "#fc031c";

        document.getElementById("federated_states_of_micronesia").setAttribute("fill", "#db0000");
        document.getElementById("federated_states_of_micronesia").setAttribute("xlink:title", "Federated States Of Micronesia");
    }
    
    if(document.getElementById("f3").textContent != "Fiji"){
        document.getElementById("f3").textContent = "Fiji";
        document.getElementById("f3").style.color = "#fc031c";

        document.getElementById("fiji").setAttribute("fill", "#db0000");
        document.getElementById("fiji").setAttribute("xlink:title", "Fiji");
    }
    
    if(document.getElementById("f4").textContent != "Kiribati"){
        document.getElementById("f4").textContent = "Kiribati";
        document.getElementById("f4").style.color = "#fc031c";

        document.getElementById("kiribati").setAttribute("fill", "#db0000");
        document.getElementById("kiribati").setAttribute("xlink:title", "Kiribati");
    }
    
    if(document.getElementById("f5").textContent != "Marshall Islands"){
        document.getElementById("f5").textContent = "Marshall Islands";
        document.getElementById("f5").style.color = "#fc031c";

        document.getElementById("marshall_islands").setAttribute("fill", "#db0000");
        document.getElementById("marshall_islands").setAttribute("xlink:title", "Marshall Islands");
    }
    
    if(document.getElementById("f6").textContent != "Nauru"){
        document.getElementById("f6").textContent = "Nauru";
        document.getElementById("f6").style.color = "#fc031c";

        document.getElementById("nauru").setAttribute("fill", "#db0000");
        document.getElementById("nauru").setAttribute("xlink:title", "Nauru");
    }
    
    if(document.getElementById("f7").textContent != "New Zealand"){
        document.getElementById("f7").textContent = "New Zealand";
        document.getElementById("f7").style.color = "#fc031c";

        document.getElementById("new_zealand").setAttribute("fill", "#db0000");
        document.getElementById("new_zealand").setAttribute("xlink:title", "New Zealand");
    }
    
    if(document.getElementById("f8").textContent != "Palau"){
        document.getElementById("f8").textContent = "Palau";
        document.getElementById("f8").style.color = "#fc031c";

        document.getElementById("palau").setAttribute("fill", "#db0000");
        document.getElementById("palau").setAttribute("xlink:title", "Palau");
    }
    
    if(document.getElementById("f9").textContent != "Papua New Guinea"){
        document.getElementById("f9").textContent = "Papua New Guinea";
        document.getElementById("f9").style.color = "#fc031c";

        document.getElementById("papua_new_guinea").setAttribute("fill", "#db0000");
        document.getElementById("papua_new_guinea").setAttribute("xlink:title", "Papua New Guinea");
    }
    
    if(document.getElementById("f10").textContent != "Samoa"){
        document.getElementById("f10").textContent = "Samoa";
        document.getElementById("f10").style.color = "#fc031c";

        document.getElementById("samoa").setAttribute("fill", "#db0000");
        document.getElementById("samoa").setAttribute("xlink:title", "Samoa");
    }
    
    if(document.getElementById("f11").textContent != "Solomon Islands"){
        document.getElementById("f11").textContent = "Solomon Islands";
        document.getElementById("f11").style.color = "#fc031c";

        document.getElementById("solomon_islands").setAttribute("fill", "#db0000");
        document.getElementById("solomon_islands").setAttribute("xlink:title", "Solomon Islands");
    }
    
    if(document.getElementById("f12").textContent != "Tonga"){
        document.getElementById("f12").textContent = "Tonga";
        document.getElementById("f12").style.color = "#fc031c";

        document.getElementById("tonga").setAttribute("fill", "#db0000");
        document.getElementById("tonga").setAttribute("xlink:title", "Tonga");
    }
    
    if(document.getElementById("f13").textContent != "Tuvalu"){
        document.getElementById("f13").textContent = "Tuvalu";
        document.getElementById("f13").style.color = "#fc031c";

        document.getElementById("tuvalu").setAttribute("fill", "#db0000");
        document.getElementById("tuvalu").setAttribute("xlink:title", "Tuvalu");
    }
    
    if(document.getElementById("f14").textContent != "Vanuatu"){
        document.getElementById("f14").textContent = "Vanuatu";
        document.getElementById("f14").style.color = "#fc031c";

        document.getElementById("vanuatu").setAttribute("fill", "#db0000");
        document.getElementById("vanuatu").setAttribute("xlink:title", "Vanuatu");
    }

    updateScore();
};

document.getElementById("modeDropDown").onchange= function() {

    if(document.getElementById("country_start_btn").style.visibility == "hidden"){
        location.reload();
    }

    if(document.getElementById("modeDropDown").value == "unlimited"){
        unlimitedOption = true;
    }
    else if(document.getElementById("modeDropDown").value == "timed"){
        unlimitedOption = false;
    }else{
        console.log("Drop down mode box error");
    }
};

$(function(){
        setInterval(oneSecondFunction, 1000);
});

function oneSecondFunction() {      /*Runs the time function every second*/
    if(startTime == true){
        if(unlimitedOption == true){      /*Runs if the start button has been clicked*/

            if(atTimerLimit == false){
                time[7] = time[7] + 1;

                if(time[7] == 10){
                    time[6] = time[6] + 1;
                    time[7] = 0;

                if(time[6] == 6){
                    time[6] = 0;
                    time[4] = time[4] + 1;

                    if(time[4] == 10){
                        time[3] = time [3] + 1;
                        time[4] = 0;

                        if(time[3] == 6){
                            time[3] = 0;
                            time[1] = time[1] + 1;

                            if(time[0] == 0 || time[0] == 1){
                                if(time[1] == 10){
                                    time[1] = 0;
                                    time[0] = time[0] + 1;
                                }
                            }
                            else if(time[0] == 2){
                                if(time[1] == 4){
                                    atTimerLimit = true;
                                }
                            }  
                        }
                    }
                }
            }
        }
    }
    else if(startTime == true){
        if(unlimitedOption == false){
            if(atTimerLimit == false){

                if(time[4] == 0 && time[7] == 0 && time[6] == 0 && time[3] == 0 && time[1] == 0 && time[0] == 0){
                    atTimerLimit = true;
                    document.getElementById("counties_name_text").style.visibility = "hidden";
                    document.getElementById("country_input_box").style.visibility = "hidden";
                    document.getElementById("country_submit_btn").style.visibility = "hidden";
                    fillAnswers();
                }
                else{
                    time[7] = time[7] - 1;

                    if(time[7] == -1){
                        time[6] = time[6] -1;
                        time[7] = 9;

                        if(time[6] == -1){
                            time[4] = time[4] -1;
                            time[6] = 5;

                            if(time[4] == -1){
                                time[3] = time[3] -1;
                                time[4] = 9;

                                if(time[3] == -1){
                                    time[1] = time[1] - 1;
                                    time[3] = 5;

                                    if(time[0] == 1 || time[0] == 2){
                                        if(time[1] == -1){
                                            time[0] = time [0] - 1;
                                            time[1] = 9;
                                        }
                                    }
                                    else if(time[0] == 0){
                                        if(time[1] == 0){
                                            atTimerLimit = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

    stringTime = time.toString();
    stringTime = stringTime.replace(/,/g, '');
    document.getElementById("timer_text").textContent = stringTime;
}

function onPageLoad(){
    amountCorrect = 0;

    document.getElementById("counties_name_text").style.visibility = "hidden";
    document.getElementById("country_input_box").style.visibility = "hidden";
    document.getElementById("country_submit_btn").style.visibility = "hidden";
    document.getElementById("country_give_up_btn").style.visibility = "hidden";



    $.get("score/highScore.txt", function(data){             /*The AJAX Get method reads the current high score from the text file*/
        document.getElementById("high_score").textContent = data;
    });

    $.get("score/bestTime.txt", function(data){             /*The AJAX Get method reads the current high score from the text file*/
        document.getElementById("time_score").textContent = data;
    });
    setUpSVG();
}

document.getElementById("country_give_up_btn").onclick = function() {
    fillAnswers();

    startTime = false;

    document.getElementById("counties_name_text").style.visibility = "hidden";
    document.getElementById("country_input_box").style.visibility = "hidden";
    document.getElementById("country_submit_btn").style.visibility = "hidden";
    document.getElementById("country_give_up_btn").style.visibility = "hidden";
}

document.getElementById("country_start_btn").onclick = function() {
    document.getElementById("country_start_btn").style.visibility = "hidden";

    document.getElementById("counties_name_text").style.visibility = "visible";
    document.getElementById("country_input_box").style.visibility = "visible";
    document.getElementById("country_submit_btn").style.visibility = "visible";

    if(unlimitedOption == true){
        document.getElementById("country_give_up_btn").style.visibility = "visible";
    }

    if(unlimitedOption == true){
        time = [0,0,":",0,0,":",0,0];
    }
    else if(unlimitedOption == false){
        time = [0,0,":",1,5,":",0,1]
    }
    else{
        console.log("Error setting up time array");
    }

    startTime = true;
};

/* eslint-env es6 */

const NAV_MAP = {           /*This assigns the vaules for the key presses*/
    187: {act: 'zoom', dir: 1, name: 'in'},
    189: {act: 'zoom', dir: -1, name: 'out'},
    37: {act: 'move', dir: -1, name: 'left', axis: 0},
    38: {act: 'move', dir: -1, name: 'up', axis: 1},
    39: {act: 'move', dir: 1, name: 'right', axis: 0},
    40: {act: 'move', dir: 1, name: 'down', axis: 1}
};

function setUpSVG(){
    _SVG = document.getElementById("world_map");
    console.log("Content of _SVG: ", _SVG);
    console.log("CurrentMap Var: ", world_map);
    VB = _SVG.getAttribute('viewBox').split(' ').map(c => +c),
    DMAX = VB.slice(2), WMIN = 8, NF = 1;       /*NF sets the number of frames that the animation occurs over*/
}

let nav = null, tg = Array(4), f = 0, rID = null;

function update(){
    let k = ++f/NF, j = 1 - k, cvb = VB.slice();
    
    if(nav.act == 'zoom'){          /*This sets the new zoom value that will be added to the viewbox*/
        for(let i = 0; i < 4; i++){
            cvb[i] = j*VB[i] + k*tg[i]
        }

        cvb[0] = (cvb[0] + 1425);
    }
    else if(nav.act == 'move'){     /*This sets the new axis value that will be added to the viewbox*/
        cvb[nav.axis] = j*VB[nav.axis] + k*tg[nav.axis]
    }
    
    console.log(cvb)
    
    _SVG.setAttribute('viewBox', cvb.join(' '));
    
    if(!(f%NF)){
        cancelAnimationFrame(rID);
        rID = nav = null;
        f = 0;
        tg = Array(4);
        /*console.log(VB)*/
        VB.splice(0, 4, ...cvb);        /*This adds the new viewbox values to the viewbox*/
        /*console.log(VB)*/
        return
       }
    
    rID = requestAnimationFrame(update)
}

addEventListener('keyup', e => {
    if(e.keyCode in NAV_MAP){       /*This check if the key that was pressed is in the NAV_MAP*/
        nav = NAV_MAP[e.keyCode];
        
        if(nav.act == 'zoom'){          /*This check if the key press is for zooming*/
           if((nav.dir == -1 && VB[2] >= DMAX[0]) || (nav.dir == 1 && VB[2] <= WMIN)){      /*This checks if the SVG full zoomed in or out*/
               console.log('Cannot zoom', nav.name, 'more');
               return
           }
            
            for(let i = 0; i < 2; i++){
                tg[i + 2] = VB[i + 2]/Math.pow(2, nav.dir);
                tg[i] = 0.5*(DMAX[i] - tg[i + 2])
            }
        }
        else if(nav.act == 'move'){
        if((nav.dir == -1 && VB[nav.axis] <= 0)||(nav.dir == 1 && (VB[nav.axis] - 1425) >= DMAX[nav.axis] - VB[nav.axis + 2])){  /*This chacks if the SVG if fully to the left right top or bottom*/
            console.log('cannot move', nav.name, "more");
            return
            }
            
            tg[nav.axis] = VB[nav.axis] + 0.5*nav.dir*VB[nav.axis + 2] 
        }
        
        update()
    }
}, false);

function manageTables(stringInput, answerCorrect){
    if(stringInput == "albania"){
        if(document.getElementById("e1").textContent != "Albania"){
            document.getElementById("e1").textContent = "Albania";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "andorra"){
        if(document.getElementById("e2").textContent != "Andorra"){
            document.getElementById("e2").textContent = "Andorra";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "austria"){
        if(document.getElementById("e3").textContent != "Austria"){
            document.getElementById("e3").textContent = "Austria";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "belarus"){
        if(document.getElementById("e4").textContent != "Belarus"){
            document.getElementById("e4").textContent = "Belarus";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "belgium"){
        if(document.getElementById("e5").textContent != "Belgium"){
            document.getElementById("e5").textContent = "Belgium";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "bosnia_and_herzegovina"){
        if((document.getElementById("e6").textContent).length != 22){       /*Uses the length as the line break stops copairing the strings from workins*/
            document.getElementById("e6").textContent = "Bosnia And\nHerzegovina";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "bulgaria"){
        if(document.getElementById("e7").textContent != "Bulgaria"){
            document.getElementById("e7").textContent = "Bulgaria";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "croatia"){
        if(document.getElementById("e8").textContent != "Croatia"){
            document.getElementById("e8").textContent = "Croatia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "czech_republic"){
        if(document.getElementById("e9").textContent != "Czech Republic"){
            document.getElementById("e9").textContent = "Czech Republic";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "denmark"){
        if(document.getElementById("e10").textContent != "Denmark"){
            document.getElementById("e10").textContent = "Denmark";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "england"){
        if(document.getElementById("e11").textContent != "England"){
            document.getElementById("e11").textContent = "England";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "estonia"){
        if(document.getElementById("e12").textContent != "Estonia"){
            document.getElementById("e12").textContent = "Estonia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "finland"){
        if(document.getElementById("e13").textContent != "Finland"){
            document.getElementById("e13").textContent = "Finland";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "france"){
        if(document.getElementById("e14").textContent != "France"){
            document.getElementById("e14").textContent = "France";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "germany"){
        if(document.getElementById("e15").textContent != "Germany"){
            document.getElementById("e15").textContent = "Germany";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "greece"){
        if(document.getElementById("e16").textContent != "Greece"){
            document.getElementById("e16").textContent = "Greece";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "hungary"){
        if(document.getElementById("e17").textContent != "Hungary"){
            document.getElementById("e17").textContent = "Hungary";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "iceland"){
        if(document.getElementById("e18").textContent != "Iceland"){
            document.getElementById("e18").textContent = "Iceland"; 
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "ireland"){
        if(document.getElementById("e19").textContent != "Ireland"){
            document.getElementById("e19").textContent = "Ireland";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "italy"){
        if(document.getElementById("e20").textContent != "Italy"){
            document.getElementById("e20").textContent = "Italy"; 
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "kosovo"){
        if(document.getElementById("e21").textContent != "Kosovo"){
            document.getElementById("e21").textContent = "Kosovo"; 
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "latvia"){
        if(document.getElementById("e22").textContent != "Latvia"){
            document.getElementById("e22").textContent = "Latvia"; 
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "liechtenstein"){
        if(document.getElementById("e23").textContent != "Liechtenstein"){
            document.getElementById("e23").textContent = "Liechtenstein"; 
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "lithuania"){
        if(document.getElementById("e24").textContent != "Lithuania"){
            document.getElementById("e24").textContent = "Lithuania";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "luxembourg"){
        if(document.getElementById("e25").textContent != "Luxembourg"){
            document.getElementById("e25").textContent = "Luxembourg";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "malta"){
        if(document.getElementById("e26").textContent != "Malta"){
            document.getElementById("e26").textContent = "Malta";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "moldova"){
        if(document.getElementById("e27").textContent != "Moldova"){
            document.getElementById("e27").textContent = "Moldova";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "monaco"){
        if(document.getElementById("e28").textContent != "Monaco"){
            document.getElementById("e28").textContent = "Monaco";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "montenegro"){
        if(document.getElementById("e29").textContent != "Montenegro"){
            document.getElementById("e29").textContent = "Montenegro";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "netherlands"){
        if(document.getElementById("e30").textContent != "Netherlands"){
            document.getElementById("e30").textContent = "Netherlands";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "northern_ireland"){
        if(document.getElementById("e31").textContent != "Northern Ireland"){
            document.getElementById("e31").textContent = "Northern Ireland";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "north_macedonia"){
        if(document.getElementById("e32").textContent != "North Macedonia"){
            document.getElementById("e32").textContent = "North Macedonia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "norway"){
        if(document.getElementById("e33").textContent != "Norway"){
            document.getElementById("e33").textContent = "Norway";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "poland"){
        if(document.getElementById("e34").textContent != "Poland"){
            document.getElementById("e34").textContent = "Poland";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "portugal"){
        if(document.getElementById("e35").textContent != "Portugal"){
            document.getElementById("e35").textContent = "Portugal";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "romania"){
        if(document.getElementById("e36").textContent != "Romania"){
            document.getElementById("e36").textContent = "Romania";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "russia"){
        if(document.getElementById("e37").textContent != "Russia"){
            document.getElementById("e37").textContent = "Russia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "san_marino"){
        if(document.getElementById("e38").textContent != "San Marino"){
            document.getElementById("e38").textContent = "San Marino";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "scotland"){
        if(document.getElementById("e39").textContent != "Scotland"){
            document.getElementById("e39").textContent = "Scotland";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "serbia"){
        if(document.getElementById("e40").textContent != "Serbia"){
            document.getElementById("e40").textContent = "Serbia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "slovakia"){
        if(document.getElementById("e41").textContent != "Slovakia"){
            document.getElementById("e41").textContent = "Slovakia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "slovenia"){
        if(document.getElementById("e42").textContent != "Slovenia"){
            document.getElementById("e42").textContent = "Slovenia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "spain"){
        if(document.getElementById("e43").textContent != "Spain"){
            document.getElementById("e43").textContent = "Spain";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "sweden"){
        if(document.getElementById("e44").textContent != "Sweden"){
            document.getElementById("e44").textContent = "Sweden";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "switzerland"){
        if(document.getElementById("e45").textContent != "Switzerland"){
            document.getElementById("e45").textContent = "Switzerland";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "ukraine"){
        if(document.getElementById("e46").textContent != "Ukraine"){
            document.getElementById("e46").textContent = "Ukraine";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "vatican_city"){
        if(document.getElementById("e47").textContent != "Vatican City"){
            document.getElementById("e47").textContent = "Vatican City";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "wales"){
        if(document.getElementById("e48").textContent != "Wales"){
            document.getElementById("e48").textContent = "Wales";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "afghanistan"){
        if(document.getElementById("a1").textContent != "Afghanistan"){
            document.getElementById("a1").textContent = "Afghanistan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "armenia"){
        if(document.getElementById("a2").textContent != "Armenia"){
            document.getElementById("a2").textContent = "Armenia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "azerbaijan"){
        if(document.getElementById("a3").textContent != "Azerbaijan"){
            document.getElementById("a3").textContent = "Azerbaijan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "bahrain"){
        if(document.getElementById("a4").textContent != "Bahrain"){
            document.getElementById("a4").textContent = "Bahrain";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "bangladesh"){
        if(document.getElementById("a5").textContent != "Bangladesh"){
            document.getElementById("a5").textContent = "Bangladesh";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "bhutan"){
        if(document.getElementById("a6").textContent != "Bhutan"){
            document.getElementById("a6").textContent = "Bhutan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "brunei"){
        if(document.getElementById("a7").textContent != "Brunei"){
            document.getElementById("a7").textContent = "Brunei";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "cambodia"){
        if(document.getElementById("a8").textContent != "Cambodia"){
            document.getElementById("a8").textContent = "Cambodia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "china"){
        if(document.getElementById("a9").textContent != "China"){
            document.getElementById("a9").textContent = "China";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "cyprus"){
        if(document.getElementById("a10").textContent != "Cyprus"){
            document.getElementById("a10").textContent = "Cyprus";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "east_timor"){
        if(document.getElementById("a11").textContent != "East Timor"){
            document.getElementById("a11").textContent = "East Timor";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "georgia"){
        if(document.getElementById("a12").textContent != "Georgia"){
            document.getElementById("a12").textContent = "Georgia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "india"){
        if(document.getElementById("a13").textContent != "India"){
            document.getElementById("a13").textContent = "India";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "indonesia"){
        if(document.getElementById("a14").textContent != "Indonesia"){
            document.getElementById("a14").textContent = "Indonesia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "iran"){
        if(document.getElementById("a15").textContent != "Iran"){
            document.getElementById("a15").textContent = "Iran";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "iraq"){
        if(document.getElementById("a16").textContent != "Iraq"){
            document.getElementById("a16").textContent = "Iraq";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "israel"){
        if(document.getElementById("a17").textContent != "Israel"){
            document.getElementById("a17").textContent = "Israel";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "japan"){
        if(document.getElementById("a18").textContent != "Japan"){
            document.getElementById("a18").textContent = "Japan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "jordan"){
        if(document.getElementById("a19").textContent != "Jordan"){
            document.getElementById("a19").textContent = "Jordan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "kazakhstan"){
        if(document.getElementById("a20").textContent != "Kazakhstan"){
            document.getElementById("a20").textContent = "Kazakhstan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "kuwait"){
        if(document.getElementById("a21").textContent != "Kuwait"){
            document.getElementById("a21").textContent = "Kuwait";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "kyrgyzstan"){
        if(document.getElementById("a22").textContent != "Kyrgyzstan"){
            document.getElementById("a22").textContent = "Kyrgyzstan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "laos"){
        if(document.getElementById("a23").textContent != "Laos"){
            document.getElementById("a23").textContent = "Laos";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "lebanon"){
        if(document.getElementById("a24").textContent != "Lebanon"){
            document.getElementById("a24").textContent = "Lebanon";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "malaysia"){
        if(document.getElementById("a25").textContent != "Malaysia"){
            document.getElementById("a25").textContent = "Malaysia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "maldives"){
        if(document.getElementById("a26").textContent != "Maldives"){
            document.getElementById("a26").textContent = "Maldives";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "mongolia"){
        if(document.getElementById("a27").textContent != "Mongolia"){
            document.getElementById("a27").textContent = "Mongolia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "myanmar"){
        if(document.getElementById("a28").textContent != "Myanmar"){
            document.getElementById("a28").textContent = "Myanmar";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "nepal"){
        if(document.getElementById("a29").textContent != "Nepal"){
            document.getElementById("a29").textContent = "Nepal";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "north_korea"){
        if(document.getElementById("a30").textContent != "North Korea"){
            document.getElementById("a30").textContent = "North Korea";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "oman"){
        if(document.getElementById("a31").textContent != "Oman"){
            document.getElementById("a31").textContent = "Oman";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "pakistan"){
        if(document.getElementById("a32").textContent != "Pakistan"){
            document.getElementById("a32").textContent = "Pakistan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "philippines"){
        if(document.getElementById("a33").textContent != "Philippines"){
            document.getElementById("a33").textContent = "Philippines";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "qatar"){
        if(document.getElementById("a34").textContent != "Qatar"){
            document.getElementById("a34").textContent = "Qatar";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "saudi_arabia"){
        if(document.getElementById("a35").textContent != "Saudi Arabia"){
            document.getElementById("a35").textContent = "Saudi Arabia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "singapore"){
        if(document.getElementById("a36").textContent != "Singapore"){
            document.getElementById("a36").textContent = "Singapore";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "south_korea"){
        if(document.getElementById("a37").textContent != "South Korea"){
            document.getElementById("a37").textContent = "South Korea";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "sri_lanka"){
        if(document.getElementById("a38").textContent != "Sri Lanka"){
            document.getElementById("a38").textContent = "Sri Lanka";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "syria"){
        if(document.getElementById("a39").textContent != "Syria"){
            document.getElementById("a39").textContent = "Syria";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "taiwan"){
        if(document.getElementById("a40").textContent != "Taiwan"){
            document.getElementById("a40").textContent = "Taiwan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "tajikistan"){
        if(document.getElementById("a41").textContent != "Tajikistan"){
            document.getElementById("a41").textContent = "Tajikistan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "thailand"){
        if(document.getElementById("a42").textContent != "Thailand"){
            document.getElementById("a42").textContent = "Thailand";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "turkey"){
        if(document.getElementById("a43").textContent != "Turkey"){
            document.getElementById("a43").textContent = "Turkey";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "turkmenistan"){
        if(document.getElementById("a44").textContent != "Turkmenistan"){
            document.getElementById("a44").textContent = "Turkmenistan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "uae"){
        if(document.getElementById("a45").textContent != "United Arab Emirates"){
            document.getElementById("a45").textContent = "United Arab Emirates";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "uzbekistan"){
        if(document.getElementById("a46").textContent != "Uzbekistan"){
            document.getElementById("a46").textContent = "Uzbekistan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "vietnam"){
        if(document.getElementById("a47").textContent != "Vietnam"){
            document.getElementById("a47").textContent = "Vietnam";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "yemen"){
        if(document.getElementById("a48").textContent != "Yemen"){
            document.getElementById("a48").textContent = "Yemen";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "algeria"){
        if(document.getElementById("c1").textContent != "Algeria"){
            document.getElementById("c1").textContent = "Algeria";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "angola"){
        if(document.getElementById("c2").textContent != "Angola"){
            document.getElementById("c2").textContent = "Angola";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "benin"){
        if(document.getElementById("c3").textContent != "Benin"){
            document.getElementById("c3").textContent = "Benin";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "botswana"){
        if(document.getElementById("c4").textContent != "Botswana"){
            document.getElementById("c4").textContent = "Botswana";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "burkina_faso"){
        if(document.getElementById("c5").textContent != "Burkina Faso"){
            document.getElementById("c5").textContent = "Burkina Faso";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "burundi"){
        if(document.getElementById("c6").textContent != "Burundi"){
            document.getElementById("c6").textContent = "Burundi";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "cameroon"){
        if(document.getElementById("c7").textContent != "Cameroon"){
            document.getElementById("c7").textContent = "Cameroon";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "cape_verde"){
        if(document.getElementById("c8").textContent != "Cape Verde"){
            document.getElementById("c8").textContent = "Cape Verde";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "central_african_republic"){
        if(document.getElementById("c9").textContent != "Central African Republic"){
            document.getElementById("c9").textContent = "Central African Republic";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "chad"){
        if(document.getElementById("c10").textContent != "Chad"){
            document.getElementById("c10").textContent = "Chad";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "comoros"){
        if(document.getElementById("c11").textContent != "Comoros"){
            document.getElementById("c11").textContent = "Comoros";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "cote_divoire"){
        if(document.getElementById("c12").textContent != "Cote d'ivoire"){
            document.getElementById("c12").textContent = "Cote d'ivoire";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "democratic_republic_of_the_congo"){
        if((document.getElementById("c13").textContent).length != 32){
            document.getElementById("c13").textContent = "Democratic Republic\nOf The Congo";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "djibouti"){
        if(document.getElementById("c14").textContent != "Djibouti"){
            document.getElementById("c14").textContent = "Djibouti";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "egypt"){
        if(document.getElementById("c15").textContent != "Egypt"){
            document.getElementById("c15").textContent = "Egypt";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "equatorial_guinea"){
        if(document.getElementById("c16").textContent != "Equatorial Guinea"){
            document.getElementById("c16").textContent = "Equatorial Guinea";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "eritrea"){
        if(document.getElementById("c17").textContent != "Eritrea"){
            document.getElementById("c17").textContent = "Eritrea";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "eswatini"){
        if(document.getElementById("c18").textContent != "Eswatini"){
            document.getElementById("c18").textContent = "Eswatini";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "ethiopia"){
        if(document.getElementById("c19").textContent != "Ethiopia"){
            document.getElementById("c19").textContent = "Ethiopia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "gabon"){
        if(document.getElementById("c20").textContent != "Gabon"){
            document.getElementById("c20").textContent = "Gabon";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "ghana"){
        if(document.getElementById("c21").textContent != "Ghana"){
            document.getElementById("c21").textContent = "Ghana";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "guinea"){
        if(document.getElementById("c22").textContent != "Guinea"){
            document.getElementById("c22").textContent = "Guinea";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "guinea_bissau"){
        if(document.getElementById("c23").textContent != "Guinea-bissau"){
            document.getElementById("c23").textContent = "Guinea-bissau";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "kenya"){
        if(document.getElementById("c24").textContent != "Kenya"){
            document.getElementById("c24").textContent = "Kenya";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "lesotho"){
        if(document.getElementById("c25").textContent != "Lesotho"){
            document.getElementById("c25").textContent = "Lesotho";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "liberia"){
        if(document.getElementById("c26").textContent != "Liberia"){
            document.getElementById("c26").textContent = "Liberia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "libya"){
        if(document.getElementById("c27").textContent != "Libya"){
            document.getElementById("c27").textContent = "Libya";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "madagascar"){
        if(document.getElementById("c28").textContent != "Madagascar"){
            document.getElementById("c28").textContent = "Madagascar";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "malawi"){
        if(document.getElementById("c29").textContent != "Malawi"){
            document.getElementById("c29").textContent = "Malawi";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "mali"){
        if(document.getElementById("c30").textContent != "Mali"){
            document.getElementById("c30").textContent = "Mali";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "mauritania"){
        if(document.getElementById("c31").textContent != "Mauritania"){
            document.getElementById("c31").textContent = "Mauritania";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "mauritius"){
        if(document.getElementById("c32").textContent != "Mauritius"){
            document.getElementById("c32").textContent = "Mauritius";          
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "morocco"){
        if(document.getElementById("c33").textContent != "Morocco"){
            document.getElementById("c33").textContent = "Morocco";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "mozambique"){
        if(document.getElementById("c34").textContent != "Mozambique"){
            document.getElementById("c34").textContent = "Mozambique";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "namibia"){
        if(document.getElementById("c35").textContent != "Namibia"){
            document.getElementById("c35").textContent = "Namibia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "niger"){
        if(document.getElementById("c36").textContent != "Niger"){
            document.getElementById("c36").textContent = "Niger";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "nigeria"){
        if(document.getElementById("c37").textContent != "Nigeria"){
            document.getElementById("c37").textContent = "Nigeria";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "republic_of_the_congo"){
        if(document.getElementById("c38").textContent != "Republic Of The Congo"){
            document.getElementById("c38").textContent = "Republic Of The Congo";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "rwanda"){
        if(document.getElementById("c39").textContent != "Rwanda"){
            document.getElementById("c39").textContent = "Rwanda";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "sao_tome_and_principe"){
        if(document.getElementById("c40").textContent != "São Tomé And Príncipe"){
            document.getElementById("c40").textContent = "São Tomé And Príncipe";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "senegal"){
        if(document.getElementById("c41").textContent != "Senegal"){
            document.getElementById("c41").textContent = "Senegal";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "seychelles"){
        if(document.getElementById("c42").textContent != "Seychelles"){
            document.getElementById("c42").textContent = "Seychelles";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "sierra_leone"){
        if(document.getElementById("c43").textContent != "Sierra Leone"){
            document.getElementById("c43").textContent = "Sierra Leone";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "somalia"){
        if(document.getElementById("c44").textContent != "Somalia"){
            document.getElementById("c44").textContent = "Somalia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "south_africa"){
        if(document.getElementById("c45").textContent != "South Africa"){
            document.getElementById("c45").textContent = "South Africa";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "south_sudan"){
        if(document.getElementById("c46").textContent != "South Sudan"){
            document.getElementById("c46").textContent = "South Sudan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "sudan"){
        if(document.getElementById("c47").textContent != "Sudan"){
            document.getElementById("c47").textContent = "Sudan";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "tanzania"){
        if(document.getElementById("c48").textContent != "Tanzania"){
            document.getElementById("c48").textContent = "Tanzania";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "the_gambia"){
        if(document.getElementById("c49").textContent != "The Gambia"){
            document.getElementById("c49").textContent = "The Gambia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "togo"){
        if(document.getElementById("c50").textContent != "Togo"){
            document.getElementById("c50").textContent = "Togo";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "tunisia"){
        if(document.getElementById("c51").textContent != "Tunisia"){
            document.getElementById("c51").textContent = "Tunisia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "uganda"){
        if(document.getElementById("c52").textContent != "Uganda"){
            document.getElementById("c52").textContent = "Uganda";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "zambia"){
        if(document.getElementById("c53").textContent != "Zambia"){
            document.getElementById("c53").textContent = "Zambia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "zimbabwe"){
        if(document.getElementById("c54").textContent != "Zimbabwe"){
            document.getElementById("c54").textContent = "Zimbabwe";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "antigua_and_barbuda"){
        if(document.getElementById("d1").textContent != "Antigua And Barbuda"){
            document.getElementById("d1").textContent = "Antigua And Barbuda";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "barbados"){
        if(document.getElementById("d2").textContent != "Barbados"){
            document.getElementById("d2").textContent = "Barbados";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "belize"){
        if(document.getElementById("d3").textContent != "Belize"){
            document.getElementById("d3").textContent = "Belize";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "canada"){
        if(document.getElementById("d4").textContent != "Canada"){
            document.getElementById("d4").textContent = "Canada";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "costa_rica"){
        if(document.getElementById("d5").textContent != "Costa Rica"){
            document.getElementById("d5").textContent = "Costa Rica";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "cuba"){
        if(document.getElementById("d6").textContent != "Cuba"){
            document.getElementById("d6").textContent = "Cuba";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "dominica"){
        if(document.getElementById("d7").textContent != "Dominica"){
            document.getElementById("d7").textContent = "Dominica";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "dominican_republic"){
        if(document.getElementById("d8").textContent != "Dominican Republic"){
            document.getElementById("d8").textContent = "Dominican Republic";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "el_salvador"){
        if(document.getElementById("d9").textContent != "El Salvador"){
            document.getElementById("d9").textContent = "El Salvador";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "grenada"){
        if(document.getElementById("d10").textContent != "Grenada"){
            document.getElementById("d10").textContent = "Grenada";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "guatemala"){
        if(document.getElementById("d11").textContent != "Guatemala"){
            document.getElementById("d11").textContent = "Guatemala";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "haiti"){
        if(document.getElementById("d12").textContent != "Haiti"){
            document.getElementById("d12").textContent = "Haiti";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "honduras"){
        if(document.getElementById("d13").textContent != "Honduras"){
            document.getElementById("d13").textContent = "Honduras";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "jamaica"){
        if(document.getElementById("d14").textContent != "Jamaica"){
            document.getElementById("d14").textContent = "Jamaica";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "mexico"){
        if(document.getElementById("d15").textContent != "Mexico"){
            document.getElementById("d15").textContent = "Mexico";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "nicaragua"){
        if(document.getElementById("d16").textContent != "Nicaragua"){
            document.getElementById("d16").textContent = "Nicaragua";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "panama"){
        if(document.getElementById("d17").textContent != "Panama"){
            document.getElementById("d17").textContent = "Panama";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "st_kitts_and_nevis"){
        if(document.getElementById("d18").textContent != "Saint Kitts And Nevis"){
            document.getElementById("d18").textContent = "Saint Kitts And Nevis";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "st_lucia"){
        if(document.getElementById("d19").textContent != "Saint Lucia"){
            document.getElementById("d19").textContent = "Saint Lucia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "st_vincent_and_the_grenadines"){
        if((document.getElementById("d20").textContent).length != 32){
            document.getElementById("d20").textContent = "Saint Vincent And\nThe Grenadines";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "the_bahamas"){
        if(document.getElementById("d21").textContent != "The Bahamas"){
            document.getElementById("d21").textContent = "The Bahamas";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "trinidad_and_tobago"){
        if(document.getElementById("d22").textContent != "Trinidad And Tobago"){
            document.getElementById("d22").textContent = "Trinidad And Tobago";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "usa"){
        if(document.getElementById("d23").textContent != "United States Of America"){
            document.getElementById("d23").textContent = "United States Of America";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "argentina"){
        if(document.getElementById("b1").textContent != "Argentina"){
            document.getElementById("b1").textContent = "Argentina";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "bolivia"){
        if(document.getElementById("b2").textContent != "Bolivia"){
            document.getElementById("b2").textContent = "Bolivia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "brazil"){
        if(document.getElementById("b3").textContent != "Brazil"){
            document.getElementById("b3").textContent = "Brazil";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "chile"){
        if(document.getElementById("b4").textContent != "Chile"){
            document.getElementById("b4").textContent = "Chile";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "colombia"){
        if(document.getElementById("b5").textContent != "Colombia"){
            document.getElementById("b5").textContent = "Colombia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "ecuador"){
        if(document.getElementById("b6").textContent != "Ecuador"){
            document.getElementById("b6").textContent = "Ecuador";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "guyana"){
        if(document.getElementById("b7").textContent != "Guyana"){
            document.getElementById("b7").textContent = "Guyana";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "paraguay"){
        if(document.getElementById("b8").textContent != "Paraguay"){
            document.getElementById("b8").textContent = "Paraguay";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "peru"){
        if(document.getElementById("b9").textContent != "Peru"){
            document.getElementById("b9").textContent = "Peru";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "suriname"){
        if(document.getElementById("b10").textContent != "Suriname"){
            document.getElementById("b10").textContent = "Suriname";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "uruguay"){
        if(document.getElementById("b11").textContent != "Uruguay"){
            document.getElementById("b11").textContent = "Uruguay";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "venezuela"){
        if(document.getElementById("b12").textContent != "Venezuela"){
            document.getElementById("b12").textContent = "Venezuela";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "australia"){
        if(document.getElementById("f1").textContent != "Australia"){
            document.getElementById("f1").textContent = "Australia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "federated_states_of_micronesia"){
        if((document.getElementById("f2").textContent).length != 30){
            document.getElementById("f2").textContent = "Federated States\nOf Micronesia";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "fiji"){
        if(document.getElementById("f3").textContent != "Fiji"){
            document.getElementById("f3").textContent = "Fiji";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "kiribati"){
        if(document.getElementById("f4").textContent != "Kiribati"){
            document.getElementById("f4").textContent = "Kiribati";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "marshall_islands"){
        if(document.getElementById("f5").textContent != "Marshall Islands"){
            document.getElementById("f5").textContent = "Marshall Islands";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "nauru"){
        if(document.getElementById("f6").textContent != "Nauru"){
            document.getElementById("f6").textContent = "Nauru";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "new_zealand"){
        if(document.getElementById("f7").textContent != "New Zealand"){
            document.getElementById("f7").textContent = "New Zealand";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "palau"){
        if(document.getElementById("f8").textContent != "Palau"){
            document.getElementById("f8").textContent = "Palau";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "papua_new_guinea"){
        if(document.getElementById("f9").textContent != "Papua New Guinea"){
            document.getElementById("f9").textContent = "Papua New Guinea";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "samoa"){
        if(document.getElementById("f10").textContent != "Samoa"){
            document.getElementById("f10").textContent = "Samoa";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "solomon_islands"){
        if(document.getElementById("f11").textContent != "Solomon Islands"){
            document.getElementById("f11").textContent = "Solomon Islands";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "tonga"){
        if(document.getElementById("f12").textContent != "Tonga"){
            document.getElementById("f12").textContent = "Tonga";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "tuvalu"){
        if(document.getElementById("f13").textContent != "Tuvalu"){
            document.getElementById("f13").textContent = "Tuvalu";
        }else{
            answerCorrect = false;
        }
    }
    else if(stringInput == "vanuatu"){
        if(document.getElementById("f14").textContent != "Vanuatu"){
            document.getElementById("f14").textContent = "Vanuatu";
        }else{
            answerCorrect = false;
        }
    }
    else{
        console.log("Country not found in the tabel");
    }



    if(answerCorrect == true){
        console.log("Correct Answer");
        console.log(stringInput);

        var hoverInput = stringInput.replace(/_/g, ' ');
        hoverInput = hoverInput.replace(/\b\w/g, function(l){ return l.toUpperCase() });
        console.log(hoverInput);


        if(stringInput == "england"){
            document.getElementById("england").setAttribute("fill", "#e4e6df");
            document.getElementById("turks_and_caicos_islands").setAttribute("fill", "#e4e6df");
            document.getElementById("the_british_virgin_islands").setAttribute("fill", "#e4e6df");
            document.getElementById("anguila").setAttribute("fill", "#e4e6df");
            document.getElementById("montserrat").setAttribute("fill", "#e4e6df");

            document.getElementById("england").setAttribute("xlink:title", "England");
            document.getElementById("turks_and_caicos_islands").setAttribute("xlink:title", "Turks And Caicos Islands (England)");
            document.getElementById("the_british_virgin_islands").setAttribute("xlink:title", "The British Virgin Islands (England)");
            document.getElementById("anguila").setAttribute("xlink:title", "Angila (England)");
            document.getElementById("montserrat").setAttribute("xlink:title", "Montserrat (England)");
        }
        else if(stringInput == "france"){
            document.getElementById("france").setAttribute("fill", "#e4e6df");
            document.getElementById("new_caledonia").setAttribute("fill", "#e4e6df");

            document.getElementById("france").setAttribute("xlink:title", "France");
            document.getElementById("new_caledonia").setAttribute("xlink:title", "New Caledonia (France)");
        }
        else if(stringInput == "usa"){
            document.getElementById("usa").setAttribute("fill", "#e4e6df");
            document.getElementById("american_samoa").setAttribute("fill", "#e4e6df");

            document.getElementById("usa").setAttribute("xlink:title", "USA");
            document.getElementById("american_samoa").setAttribute("xlink:title", "American Samoa (USA)");
        }
        else{

            document.getElementById(stringInput).setAttribute("fill", "#e4e6df");
            document.getElementById(stringInput).setAttribute("xlink:title", hoverInput);
        }

        document.getElementById("country_input_box").value = "";
        amountCorrect = amountCorrect + 1;

        document.getElementById("country_count").textContent = (amountCorrect + "/199");

        if(amountCorrect == 199){       /*Stops the timer when all the countries are correct*/
            startTime = false;
            allCorrect = true;

            updateScore();
        }
    }else{
        console.log("Incorrect Answer");
    }
}

function checkArrays(letterIndex, containsSpaces, stringInput){
    answerCorrect = false;

    for (i = 0; i < single_countries[letterIndex[0]].length; i++){      /*Checks if the single_countries array contains the user input*/
        if(single_countries[letterIndex[0]][i] == stringInput){
            answerCorrect = true;
        }
    }

    if(answerCorrect == false){
        if(letterIndex[1] != 99){       /*Checks if the complex_single_countries array contains the user input*/
            for (i =0; i < complex_single_countries[letterIndex[1]].length; i++){
                if(complex_single_countries[letterIndex[1]][i] == stringInput){
                    answerCorrect = true;
                }
            }

            if(answerCorrect == true){
                if(stringInput != "usa" && stringInput != "uae" && stringInput != "comoros" && stringInput != "myanmar"){
                    if(stringInput == "antigua" || stringInput == "barbuda"){
                        stringInput = "antigua_and_barbuda";
                    }
                    else if(stringInput == "bosnia" || stringInput == "herzegovina"){
                        stringInput = "bosnia_and_herzegovina";
                    }
                    else if(stringInput == "bissau" || stringInput == "guinea-bissau"){
                        stringInput = "guinea_bissau";
                    }
                    else if(stringInput == "macedonia"){
                        stringInput = "north_macedonia";
                    }
                    else if(stringInput == "burma"){
                        stringInput = "myanmar";
                    }
                    else if(stringInput == "nevis" || stringInput == "kitts"){
                        stringInput = "st_kitts_and_nevis";
                    }
                    else if(stringInput == "principe"){
                        stringInput = "sao_tome_and_principe";
                    }
                    else if(stringInput == "trinidad" || stringInput == "tobago"){
                        stringInput = "trinidad_and_tobago";
                    }
                    else if(stringInput == "america"){
                        stringInput = "usa";
                    }
                    else if(stringInput == "vincent" || stringInput == "grenadines"){
                        stringInput = "saint_vincent_and_the_grenadines";
                    }
                    else if(stringInput == "micronesia"){
                        stringInput = "federated_states_of_micronesia";
                    }
                    else if(stringInput == "gambia"){
                        stringInput = "the_gambia";
                    }
                    else if(stringInput == "bahamas"){
                        stringInput = "the_bahamas";
                    }
                    else if(stringInput == "vatican"){
                        stringInput = "vatican_city";
                    }
                    else if(stringInput == "czechia"){
                        stringInput = "czech_republic";
                    }else{
                        stringInput = "";
                    }
                }
            }
        }
    }

    if(answerCorrect == false){
        if(letterIndex[2] != 99){           /*Checks if the complex_countries array contains the user input*/
            for (i =0; i < complex_countries[letterIndex[2]].length; i++){
                if(complex_countries[letterIndex[2]][i] == stringInput){
                    answerCorrect = true;
                }
            }

            if(answerCorrect == true){
                if(stringInput != "antigua and barbuda" && stringInput != "bosnia and herzegovina" && stringInput != "cote divoire" && stringInput != "cape verde" && stringInput != "guinea bissau" && stringInput != "north macedonia" && stringInput != "papua new guinea" && stringInput != "sao tome and principe" && stringInput != "czech republic" && stringInput != "vatican city" && stringInput != "trinidad and tobago" && stringInput != "st kitts and nevis" && stringInput != "st vincent and the grenadines" && stringInput != "the gambia" && stringInput != "st lucia"){
                    if(stringInput == "cote d'ivoire" || stringInput == "ivory coast" || stringInput == "the ivory coast"){
                        stringInput = "cote_divoire";
                    }
                    else if(stringInput == "cabo verde"){
                        stringInput = "cape_verde"
                    }
                    else if(stringInput == "comoros islands"){
                        stringInput = "comoros";
                    }
                    else if(stringInput == "new guinea"){
                        stringInput = "papua_new_guinea";
                    }
                    else if(stringInput == "saint kitts" || stringInput == "st kitts" || stringInput == "saint kitts and nevis"){
                        stringInput = "st_kitts_and_nevis";
                    }
                    else if(stringInput == "saint vincent" || stringInput == "st vincent" || stringInput == "saint vincent and the grenadines"){
                        stringInput = "st_vincent_and_the_grenadines";
                    }
                    else if(stringInput == "saint lucia"){
                        stringInput = "st_lucia";
                    }
                    else if(stringInput == "sao tome" || stringInput == "são tomé" || stringInput == "são tomé and príncipe"){
                        stringInput = "sao_tome_and_principe";
                    }
                    else if(stringInput == "the czech republic"){
                        stringInput = "czech_republic";
                    }
                    else if(stringInput == "the vatican city"){
                        stringInput = "vatican_city";
                    }
                    else if(stringInput == "united states" || stringInput == "united states of america"){
                        stringInput = "usa";
                    }
                    else if(stringInput == "united arab emirates"){
                        stringInput = "uae";
                    }
                    else{
                        stringInput = "";
                    }
                }
            }
        }
    }

    if(answerCorrect == false){
        if(letterIndex[3] != 99){           /*Checks if the long_countries array contains the user input*/
            for (i =0; i < long_countries[letterIndex[3]].length; i++){
                if(long_countries[letterIndex[3]][i] == stringInput){
                    answerCorrect = true;
                }
            }
        }
    }

    stringInput = stringInput.replace(/ /g, '_');
    manageTables(stringInput, answerCorrect);
}

function checkAnswer(){         /*This formats the user input an organises the arrays that needs to be checked*/
    var stringInput = document.getElementById("country_input_box").value;
    stringInput = stringInput.toLowerCase();
    stringInput = stringInput.trim();

    var containsSpaces = false;
    var letterIndex = [];

    for (i = 0; i < stringInput.length; i++){
        if(stringInput.charAt(i) == " "){
            containsSpaces = true;
        }
    }

    if(stringInput.charAt(0) == "a"){
        letterIndex[0] = 0;
        letterIndex[1] = 0;
        letterIndex[2] = 0;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "b"){
        letterIndex[0] = 1;
        letterIndex[1] = 1;
        letterIndex[2] = 1;
        letterIndex[3] = 0;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "c"){
        letterIndex[0] = 2;
        letterIndex[1] = 2;
        letterIndex[2] = 2;
        letterIndex[3] = 1;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "d"){
        letterIndex[0] = 3;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 2;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "e"){
        letterIndex[0] = 4;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 3;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "f"){
        letterIndex[0] = 5;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 4;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "g"){
        letterIndex[0] = 6;
        letterIndex[1] = 3;
        letterIndex[2] = 3;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "h"){
        letterIndex[0] = 7;
        letterIndex[1] = 4;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "i"){
        letterIndex[0] = 8;
        letterIndex[1] = 99;
        letterIndex[2] = 4;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "j"){
        letterIndex[0] = 9;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "k"){
        letterIndex[0] = 10;
        letterIndex[1] = 5;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "l"){
        letterIndex[0] = 11;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "m"){
        letterIndex[0] = 12;
        letterIndex[1] = 6;
        letterIndex[2] = 99;
        letterIndex[3] = 5;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "n"){
        letterIndex[0] = 13;
        letterIndex[1] = 7;
        letterIndex[2] = 5;
        letterIndex[3] = 6;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "o"){
        letterIndex[0] = 14;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "p"){
        letterIndex[0] = 15;
        letterIndex[1] = 8;
        letterIndex[2] = 6;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "q"){
        letterIndex[0] = 16;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "r"){
        letterIndex[0] = 17;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 7;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "s"){
        letterIndex[0] = 18;
        letterIndex[1] = 99;
        letterIndex[2] = 7;
        letterIndex[3] = 8;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "t"){
        letterIndex[0] = 19;
        letterIndex[1] = 9;
        letterIndex[2] = 8;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "u"){
        letterIndex[0] = 20;
        letterIndex[1] = 10;
        letterIndex[2] = 9;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "v"){
        letterIndex[0] = 21;
        letterIndex[1] = 11;
        letterIndex[2] = 10;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "w"){
        letterIndex[0] = 22;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "y"){
        letterIndex[0] = 23;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else if(stringInput.charAt(0) == "z"){
        letterIndex[0] = 24;
        letterIndex[1] = 99;
        letterIndex[2] = 99;
        letterIndex[3] = 99;
        checkArrays(letterIndex, containsSpaces, stringInput);
    }
    else{
        console.log("The input contains x, nothing or an invalid letter")
    }
}

document.getElementById("country_submit_btn").onclick = function() {checkAnswer()};

var single_countries = [
    ["afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "australia", "austria", "azerbaijan"],
    ["bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "botswana", "brazil", "brunei", "bulgaria", "burundi"],
    ["cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia", "croatia", "cuba", "cyprus"],
    ["denmark", "djibouti", "dominica"],
    ["ecuador", "egypt", "england","eritrea", "estonia", "eswatini", "ethiopia"],
    ["fiji", "finland", "france"],
    ["gabon", "georgia", "germany", "ghana", "greece", "grenada", "guatemala","guinea", "guyana"],
    ["haiti", "honduras", "hungary"],
    ["iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy"],
    ["jamaica", "japan", "jordan"],
    ["kazakhstan", "kenya", "kiribati", "kosovo", "kuwait", "kyrgyzstan"],
    ["laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg"],
    ["madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique"],
    ["namibia", "nauru", "nepal", "netherlands", "nicaragua", "niger", "nigeria", "norway"],
    ["oman"],
    ["pakistan", "palau", "panama", "paraguay", "peru", "philippines", "poland", "portugal"],
    ["qatar"],
    ["romania", "russia", "rwanda"],
    ["samoa", "scotland", "senegal", "serbia", "seychelles", "singapore", "slovakia", "slovenia", "somalia", "spain", "sudan", "suriname", "sweden", "switzerland", "syria"],
    ["taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "tunisia", "turkey", "turkmenistan", "tuvalu"],
    ["uganda", "ukraine", "uruguay", "uzbekistan"],
    ["vanuatu", "venezuela", "vietnam"],
    ["wales"],
    ["yemen"],
    ["zambia", "zimbabwe"]
];

var complex_single_countries = [
    ["antigua", "america"],
    ["bahamas" ,"barbuda", "bissau", "bosnia", "burma"],
    ["comoros", "czechia"],
    ["gambia", "grenadines", "guinea-bissau"],
    ["herzegovina"],
    ["kitts"],
    ["macedonia", "micronesia", "myanmar"],
    ["nevis"],
    ["principe"],
    ["tobago", "trinidad"],
    ["usa", "uae"],
    ["vincent", "vatican"]
];

var complex_countries = [
    ["antigua and barbuda"],
    ["bosnia and herzegovina"],
    ["cape verde", "cabo verde", "comoros islands", "cote divoire", "cote d'ivoire","czech republic"],
    ["guinea bissau"],
    ["ivory coast"],
    ["north macedonia", "new guinea"],
    ["papua new guinea"],
    ["saint kitts", "st kitts", "saint kitts and nevis", "st kitts and nevis", "saint lucia", "st lucia","saint vincent", "st vincent", "saint vincent and the grenadines", "st vincent and the grenadines", "sao tome", "são tomé","sao tome and principe", "são tomé and príncipe"],
    ["the czech republic", "the gambia","the ivory coast", "the vatican city" ,"trinidad and tobago"],
    ["united states", "united states of america", "united arab emirates"],
    ["vatican city"]
];

var long_countries = [
    ["burkina faso"],
    ["central african republic", "costa rica"],
    ["democratic republic of the congo", "dominican republic"],
    ["east timor", "el salvador", "equatorial guinea"],
    ["federated states of micronesia"],
    ["marshall islands"],
    ["new zealand", "north korea", "northern ireland"],
    ["republic of the congo"],
    ["san marino", "saudi arabia", "sierra leone", "solomon islands", "south africa", "south korea", "south sudan", "sri lanka"]
];

addEventListener('keyup', e => {        /*Detect enter key press to sumbit the input*/
    if(e.keyCode == 13){
        checkAnswer();
    }
}, false);