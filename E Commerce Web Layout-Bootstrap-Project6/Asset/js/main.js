

let usertext = document.getElementsByClassName("user-text");
let userpic = document.getElementsByClassName("user-pic");

function showReview(){
 for (userpic of userpics){
    userpic.classlist.remove("active-pic");
  }

  for (usertext of usertexts){
    usertext.classlist.remove("active-text");
  }
}



const myCarousel = document.getElementById('myCarousel')
myCarousel.addEventListener('slid.bs.carousel', function (){
  const activeItem = this.querySelector(".active");
document.querySelector(".testimonial-imgbox img").src = activeItem.getAttribute("data-img");
})