// Essa variável tem que ser onde o projeto Git está instalado na sua máquina.
// Essel file:/// é pra seguir um protocolo e ele entender isso como uma URL
const DJ_DIR = "file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/04_Yanikei/"
// Essa linha é só a definição do source. Só executa uma vez, senão o víde repete. #ficadica
s0.initVideo(DJ_DIR + "lola-cut.mp4")
src(s0).out(o0)
s1.initVideo(DJ_DIR + "control.mp4")
src(s1).out(o1)
// Só execute uma vez!!!!!

//// OUTPUT s0
render(o0)

//// OUTPUT s1
render(o1)

//##############################################################################


hush

src(s1)
  .modulate(
    osc(3, .3).mult(noise(10,.4).rotate(() => -time %120))
  )
  .pixelate([50, 20, 35, 50], [100, 50, 25])
  .layer(
    shape(4, .3).luma().rotate(()=>time % 360).modulateRepeat(osc(10, .3), [10,5, 2], [8, 4, 12, 24])
  )
  .out(o1)
