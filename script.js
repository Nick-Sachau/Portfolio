$(function() {

    // settings for the slider
    let width = 100;
    let animationSpeed = 3000;
    let pause = 5000;
    
    // cache DOM elements

    let $slideContainer = $(`.slideContainer`);
    let $slides = $(`.slide`);

    let interval;
    let currentSlide = 1;

    //craete a function that wil start the slider
    function startSlider() {
        interval = setInterval(function() {

            // animating the slide container will cause the action in the function to happen every delay

            $slideContainer.animate(
                {'margin-left': '-=100vw'}, animationSpeed,
                function() {
                    currentSlide++;
                    if(currentSlide == $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0);
                    }
                }
            );
        }, pause);
    }

    startSlider();
})