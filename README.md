respond.js
==========

jQuery plugin that allows you to set conditional css rules.

# Usage

## A trivial example

    var myElem = $('<p>').text("Hello");

    /*
     * Set the background color to black when the text color is light gray.
     */
    $(myElem).respond({
        when: {
            'color': function(tc) {
                return tc == '#ccc';
            }
        },
        set: {
            'background-color': '#000'
        }
    });

## Why not just use a class?

Responsive design using @media queries is restrictive. If you want more control with your responsive design you can use respond.js to do advanced operations like set element width based its own size relative to others.

## when and set

The when object is an object whos keys are the css attribute you want to watch, and the value is a function that can be evaluated to true or false.

The set object is simply the css attribute and its value. These values are applied directly to jQuery's css() function.

## Disclaimer

This library has not been tested extensively. Use at your own risk.
