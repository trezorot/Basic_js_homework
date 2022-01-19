console.log(`------ Homework_JQuery_JS_part02 ------`);
$(document).ready(function(){
    let text = $("#text");
    let color = $("#color");
    let button = $("#btn-generator");
    let message = $("#message");
    let header = $("#generate");
    button.click(function() {
        let text = $("input").first().val();
        let color = $("input").last().val();
        let message = $("h3").last().val();
        
        if(text ===""){
            $("h3").last().html("<h3> Error! Please check your input! </h3>");
            $("message").last().after.button;
        } else {
            $("h1").first().html(`${text}`);
            header.css("color", color);
            $("header").first().after.button;
        }
         
          
    })
})