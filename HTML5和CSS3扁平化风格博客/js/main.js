;$(function () {
    'use strict';

    var sidebar=$('#sidebar'),          //选择侧栏
        mask=$('.mask'),                //选择mask
        sidebar_trigger=$('#sidebar_trigger'),      //选择侧栏触发器
        backButton=$('.back-to-top');               //选择返回菜单

    function showSideBar() {                        //显示侧栏
        mask.fadeIn();
        sidebar.css('right',0);                     //调整侧栏相关的css
    }

    function hideSideBar() {
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }



    sidebar_trigger.on('click',showSideBar);            //监听侧栏触发器点击事件
    mask.on('click',hideSideBar);
    backButton.on('click',function () {                 //监听返回按钮点击事件
        $('html,body').animate({
            scrollTop:0
        },800)
    })

    $(window).on('scroll',function () {
        if ($(window).scrollTop() > $(window).height())
            backButton.fadeIn();
        else
            backButton.fadeOut();
    })

    $(window).trigger('scroll');                //触发scroll事件
})