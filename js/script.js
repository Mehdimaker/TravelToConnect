      //$nbprofile = 5;
      //$widthprofile =100/nbprofile;
      //$(".profile").css("width", "20%");



      $position = 1; 
      $decalage = $('.profile').width()+6;
      $positionprojmax = ($('.profile').length )- 4;
      $marginleftlist = 0;

      $(".imgprofile").css("height", $('.imgprofile').width()+ "px");

      function addopacity() {
          if ($position == 1 && $positionprojmax <= $position) {
              $(".btnleft").addClass('cache');
              $(".btnright").addClass('cache');
          }else if($position > 1 && $position < $positionprojmax){
              $(".btnleft").removeClass('cache');
              $(".btnright").removeClass('cache');
          }else if ($position == 1) {
              $(".btnleft").addClass('cache');
              $(".btnright").removeClass('cache');
          } else if ($position == $positionprojmax) {
              $(".btnright").addClass('cache');
              $(".btnleft").removeClass('cache');
          }
      }

      $('.btnright').on("click", function () {
          if ($position < $positionprojmax) {
              $marginleftlist -= $decalage;
              $position++;
              $("#list").css("margin-left", $marginleftlist + "px");
          } else {}
          addopacity();
      });
      $('.btnleft').on("click", function () {
          if ($position > 1) {
              $marginleftlist += $decalage;
              $position--;
              $("#list").css("margin-left", $marginleftlist + "px");
          } else {}
          addopacity();
      });
