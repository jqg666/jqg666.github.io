(function () {
    //            跑馬燈照片交付偏移
    var ang = 360 / $(".p-item").length;
    $(".p-item").each(function (index, element) {
        $(element).css({
            transform: "rotateY(" + ang * index + "deg) translateZ(6rem)",
            //                    background:"url(img/"+index+1+".jpg)"
        })
    })
    
    $(".p-item1").each(function (index, element) {
        $(element).css({
            transform: "rotateY(" + ang * index + "deg) translateZ(3rem)",

        })
    })


    $('#dianxia').click(function () {
        $('.cover').hide();

    })

})();