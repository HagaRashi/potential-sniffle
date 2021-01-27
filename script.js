$(()=>{
    $("#megaStart").on("click",()=>{
        $("#megamain").addClass("disapearing")
        window.setTimeout(()=>{
            $("body").load("second.html")
            window.setTimeout(()=>{
                $(".answ").addClass("appeared")
                $(".answ").on("click", ()=>{
                    $(this).addClass("active")
                })
            },500)
        },800)
    })
})