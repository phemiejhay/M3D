/* document.addEventListener("DOMContentLoaded", () => {
  

  const answer = document.querySelectorAll(".answer");

  console.log(answer);
}); */


/* const questionContainer = document.querySelectorAll(".question");

const answer = document.querySelectorAll(".answer");

function openAnswer () {
    return answer.style.display === "block";
};
 */



document.addEventListener('DOMContentLoaded', () => {
  // Select all question containers
  const questionContainers = document.querySelectorAll('.question-cont ');

  questionContainers.forEach(container => {
      const question = container.querySelector('.question');
      const answer = container.querySelector('.answer');
      const icon = container.querySelector('.fa-caret-down');

      // Set the initial state of the answer to be hidden
      answer.style.display = 'none';

      question.addEventListener('click', () => {
          // Toggle the display of the answer
          if (answer.style.display === 'none' || answer.style.display === '') {
              answer.style.display = 'block';
              // Rotate the icon to point up
              icon.classList.remove('fa-caret-down');
              icon.classList.add('fa-caret-up');
          } else {
              answer.style.display = 'none';
              // Rotate the icon to point down
              icon.classList.remove('fa-caret-up');
              icon.classList.add('fa-caret-down');
          }
      });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  // Select all question containers
  const questionContainers = document.querySelectorAll('.ab-question-cont');

  questionContainers.forEach(container => {
      const question = container.querySelector('.ab-question');
      const answer = container.querySelector('.ab-answer');
      const icon = container.querySelector('.fa-caret-down');

      // Set the initial state of the answer to be hidden
      answer.style.display = 'none';

      question.addEventListener('click', () => {
          // Toggle the display of the answer
          if (answer.style.display === 'none' || answer.style.display === '') {
              answer.style.display = 'block';
              // Rotate the icon to point up
              icon.classList.remove('fa-caret-down');
              icon.classList.add('fa-caret-up');
          } else {
              answer.style.display = 'none';
              // Rotate the icon to point down
              icon.classList.remove('fa-caret-up');
              icon.classList.add('fa-caret-down');
          }
      });
  });
});


/* if (answer.style.display = 'block'){
  questionContainers.style.background-color === '#0246dd';
} */


