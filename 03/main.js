$(document).ready(function(){

    let currentQuiz=null;
    let preQuiz=null;
    let score=null;
    $("#startButton").click(function(){

        if(currentQuiz==null)
        { //第一題
            currentQuiz=0;
            preQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //清空選項區域
            $("#options").empty();
            $("#father").empty();
            for(let x = 0;x<questions[0].answers.length;x++) //抓出選項顯示
            {
                $("#options").append(
                    "<input name='option' type='radio' value=" + x + ">"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            //改變按鈕文字
            $("#startButton").attr("value","Next");
        }
        else
        {//已作答
            //訪問每個選項是否被選取
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked)
                    {
                        console.log("option checked!");
                        console.log("題數:"+score);
                        //是否已產生結果
                        if(isNaN(questions[currentQuiz].answers[i][2]))
                        {   
                            console.log(currentQuiz);

                            $("#father").append( //新增div區塊
                                "<div>"+"<h2>"+
                                "<label>"+questions[currentQuiz].question+"</label><br>"+"</h2>"+
                                "<p>"+"<label>"+questions[currentQuiz].answers[i][0]+"</label><br><br></p>"+
                                "</div>"
                            );

                            //計算分數
                            score = score + questions[currentQuiz].answers[i][1];
                             
                            $("#question").empty();
                            $("#question").text("答對題數: "+ score + "\n");
                            $("#options").empty();

                            currentQuiz=null;
                            preQuiz=null;
                            score=null;

                            $("#startButton").attr("value","Restart");                     

                        }
                        else
                        {
                            preQuiz=currentQuiz; //上一題題目
                            currentQuiz++;                           
                            $("#question").text(questions[currentQuiz].question);                            
                            $("#options").empty();

                            for(let x=0;x<questions[currentQuiz].answers.length;x++){

                                $("#options").append(
                                    "<input name='option' type='radio' value=" + x + ">"+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }

                            $("#father").append( //新增div區塊
                                "<div>"+"<h2>"+
                                "<label>"+questions[preQuiz].question+"</label><br>"+"</h2>"+
                                "<p>"+"<label>"+questions[preQuiz].answers[i][0]+"</label><br><br></p>"+
                                "</div>"
                            );

                            //計算分數
                            score = score + questions[preQuiz].answers[i][1];

                            if (currentQuiz == 6)
                            {
                                $("#startButton").attr("value","查看成績");
                            }
                        }
                        return false;
                    }
                   
                }
            );

        }
    });
});