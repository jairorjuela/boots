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

  // Inicio Modal 2
  var modal1 = document.getElementById('myModal1');

  var img1 = document.getElementById('myImg1');
  var modalImg1 = document.getElementById("img02");
  var captionText1 = document.getElementById("caption1");
  img1.onclick = function(){
      modal1.style.display = "block";
      modalImg1.src = this.src;
      captionText1.innerHTML = this.alt;
  }

  var span1 = document.getElementById('close1');

  span1.onclick = function() {
      modal1.style.display = "none";
  }
  // Fin Modal 2

  // Inicio Modal 3
  var modal2 = document.getElementById('myModal2');

  var img2 = document.getElementById('myImg2');
  var modalImg2 = document.getElementById("img03");
  var captionText2 = document.getElementById("caption2");
  img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
      captionText2.innerHTML = this.alt;
  }

  var span2 = document.getElementById('close2');

  span2.onclick = function() {
      modal2.style.display = "none";
  }
  // Fin Modal 3

  // Inicio Modal 4
  var modal3 = document.getElementById('myModal3');

  var img3 = document.getElementById('myImg3');
  var modalImg3 = document.getElementById("img04");
  var captionText3 = document.getElementById("caption3");
  img3.onclick = function(){
      modal3.style.display = "block";
      modalImg3.src = this.src;
      captionText3.innerHTML = this.alt;
  }

  var span3 = document.getElementById('close3');

  span3.onclick = function() {
      modal3.style.display = "none";
  }
  // Fin Modal 4

  // Inicio Modal 5
  var modal4 = document.getElementById('myModal4');

  var img4 = document.getElementById('myImg4');
  var modalImg4 = document.getElementById("img05");
  var captionText4 = document.getElementById("caption4");
  img4.onclick = function(){
      modal4.style.display = "block";
      modalImg4.src = this.src;
      captionText4.innerHTML = this.alt;
  }

  var span4 = document.getElementById('close4');

  span4.onclick = function() {
      modal4.style.display = "none";
  }
  // Fin Modal 5

  // Inicio Modal 6
  var modal5 = document.getElementById('myModal5');

  var img5 = document.getElementById('myImg5');
  var modalImg5 = document.getElementById("img06");
  var captionText5 = document.getElementById("caption5");
  img5.onclick = function(){
      modal5.style.display = "block";
      modalImg5.src = this.src;
      captionText5.innerHTML = this.alt;
  }

  var span5 = document.getElementById('close5');

  span5.onclick = function() {
      modal5.style.display = "none";
  }
  // Fin Modal 6

  // Inicio Modal 7
  var modal6 = document.getElementById('myModal6');

  var img6 = document.getElementById('myImg6');
  var modalImg6 = document.getElementById("img07");
  var captionText6 = document.getElementById("caption6");
  img6.onclick = function(){
      modal6.style.display = "block";
      modalImg6.src = this.src;
      captionText6.innerHTML = this.alt;
  }

  var span6 = document.getElementById('close6');

  span6.onclick = function() {
      modal6.style.display = "none";
  }
  // Fin Modal 7

  // Inicio Modal 8
  var modal7 = document.getElementById('myModal7');

  var img7 = document.getElementById('myImg7');
  var modalImg7 = document.getElementById("img08");
  var captionText7 = document.getElementById("caption7");
  img7.onclick = function(){
      modal7.style.display = "block";
      modalImg7.src = this.src;
      captionText7.innerHTML = this.alt;
  }

  var span7 = document.getElementById('close7');

  span7.onclick = function() {
      modal7.style.display = "none";
  }
  // Fin Modal 8

  // Inicio Modal 8
  var modal8 = document.getElementById('myModal8');

  var img8 = document.getElementById('myImg8');
  var modalImg8 = document.getElementById("img09");
  var captionText8 = document.getElementById("caption8");
  img8.onclick = function(){
      modal8.style.display = "block";
      modalImg8.src = this.src;
      captionText8.innerHTML = this.alt;
  }

  var span8 = document.getElementById('close8');

  span8.onclick = function() {
      modal8.style.display = "none";
  }
  // Fin Modal 8





















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
