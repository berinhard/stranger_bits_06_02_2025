// Essa variável tem que ser onde o projeto Git está instalado na sua máquina.
// Essel file:/// é pra seguir um protocolo e ele entender isso como uma URL
const DJ_DIR = "file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/02_terra estrago/"
// Essa linha é só a definição do source. Só executa uma vez, senão o víde repete. #ficadica
s0.initVideo(DJ_DIR + "symmetry-base.mp4")
s1.initVideo(DJ_DIR + "symmetry-ascii.mp4")
// Só execute uma vez!!!!!

src(s0).out(o0)


src(s1).out(o1)

render(o0)

render(o1)
