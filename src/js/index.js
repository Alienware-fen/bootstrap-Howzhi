// 精品课程 -- 图片放大缩小
$(".warp-overflow>img").hover(function(){
    $(this).addClass("warp-scale").removeClass("warp-scaleafter")
},function(){
    $(this).addClass("warp-scaleafter").removeClass("warp-scale")
})

// 班级推荐 --图片蒙版
$('.warp-pic').hover(function(){
    $(this).addClass("pic-show")
},function(){
    $(this).removeClass("pic-show")
})

// 班级推荐 --文字走马灯
$(function(){
	$('.txt').liMarquee({
        direction: 'up',  //方向
        scrollamount:15,  //滚动速度
        circular:false,  //是否循环滚动
        hoverstop:false, //鼠标悬停
        drag:true  // 鼠标拖动
	});
});


// 热门标签 图片放大缩小
$('.hotTag .thumbnail>img').hover(function(){
    $(this).addClass("warp-scale").removeClass("warp-scaleafter")
},function(){
    $(this).addClass("warp-scaleafter").removeClass("warp-scale")
})


    