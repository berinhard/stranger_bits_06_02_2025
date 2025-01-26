
osc(20, .4,1)
  .add(osc(40, .2, .5).rotate(45))
  .out(o0)

  osc(20, .4,1)
    .diff(osc(40, .2, .5).rotate(45))
    .out(o0)

// layer. precisa ter o luma para fazer o "negativo"
// senão é só sobreescrita do s0
osc(10, .2)
  .layer(
    osc(40, .1).rotate(50).luma()
  )
  .out()

// bom para fazer silhuetas
osc(10, .2)
  .mult(
    osc(40, .1).rotate(45)
  )
.out()


// display de suorce
s0.initCam()

src(s0)
  .modulateRotate(osc(20, .2))
  .out()

// display de source como máscara. a cor se perde um pouco
shape(99, .8).mask(
  s0
).modulateRotate(osc(20, .2)).out()


// blende com um ciclo de feedback
osc(20, .2)
  .layer(osc(40, .2).rotate(30).luma())
  .blend(o0, .9)
  .out(o0)


// mais exemplos de feedback
shape(99, .5)
.repeat(2, 1)
.modulateScrollX(
  osc(10, .2)
).diff(src(o0)).out()


// técnica de diff com scale para fazer esse efeito de zoom
shape(99, .5)
.repeat(2, 1)
.modulateScrollX(
  osc(10, .2)
).diff(src(o0).scale(1.01)).out()


// Modulate
osc(40, .2, 1)
  // .modulate(osc(10,.4))
  .modulate(noise(12, .01))
  //.modulate(src(s0))
  .out()



osc(40, .2, 1)
  //.modulateRotate(src(s0))
  .modulateKaleid(src(s0))
.out(o0)

osc(40, .2, 1)
  .modulateRotate(src(s0))
  .modulateKaleid(osc(20, .4))
.out()

shape(40, .2)
  .modulateRepeat(noise(3, .2))
  .modulateScrollX(osc(4, .2))
  .modulateScrollY(osc(8, .4))
  .out()


// NICE SHAPE
osc(10, .1, .8).mult(
  shape(30, .4, .05)
   .modulateRepeat(noise(3, .2))
   .modulatePixelate(osc(4, .1))
   .modulate(osc(12,.1))
//).modulateScrollY(
  //osc(10, .05)).hue(.9)
//.pixelate(500, 100)
 ).out()

// Imagem com pixelate
src(s0)
  .modulatePixelate(noise(6, .25).pixelate(42, 20), 250)
  .out()


// Modulation com feedback da câmera
// Tipo um boneco 3D
src(s0)
  .modulate(o0, .5).blend(o0, .5).out(o0)


// Usando hydra respondendo ao som
a.show()
a.setBins(6)
src(s0)
  .modulate(o0, .1).blend(o0, .9)
  .scale(() => a.fft[0] / 100 + 1)
  .out(o0)
