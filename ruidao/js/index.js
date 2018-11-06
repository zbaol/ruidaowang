//////////////////////////首页
var mySwiper = new Swiper ('#swiper', {
 direction: 'horizontal',
 autoplay:true,
 on:{
     slideChange:function(){
       console.log(this.activeIndex);
      $(".line>p:nth-child("+(this.activeIndex+1)+")").css("background","red").siblings().css("background","black");
   },
 }
});
var swiper1=new Swiper('#swiper1',{
 grabCursor:true,
 slidesPerView:4,
 breakpoints:{
   1920:{
     slidesPerView:4,
   },
   1199:{
     slidesPerView:3,
   },
   992:{
     slidesPerView:2,
   },
   768:{
     slidesPerView:1,
   },
 }
})
var swiper2=new Swiper('#swiper2',{
 direction:'horizontal',
 on:{
     slideChange:function(){
     $(".button>p:nth-child("+(this.activeIndex+1)+")").addClass("on").siblings().removeClass("on");
   },
 }
})
var swiper3=new Swiper('#swiper3',{
 grabCursor:true,
 slidesPerView:5,
 breakpoints:{
   1920:{
     slidesPerView:5,
   },
   1199:{
     slidesPerView:3,
   },
   992:{
     slidesPerView:2,
   },
   768:{
     slidesPerView:1,
   },
 }
})
$(".line>p:nth-child(1)").css("background","red");
$(".line>p").click(function(){
  mySwiper.slideTo($(this).index());
  $(".line>p:nth-child("+($(this).index()+1)+")").css("background","red").siblings().css("background","black");
})
$(".button>p").click(function(){
  console.log($(this).index());
  swiper2.slideTo($(this).index());
  $(".button>p").eq($(this).index()).addClass("on").siblings().removeClass("on");
  //$(".button>li:nth-child("+($(this).index()+1)+")>a").addClass("on").siblings().removeClass("on");
})
for(var i=1;i<=15;i++){
  $(".partner_company>p:nth-child("+i+")>a").css("background-image","url(img/"+i+"d.png)");
}
$(".wx").mouseover(function(){
   $(".wx>img:nth-child(2)").css("display","block");
})
$(".wx").mouseout(function(){
   $(".wx>img:nth-child(2)").css("display","none");
})
$(".address>a:nth-child(1)").mouseover(function(){
  $(".left").css("display","block");
})
$(".address>a:nth-child(1)").mouseout(function(){
  $(".left").css("display","none");
})
$(".address>a:nth-child(2)").mouseover(function(){
  $(".right").css("display","block");
})
$(".address>a:nth-child(2)").mouseout(function(){
  $(".right").css("display","none");
})
//////////////////////////案例页
var anlicase=new Swiper('.anli-case',{
  slidesPerView:1,
  on:{
      slideChange:function(){
      $(".btn-case>p:nth-child("+(this.activeIndex+1)+")").addClass("on").siblings().removeClass("on");
    },
  }
})
$(".btn-case>p").click(function(){
  anlicase.slideTo($(this).index());
  $(".btn-case>p").eq($(this).index()).addClass("on").siblings().removeClass("on");
})
////////////////////////案例详情页
var anli=new Swiper('.case1',{
 grabCursor:true,
 slidesPerView:1,
 on:{
     slideChange:function(){
      console.log(this.activeIndex);
     $(".msml-pic .swiper-slide:nth-child("+(this.activeIndex+1)+")").addClass("check").siblings().removeClass("check");
   },
 }
})
var msml=new Swiper('.msml-pic',{
 grabCursor:true,
 slidesPerView:3,
})
function switch1(num){
  $(".msml-pic").find(".swiper-slide").eq(num).addClass("check").siblings().removeClass("check");
  anli.slideTo(num);
  msml.slideTo(num);
}
$(".msml-pic .swiper-slide").click(function(){
  $(".msml-pic").find(".swiper-slide").eq($(this).index()).addClass("check").siblings().removeClass("check");
  anli.slideTo($(this).index());
  $(".msml>p:nth-child(1)>b").click(function(){
     $(this).index()--;
     if($(this).index()<0){
       $(this).index()=0;
     }
     switch1($(this).index());
  })
  $(".msml>p:nth-child(3)>b").click(function(){
     $(this).index()++;
     if($(this).index()>4){
       $(this).index()=4;
     }
     switch1($(this).index());
  })
})
var msmlNum=0;
$(".msml>p:nth-child(1)>b").click(function(){
  msmlNum--;
  if(msmlNum<0){
    msmlNum=0;
  }
  switch1(msmlNum);
})
$(".msml>p:nth-child(3)>b").click(function(){
  msmlNum++;
  if(msmlNum>4){
    msmlNum=4;
  }
  switch1(msmlNum);
})
//****************************微信小程序页面开始*****************************
//--------------------------------小程序--------------
var applet = new Swiper('.applet_con',{
  grabCursor:true,
  slidesPerView:4,
  breakpoints:{
    1920:{
      slidesPerView:4,
    },
    1199:{
      slidesPerView:4,
    },
    992:{
      slidesPerView:4,
    },
    768:{
      slidesPerView:1,
    },
  }
})
//------------------------------大应用-----------------
var appstort = new Swiper('.appstort_con',{
  grabCursor:true,
  slidesPerView:3,
  breakpoints:{
    1920:{
      slidesPerView:3,
    },
    1199:{
      slidesPerView:3,
    },
    992:{
      slidesPerView:3,
    },
    768:{
      slidesPerView:1,
    },
  }
})
//---------------------------------注册模式-----------------
var prttern = new Swiper('.prttern_con',{
  grabCursor:true,
  slidesPerView:3,
  breakpoints:{
    1920:{
      slidesPerView:3,
    },
    1199:{
      slidesPerView:3,
    },
    992:{
      slidesPerView:3,
    },
    768:{
      slidesPerView:1,
    },
  }
})
///////////////////////机器人
var swiperRobot = new Swiper(".robot_twoson",{
    slidesPerView:4,
    spaceBetween:30,
    breakpoints:{
    1920:{
        slidesPerView:4,
        spaceBetween:30
         },
    992:{
        slidesPerView:1,
        // spaceBetween:0
    },
    768:{
        slidesPerView:1,
        // spaceBetween:50
    }
  }
})
$(".lj").mouseover(function(){
  $(this).css("background","rgb(255,0,0)");
})
$(".lj").mouseout(function(){
  $(this).css("background","rgb(251,84,98)");
})
//////////////////////////////////
//////////////////////////////新闻
var n_hot = new Swiper('.n_hot', {
        pagination:{
          el: '.swiper-pagination',
          clickable: true,
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + (index + 1) + '</span>';},
        },
        // on: {
        //    slideChangeTransitionEnd: function(){
        //      alert(swiper.activeIndex);
        //      }

        //    },


        autoHeight:true,
      })

