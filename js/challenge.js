document.addEventListener("DOMContentLoaded", function() {
    // Counter
    let counter = document.getElementById('counter');
    let count = 0;
    let timer = setInterval(function() {
      if (document.getElementById('pause').innerText !== 'resume') {
        count++;
        counter.innerText = count;
      }
    }, 1000);
  
    // Plus Button
    let plusBtn = document.getElementById('plus');
    plusBtn.addEventListener('click', function() {
      count++;
      counter.innerText = count;
    });
  
    // Minus Button
    let minusBtn = document.getElementById('minus');
    minusBtn.addEventListener('click', function() {
      count--;
      counter.innerText = count;
    });
  
    // Like Button
    let likeBtn = document.getElementById('heart');
    let likesList = document.querySelector('.likes');
    let likes = {};
    likeBtn.addEventListener('click', function() {
      if (!likes[count]) {
        likes[count] = 1;
      } else {
        likes[count]++;
      }
      renderLikes();
    });
  
    function renderLikes() {
      likesList.innerHTML = '';
      for (let key in likes) {
        let li = document.createElement('li');
        li.innerText = `${key} has been liked ${likes[key]} times`;
        likesList.appendChild(li);
      }
    }
  
    // Pause Button
    let pauseBtn = document.getElementById('pause');
    pauseBtn.addEventListener('click', function() {
      if (pauseBtn.innerText === 'pause') {
        clearInterval(timer);
        pauseBtn.innerText = 'resume';
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        likeBtn.disabled = true;
        document.getElementById('submit').disabled = true;
      } else {
        timer = setInterval(function() {
          count++;
          counter.innerText = count;
        }, 1000);
        pauseBtn.innerText = 'pause';
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        likeBtn.disabled = false;
        document.getElementById('submit').disabled = false;
      }
    });
  
    // Comment Form
    let commentForm = document.getElementById('comment-form');
    let commentInput = document.getElementById('comment-input');
    let commentList = document.getElementById('list');
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let commentText = commentInput.value;
      if (commentText.trim() !== '') {
        let commentItem = document.createElement('div');
        commentItem.innerText = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
  