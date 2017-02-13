<<<<<<< HEAD
<<<<<<< HEAD
(function ($) {
    
=======
(function($) {

>>>>>>> gh-pages
=======
(function ($) {
    
>>>>>>> gh-pages
    var isBuilder = $('html').hasClass('is-builder');
    if (!isBuilder) {

        /*google iframe*/
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        var players = [];

        /* get youtube id */
        function getVideoId(url) {
            if ('false' == url) return false;
            var result = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(url) || /^([-a-z0-9_]+)$/i.exec(url);
            return result ? result[1] : false;
        }
        /* google iframe api init function */
<<<<<<< HEAD
<<<<<<< HEAD
        window.onYouTubeIframeAPIReady = function () {
            var ytp = ytp || {};
            ytp.YTAPIReady || (ytp.YTAPIReady = !0,
                jQuery(document).trigger("YTAPIReady"));
            $('.video-slide').each(function (i) {
=======
        window.onYouTubeIframeAPIReady = function() {
            var ytp = ytp || {};
            ytp.YTAPIReady || (ytp.YTAPIReady = !0,
                jQuery(document).trigger("YTAPIReady"));
            $('.video-slide').each(function(i) {
>>>>>>> gh-pages
=======
        window.onYouTubeIframeAPIReady = function () {
            var ytp = ytp || {};
            ytp.YTAPIReady || (ytp.YTAPIReady = !0,
                jQuery(document).trigger("YTAPIReady"));
            $('.video-slide').each(function (i) {
>>>>>>> gh-pages
                var index = $(this).index();
                var section = $(this).closest('section');
                $('.video-container').eq(i).append('<div id ="mbr-video-' + i + '" class="mbr-background-video" data-video-num="' + i + '"></div>')
                    .append('<div class="item-overlay"></div>');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> gh-pages
                     $(this).attr('data-video-num', i);
                if ($(this).attr('data-video-url').indexOf('vimeo.com') != -1) {
                    var options = {
                        id: $(this).attr('data-video-url'),
                        width: '100%',
                        height: '100%',
                        loop: true
                    };
                   
                    var player = new Vimeo.Player('mbr-video-' + i, options);
                    player.playVideo = Vimeo.play;
                } else {
               
<<<<<<< HEAD
=======
                $(this).attr('data-video-num', i);
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
                var player = new YT.Player('mbr-video-' + i, {
                    height: '100%',
                    width: '100%',
                    videoId: getVideoId($(this).attr('data-video-url')),
                    events: {
                        'onReady': onPlayerReady,
                    }
<<<<<<< HEAD
<<<<<<< HEAD
                })}
=======
                })
>>>>>>> gh-pages
=======
                })}
>>>>>>> gh-pages
                players.push(player);
            });
        }

        function onPlayerReady(event) {
            if ($(event.target).closest('.mbr-slider').hasClass('in')) {
                event.target.playVideo();
            }
        }
        /* youtube default preview */
        function getPreviewUrl(videoId, quality) {
            return 'https://img.youtube.com/vi/' + videoId + '/' +
                (quality || '') + 'default.jpg';
        }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    /* Masonry Grid */
    $(document).on('add.cards change.cards', function (event) {
=======
    var getPreviewUrlWithBestQuality = (function() {
        var cache = {};
        return function(id) {
            var def = $.Deferred();
            if (id in cache) {
                if (cache[id]) {
                    def.resolve(cache[id]);
                } else {
                    def.reject('Preview image not found.');
                }
            } else {
                $('<img>').on('load', function() {
                    if (120 == (this.naturalWidth || this.width)) {
                        // selection of preview in the best quality
                        var file = this.src.split('/').pop();
                        switch (file) {
                            case 'maxresdefault.jpg':
                                this.src = this.src.replace(file, 'sddefault.jpg');
                                break;
                            case 'sddefault.jpg':
                                this.src = this.src.replace(file, 'hqdefault.jpg');
                                break;
                            case 'hqdefault.jpg':
                                this.src = this.src.replace(file, 'default.jpg');
                                break;
                            default:
                                cache[id] = null;
                                def.reject('Preview image not found.');
                                break;
                        }
                    } else {
                        def.resolve(cache[id] = this.src);
                    }
                }).attr('src', getPreviewUrl(id, 'maxres'));
            }
            return def;
        };

    })();
    /* Masonry Grid */
    $(document).on('add.cards change.cards', function(event) {

        function setImgSrc(item) {
            var $img = item.find('img');
            var $modalImg = item.closest('section').find('.modal-dialog .carousel-inner .carousel-item').eq($img.closest('.mbr-gallery-item').index()).find('img');
            if (item.hasClass('video-slide')) {
                var videoId = getVideoId(item.attr('data-video-url'));
                getPreviewUrlWithBestQuality(videoId).done(function(url) {
                    $img.attr('src', url).css('visibility', 'visible');
                    $modalImg.attr('src', url);
                });
            }
            return videoId;
        };

>>>>>>> gh-pages
=======
    /* Masonry Grid */
    $(document).on('add.cards change.cards', function (event) {
>>>>>>> gh-pages
        var $section = $(event.target),
            allItem = $section.find('.mbr-gallery-filter-all');
        if (!$section.hasClass('mbr-slider-carousel')) return;
        var filterList = [];

<<<<<<< HEAD
<<<<<<< HEAD
        $section.find('.mbr-gallery-item').each(function (el) {
            var tagsAttr = ($(this).attr('data-tags') || "").trim();
            var tagsList = tagsAttr.split(',');
            tagsList.map(function (el) {
=======
        $section.find('.mbr-gallery-item').each(function(el) {
            var tagsAttr = ($(this).attr('data-tags')||"").trim();
            var tagsList = tagsAttr.split(',');
            tagsList.map(function(el) {
>>>>>>> gh-pages
=======
        $section.find('.mbr-gallery-item').each(function (el) {
            var tagsAttr = ($(this).attr('data-tags') || "").trim();
            var tagsList = tagsAttr.split(',');
            tagsList.map(function (el) {
>>>>>>> gh-pages
                var tag = el.trim();

                if ($.inArray(tag, filterList) == -1)
                    filterList.push(tag);
            })
        })
        if ($section.find('.mbr-gallery-filter').length > 0 && $(event.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) {
            var filterHtml = '';
            $section.find('.mbr-gallery-filter ul li:not(li:eq(0))').remove();
<<<<<<< HEAD
<<<<<<< HEAD
            filterList.map(function (el) {
                filterHtml += '<li>' + el + '</li>'
            });
            $section.find('.mbr-gallery-filter ul').append(allItem).append(filterHtml);
            $section.on('click', '.mbr-gallery-filter li', function (e) {
=======
            filterList.map(function(el) {
                filterHtml += '<li>' + el + '</li>'
            });
            $section.find('.mbr-gallery-filter ul').append(allItem).append(filterHtml);
            $section.on('click', '.mbr-gallery-filter li', function(e) {
>>>>>>> gh-pages
=======
            filterList.map(function (el) {
                filterHtml += '<li>' + el + '</li>'
            });
            $section.find('.mbr-gallery-filter ul').append(allItem).append(filterHtml);
            $section.on('click', '.mbr-gallery-filter li', function (e) {
>>>>>>> gh-pages
                $li = $(this);
                $li.parent().find('li').removeClass('active')
                $li.addClass('active');

                var $mas = $li.closest('section').find('.mbr-gallery-row');
                var filter = $li.html().trim();

<<<<<<< HEAD
<<<<<<< HEAD
                $section.find('.mbr-gallery-item').each(function (i, el) {
                    var $elem = $(this);
                    var tagsAttr = $elem.attr('data-tags');
                    var tags = tagsAttr.split(',');
                    tagsTrimmed = tags.map(function (el) {
=======
                $section.find('.mbr-gallery-item').each(function(i, el) {
                    var $elem = $(this);
                    var tagsAttr = $elem.attr('data-tags');
                    var tags = tagsAttr.split(',');
                    tagsTrimmed = tags.map(function(el) {
>>>>>>> gh-pages
=======
                $section.find('.mbr-gallery-item').each(function (i, el) {
                    var $elem = $(this);
                    var tagsAttr = $elem.attr('data-tags');
                    var tags = tagsAttr.split(',');
                    tagsTrimmed = tags.map(function (el) {
>>>>>>> gh-pages
                        return el.trim();
                    })
                    if ($.inArray(filter, tagsTrimmed) == -1 && !$li.hasClass('mbr-gallery-filter-all')) {
                        $elem.addClass('mbr-gallery-item__hided');
<<<<<<< HEAD
<<<<<<< HEAD
                        setTimeout(function () {
=======
                        setTimeout(function() {
>>>>>>> gh-pages
=======
                        setTimeout(function () {
>>>>>>> gh-pages
                            $elem.css('left', '300px');
                        }, 200);
                    } else {
                        $elem.removeClass('mbr-gallery-item__hided')
                    };

                })
<<<<<<< HEAD
<<<<<<< HEAD
                setTimeout(function () {
=======
                setTimeout(function() {
>>>>>>> gh-pages
=======
                setTimeout(function () {
>>>>>>> gh-pages
                    $mas.closest('.mbr-gallery-row').trigger('filter');
                }, 50);
            })
        } else {
            $section.find('.mbr-gallery-item__hided').removeClass('mbr-gallery-item__hided');
            $section.find('.mbr-gallery-row').trigger('filter');
        }
        if (!isBuilder) {

<<<<<<< HEAD
<<<<<<< HEAD
            $section.find('.video-slide').each(function (i) {
                var index = $(this).closest('.mbr-gallery-item').index();

               // setImgSrc($(this));
=======
            $section.find('.video-slide').each(function(i) {
                var index = $(this).closest('.mbr-gallery-item').index();

                setImgSrc($(this));
>>>>>>> gh-pages
=======
            $section.find('.video-slide').each(function (i) {
                var index = $(this).closest('.mbr-gallery-item').index();

               // setImgSrc($(this));
>>>>>>> gh-pages
            });
        }

        if (typeof $.fn.masonry !== 'undefined') {
<<<<<<< HEAD
<<<<<<< HEAD
            $section.outerFind('.mbr-gallery').each(function () {
=======
            $section.outerFind('.mbr-gallery').each(function() {
>>>>>>> gh-pages
=======
            $section.outerFind('.mbr-gallery').each(function () {
>>>>>>> gh-pages
                var $msnr = $(this).find('.mbr-gallery-row').masonry({
                    itemSelector: '.mbr-gallery-item:not(.mbr-gallery-item__hided)',
                    percentPosition: true
                });
                // reload masonry (need for adding new or resort items)
                $msnr.masonry('reloadItems');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> gh-pages
                $msnr.on('filter', function () {
                    $msnr.masonry('reloadItems');
                    $msnr.masonry('layout');
                    // update parallax backgrounds
                    $(window).trigger('update.parallax')
                }.bind(this, $msnr))
                // layout Masonry after each image loads
                $msnr.imagesLoaded().progress(function () {
<<<<<<< HEAD
=======
                $msnr.on('filter', function() {
                        $msnr.masonry('reloadItems');
                        $msnr.masonry('layout');
                        // update parallax backgrounds
                        $(window).trigger('update.parallax')
                    }.bind(this, $msnr))
                    // layout Masonry after each image loads
                $msnr.imagesLoaded().progress(function() {
>>>>>>> gh-pages
=======
>>>>>>> gh-pages
                    $msnr.masonry('layout');
                });
            });
        }
    });
<<<<<<< HEAD
<<<<<<< HEAD
    $('.mbr-gallery-item').on('click', 'a', function (e) {
=======
    $('.mbr-gallery-item').on('click','a',function(e){
>>>>>>> gh-pages
=======
    $('.mbr-gallery-item').on('click', 'a', function (e) {
>>>>>>> gh-pages
        e.stopPropagation();
    })
    var timeout;
    var timeout2;

    function fitLBtimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(fitLightbox, 50);
    }

    /* Lightbox Fit */
    function fitLightbox() {
        var $lightbox = $('.mbr-gallery .modal');
        if (!$lightbox.length) {
            return;
        }

        var windowPadding = 0;
        var bottomPadding = 10;
        var wndW = $(window).width() - windowPadding * 2;
        var wndH = $(window).height() - windowPadding * 2;
<<<<<<< HEAD
<<<<<<< HEAD
        $lightbox.each(function () {
=======
        $lightbox.each(function() {
>>>>>>> gh-pages
=======
        $lightbox.each(function () {
>>>>>>> gh-pages
            var setWidth, setTop;
            var isShown = $(this).hasClass('in');
            var $modalDialog = $(this).find('.modal-dialog');
            var $currentImg = $modalDialog.find('.carousel-item.active > img');

            if ($modalDialog.find('.carousel-item.prev > img, .carousel-item.next > img').length) {
                $currentImg = $modalDialog.find('.carousel-item.prev > img, .carousel-item.next > img').eq(0);
            }

            var lbW = $currentImg[0].naturalWidth;
            var lbH = $currentImg[0].naturalHeight;

            // height change
            if (wndW / wndH > lbW / lbH) {
                var needH = wndH - bottomPadding * 2;
                setWidth = needH * lbW / lbH;
            }

            // width change
            else {
                setWidth = wndW - bottomPadding * 2;
            }
            // check for maw width
            setWidth = setWidth >= lbW ? lbW : setWidth;

            // set top to vertical center
            setTop = (wndH - setWidth * lbH / lbW) / 2;

            $modalDialog.css({
                width: parseInt(setWidth),
                top: setTop + windowPadding
            });
        });
    }


    /* pause/start video on different events and fit lightbox */
    var $window = $(document).find('.mbr-gallery');
<<<<<<< HEAD
<<<<<<< HEAD
    $window.on('show.bs.modal', function (e) {

        clearTimeout(timeout2);
        var timeout2 = setTimeout(function () {
=======
    $window.on('show.bs.modal', function(e) {

        clearTimeout(timeout2);
        var timeout2 = setTimeout(function() {
>>>>>>> gh-pages
=======
    $window.on('show.bs.modal', function (e) {

        clearTimeout(timeout2);
        var timeout2 = setTimeout(function () {
>>>>>>> gh-pages
            var index = $(e.relatedTarget).parent().index();
            var slide = $(e.target).find('.carousel-item').eq(index).find('.mbr-background-video');
            $(e.target).find('.carousel-item .mbr-background-video')
            if (slide.length > 0) {
<<<<<<< HEAD
<<<<<<< HEAD
                var player =  players[+slide.attr('data-video-num')];
                player.playVideo?player.playVideo():player.play();
=======
                players[+slide.attr('data-video-num')].playVideo();
>>>>>>> gh-pages
=======
                var player =  players[+slide.attr('data-video-num')];
                player.playVideo?player.playVideo():player.play();
>>>>>>> gh-pages
            }
        }, 500);
        fitLBtimeout();
    })
<<<<<<< HEAD
<<<<<<< HEAD
    $window.on('slide.bs.carousel', function (e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');
        if (ytv.length > 0) {
            var player =  players[+ytv.attr('data-video-num')];
            player.pauseVideo?player.pauseVideo():player.pause();
        }
    });
    $(window).on('resize load', fitLBtimeout);
    $window.on('slid.bs.carousel', function (e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');
        if (ytv.length > 0) {
            var player =  players[+ytv.attr('data-video-num')];
            player.playVideo?player.playVideo():player.play();
        }
        fitLBtimeout();
    });
    $window.on('hide.bs.modal', function (e) {
        players.map(function (player, i) {
            player.pauseVideo?player.pauseVideo():player.pause();
        });
    });
} (jQuery));
=======
    $window.on('slide.bs.carousel', function(e) {
=======
    $window.on('slide.bs.carousel', function (e) {
>>>>>>> gh-pages
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');
        if (ytv.length > 0) {
            var player =  players[+ytv.attr('data-video-num')];
            player.pauseVideo?player.pauseVideo():player.pause();
        }
    });
    $(window).on('resize load', fitLBtimeout);
    $window.on('slid.bs.carousel', function (e) {
        var ytv = $(e.target).find('.carousel-item.active .mbr-background-video');
        if (ytv.length > 0) {
            var player =  players[+ytv.attr('data-video-num')];
            player.playVideo?player.playVideo():player.play();
        }
        fitLBtimeout();
    });
    $window.on('hide.bs.modal', function (e) {
        players.map(function (player, i) {
            player.pauseVideo?player.pauseVideo():player.pause();
        });
    });
<<<<<<< HEAD
}(jQuery));
>>>>>>> gh-pages
=======
} (jQuery));
>>>>>>> gh-pages
