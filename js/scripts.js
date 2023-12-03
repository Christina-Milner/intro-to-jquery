$(document).ready(function() {
    /*
    Most common selectors:
    $("*") Wildcard: This selects every element on the page.
    $(this) Current: This selects the current element being operated on within a function.
    $("p") Tag: This selects every instance of the <p> tag.
    $(".example") Class: This selects every element that has the example class applied to it.
    $("#example") Id: This selects a single instance of the unique example id.
    $("[type='text']") Attribute: This selects any element with text applied to the type attribute.
    $("p:first-of-type") Pseudo Element: This selects the first <p>.
    */
    /*$("#trigger").click(function() {
        $("#demo").html("Hello, World!");
    });*/
    /*
    Common events:
    
    click() Click: This executes on a single mouse click.
    hover() Hover: This executes when the mouse is hovered over an element. mouseenter() and mouseleave() apply only to the mouse entering or leaving an element, respectively.
    submit() Submit: This executes when a form is submitted.
    scroll() Scroll: This executes when the screen is scrolled.
    keydown() Keydown: This executes when you press down on a key on the keyboard.

    */
    $(".trigger").click(function() {
        $(".overlay").toggle();
    });
    /* Common effect methods:
    
    toggle() Toggle: This switches the visibility of an element or elements. show() and hide() are the related one-way effects.
    fadeToggle() Fade Toggle: This switches the visibility and animates the opacity of an element or elements. fadeIn() and fadeOut() are the related one-way effects.
    slideToggle() Slide Toggle: This toggles the visibility of an element or elements with a sliding effect. slideDown() and slideUp() are the related one-way effects.
    animate() Animate: This performs custom animation effects on the CSS property of an element.
    */

});