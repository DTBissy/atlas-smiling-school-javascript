$(function fetchSmileQuoteApi () {

var $quotes = $('.smiling-man')
var $bQuote = $('#bQuote')

    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        $.each(data, function (i, item) {
          if (i === 0) {
          // $('#pic').attr(`src=${pic_url}`)
          $('#bQuote').text(`${item.text}`)
          $('#pName').text(`${item.name}`)
          $('#title').text(`${item.title}`)
        } else if (i === 1) {
           // $('#pic').attr(`src=${pic_url}`)
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
