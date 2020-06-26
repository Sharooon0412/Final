$(document).ready(function(){
    setTable();

    console.log("HI");
 
    //如果有人來設定日期
    /*$("#inputDate").change(function(){
        let inputDate = $(this).val(); //回傳表格內被設置的值
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-"); //分隔
        console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        //setTable();
    });*/
 
});

let topicCount = topicsArray.length;
let num = 1;

$("select#op").change(function(){
    console.log($(this).val());
    if($(this).val() == "Season 7")
    {
        topicCount = topicsArray.length;
        num = 1;
    }


    if($(this).val() == "Season 6")
    {
        topicCount = topicsArray2.length;
        num = 2;
    }

    if($(this).val() == "Season 5")
    {
        topicCount = topicsArray3.length;
        num = 3;
    }

    if($(this).val() == "Season 4")
    {
        topicCount = topicsArray4.length;
        num = 4;
    }
       
    console.log(topicCount);

    setTable();
});
 
function setTable(){
    $("#courseTable").empty();
 
    //一次產生固定標題列
    $("#courseTable").append(
        "<tr><th>集數</th><th>時間</th><th>主題</th></tr>"
    );
    //反覆產生資料列
    //topicCount = topicsArray.length;
 
    //計算一天有多少毫秒
    let oneDayMilliseconds = 24*60*60*1000;
 
    for(let x=0; x<topicCount; x++){
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        let trSpecial = "<tr>";

        console.log(num);

        if(num == 1)
        {
            if(topicsArray[x]=="不上課"){
                trSpecial = "<tr style='background-color:lightyellow'>";
            }
            $("#courseTable").append(
                trSpecial +
                "<td>"+ (x+1) +"</td>"+
                "<td>"+ date1[x] +"</td>"+
                "<td>" + topicsArray[x]+"</td>"+
                "</tr>"
            ); //每一列有場次、預計日期、主題
        }

        if(num == 2)
        {
            if(topicsArray2[x]=="不上課"){
                trSpecial = "<tr style='background-color:lightyellow'>";
            }
            $("#courseTable").append(
                trSpecial +
                "<td>"+ (x+1) +"</td>"+
                "<td>"+ date2[x] +"</td>"+
                "<td>" + topicsArray2[x]+"</td>"+
                "</tr>"
            ); //每一列有場次、預計日期、主題            
        }

        if(num == 3)
        {
            if(topicsArray3[x]=="不上課"){
                trSpecial = "<tr style='background-color:lightyellow'>";
            }
            $("#courseTable").append(
                trSpecial +
                "<td>"+ (x+1) +"</td>"+
                "<td>"+ date3[x] +"</td>"+
                "<td>" + topicsArray3[x]+"</td>"+
                "</tr>"
            ); //每一列有場次、預計日期、主題            
        }

        if(num == 4)
        {
            if(topicsArray4[x]=="不上課"){
                trSpecial = "<tr style='background-color:lightyellow'>";
            }
            $("#courseTable").append(
                trSpecial +
                "<td>"+ (x+1) +"</td>"+
                "<td>"+ date4[x] +"</td>"+
                "<td>" + topicsArray4[x]+"</td>"+
                "</tr>"
            ); //每一列有場次、預計日期、主題            
        }
    }
}
