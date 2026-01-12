var Liked = document.querySelector(".like-pill");
var countLikes = document.querySelector(".like-pill__count");

Liked.addEventListener("click", function () {
  Liked.classList.toggle("like-pill--liked");

  var isLiked = Liked.classList.toggle("is-liked");
  var currentNb = Number(countLikes.textContent);
  if (isLiked) {
    countLikes.textContent = currentNb + 1;
  } else {
    countLikes.textContent = currentNb - 1;
  }
});
