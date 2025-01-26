// Experiments while watching:
// Creative Live-Coding with Hydra: Part 1!
//https://www.youtube.com/watch?v=NX2BXWuVtRM

// #voronoi(20, 0.2, 30).out(o0)

// // o1
// osc(10, .2, [1, 1.2, 1.4, 1.8, 2]).out(o0)
//
// src(o0)
//   .repeat(3, 2)
//   .modulateHue(o0, 450)
//   .kaleid(5)
//   .out(o1)
//
//
//
// render(o1)

//
// shape(3,.4, .04)
//   .color(0, .75, .35)
//   .hue(() => Math.cos(time) / 2)
//   .brightness(0)
//   .contrast(.8)
//   .out()
//
//
//


osc(15, .2, 5)
   .contrast(99)
   .repeat(2, 2, .75)
   .rotate(10, .2)
   .repeat(2, 1, .75)
   .scale(1, .2, .8, .2)
   .rotate(2, .2)
   .pixelate(100, 20)
   .saturate([.5, .25, 1, .75, .25])
   .out()
//

osc(20, .2, 1)
  .rotate(8, .5)
  .kaleid(4)
  .repeat(4, 12, .25, .75)
  .rotate(4, .1)
  .hue(.5)
  .contrast(99)
  .pixelate(200, 100)
.out()
