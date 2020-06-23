$(function(){
           $("#gnb > ul > li > a").on("click",pfGnb);
            function pfGnb(e){
                e.preventDefault();
                //클릭한 a의 index값을 가져온다.
               var idxNum = $("#gnb > ul > li > a").index($(this));
                if(idxNum == 0){
                    var topNum = $("#wrap > section").eq(idxNum).offset().top - 70;
                   }else{
                    var topNum = $("#wrap > section").eq(idxNum).offset().top;   
                   }
                //alert(topNum);
                $("Html,body").stop().animate({scrollTop:topNum + "px"},1000);
                
                $("#gnb > ul > li > a").filter(".on").removeClass("on");
                $(this).addClass("on");
            }
            $(".icon-menu a").on("click",function(e){
                e.preventDefault();
                var idxNum = $(".icon-menu a").index($(this))+ 1;
                $("#gnb > ul > li > a").eq(idxNum).trigger("click");
            });
        	/*변경된 부분S*/
	var arrData = []
	function resetData(myData) {
		for (var i = 0; i < myData.length; i++) {
			$(".chart"+(i+1)).data('easyPieChart').update(myData[i]);	
		}
	}
	$(window).on("scroll", function() {
		var sct = $(this).scrollTop();

		if(sct > 70) {
			$("#header").addClass("off");
		} else {
			$("#header").removeClass("off");
		}
		var sec3Top = $(".sec3").offset().top - 80;
		var sec4Top = $(".sec4").offset().top - 200;
		var scHeight = document.documentElement.clientHeight;
		if(sct >= sec3Top && sct <= sec4Top && $(".chart-list").is(":hidden")) {
			$(".chart-list").show();
			if($(".chart1").data('easyPieChart')) {
				var arrData = [92, 80, 84, 35, 40, 90];
				resetData(arrData);	
			} else {
				chartStart();
			}
		} else if(sct >= sec4Top && $(".chart-list").is(":visible") || sct < sec3Top - scHeight && $(".chart-list").is(":visible")){
			$(".chart-list").hide();
			if($(".chart1").data('easyPieChart')) {
				var arrData = [0, 0, 0, 0, 0, 0];
				resetData(arrData);	
			}
		}
	});

            $(".btn-top a").on("click",function(e){
               e.preventDefault();
               $("#gnb > ul > li > a").eq(0).trigger("click");
            });
            
            var $grid = $('.grid').isotope({
              // options
              itemSelector: '.grid-item',
              layoutMode: 'fitRows'
            });
            
            $(".sec2 > ul.nav > li > a").on("click",function(e){
                e.preventDefault();
                var idxNum = $(".sec2 > ul.nav > li > a").index($(this));
                
                if(idxNum == 0){
                    $grid.isotope({ filter: '*' });
                } else if (idxNum == 1){
                    $grid.isotope({ filter: '.res' });
                }else{
                    $grid.isotope({ filter: '.pc' });
                }
                $(".sec2 .nav .on").removeClass("on");
                $(this).addClass("on");
            });

/*chart*/
    $(".chart-list").hide();
    function chartStart( ) {
        $('.chart1').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor:" #e25f70",
        lineWidth:"13",
        lineCap:"squre",
        size:"200",
        scaleColor:"transparent",
    });
    var chart1 = window.chart1 = $('.chart1').data('easyPieChart');
        $('.chart2').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor:" #fbb79e",
        lineWidth:"13",
        lineCap:"squre",
        size:"200",
        scaleColor:"transparent",
        });
    var chart2 = window.chart2 = $('.chart2').data('easyPieChart');
        
        $('.chart3').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor:" #fad5a6",
        lineWidth:"13",
        lineCap:"squre",
        size:"200",
        scaleColor:"transparent",
    });
    var chart3 = window.chart3 = $('.chart3').data('easyPieChart');

    $('.chart4').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor:" #e25f70",
        lineWidth:"13",
        lineCap:"squre",
        size:"200",
        scaleColor:"transparent",
    });
    var chart4 = window.chart4 = $('.chart4').data('easyPieChart');
        
    $('.chart5').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor:" #fbb79e",
        lineWidth:"13",
        lineCap:"squre",
        size:"200",
        scaleColor:"transparent",
    });
    var chart5 = window.chart5 = $('.chart6').data('easyPieChart');
        
        $('.chart6').easyPieChart({
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        barColor:" #fad5a6",
        lineWidth:"13",
        lineCap:"squre",
        size:"200",
        scaleColor:"transparent",
    });
    var chart6 = window.chart6 = $('.chart6').data('easyPieChart');
    }

	$(".sec4 form").on("submit", portsubmit);
		function portsubmit(e){
			e.preventDefault();
			var ts = $(this);
			$.ajax({
				url:ts.attr("action"),
				type:"post",
				data:ts.serialize(),
				dataType: "html",
				success:function(data){
					if(data == "New record created successfully"){
						alert("정상적으로 등록되었습니다!");
						$(".sec4 :reset").trigger("click");
					}
				}
			});
		}
});