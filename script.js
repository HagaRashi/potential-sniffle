function toggle(x){
    console.log($(x).one("click",function(){
        $(x).removeClass("selected");
        $(this).addClass("selected")
        toggle($(".answ"))
    }))
}
$(()=>{
    $("#start").one("click",()=>{
        $("#main").addClass("vanishing").removeClass("appearing");
        $("#main.vanishing").one("animationend",()=>{
            $("body").load("second.html",()=>{toggle($(".answ"))});
        })
    })
})