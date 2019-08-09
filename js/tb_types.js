var types = [
    {"type":"交友","icon":"mdi-human-male-female"},
    {"type":"企业","icon":"mdi-bank"},
    {"type":"体育","icon":"mdi-football"},
    {"type":"创意","icon":"mdi-lightbulb-outline"},
    {"type":"动漫","icon":"mdi mdi-face"},
    {"type":"区块链","icon":"mdi-currency-btc"},
    {"type":"博客","icon":"mdi-blogger"},
    {"type":"品牌","icon":"mdi-crown"},
    {"type":"商业","icon":"mdi-scale-balance"},
    {"type":"图书馆","icon":"mdi-library"},
    {"type":"图片","icon":"mdi-image"},
    {"type":"外贸","icon":"mdi-cash-usd"},
    {"type":"大学","icon":"mdi-school"},
    {"type":"女性","icon":"mdi-gender-female"},
    {"type":"工具","icon":"mdi-wrench"},
    {"type":"手机","icon":"mdi-cellphone"},
    {"type":"搜索","icon":"mdi-magnify"},
    {"type":"摄影","icon":"mdi-camera"},
    {"type":"政府","icon":"mdi-city"},
    {"type":"教育","icon":"mdi-school"},
    {"type":"文化","icon":"mdi-store"},
    {"type":"新闻","icon":"mdi-newspaper"},
    {"type":"旅游","icon":"mdi-earth"},
    {"type":"时尚","icon":"mdi-diamond"},
    {"type":"明星","icon":"mdi-account-star"},
    {"type":"杂志","icon":"mdi-image-album"},
    {"type":"汽车","icon":"mdi-car"},
    {"type":"游戏","icon":"mdi-gamepad-variant"},
    {"type":"理财","icon":"mdi-square-inc-cash"},
    {"type":"生活","icon":"mdi-theme-light-dark"},
    {"type":"电子书籍","icon":"mdi-book-open-page-variant"},
    {"type":"百科","icon":"mdi-wikipedia"},
    {"type":"素材","icon":"mdi-file-cloud"},
    {"type":"网址导航","icon":"mdi-internet-explorer"},
    {"type":"网络","icon":"mdi-web"},
    {"type":"美食","icon":"mdi-silverware"},
    {"type":"艺术","icon":"mdi-human-greeting"},
    {"type":"英语大全","icon":"mdi-brightness-auto"},
    {"type":"视频","icon":"mdi-video"},
    {"type":"购物","icon":"mdi-shopping"},
    {"type":"银行","icon":"mdi-bank"},
    {"type":"门户","icon":"mdi-home-variant"},
    {"type":"音乐","icon":"mdi-music-box"}
    ];


(function($) {
        'use strict';
    var nav = $("#sidebar-nav");
    var html = "";
    for(var i=0;i<types.length;i++){
        var item = types[i];
        html += ' <li class="nav-item">'+
            '<a class="nav-link"  data-type="'+item.type+'" data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic">'+
            '<i class="mdi '+item.icon+' menu-icon"></i>'+
            '<span class="menu-title">'+item.type+'</span>'+
            '<i class="menu-arrow"></i>'+
            '</a>'+
        '</li>';
    }
     
    nav.append(html);
    nav.find(".nav-link").on("click", function(){
        var type = $(this).data("type");
        var obj = $("a[name='"+type+"']");
        if(obj && obj[0]){
            obj[0].scrollIntoViewIfNeeded();
        }
    });
})(jQuery);