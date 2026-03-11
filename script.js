document.addEventListener('DOMContentLoaded', function () {
  const videoBtn = document.getElementById('videoBtn');
  const quizBtn = document.getElementById('quizBtn');

  videoBtn.addEventListener('click', function () {
    window.location.href = 'video.html';
  });

  quizBtn.addEventListener('click', function () {
    window.location.href = 'quiz.html';
  });
});
