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

hush()

osc(15, .2, 5)
   .contrast(10)
   .repeat(2, 2, .75)
   .rotate(10, .2)
   .repeat(2, 1, .75)
   .scale(1, .2, .8, .2)
   .rotate(2, .2)
   .pixelate(80, 20)
   .saturate([.5, .25, 1, .75, .25])
   .brightness(-3)
   .out()

//

osc(20, .2, 1)
  .rotate(8, .5)
  .kaleid([4, 8], .1)
  .repeat(4, 12, .25, .75)
  .rotate(4, .1)
  .modulateHue(osc(5, 1))
  .contrast(10)
  .pixelate(200, 100)
.brightness(-2).out()


// NICE SHAPE
osc([10, 20, 30, 40].fast(.5), .1, () => Math.cos(time) * 2).mult(
  shape(99, .4, .05)
   // .modulateRepeat(noise(5, .2))
  .modulatePixelate(osc(3, .1))
   // .modulate(osc(12,.1))
).modulateScrollY(
  osc(10, .05).hue(() => Math.sin(time))
).rotate([0.1, .2, .3, .1])
// .pixelate(500, 100)
.out()
