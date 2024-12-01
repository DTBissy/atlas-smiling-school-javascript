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
        $('.loader').hide();
        $('.smiling-man').show();


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

function multiple_qutoe() {
  $
}

$.ajax({
  url: "https://smileschool-api.hbtn.info/popular-tutorials",
  type: 'GET',
  data: 'json',
  success: function(data){
    $.each(data, function(i, item){
      if (i === 0 ) {
        $('#thumb_url_0').attr('src', item.thumb_url);
        $('#title_0').text(`${item.title}`);
        $('#sub-title_0').text(`${item.sub-title}`);
        $('#author-pic_0').attr('src', item.author_pic_url);
        $('#author_0').text(`${item.author}`)
        $('#duration_0').text(`${item.duration}`)

      }
    })
  }
})
