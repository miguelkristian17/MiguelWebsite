var myFullpage = new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollingSpeed: 700,
    scrollHorizontally: true,
    navigation: true,
    fitToSection: true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    navigationTooltips: ['Home', 'Bio', 'Projects', 'Contact'],
    showActiveTooltip: true,
//     controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom'
});
