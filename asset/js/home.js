$('#mobile_quote_btn_link').on('click', function (e) {
    e.preventDefault();
    $('#form_area').addClass('show');
 })

 $('.new_mobile_form_Close').on('click', function (e) {
    e.preventDefault();
    $('#form_area').removeClass('show');
 })

 


 function redirect1() {
    $('.form_3_input1').addClass('show').removeClass('hide');
    $('.form_3_input2').addClass('hide').removeClass('show');
    $('.form_3_input3').addClass('hide').removeClass('show');
    $('.form_3_input4').addClass('hide').removeClass('show');

    $("#name").focus();
    $("#name").click();

 }

 function redirect2() {

    $('.form_3_input1').addClass('hide').removeClass('show');
    $('.form_3_input2').addClass('show').removeClass('hide');
    $('.form_3_input3').addClass('hide').removeClass('show');
    $('.form_3_input4').addClass('hide').removeClass('show');

    $("#phone").focus();
    $("#phone").click();
 }


 function redirect3() {
    $('.form_3_input1').addClass('hide').removeClass('show');
    $('.form_3_input2').addClass('hide').removeClass('show');
    $('.form_3_input3').addClass('show').removeClass('hide');
    $('.form_3_input4').addClass('hide').removeClass('show');

    $("#email").focus();
    $("#email").click();
 }

 $("input").click(function () {
    $(".hideBook").css({
       "display": "none"
    });
    $(".bookParent").css({
       "display": "none"
    });
 });
 $("input").focusout(function () {

 });
 window.onscroll = function () {
    scrollFunction()
 };

 function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
       $(".hideBook").css({
          "display": "block"
       });
       $(".bookParent").css({
          "display": "block"
       });


    } else {
       $(".hideBook").css({
          "display": "none"
       });
       $(".bookParent").css({
          "display": "none"
       });
    }
 }

 $(document).keypress(function (e) {
    $('#name').on("keydown", function (e) {
       if (e.keyCode == 13) {
          $("#nameNext").click();
       }
       return;
    });
    $('#email').on("keydown", function (e) {
       if (e.keyCode == 13) {
          $("#EmailNext").click();
       }
       return;
    });
    $('#phone').on("keydown", function (e) {
       if (e.keyCode == 13) {
          $("#PhoneNext").click();
       }
       return;
    });


    $('#drop_val').on("keydown", function (e) {
       event.stopPropagation();
    });

    $('#dropState').on("keydown", function (e) {
       event.stopPropagation();
    });

    if ($(".form_3_input4").hasClass("show")) {
       if ($("#drop_val").val() == "0") {
          mdtoast('Please select an option', {
             type: 'info'
          });

          return;
       } else {
          $("#inputNext4").click();
       }
    }
 });

 $('[data-pin]').pin({
    allowSequential: true,
    allowRepeat: true,
    count: 4
 });
 $(document).ready(function () {

    $('select').on('change', function () {
       // alert( this.value );
       if (this.value != "0") {
          $('#progress8').removeAttr('hidden');
          $('#progress4').hide();

          $('#progressBar8').animate({
             width: "100%"
          }, 300);
       }

    });


    var slider1 = $(".sightbox__slideshow");
    $('#sightbox__slide--2').show();
    slider1.slick({
       arrows: false,
       autoplay: true,
       infinite: false,
       dots: true,
    });

    var dotNums = document.querySelectorAll(".slick-dots button");

    function removeText(item) {
       item.innerHTML = "";
    }

    dotNums.forEach(removeText);

    slider1.on("afterChange", function (event, slick, currentSlide, nextSlide) {
       console.log(currentSlide);

       if (currentSlide === 1) {
          setTimeout(function () {
             slider1.slick("slickGoTo", 0);
          }, 2000);


          console.log("last slide");
       }
    });



    var slider2 = $(".sightbox__slideshow1");
    $('#sightbox__slide1--2').show();
    slider2.slick({
       arrows: false,
       autoplay: true,
       infinite: false,
       dots: true,

    });
    var dotNums = document.querySelectorAll(".slick-dots button");

    function removeText(item) {
       item.innerHTML = ""; // or put the text you need inside quotes
    }

    dotNums.forEach(removeText);


    slider2.on("afterChange", function (event, slick, currentSlide, nextSlide) {
       console.log(currentSlide);

       if (currentSlide === 1) {
          setTimeout(function () {
             slider2.slick("slickGoTo", 0);
          }, 2000);

          console.log("last slide");
          // jumpBack();
       }
    });
    $('#name').focus();
    $(this).scrollTop(0);

    $("form input:radio").change(function () {
       if ($(this).val() == "Others") {
          $("#SubmitButton").attr('class', 'showSubmit');

       }
    });


 });
 $('#name').focus();
 jQuery(document).bind('pageshow', function () {
    jQuery($('#name')).focus();
 });
 $("input").on('keyup', function () {
    $(this).scrollTop(0);
 });
 var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
 var errorMsg = document.querySelector("#phoneError")
 var input = document.querySelector("#phone");

 var iti = window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: function (callback) {
       $.get('https://ipinfo.io?token=0456b309bc7337', function () {}, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
       });
    },
    utilsScript: "https://di2c09dj6ldav.cloudfront.net/js/utils.js?1585994360633"
 });
 $("#phone").on("input", function (e) {
    // reset();
    if (input.value.trim()) {

       if (iti.isValidNumber()) {

          var countryData = "+" + iti.getSelectedCountryData().dialCode;
          console.log(countryData);
          $('#phoneCode').text(countryData);
          phoneCheck();
       } else if (iti.getSelectedCountryData().dialCode == "965") {
          var countryData = "+" + iti.getSelectedCountryData().dialCode;
          console.log(countryData);
          $('#phoneCode').text(countryData);

          phoneCheck();
       } else {
          input.classList.add("error");
          var errorCode = iti.getValidationError();
          errorMsg.innerHTML = "Error. Enter valid number.";
          errorMsg.classList.remove("hide");
          PhoneNext.classList.remove("show");

          phoneError.innerHTML = 'Error. Enter valid number.';
          PhoneNext.classList.add("dissable");

       }
    }
 });

 var phoneError = document.getElementById('phoneError');
 var PhoneNext = document.getElementById('inputNext2');
 var phone = document.getElementById('phone');

 function phoneCheck() {
    if (phone.value.length < 6) {
       PhoneNext.classList.remove("show");

       phoneError.innerHTML = 'Error. Please enter 10 digit mobile no.';
       PhoneNext.classList.add("dissable");
    } else {


       phoneError.innerHTML = '';
       PhoneNext.classList.remove("dissable");
       PhoneNext.classList.add("show");
    }
 };

 input.addEventListener('change', reset);
 input.addEventListener('keyup', reset);




 var input = document.querySelector("#phoneEdit");
 window.intlTelInput(input, {
    placeholderNumberType: "MOBILE",
    formatOnDisplay: true,
    autoHideDialCode: true,
    autoPlaceholder: "polite",
    separateDialCode: true,
    utilsScript: "https://di2c09dj6ldav.cloudfront.net/js/utils.js",
 });
 $('#name').on('focus', function () {
    document.body.scrollTop = $(this).offset().top;
 });
 $('#email').on('focus', function () {
    document.body.scrollTop = $(this).offset().top;
 });
 $('#email').on('click', function () {
    document.body.scrollTop = $(this).offset().top;
 });




 $(window).on("load", function () {
    // alert("test");
    var url_string = window.location.href;
    var url = new URL(url_string);
    console.log(url);
    var search = url.searchParams.get("source");

    var current_href = "";
    if (search == '' || search == null) {
       //  current_href = $("#FreeTrailBtn").attr("href")+"?source="+"fluent life";
       $('#source').val("fluent life");
       current_href = $("#mobile_quote_btn_link").attr("href") + "?source=" + "fluent life";
    } else {
       //  current_href = $("#FreeTrailBtn").attr("href")+"?source="+search;
       $('#source').val(search.replace("%20", " "));
       current_href = $("#mobile_quote_btn_link").attr("href") + "?source=" + search;

    }



    // console.log("source_name"+ $('#source').val());

    console.log("source_name" + search);
    if (search == '' || search == null) {
       // $("#FreeTrailBtn").text("Take a Free Trial Class");
       $("#mobile_quote_btn_link").attr("href", current_href);
    } else {

       // $("#FreeTrailBtn").text("Take a Free Trial Class");
       $("#mobile_quote_btn_link").attr("href", current_href);
    }



 });
 var upsc = $(window);
 var page = $('html, body');


 // upsc.on('scroll', function () {
 //    if (upsc.scrollTop() > 500) {
 //       $('#mobile_quote_bottom_custom').addClass('hide')
 //    } else {

 //    }
 // })
 // upsc.on('scroll', function () {
 //    if (upsc.scrollTop() > 1000) {
 //       $('#mobile_quote_bottom_custom').removeClass('hide')
 //    } else {

 //    }
 // })

 // upsc.on('scroll', function () {
 //    if (upsc.scrollTop() < 530) {
 //       $('#mobile_quote_bottom_custom').removeClass('hide')
 //    } else {

 //    }
 // })


 $("button").click(function () {
    var testDiv = document.getElementById("mobile_quote_bottom_custom");
    var ofset = testDiv.offsetTop;
    alert(ofset);
 });



 $(document).ready(function () {
    $(".rippler").rippler({
       effectClass: 'rippler-effect',
       effectSize: 10 // Default size (width & height)
          ,
       addElement: 'div' // e.g. 'svg'(feature)
          ,
       duration: 800
    });
 });