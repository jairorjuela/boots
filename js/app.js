$(document).ready(function () {

  // Inicio Modal 1
  var modal = document.getElementById('myModal');

  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
      modal.style.display = "none";
  }
  // Fin Modal 1

  var modal1 = document.getElementById('myModal1');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img1 = document.getElementById('myImg1');
  var modalImg1 = document.getElementById("img02");
  var captionText1 = document.getElementById("caption1");
  img1.onclick = function(){
      modal1.style.display = "block";
      modalImg1.src = this.src;
      captionText1.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span1 = document.getElementById('close1');

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
      modal1.style.display = "none";
  }







  $(document).on("scroll", onScroll);
  $('nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('nav a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});
function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav a').removeClass("active");
      currentLink.addClass("active");
    }
    else{
      currentLink.removeClass("active");
    }
  });
}
