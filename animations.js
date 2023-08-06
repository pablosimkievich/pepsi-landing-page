TweenMax.from(".sec", 6, {
  backgroundColor: "#e60c2c",
});

TweenMax.from(".image", 1.5, {
  delay: 1,
  y: -1500,
  ease: Bounce.easeInOut,
});
TweenMax.from(".textBox", 1.5, {
  delay: 3,
  opacity: 0,
  y: 40,
});
TweenMax.from(".logo", 3, {
  delay: 6,
  x: -300,
  rotation: "1440deg",
});
TweenMax.staggerFrom(
  ".navItems",
  0.7,
  {
    delay: 4,
    opacity: 0,
    y: -30,
  },
  0.25
);
TweenMax.staggerFrom(
  ".socialIcon",
  0.5,
  {
    delay: 5.8,
    opacity: 0,
    y: -50,
  },
  0.25
);
TweenMax.staggerFrom(
  ".thumbImg",
  0.5,
  {
    delay: 6.8,
    opacity: 0,
    scale: 0.3,
    x: -500,
    y: 50,
  },
  0.4
);
