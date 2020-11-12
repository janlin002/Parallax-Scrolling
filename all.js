$(document).ready(function(){
    var showSkill=false;
    $('.scrollTop').click(function(e){
        e.preventDefault();
        var target=$(this).attr('href');
        // console.log(target);
        var targetPos=$(target).offset().top;//距離上方距離
        // console.log(target,targetPos);
        $('html,body').animate({scrollTop:targetPos},1000);
    });

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight=$(window).height();
        // console.log(scrollPos);

        // $('.scrollTop').each(function(){
        //     var target=$(this).attr('href');
        //     var targetPos=$(target).offset().top;
        //     var targetHeight=$(target).outerHeight();//加上外誆
        //     console.log(target,targetPos,targetHeight);
        //     if(targetPos -1 <= scrollPos && (targetPos+targetHeight)>scrollPos){
        //         console.log(target);
        //         $('.scrollTop').removeClass('active');
        //         $(this).addClass('active');
        //     }else{
        //         $(this).removeClass('active');
        //     }
            
        // });

        $('.scrollTop').each(function(){
            var target = $(this).attr('href'); 
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos){
              $('.scrollTop').removeClass('active')
              $(this).addClass('active');
            } else {
              $(this).removeClass('active')
            }
          });

        var skillTop=$('#skills').position().top;
        if(skillTop<=(scrollPos + windowHeight / 2) && !showSkill ){
            $('#skills, .progress-bar').each(function(){
                var thisValue=$(this).data('progress');
                $(this).css('width',thisValue+'%');
            })
        }
        $('.animated').each(function(){
            var thisPos=$(this).offset().top;
            if((windowHeight+scrollPos)>thisPos){
                $(this).addClass('fadeIn');
            }
        })

        $('#profiles').css('background-position=y',(scrollPos/2)+'px');
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )');
        // $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )');
  });

    }); 