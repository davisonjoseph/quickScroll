(function($){
$.fn.pageScroll = function() {
	var pageScrollContainer = '<div class="pageScroll-container" id="q_Scroll"><i class="down-scroll"></i><span class="scroll_label">Scroll down</span></div>';
	var pageScrollDocumentHeight = $(this).css("height");
        var windowHeight = $(window).height();
        var initDocHeight = $(document).height();
        //if(initDocHeight>windowHeight){
	$("body").append(pageScrollContainer);
        //}
	$('#q_Scroll').on("click",function(){
	    var documentHeight = $(document).height()-windowHeight;
	    var scroll = $(window).scrollTop();
	    var DocHalfSize = documentHeight/2;
            if(scroll<=DocHalfSize){
	    	var scrollAmount = documentHeight;
	    }else{
	    	var scrollAmount = 0;
	    }
	    $('html,body').animate({ scrollTop: scrollAmount }, 'slow', function () {
	     	var CurScroll = $(window).scrollTop();
	    	if(CurScroll==0){
	    		$(".scroll_label").html("Scroll down");
	    		$(".pageScroll-container i").removeClass("up-scroll").addClass("down-scroll");
	    	}else{
	    		$(".scroll_label").html("Scroll up");
	    		$(".pageScroll-container i").removeClass("down-scroll").addClass("up-scroll");
	    	}
	     });
	});

	$(window).scroll(function(){
	    var documentHeight = $(document).height()-windowHeight;;
	    var scroll = $(window).scrollTop();
	    var DocHalfSize = documentHeight/2;
	    if(scroll<=DocHalfSize){
	    	var scrollAmount = documentHeight;
	    	$(".scroll_label").html("Scroll down");
	    	$(".pageScroll-container i").removeClass("up-scroll").addClass("down-scroll");
	    }else{
	    	var scrollAmount = 0;
	    	$(".scroll_label").html("Scroll up");
	    	$(".pageScroll-container i").removeClass("down-scroll").addClass("up-scroll");
	    }
	});
};
})(jQuery);