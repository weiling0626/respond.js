(function($) {
    var jqCss = $.fn.css;
    var selectors = [{
        when: {},
        set: {}
    }];

    var respond = function(event, element) {
        var that = this;
        var applied = true;
        var styles = window.getComputedStyle(event.target);

        $.each(element.when, function(key, value) {
            if(!value(styles[key])) {
                applied = false;
            }
        });
        if(applied) {
            $.each(element.set, function(key, value) {
                console.log(key, value);
                jqCss.apply(that, [key, value]);
            });
        }
    };

    $.fn.css = function() {
        $(this).trigger('respond', this);
        return jqCss.apply(this, arguments);
    };

    $.fn.responsive = function() {
        var that = this;

        $.each(arguments, function(index, element) {
            if(element.when && element.set) {
                $(that).bind('respond', function(event) {
                    respond(event, element);
                });
            }
        });
        return this;
    };
}(jQuery));
