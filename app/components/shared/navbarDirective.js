angular.module('cleberIo').directive('navbarDirective', function() {
  return {
    templateUrl: 'components/shared/navbar.html',
    controller: function($scope, $rootScope) {


      // Hide Header on on scroll down
      var scroll_happened;
      var last_scroll_var = 0;
      var minScroll = 5;
      var navHeight = $('.new-navbar').outerHeight();

      $(window).scroll(function(event) {
        scroll_happened = true;
      });

      setInterval(function() {
        if (scroll_happened) {
          hasScrolled();
          scroll_happened = false;
        }
      }, 250);

      function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than minimun Scroll
        if (Math.abs(last_scroll_var - st) <= minScroll)
          return;

        // If user scrolled down more than navbar height, add class .nav-up.
        if (st > last_scroll_var && st > navHeight) {
          // hide navbar
          $('.new-navbar').removeClass('nav-down').addClass('nav-up');
        } else {
          // Show navbar
          if (st + $(window).height() < $(document).height()) {
            $('.new-navbar').removeClass('nav-up').addClass('nav-down');
          }
        }

        last_scroll_var = st;
      }


    }
  };
});
