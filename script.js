$(()=>{
    $("#megaStart").on("click",()=>{
        $("#megamain").addClass("disapearing")
        window.setTimeout(()=>{
            $("body").load("second.html")
            window.setTimeout(()=>{
                $(".answ").css({"animation-name": "none", "box-shadow":"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"})
            })
        },800)
    })
})