// Estudos a partir de
// https://www.youtube.com/watch?v=0me7aKqEnq8&list=PLVIdoREykT8K1Dl10Na9gZVbtBwSo0hie&index=12

shape(4, .3).scale(1, 4)
  .modulate(osc(1, 1).brightness(-.5).pixelate(8, 1).color(0, 1), 2)
  .out()


osc(2, 1)
  .brightness(-.5)
  .pixelate(8, 1)
  .out()



// chaining osc to modulate X and Y isolated
shape(4, .2, 0)
  .modulate(osc(1,1).brightness(-.5)
  .color(0, 1), 1)
  .modulate(osc(1,.5,Math.PI/2).brightness(-.5)
  .color(1, 0), 1)
  .out()


// Same with scrol
shape(4, .2, 0)
  .scrollX(() => Math.cos(time) / 4)
  .scrollY(() => Math.sin(time) / 3)
  .out()



// modulateRotate
shape(4, .2, 0)
  .modulateRotate(osc(1, 1).pixelate(1, 1).brightness(-.5), Math.PI * 2)
  .modulate(osc(1,.5,Math.PI/2).brightness(-.5)
  .color(1, 0), 1)
  .out()

// A ordem dos fatores influencia demais



shape(4,.2,0)
.modulateRotate(
  osc(1,1).mult(osc(1,1)).add(osc(2,1), 0.3).pixelate(1,1)
)
.out()


// Experimento de desenho de imagem com rotação apagando ao girar no centro da tela
src(o0)
.layer(
  shape(2, 0.01, 0).r().color(0,0,0).modulateRotate(osc(0.5, 1), Math.PI * 1.3)
) // esse primeiro layer é o macete
.layer(
  shape([3, 4, 3], .2, 0).r().mult(osc(4, 2, 30).contrast(10))
    .modulate(
      //osc(1,1,Math.PI/2).brightness(-.5)
     noise(3).pixelate(10,10)
    .color(1, 0), 1)
    .modulateRotate(osc(1, 1).pixelate(1, 1).brightness(-.5), Math.PI * 2
).modulateRepeat(noise(2, .4, 0.8))
).out()
// Com essa linha de baixo fica o mesmo, mas com um zoom fudido
//.diff(src(o0).scale(1.01)).out()


// Seria bom entender e conseguir aplicar de alguma forma a linha de noise que ele fala no final
// https://youtu.be/0me7aKqEnq8?feature=shared&t=1335
