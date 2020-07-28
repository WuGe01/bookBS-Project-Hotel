$(document).ready(function () {
    $('#wugemeun a,#wugetitleTT,Wugeslider').click(function (e) {
        let who=$(this).attr("href")
        let val=($(who).offset().top-$('#wugemeun').innerHeight()+1)
        $("html").animate({
            scrollTop: val
            },500,"swing")
    })

    $(window).scroll(function () {
        spy()

    })


    function spy() {
        let nowat=$(window).scrollTop();

        $("section").each(function () {
            let id =$(this).attr("id")
            let off=$(this).offset().top
            let hg=$(this).innerHeight()

         
            if(off < nowat &&  nowat < hg+off){
                $('#wugemeun a').removeClass("active");
                $(`#wugemeun a[href='#${id}']`).addClass("active");
                console.log(id)
               
            }
        })
    }

})
