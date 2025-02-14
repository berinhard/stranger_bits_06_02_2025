// Essa variável tem que ser onde o projeto Git está instalado na sua máquina.
// Essel file:/// é pra seguir um protocolo e ele entender isso como uma URL
const DJ_DIR = "file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/01_Matteo/"
// Essa linha é só a definição do source. Só executa uma vez, senão o víde repete. #ficadica
s0.initVideo(DJ_DIR + "base-video-koyanisqatsi-bakara.mp4")
// Só execute uma vez!!!!!

a.show()


// hii
//we are berin and cristalvioletacristal aka violeta
//first time livecoding in hydra together
//it's fun, hope y'all enjoy

src(s0)
  .modulate(
    src(o0).modulate(voronoi(), [.3, .4, .5, .6]), [.3, .6]
  ).kaleid(6).diff(src(s0), .5)
  .modulateRotate(osc(()=>a.fft[1]*.2, 1).brightness(-.5),.3)
  .modulateHue(src(s0),.7)
  // .pixelate([100, 80, 120, 60].fast(5), 80)
  .repeat([2, 4, 8, 12].fast(2), 4, .5, .2)
  .add(
    src(s0).thresh(.5).colorama(() => a.fft[0] * .15)).luma().modulate(osc(1, 1).brightness(.5))).modulate(noise(1, 1))
  // .pixelate(150, 150)
  .out(o0)




// today we're learning
//and remembering
//i, we,us, u

src(s0)
  .colorama(.5)
  // .rotate(()=>Math.sin(time) * .5)
  // .pixelate(100, 100)
  // .modulateRepeat(noise(.5, .5))
  .modulateKaleid(
    osc(1, 1).rotate(()=>Math.sin(time)).brightness(.3), ()=>0.8-a.fft[0]*.01)
  // .rotate(
  //   ()=>Math.sin(time) * .01
  // )
  // .scrollX(.2, .1)
  // .scrollY(.2, -.1)
  .mult(src(s1))
  //.pixelate(100, 100)
  .diff(src(o3).rotate(()=>Math.cos(time)).luma())
  .blend(src(s0),.9)
  .scale(.7)
  .posterize(()=>a.fft[0]*10)
  .modulatePixelate(src(o3).blend(src(s0),()=>a.fft[2]*.3-
    .3
  ))
  .modulateRepeat(osc(1, 1).brightness(.5))
  .blend(src(s0).contrast(1.5), .7).out(o1)

//ok lets try again


//oops
// you are not the main character
/*
didyou ever think you were?
would you think everyone does?
some of us
are reminded by the world
we are so not.
*/

shape(8)
  .modulate(shape(8).modulate(voronoi(10,1))).scale(1.01)//.mult(noise(4))
  .out(o3)


render(o0)

render(o1)

render(o3)
