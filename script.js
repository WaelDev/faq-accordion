

const question_a = document.getElementById('question_a');
const icon_a = document.querySelector('#icon_a');
question_a.addEventListener( "click", ()=> {
  const answer_a = document.getElementById('answer_a');
  if(answer_a.classList.contains('hidden')) {
    answer_a.classList.remove('hidden');
    icon_a.setAttribute("src", "assets/images/icon-minus.svg");
  } else {
    answer_a.classList.add('hidden');
    icon_a.setAttribute("src", "assets/images/icon-plus.svg");
  }
});

const question_b = document.getElementById('question_b');
const icon_b = document.querySelector('#icon_b');
question_b.addEventListener( "click", ()=> {
  const answer_b = document.getElementById('answer_b');
  if(answer_b.classList.contains('hidden')) {
    answer_b.classList.remove('hidden');
    icon_b.setAttribute("src", "assets/images/icon-minus.svg");
  } else {
    answer_b.classList.add('hidden');
    icon_b.setAttribute("src", "assets/images/icon-plus.svg");
  }
});

const question_c = document.getElementById('question_c');
const icon_c = document.querySelector('#icon_c');
question_c.addEventListener( "click", ()=> {
  const answer_c = document.getElementById('answer_c');
  if(answer_c.classList.contains('hidden')) {
    answer_c.classList.remove('hidden');
    icon_c.setAttribute("src", "assets/images/icon-minus.svg");
  } else {
    answer_c.classList.add('hidden');
    icon_c.setAttribute("src", "assets/images/icon-plus.svg");
  }
});

const question_d = document.getElementById('question_d');
const icon_d = document.querySelector('#icon_d');
question_d.addEventListener( "click", ()=> {
  const answer_d = document.getElementById('answer_d');
  if(answer_d.classList.contains('hidden')) {
    answer_d.classList.remove('hidden');
    icon_d.setAttribute("src", "assets/images/icon-minus.svg");
  } else {
    answer_d.classList.add('hidden');
    icon_d.setAttribute("src", "assets/images/icon-plus.svg");

  }
});

