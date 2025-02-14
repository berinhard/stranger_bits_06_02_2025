// Essa variável tem que ser onde o projeto Git está instalado na sua máquina.
// Essel file:/// é pra seguir um protocolo e ele entender isso como uma URL
// Essa linha é só a definição do source. Só executa uma vez, senão o víde repete. #ficadica
const DJ_DIR = "file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/04_Yanikei/"
// hush()
s0.initVideo(DJ_DIR + "lola-cut.mp4")
src(s0).out(o0)
s1.initVideo("file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/04_Yanikei/control.mp4")
src(s1).out(o1)
s2.initVideo(DJ_DIR + "third-world-1.mp4")
src(s2).out(o2)
// Só execute uma vez!!!!!


render(o0)

//##############################################################################


src(s0)
  .modulate(
    osc(3, .3).mult(noise(10,.4).rotate(() => -time %120)).kaleid(10, .1).pixelate(5, 5)
  )
  .saturate(.3)
  .modulateRepeat(osc(4, .1))
  .modulateScrollY(() => a.fft[0] * .1)
  // .pixelate([50, 20, 35, 50], [100, 50, 25, 40])
  // .blend(src(s1).modulate(osc(1, 1).brightness(.5), .3))
  .out(o0)
