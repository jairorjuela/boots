$(document).ready(function () {
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

    // Inicio Modal 9
    var modal9 = document.getElementById('myModal9');

    var img9 = document.getElementById('myImg9');
    var modalImg9 = document.getElementById("img10");
    var captionText9 = document.getElementById("caption9");
    img9.onclick = function(){
        modal9.style.display = "block";
        modalImg9.src = this.src;
        captionText9.innerHTML = this.alt;
    }

    var span9 = document.getElementById('close9');

    span9.onclick = function() {
        modal9.style.display = "none";
    }
    // Fin Modal 9

    // Inicio Modal 10
    var modal10 = document.getElementById('myModal10');

    var img10 = document.getElementById('myImg10');
    var modalImg10 = document.getElementById("img11");
    var captionText10 = document.getElementById("caption10");
    img10.onclick = function(){
        modal10.style.display = "block";
        modalImg10.src = this.src;
        captionText10.innerHTML = this.alt;
    }

    var span10 = document.getElementById('close10');

    span10.onclick = function() {
        modal10.style.display = "none";
    }
    // Fin Modal 10

    // Inicio Modal 11
    var modal11 = document.getElementById('myModal11');

    var img11 = document.getElementById('myImg11');
    var modalImg11 = document.getElementById("img12");
    var captionText11 = document.getElementById("caption11");
    img11.onclick = function(){
        modal11.style.display = "block";
        modalImg11.src = this.src;
        captionText11.innerHTML = this.alt;
    }

    var span11 = document.getElementById('close11');

    span11.onclick = function() {
        modal11.style.display = "none";
    }
    // Fin Modal 11

    // Inicio Modal 12
    var modal12 = document.getElementById('myModal12');

    var img12 = document.getElementById('myImg12');
    var modalImg12 = document.getElementById("img13");
    var captionText12 = document.getElementById("caption12");
    img12.onclick = function(){
        modal12.style.display = "block";
        modalImg12.src = this.src;
        captionText12.innerHTML = this.alt;
    }

    var span12 = document.getElementById('close12');

    span12.onclick = function() {
        modal12.style.display = "none";
    }
    // Fin Modal 12

    // Inicio Modal 13
    var modal13 = document.getElementById('myModal13');

    var img13 = document.getElementById('myImg13');
    var modalImg13 = document.getElementById("img14");
    var captionText13 = document.getElementById("caption13");
    img13.onclick = function(){
        modal13.style.display = "block";
        modalImg13.src = this.src;
        captionText13.innerHTML = this.alt;
    }

    var span13 = document.getElementById('close13');

    span13.onclick = function() {
        modal13.style.display = "none";
    }
    // Fin Modal 13

    // Inicio Modal 14
    var modal14 = document.getElementById('myModal14');

    var img14 = document.getElementById('myImg14');
    var modalImg14 = document.getElementById("img15");
    var captionText14 = document.getElementById("caption14");
    img14.onclick = function(){
        modal14.style.display = "block";
        modalImg14.src = this.src;
        captionText14.innerHTML = this.alt;
    }

    var span14 = document.getElementById('close14');

    span14.onclick = function() {
        modal14.style.display = "none";
    }
    // Fin Modal 14

    // Inicio Modal 15
    var modal15 = document.getElementById('myModal15');

    var img15 = document.getElementById('myImg15');
    var modalImg15 = document.getElementById("img16");
    var captionText15 = document.getElementById("caption15");
    img15.onclick = function(){
        modal15.style.display = "block";
        modalImg15.src = this.src;
        captionText15.innerHTML = this.alt;
    }

    var span15 = document.getElementById('close15');

    span15.onclick = function() {
        modal15.style.display = "none";
    }
    // Fin Modal 15

    // Inicio Modal 16
    var modal16 = document.getElementById('myModal16');

    var img16 = document.getElementById('myImg16');
    var modalImg16 = document.getElementById("img17");
    var captionText16 = document.getElementById("caption16");
    img16.onclick = function(){
        modal16.style.display = "block";
        modalImg16.src = this.src;
        captionText16.innerHTML = this.alt;
    }

    var span16 = document.getElementById('close16');

    span16.onclick = function() {
        modal16.style.display = "none";
    }
    // Fin Modal 16

    // Inicio Modal 17
    var modal17 = document.getElementById('myModal17');

    var img17 = document.getElementById('myImg17');
    var modalImg17 = document.getElementById("img18");
    var captionText17 = document.getElementById("caption17");
    img17.onclick = function(){
        modal17.style.display = "block";
        modalImg17.src = this.src;
        captionText17.innerHTML = this.alt;
    }

    var span17 = document.getElementById('close17');

    span17.onclick = function() {
        modal17.style.display = "none";
    }
    // Fin Modal 17

    // Inicio Modal 18
    var modal18 = document.getElementById('myModal18');

    var img18 = document.getElementById('myImg18');
    var modalImg18 = document.getElementById("img19");
    var captionText18 = document.getElementById("caption18");
    img18.onclick = function(){
        modal18.style.display = "block";
        modalImg18.src = this.src;
        captionText18.innerHTML = this.alt;
    }

    var span18 = document.getElementById('close18');

    span18.onclick = function() {
        modal18.style.display = "none";
    }
    // Fin Modal 18

    // Inicio Modal 19
    var modal19 = document.getElementById('myModal19');

    var img19 = document.getElementById('myImg19');
    var modalImg19 = document.getElementById("img20");
    var captionText19 = document.getElementById("caption19");
    img19.onclick = function(){
        modal19.style.display = "block";
        modalImg19.src = this.src;
        captionText19.innerHTML = this.alt;
    }

    var span19 = document.getElementById('close19');

    span19.onclick = function() {
        modal19.style.display = "none";
    }
    // Fin Modal 19

    // Inicio Modal 20
    var modal20 = document.getElementById('myModal20');

    var img20 = document.getElementById('myImg20');
    var modalImg20 = document.getElementById("img21");
    var captionText20 = document.getElementById("caption20");
    img20.onclick = function(){
        modal20.style.display = "block";
        modalImg20.src = this.src;
        captionText20.innerHTML = this.alt;
    }

    var span20 = document.getElementById('close20');

    span20.onclick = function() {
        modal20.style.display = "none";
    }
    // Fin Modal 20

    // Inicio Modal 21
    var modal21 = document.getElementById('myModal21');

    var img21 = document.getElementById('myImg21');
    var modalImg21 = document.getElementById("img22");
    var captionText21 = document.getElementById("caption21");
    img21.onclick = function(){
        modal21.style.display = "block";
        modalImg21.src = this.src;
        captionText21.innerHTML = this.alt;
    }

    var span21 = document.getElementById('close21');

    span21.onclick = function() {
        modal21.style.display = "none";
    }
    // Fin Modal 21

    // Inicio Modal 22
    var modal22 = document.getElementById('myModal22');

    var img22 = document.getElementById('myImg22');
    var modalImg22 = document.getElementById("img23");
    var captionText22 = document.getElementById("caption22");
    img22.onclick = function(){
        modal22.style.display = "block";
        modalImg22.src = this.src;
        captionText22.innerHTML = this.alt;
    }

    var span22 = document.getElementById('close22');

    span22.onclick = function() {
        modal22.style.display = "none";
    }
    // Fin Modal 22

    // Inicio Modal 23
    var modal23 = document.getElementById('myModal23');

    var img23 = document.getElementById('myImg23');
    var modalImg23 = document.getElementById("img24");
    var captionText23 = document.getElementById("caption23");
    img23.onclick = function(){
        modal23.style.display = "block";
        modalImg23.src = this.src;
        captionText23.innerHTML = this.alt;
    }

    var span23 = document.getElementById('close23');

    span23.onclick = function() {
        modal23.style.display = "none";
    }
    // Fin Modal 23

    // Inicio Modal 24
    var modal24 = document.getElementById('myModal24');

    var img24 = document.getElementById('myImg24');
    var modalImg24 = document.getElementById("img25");
    var captionText24 = document.getElementById("caption24");
    img24.onclick = function(){
        modal24.style.display = "block";
        modalImg24.src = this.src;
        captionText24.innerHTML = this.alt;
    }

    var span24 = document.getElementById('close24');

    span24.onclick = function() {
        modal24.style.display = "none";
    }
    // Fin Modal 24

    // Inicio Modal 25
    var modal25 = document.getElementById('myModal25');

    var img25 = document.getElementById('myImg25');
    var modalImg25 = document.getElementById("img26");
    var captionText25 = document.getElementById("caption25");
    img25.onclick = function(){
        modal25.style.display = "block";
        modalImg25.src = this.src;
        captionText25.innerHTML = this.alt;
    }

    var span25 = document.getElementById('close25');

    span25.onclick = function() {
        modal25.style.display = "none";
    }
    // Fin Modal 25

    // Inicio Modal 26
     var modal26 = document.getElementById('myModal26');

    var img26 = document.getElementById('myImg26');
    var modalImg26 = document.getElementById("img27");
    var captionText26 = document.getElementById("caption26");
    img26.onclick = function(){
        modal26.style.display = "block";
        modalImg26.src = this.src;
        captionText26.innerHTML = this.alt;
    }

    var span26 = document.getElementById('close26');

    span26.onclick = function() {
        modal26.style.display = "none";
    }
    // Fin Modal 26

    // Inicio Modal 27
     var modal27 = document.getElementById('myModal27');

    var img27 = document.getElementById('myImg27');
    var modalImg27 = document.getElementById("img28");
    var captionText27 = document.getElementById("caption27");
    img27.onclick = function(){
        modal27.style.display = "block";
        modalImg27.src = this.src;
        captionText27.innerHTML = this.alt;
    }

    var span27 = document.getElementById('close27');

    span27.onclick = function() {
        modal27.style.display = "none";
    }
    // Fin Modal 27

    // Inicio Modal 28
     var modal28 = document.getElementById('myModal28');

    var img28 = document.getElementById('myImg28');
    var modalImg28 = document.getElementById("img29");
    var captionText28 = document.getElementById("caption28");
    img28.onclick = function(){
        modal28.style.display = "block";
        modalImg28.src = this.src;
        captionText28.innerHTML = this.alt;
    }

    var span28 = document.getElementById('close28');

    span28.onclick = function() {
        modal28.style.display = "none";
    }
    // Fin Modal 28

    // Inicio Modal 29
     var modal29 = document.getElementById('myModal29');

    var img29 = document.getElementById('myImg29');
    var modalImg29 = document.getElementById("img30");
    var captionText29 = document.getElementById("caption29");
    img29.onclick = function(){
        modal29.style.display = "block";
        modalImg29.src = this.src;
        captionText29.innerHTML = this.alt;
    }

    var span29 = document.getElementById('close29');

    span29.onclick = function() {
        modal29.style.display = "none";
    }
    // Fin Modal 29

    // Inicio Modal 30
     var modal30 = document.getElementById('myModal30');

    var img30 = document.getElementById('myImg30');
    var modalImg30 = document.getElementById("img31");
    var captionText30 = document.getElementById("caption30");
    img30.onclick = function(){
        modal30.style.display = "block";
        modalImg30.src = this.src;
        captionText30.innerHTML = this.alt;
    }

    var span30 = document.getElementById('close30');

    span30.onclick = function() {
        modal30.style.display = "none";
    }
    // Fin Modal 30

    // Inicio Modal 31
     var modal31 = document.getElementById('myModal31');

    var img31 = document.getElementById('myImg31');
    var modalImg31 = document.getElementById("img32");
    var captionText31 = document.getElementById("caption31");
    img31.onclick = function(){
        modal31.style.display = "block";
        modalImg31.src = this.src;
        captionText31.innerHTML = this.alt;
    }

    var span31 = document.getElementById('close31');

    span31.onclick = function() {
        modal31.style.display = "none";
    }
    // Fin Modal 31

    // Inicio Modal 32
     var modal32 = document.getElementById('myModal32');

    var img32 = document.getElementById('myImg32');
    var modalImg32 = document.getElementById("img33");
    var captionText32 = document.getElementById("caption32");
    img32.onclick = function(){
        modal32.style.display = "block";
        modalImg32.src = this.src;
        captionText32.innerHTML = this.alt;
    }

    var span32 = document.getElementById('close32');

    span32.onclick = function() {
        modal32.style.display = "none";
    }
    // Fin Modal 32

    // Inicio Modal 33
     var modal33 = document.getElementById('myModal33');

    var img33 = document.getElementById('myImg33');
    var modalImg33 = document.getElementById("img34");
    var captionText33 = document.getElementById("caption33");
    img33.onclick = function(){
        modal33.style.display = "block";
        modalImg33.src = this.src;
        captionText33.innerHTML = this.alt;
    }

    var span33 = document.getElementById('close33');

    span33.onclick = function() {
        modal33.style.display = "none";
    }
    // Fin Modal 33

    // Inicio Modal 34
     var modal34 = document.getElementById('myModal34');

    var img34 = document.getElementById('myImg34');
    var modalImg34 = document.getElementById("img35");
    var captionText34 = document.getElementById("caption34");
    img34.onclick = function(){
        modal34.style.display = "block";
        modalImg34.src = this.src;
        captionText34.innerHTML = this.alt;
    }

    var span34 = document.getElementById('close34');

    span34.onclick = function() {
        modal34.style.display = "none";
    }
    // Fin Modal 34

    // Inicio Modal 35
     var modal35 = document.getElementById('myModal35');

    var img35 = document.getElementById('myImg35');
    var modalImg35 = document.getElementById("img36");
    var captionText35 = document.getElementById("caption35");
    img35.onclick = function(){
        modal35.style.display = "block";
        modalImg35.src = this.src;
        captionText35.innerHTML = this.alt;
    }

    var span35 = document.getElementById('close35');

    span35.onclick = function() {
        modal35.style.display = "none";
    }
    // Fin Modal 35

    // Inicio Modal 36
     var modal36 = document.getElementById('myModal36');

    var img36 = document.getElementById('myImg36');
    var modalImg36 = document.getElementById("img37");
    var captionText36 = document.getElementById("caption36");
    img36.onclick = function(){
        modal36.style.display = "block";
        modalImg36.src = this.src;
        captionText36.innerHTML = this.alt;
    }

    var span36 = document.getElementById('close36');

    span36.onclick = function() {
        modal36.style.display = "none";
    }
    // Fin Modal 36

    // Inicio Modal 37
     var modal37 = document.getElementById('myModal37');

    var img37 = document.getElementById('myImg37');
    var modalImg37 = document.getElementById("img38");
    var captionText37 = document.getElementById("caption37");
    img37.onclick = function(){
        modal37.style.display = "block";
        modalImg37.src = this.src;
        captionText37.innerHTML = this.alt;
    }

    var span37 = document.getElementById('close37');

    span37.onclick = function() {
        modal37.style.display = "none";
    }
    // Fin Modal 37

    // Inicio Modal 38
     var modal38 = document.getElementById('myModal38');

    var img38 = document.getElementById('myImg38');
    var modalImg38 = document.getElementById("img39");
    var captionText38 = document.getElementById("caption38");
    img38.onclick = function(){
        modal38.style.display = "block";
        modalImg38.src = this.src;
        captionText38.innerHTML = this.alt;
    }

    var span38 = document.getElementById('close38');

    span38.onclick = function() {
        modal38.style.display = "none";
    }
    // Fin Modal 38

    // Inicio Modal 39
     var modal39 = document.getElementById('myModal39');

    var img39 = document.getElementById('myImg39');
    var modalImg39 = document.getElementById("img40");
    var captionText39 = document.getElementById("caption39");
    img39.onclick = function(){
        modal39.style.display = "block";
        modalImg39.src = this.src;
        captionText39.innerHTML = this.alt;
    }

    var span39 = document.getElementById('close39');

    span39.onclick = function() {
        modal39.style.display = "none";
    }
    // Fin Modal 39

    // Inicio Modal 40
     var modal40 = document.getElementById('myModal40');

    var img40 = document.getElementById('myImg40');
    var modalImg40 = document.getElementById("img41");
    var captionText40 = document.getElementById("caption40");
    img40.onclick = function(){
        modal40.style.display = "block";
        modalImg40.src = this.src;
        captionText40.innerHTML = this.alt;
    }

    var span40 = document.getElementById('close40');

    span40.onclick = function() {
        modal40.style.display = "none";
    }
    // Fin Modal 40

    // Inicio Modal 41
     var modal41 = document.getElementById('myModal41');

    var img41 = document.getElementById('myImg41');
    var modalImg41 = document.getElementById("img42");
    var captionText41 = document.getElementById("caption41");
    img41.onclick = function(){
        modal41.style.display = "block";
        modalImg41.src = this.src;
        captionText41.innerHTML = this.alt;
    }

    var span41 = document.getElementById('close41');

    span41.onclick = function() {
        modal41.style.display = "none";
    }
    // Fin Modal 41

    // Inicio Modal 42
     var modal42 = document.getElementById('myModal42');

    var img42 = document.getElementById('myImg42');
    var modalImg42 = document.getElementById("img43");
    var captionText42 = document.getElementById("caption42");
    img42.onclick = function(){
        modal42.style.display = "block";
        modalImg42.src = this.src;
        captionText42.innerHTML = this.alt;
    }

    var span42 = document.getElementById('close42');

    span42.onclick = function() {
        modal42.style.display = "none";
    }
    // Fin Modal 42

    // Inicio Modal 43
     var modal43 = document.getElementById('myModal43');

    var img43 = document.getElementById('myImg43');
    var modalImg43 = document.getElementById("img44");
    var captionText43 = document.getElementById("caption43");
    img43.onclick = function(){
        modal43.style.display = "block";
        modalImg43.src = this.src;
        captionText43.innerHTML = this.alt;
    }

    var span43 = document.getElementById('close43');

    span43.onclick = function() {
        modal43.style.display = "none";
    }
    // Fin Modal 43

    // Inicio Modal 44
     var modal44 = document.getElementById('myModal44');

    var img44 = document.getElementById('myImg44');
    var modalImg44 = document.getElementById("img45");
    var captionText44 = document.getElementById("caption44");
    img44.onclick = function(){
        modal44.style.display = "block";
        modalImg44.src = this.src;
        captionText44.innerHTML = this.alt;
    }

    var span44 = document.getElementById('close44');

    span44.onclick = function() {
        modal44.style.display = "none";
    }
    // Fin Modal 44

    // Inicio Modal 45
     var modal45 = document.getElementById('myModal45');

    var img45 = document.getElementById('myImg45');
    var modalImg45 = document.getElementById("img46");
    var captionText45 = document.getElementById("caption45");
    img45.onclick = function(){
        modal45.style.display = "block";
        modalImg45.src = this.src;
        captionText45.innerHTML = this.alt;
    }

    var span45 = document.getElementById('close45');

    span45.onclick = function() {
        modal45.style.display = "none";
    }
    // Fin Modal 45

    // Inicio Modal 46
     var modal46 = document.getElementById('myModal46');

    var img46 = document.getElementById('myImg46');
    var modalImg46 = document.getElementById("img47");
    var captionText46 = document.getElementById("caption46");
    img46.onclick = function(){
        modal46.style.display = "block";
        modalImg46.src = this.src;
        captionText46.innerHTML = this.alt;
    }

    var span46 = document.getElementById('close46');

    span46.onclick = function() {
        modal46.style.display = "none";
    }
    // Fin Modal 46

    // Inicio Modal 47
     var modal47 = document.getElementById('myModal47');

    var img47 = document.getElementById('myImg47');
    var modalImg47 = document.getElementById("img48");
    var captionText47 = document.getElementById("caption47");
    img47.onclick = function(){
        modal47.style.display = "block";
        modalImg47.src = this.src;
        captionText47.innerHTML = this.alt;
    }

    var span47 = document.getElementById('close47');

    span47.onclick = function() {
        modal47.style.display = "none";
    }
    // Fin Modal 47

    // Inicio Modal 48
     var modal48 = document.getElementById('myModal48');

    var img48 = document.getElementById('myImg48');
    var modalImg48 = document.getElementById("img49");
    var captionText48 = document.getElementById("caption48");
    img48.onclick = function(){
        modal48.style.display = "block";
        modalImg48.src = this.src;
        captionText48.innerHTML = this.alt;
    }

    var span48 = document.getElementById('close48');

    span48.onclick = function() {
        modal48.style.display = "none";
    }
    // Fin Modal 48
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
