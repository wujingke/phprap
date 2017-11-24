;jQuery(document).ready(function($){

    document.write("<div class='github-widget'></div>");

    var i = 0;

    var $container = $('.github-widget'),$widget,
        repoName = "gouguoyin/phprap",
        repoUrl = "http://github.com/" + repoName;

    $container.each(function(){

        if(i == 0) $('head').append(
            '<style type="text/css">'
            +'.star-content {font-size:12px;min-width:95px;font-weight:bold;display:inline-block;font-size:0}'
            +'.star-content .left-content{display:inline-block;background-image:linear-gradient(-180deg, #5e5e5e 0%, #4d4d4d 100%);padding:4px 5px 5px 7px;border-radius:3px 0 0 3px}'
            +'.star-content .left-content .logo-content{min-width:24px;line-height:1.2}'
            +'.star-content .right-content{display:inline-block;border-right:0px;border-radius:0 3px 3px 0;background-image:linear-gradient(-180deg, #f66715 0%, #e95b05 100%);padding:4px 4px 5px 5px}'
            +'.star-content .right-content .number-content{min-width:50px;line-height:1.2}'
            +'.star-content .left-content,.star-content .right-content{font-size:12px;text-shadow:0 1px 0 rgba(0,0,0,0.3);text-align:center;color:#FFFFFF}'
            +'.star-content .star,.star-content .social-count{height:28px;line-height:14px !important;padding:8px !important;font-weight:600 !important;border-radius:0px !important}'
            +'.star-content:hover{color:rgba(0,0,0,0.8) !important}.official-logo{width:20px;height:16px}'
            +'</style>'
        );
        i++;

        $widget = $(
            '<a target="_blank" href="' + repoUrl + '">'
            +'<div class="star-content">'

            +'<div class="left-content">'
            +'<div class="logo-content">Github</div>'
            +'</div>'

            +'<div class="right-content">'
            +'<div class="number-content">'
            + '<span class="star-number"></span> '
            + '<span class="star-text">Star</span>'
            + '</div>'
            +'</div>'

            +'</div>'

            +'</a>'
        );


        $.ajax({
            url: 'https://api.github.com/repos/' + repoName,
            dataType: 'jsonp',
            success: function(results) {

                $widget.appendTo($container);

                var repo = results.data;

                $widget.find('.star-number').text(repo.watchers_count);

                // Don't show "null" if the repo has no homepage URL.
                if(repo.homepage != null) $widget.find('.link').append($('<a />').attr('href', repo.homepage).text(repo.homepage));
            }
        });
    });

});
