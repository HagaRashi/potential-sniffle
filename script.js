$(()=>{
    $("#main").one("animationend",()=>{
        console.log("lol");
    })
    $("#start").one("click",()=>{
        $("#main").addClass("vanishing").removeClass("appearing");
        $("#main.vanishing").one("animationend",()=>{
            $("body").load("second.html");
            $(".answ").click(function(){
                console.log($(this))
                $( this ).addClass("selected");
            })
        })
    })
})