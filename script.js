$(()=>{
    $("#megamain").one("animationend",()=>{
        console.log("xtraxtraxtra");
    })
    $("#megaStart").one("click",()=>{
        $("#megamain").addClass("vanishing");
    })
})