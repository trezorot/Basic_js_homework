console.log(`----- Homework_JQuery_JS -----`);

$(document).ready(function(){
    let input = $("#name");
    let hello = $("#hello");
    let button = $("button").first();
    button.click(function() {
        let input = $("input").first().val();
        $("h1").last().html(`Hello there ${input}`);
        $("input").after.input; 
    })
})


