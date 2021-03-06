$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    $('.parallax img').each(function () {        
        var layer = $(this);

        var dataSpeed = layer.data('parallax-speed');
        var offsetY = -(scroll * dataSpeed);
        var translate = 'translate3d(0,' + offsetY + 'px, 0)';
  
        layer.css('-webkit-transform', translate);
        layer.css('-moz-transform', translate);
        layer.css('-ms-transform', translate);
        layer.css('-o-transform', translate);
        layer.css('transform', translate);
    });
});