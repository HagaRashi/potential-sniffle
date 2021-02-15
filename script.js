$(()=>{
    $("#megaStart").on("click",()=>{
        $("#megamain").addClass("disapearing")
        $('#megaanim').on("animationend",()=>{
            $("body").load("second.html")
            $(".answ").on("animationend",()=>{
                $(".answ").addClass("appeared")
                $(".answ").on("click", ()=>{
                    $(this).addClass("active")
            })
        },500)
    })})
})