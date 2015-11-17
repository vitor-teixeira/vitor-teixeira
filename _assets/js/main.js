//= require vendor/ink/ink.min.js
//= require vendor/ink/ink.common.js
//= require vendor/ink/ink.spy.js
//= require vendor/ink/ink.sticky.js
//= require vendor/ink/ink.smoothscroller.js
//= require vendor/ink/ink.drawer.js


Ink.requireModules( ['Ink.Dom.Selector_1','Ink.UI.Spy_1','Ink.UI.Sticky_1','Ink.UI.SmoothScroller_1', 'Ink.UI.Drawer_1'], function( Selector, Spy, Sticky, SmoothScroller, Drawer ){

    // Get current section and highlight it in the navbar
    var Menu = Ink.i('top-menu');
    var sections = Ink.ss('.content-drawer section');

    for (var i = 0, len = sections.length; i < len; i++) {
        new Spy(sections[i], { target: Menu, margin: 65 });
    }

    // Make the navbar stick to the top
    new Sticky('#top-menu', { activateInLayouts: ['medium', 'large', 'xlarge'] });



    // Smooth Scroll for homepage sections
    SmoothScroller.init();
    SmoothScroller.changeHash=true;
    SmoothScroller.speed=10;

    new Drawer();
});