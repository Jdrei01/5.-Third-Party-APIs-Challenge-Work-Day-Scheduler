// display current day
var displayCurrentDay = $('#currentDay');
var buttonEl = $('button');

function renderTime() {
  var now = dayjs();
  displayCurrentDay.text(now.format("dddd, MMMM D, YYYY"));
}

renderTime();

// click save button to add value to events
buttonEl.on('click', function () {
  console.log(this)

  var textArea = $(this).siblings('.description').val()

  var rowTime = $(this).parent().attr('id')
  console.log(rowTime, textArea);

  // save events to localStorage
  localStorage.setItem(rowTime, textArea);
});



// reload page, saved events stays
for (let index = 9; index < 18; index++) {
  console.log(index)
  $('#hour-' + index + ' .description').val(localStorage.getItem('hour-' + index));
  
  //$('#hour-10 .description').val(localStorage.getItem('hour-10'))
}

// allTimeBlocks color coded to indicate past, present, or future
$(document).ready(function () {
  var allTimeBlocks = $('.time-block');

  allTimeBlocks.each(function () {
    // 'this' referring to allTimeBlocks

    var id = parseInt(this.id.split('-')[1]);
    var hour = dayjs().hour();

    if (id < hour) {
      // past
      $(this).addClass('past');
    } else if (id > hour) {
      // future
      $(this).addClass('future');
    } else {
      // present
      $(this).addClass('present');
    }

  });


});