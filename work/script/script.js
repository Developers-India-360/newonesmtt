    

    function myfunction() {
        var x = document.getElementById("menu");
        if (x.style.display === "none") {
          x.style.display = "contents";
        } else {
          x.style.display = "none";
        }
      }



      var lastScrollTop = 0;
      navbar = document.getElementById("navbar");
      window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;

        if(scrollTop > lastScrollTop){
          navbar.style.top = "-200px";

        }
        else {
          navbar.style.top = "0";

        }
        lastScrollTop = scrollTop;
      })