function toggle(x,y){
    $(x).one("click",function(){
        console.log($(this))
        $(x).off("click");
        if(y){
            $(this).addClass("selected");
            toggle(this,false);
        } else{
            $(this).removeClass("selected");
            toggle(".answ",true);
        }
    })
}
$(()=>{
    $("#start").one("click",()=>{
        $("#main").addClass("vanishing").removeClass("appearing");
        $("#main.vanishing").one("animationend",()=>{
            $("body").load("second.html",toggle(".answ",true));
        })
    })
})