var new_list = new Swiper('.new_list',{
  pagination:{
          el: '.swiper-pagination',
          clickable: true,
        }
})
//********************************微信小程序页面结束***************************
//******************************营销服务页面开始****************
//---------------------------营销服务---全网营销选项卡--------------
var serviceSwiper = new Swiper ('.service_slide', {
direction: 'horizontal',
autoHeight: true,
pagination: {
 el: '.swiper-pagination',
 type: 'progressbar',

},
autoHeight: true,
on:{
  slideChangeTransitionStart: function(){
    $(".service_tab>a").eq(this.activeIndex).addClass("on1").siblings().removeClass("on1");
}
  }
})
$(".service_tab>a").click(function(){
  serviceSwiper.slideTo($(this).index());
})
//---------------------------------------
var reason = new Swiper('.reason_con',{
  slidesPerView:5,
  breakpoints: {
    1920: {
      slidesPerView:5,
    },
    992: {
      slidesPerView:5,
    },
      768: {
     slidesPerView: 1,
   },
  }
})
//---------------------------------营销服务---易站通案例-----
var serviceCaseSwiper = new Swiper ('.market_case_swiper', {
direction: 'horizontal',
spaceBetween : 14,
breakpoints: {
  1920: {
    slidesPerView: 3,
  },
  992: {
    slidesPerView: 2,
  },
    768: {
   slidesPerView: 1,
 },
}
})
//-----------------------------------画弧形-------
//*****************************营销服务页面结束******************************
