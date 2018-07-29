let landingAnimation = function(){
  let d = 0;
  for (let index = 0; index < $(".item").length; index++) {
    let item = $(".item").eq(index);
    let image = item.find("img");
    TweenMax.from(item, 1.5, { y: -150, opacity: 0, ease: Expo.easeOut, delay: d });
    TweenMax.from(image, 1.5, { y: -150, opacity: 0, ease: Expo.easeOut, delay: d });
    d += 0.05;
  }
};
let hoverAction = function() {
  $(".item").on("mouseenter", function(){
    TweenMax.to($(this), 0.5, { opacity: 1 , scale: 1.1});
  });
  $(".item").on("mouseleave", function(){
    TweenMax.to($(this), 0.5, { opacity: 0.4, scale: 1});
  });
};

landingAnimation();
hoverAction();
