$(function() {

    // Intro animada
        
        function introContentFirst() {
            $('#slide-intro p.first').addClass('fadeInDown');
        }
        
        function introContentSecond() {
            $('#slide-intro p.second').addClass('fadeInUp');
        }
        
        function introContentOut() {
            $('#slide-intro').addClass('fadeOutLeftBig');
        }
        
        function baseFadeIn() {
            $('#slide-base').addClass('fadeIn');
        }
        
        function animateSlideIntroContent() {
            introContentFirst();
            setTimeout( introContentSecond , 1500);
            setTimeout( introContentOut, 3000);
            setTimeout( baseFadeIn, 3700);
        }
    
    
        
        animateSlideIntroContent();
    
    
    });