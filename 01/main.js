window.onload=function(){
   // this.document.write("Hello JavaScript!");

};

$(document).ready(function(){
    $("input").click(function(){
        let number0fListItem = $("#choice li").length;
        let randomChildNumber = Math.floor(Math.random()*number0fListItem);
        $("#word").text($("#choice li").eq(randomChildNumber).text());
        $("#big").attr("src", picture[randomChildNumber]);
        //左半邊的圖
        let pic= []; 
        for(let x=0,j=0; x<10; x++){
            if(x!=randomChildNumber){
                pic[j] = x;
                j++;
            }
        }
        $("#s1").attr("src", picture[pic[0]]);
        $("#s2").attr("src", picture[pic[1]]);
        $("#s3").attr("src", picture[pic[2]]);
        $("#s4").attr("src", picture[pic[3]]);
        $("#s5").attr("src", picture[pic[4]]);
        $("#s6").attr("src", picture[pic[5]]);
        $("#s7").attr("src", picture[pic[6]]);
        $("#s8").attr("src", picture[pic[7]]);
        $("#s9").attr("src", picture[pic[8]]);
    });
});