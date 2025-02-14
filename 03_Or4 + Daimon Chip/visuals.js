// Essa variável tem que ser onde o projeto Git está instalado na sua máquina.
// Essel file:/// é pra seguir um protocolo e ele entender isso como uma URL
const DJ_DIR = "file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/03_Or4 + Daimon Chip/"
// Essa linha é só a definição do source. Só executa uma vez, senão o víde repete. #ficadica
s0.initVideo(DJ_DIR + "tokyo.mp4")
s1.initVideo(DJ_DIR + "dennou.mp4")
// Só execute uma vez!!!!!
src(s0).out(o0)
src(s1).out(o1)
render(o0)

//i said you are not the main character
// remember, we are not characters at all






src(s0)
  .contrast(
    ()=>a.fft[3]*.1+1)
    .saturate(()=>a.fft[3]*1+2)
  .pixelate(a.fft[2]*250,()=>a.fft[2]*500)
  .colorama(()=>a.fft[0]*.25)
  // .modulate(src(s2).modulateScale(voronoi(12).pixelate(10, 5).brightness(.5),a.fft[0]*.1),.2)
  // .diff(src(s3).pixelate(200,100).contrast(1).modulate(osc(4, 2 , .1)))
  // .blend(src(s0).modulatePixelate(voronoi(.1).thresh()).contrast(2).brightness(.5).scale(.85),.5).rotate(()=>a.fft[3]*.15)
  // .blend(src(s3).repeat(14,6).modulateRotate(noise(1, () => a.fft[2] * .1)))
  // .scale(.7).repeat([1,.5].fast(.68)).modulate(src(s3).scrollY(0,.1).colorama(.001).diff(src(s1).thresh()),.65).saturate(3).scale(.9)
.out(o0)























// ALL YOUR BASES BELONG TO US!!!!!!!!!!!!



//as useful as it would be to actually interact harmoniously with these machines
//i cant get myself to
//too rooted in the Earth
//i break one O.S. per try
//at least


//yea so
//i guess let's have fun with computers
//because ihatethem somuch
//they better give us something
//at least.

//computer is the ham of human blood
// how many lives for those materials
//how much is the surplus

//end all spectacle, lets live it for real



























// play this gamewe're watching
//it's called 1000xRESIST
//don't read about it, just play it
//and take your time



s3.initVideo("file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/03_Or4 + Daimon Chip/resist.mp4")

//  dennou.mp4  naruto.mp4  resist.mp4  tex-1.mp4  tex-2.mp4

//



//##############################################################################
