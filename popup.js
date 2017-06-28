 $(function() {
     $(document).ready(function(e) {
         $(".popup").css({
             display: 'block'
         });
         $("#popup-layer").css({
             display: 'block'
         });
         // setTimeout(e, 1000);


     });
     $(".close").click(function() {
         $(".pop-up").css({
             display: 'none'
         });
         $("#popup-layer").css({
             display: 'none'
         });
     });
     $("#popup-layer").click(function fn(event) {
         event.stopPropagation();
         alert("Click the X to close");
     })
 });
