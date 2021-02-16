$(()=>{
    $("#main").one("animationend",()=>{
        console.log("lol");
    })
    $("#megaStart").one("click",()=>{
        $("#main").addClass("vanishing").removeClass("appearing");
        $("#main.vanishing").one("animationend",()=>{
            $("body").load("second.html");
            $(".answ").click(()=>{
                console.log($(this))
                $( this ).addClass("selected");
            })
        })
    })
})