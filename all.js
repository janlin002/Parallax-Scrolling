$(document).ready(function(){
    $('.scrollTop').click(function(e){
        e.preventDefault();
        var target=$(this).attr('href');
        // console.log(target);
        var targetPos=$(target).offset().top;//距離上方距離
        // console.log(target,targetPos);
        $('html,body').animate({scrollTop:targetPos},1000);
    });

    $(window).scroll(function(){
        var scrollPos =$(window).scrollTop();
        // console.log(scrollPos);

        $('.scrollTop').each(function(){
            var target=$(this).attr('href');
            var targetPos=$(target).offset().top;
            var targetHeight=$(target).outerHeight();//加上外誆
            // console.log(target,targetPos,targetHeight);
            if(targetPos -1 <= scrollPos && (targetPos+targetHeight)>scrollPos){
                // console.log(target);
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
            
        });
    });

   
  
});