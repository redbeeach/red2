$(document).ready(function(){
    var menu = $("#top_menu>ul>li");
    var contents= $("#contents>div");
    menu.click(function(e){
       e.preventDefault();
        var i = $(this).index();
        var section  = contents.eq(i);
        var tt = section.offset().top -114;
        $("html, body").stop().animate({scrollTop:tt});    
        menu.removeClass("on");
        menu.eq(i).addClass("on");
    });
    $(window).scroll(function(){
        var sct = window.pageYOffset;
        //a = 스크롤 top의 위치 구하기
        //만일 a가 paper의 top위치보다 크면
        //paper addClass("on")
        //만일 a가 work의 top위치보다 크면
        //work addClass("on")
        //만일 a가 email의 top위치보다 크면
        //email addClass("on")
//        var paper = contents.eq(0).offset().top -114;
//        if(sct >= paper){
//            menu.removeClass("on");
//            menu.eq(0).addClass("on");
//        }
        contents.each(function(index){
           // var i=$(this).index();
            if (sct >= $(this).offset().top-114){
                menu.removeClass("on");
                menu.eq(index).addClass("on");
            }
        });
    });
});















