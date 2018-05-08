$(document).ready(function() {

  const words = ['computer', 'engineer', 'javascript', 'jquery', 'science', 'creativity', 'design']
  let answer = words[Math.floor(Math.random() * words.length)]
  let letters = answer.split("");
  let counter = 0;

  for (let i = 0; i < letters.length; i++) {
    $('.solution').append(`<div class="spot ${answer[i]}" id=""></div>`);
  }


})
