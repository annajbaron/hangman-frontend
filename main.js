$(document).ready(function() {

  const words = ['computer', 'engineer', 'javascript', 'jquery', 'science', 'creativity', 'design']
  let answer = words[Math.floor(Math.random() * words.length)]
  let letters = answer.split("");
  let counter = 0;

  for (let i = 0; i < letters.length; i++) {
    $('.solution').append(`<div class="spot ${answer[i]}" id=""></div>`);
  }

  $('.letter').on('click', event => {
    $(event.currentTarget).removeClass('unselected');
    $(event.currentTarget).addClass('selected');
    let guess = $(event.currentTarget).attr('id');

    if (answer.includes(guess)) {
      if ($(`.spot.${guess}`).text().length === 0) {
        $(`.spot.${guess}`).append(`${guess}`);
        $(`.spot.${guess}`).addClass('correct');

      }
    } else {
      counter++;
      $('#gallows').attr('src', `images/gallows-${counter}.jpg`);
    }

    if ($('.spot.correct').length === answer.length) {
      $('#cheering-audio').trigger('play');

      setTimeout(function reset(){
        alert("You won!");
        location.reload();
      }, 3000);
    }
    
    if (counter >= 6) {
      $('#trombone-audio').trigger('play');
      setTimeout(function reset(){
        window.confirm("Game Over! Play again?");
        window.location.reload();
      }, 3000);
    }
  })


})
