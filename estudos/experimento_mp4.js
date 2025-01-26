s0.initVideo("file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/04_Yanikei/lola-cut.mp4")

s1.initVideo("file:///home/bernardo/Documents/Visuals/2025_02_06 - Stranger Bits @ Panke Culture/03_Or4 + Daimon Chip/tokyo.mp4")



src(s0).modulate(
  noise(30).pixelate(10,380)
).out(o0)

src(s1).odulate(
  noise(30).pixelate(10,380)
).out(o1)

render(s1)
