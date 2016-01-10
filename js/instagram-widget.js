jQuery(function($) {
    var ticking = false;

    $.fn.zoomInstagramWidget = function () {
        return $(this).each(function () {
            var $list = $(this);

            var minItemsPerRow   = $list.data('images-per-row');
            var desiredItemWidth = $list.data('image-width');
            var itemSpacing      = $list.data('image-spacing');

            var containerWidth = $list.width();

            var fitPerRow;
            var itemWidth;

            if (containerWidth / desiredItemWidth < minItemsPerRow) {
                fitPerRow = minItemsPerRow;
                itemWidth = Math.floor((containerWidth - 1 - (minItemsPerRow - 1) * itemSpacing) / minItemsPerRow);
            } else {
                fitPerRow = Math.floor((containerWidth - 1) / desiredItemWidth);
                itemWidth = Math.floor((containerWidth - 1 - (fitPerRow - 1) * itemSpacing) / fitPerRow);
            }

            $list.find('li').each(function(i) {
                if ( ++i % fitPerRow == 0 ) {
                    $(this).css('margin-right', '0');
                } else {
                    $(this).css('margin-right', itemSpacing + 'px');
                    $(this).css('margin-bottom', itemSpacing + 'px');
                }
            });

            $list.find('img').width(itemWidth);
            $list.removeClass('zoom-instagram-widget__items--no-js');

            if (zoom_instagram_widget.enable_lightbox) {
                $list.find('a').on('click', showLightboxOnClick);
            }
        });
    };

    function requestTick() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame()(update);
        }
    }

    function requestAnimationFrame() {
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function (callback){
                    window.setTimeout(callback, 1000 / 60);
                };
    }

    function update() {
        $('.zoom-instagram-widget__items').zoomInstagramWidget();
        ticking = false;
    }

    $(window).on('resize orientationchange', requestTick);
    requestTick();

    function showLightboxOnClick(event) {
        event.preventDefault();

        var src = $(this).find('img').attr('src');

        $("<div></div>").css({
            'position': 'fixed',
            'top' : '200px',
        }).append($('<img>').attr('src', src)).appendTo($('body'));
    }
});
