$(()=>{
    $("#start").one("click",()=>{
        $("#main").addClass("vanishing").removeClass("appearing");
        $("#main.vanishing").one("animationend",()=>{
            $("body").load("second.html",()=>{
                $(".answ").one("click",function(){
                    console.log($(this))
                    $( this ).addClass("selected");
                    $(".answ").off("click");
                })
            });
        })
    })
})