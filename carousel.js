$(document).ready(function(){
})

$(function fetchSmileQuoteApi () {
  $('.loader').show();

  slick_single_quote();

  var $loader = $('.loader')

  $('.smiling-man').hide();
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      type: 'GET',
      dataType: 'json',
      timeout: 10000,
      success: function (data) {

        $('.smiling-man').show();
        $('.loader').hide();


        $.each(data, function (i, item) {
          if (i === 0) {
          $('#pic').attr('src', item.pic_url)
          $('#bQuote').text(`${item.text}`)
          $('#pName').text(`${item.name}`)
          $('#title').text(`${item.title}`)
        } else if (i === 1) {
          $('#pic2').attr('src', item.pic_url)
           $('#bQuote2').text(`${item.text}`)
           $('#pName2').text(`${item.name}`)
           $('#title2').text(`${item.title}`)
        }
        });
      },
      error: function (xhr, status, error) {
        console.error('Error:', error);
      }
    });
  });

function slick_single_quote () {
    $('.smile-wrap_slide').slick({
      arrows: true,
      infinite: true,
    });
  }

let cardIndex = 0;

$(function multiple_quote() {



  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    type: 'GET',
    data: 'json',
    success: function(data){

  $('.loader').hide()
  $('.smiling-man').show();

      $.each(data, function(i, item){
        // string = item.sub-title
        // console.log(string)
        // console.log(item.star)
        if (i < 4 ) {
          let card =$('.card').eq(i);
          card.find('.video_image').attr('src', item.thumb_url);
          card.find('.card-title').text(`${item.title}`);
          card.find('.card-text').text(`${item.sub-title}`);
          card.find('.author-pic').attr('src', item.author_pic_url);
          card.find('.author-name').text(`${item.author}`);
          card.find('.duration').text(`${item.duration}`);
          $('card').css('width', '0')

        }
      });
      slick_multiple()
    }
  });

});

function numberToArray(num) {
  return Array.from({length: num}, (_, i) => i);
}

function slick_multiple() {
  $('.mpt').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    cssEase: 'linear',
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})};
