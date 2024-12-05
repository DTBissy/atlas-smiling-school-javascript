$(document).ready(function(){
  fetchCourses();

  $('#keywords').on('input', function(){
    fetchCourses();
  });

  function handleTopicSelection(topic){
    $('#topics-selected').text(topic);
  }

  $('#topic-dropdown').on('click', 'a', function(e) {
    e.preventDefault();

    const selectedTopic = $(this).text();
    handleTopicSelection(selectedTopic)
  });

  function handleSortSelection(sort){
    $('#sort-selected').text(sort);
  }

  $('#sort-dropdown').on('click', 'a', function(e){
    e.preventDefault();
    const selectedSort = $(this).text();
    handleSortSelection(selectedSort);
  })

})



function fetchCourses() {

  const container = document.getElementById('API');

  const searchValue = $('#keywords').val();
  const topic = $('#topic-dropdown').text() === $('#topic-selected').text();
  const sort = $('#sort-dropdown').text() === $('#sort-selected').text();

  $('#loader').show();
  $('#API').empty();

  $.ajax({
    url: "https://smileschool-api.hbtn.info/courses",
    type: 'GET',
    data: {
      q: searchValue,
      topic: topic,
      sort: sort
    },
    success: function(data){
  $('.loader').hide()
  $('.smiling-man').show();

  $('#topic-dropdown').empty();
      data.topics.forEach(topic => {
        $('#topic-dropdown').append(`<a class="dropdown-item" href="#">${topic}</a>`);
      });

      $('#sort-dropdown').empty();
      data.sorts.forEach(sort => {
        $('#sort-dropdown').append(`<a class="dropdown-item" href="#">${sort}</a>`);
      });

      data.courses.forEach(item => {
        const newHTML = `
   <div class="card" style="margin-left: 15px" >
   <div class="thumbnail">
              <img src="${item.thumb_url}" class="video_image" alt="Video thumbnail" />
                <img src="images/play.png" class="overlay" alt="Play" width="64px" class="align-self-center play-overlay" />
              </div>

                <h5 class="card-title font-weight-bold">${item.title}</h5>
                <p class="card-text text-muted">
                  ${item['sub-title']}
                </p>
                <div class="creator d-flex align-items-center">
                  <img src="${item.author_pic_url}" alt="Creator of
                      Video" width="30px" class="rounded-circle" />
                  <h6 class="pl-3 m-0 main-color">${item.author}</h6>
                </div>
                <div class="info pt-3 d-flex justify-content-between">
                  <span class="main-color">${item.duration}</span>
                </div>
              </div>

    `;
    container.innerHTML += newHTML;
      });
      $('#keywords').val(data.q)
    }
  });

};

