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

  const container = document.getElementById('mpt');

  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    type: 'GET',
    data: 'json',
    success: function(data){
  $('.loader').hide()
  $('.smiling-man').show();


      data.forEach(item => {
        const newHTML = `<div class="mpt_slide">
        <div class="card" >
      <div class="thumbnail">
        <img alt="Video" class="video_image" src="${item.thumb_url}"> <img class="overlay" src="images/play.png" alt="play_button">
      </div>
      <h2 class="card-title">${item.title}</h2>
      <p class="card-text">${item['sub-title']}</p>
      <div class="prof"><img class="author-pic" src="${item.author_pic_url}">
        <h3 class="author-name">${item.author}</h3>
      </div>
      <div>
        <div class="stars">
          <p class="duration">${item.duration}</p>
        </div>
      </div>
    </div>`;
    container.innerHTML += newHTML;
      });
      slick_multiple_quotes();
    }
  });

});

$(function latest_videos() {

  const container = document.getElementById('latest_vids');

  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    type: 'GET',
    data: 'json',
    success: function(data){
  $('.loader').hide()
  $('.smiling-man').show();


      data.forEach(item => {
        const html =
       ` <div class="row align-items-center mx-auto">
                <html div
                  class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                  <div class="card">
                    <img src="${item.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                    <div class="card-img-overlay text-center">
                      <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                    </div>
                    <div class="card-body">
                        ${item.title}
                      </h5>
                      <p class="card-text text-muted">
                        ${item['sub-title']}
                      </p>
                      <div class="creator d-flex align-items-center">
                        <img src="${item.author_pic_url}" alt="Creator of
                            Video" width="30px" class="rounded-circle" />
                        <h6 class="pl-3 m-0 main-color">${item.author}</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating row">
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_off.png" alt="star on" width="15px" />
                        </div>
                        <span class="main-color">${item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>`;
    container.innerHTML += html;
      });
  slick_multiple_latest_vids();
    }
  });


});

function numberToArray(num) {
  return Array.from({length: num}, (_, i) => i);
}

function slick_multiple_quotes() {
  $('#mpt').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,

    speed: 300,

    // variableWidth: true,

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
function slick_multiple_latest_vids() {
  $('#latest_vids').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    infinite: true,
    arrows: true,

    speed: 300,

    // variableWidth: true,

    responsive: [
        {
            breakpoint: 1024,
            settings:
            {

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
