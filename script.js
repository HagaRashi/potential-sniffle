$(()=>{
    $("#megaStart").on("click",()=>{
        $("#megamain").addClass("disapearing")
        window.setTimeout(()=>{
            $("body").load("second.html")
        },600)
    })
})