window.onscroll = function() {scrollFunction()};


 
    function scrollFunction() {
      document.querySelector('.header').style = "background-color:#ffffff";    
     
       if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ) {
       
         document.getElementById("ul-scroll").style.position = "fixed";
         document.querySelector('.header').style.position = "fixed";    
         document.getElementById("ul-scroll").style.top = "50px";
         document.querySelector('#nav-li-1').style.color = "#83b7e2";
         document.querySelector('#nav-li-2').style.color = "#83b7e2";
         document.querySelector('#nav-li-3').style.color = "#83b7e2";
         document.querySelector('#nav-li-4').style.color = "#83b7e2";
        
     
       }
        else {
         document.getElementById("ul-scroll").style.position = "static";
         document.querySelector(".header").style.position = "static";
         document.querySelector('#nav-li-1').style.color = "#1C4CA0";
         document.querySelector('#nav-li-2').style.color = "#1C4CA0";
         document.querySelector('#nav-li-3').style.color = "#1C4CA0";
         document.querySelector('#nav-li-4').style.color = "#1C4CA0";
         document.querySelector('.header').style = "background-color:transparent";    
       }
     

  }
 
   
 