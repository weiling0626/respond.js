$(document).ready(function() {
    $('#responsive').responsive({
        when: { // 'when' must return a function that evaluates true/false
            width: function(w) {
                return parseInt(w, 10) > 50;
            },
        },
        set: { // 'set' is an object of properties to apply
            'background-color': '#f00',
        }
    }).responsive({
        when: {
            height: function(h) {
                return parseInt(h, 10) > 105;
            },
        },
        set: {
            'background-color': '#0f0',
            'border': '1px solid #0ff',
        }
    });

    $('#increase').on('click', function() {
        $('#responsive').css('width', parseInt($('#responsive').css('width'), 10) + 10);
        $('#responsive').css('height', parseInt($('#responsive').css('height'), 10) + 15);
    });

    $('#decrease').on('click', function() {
        $('#responsive').css('width', parseInt($('#responsive').css('width'), 10) - 10);
        $('#responsive').css('height', parseInt($('#responsive').css('height'), 10) - 15);
    });
});
