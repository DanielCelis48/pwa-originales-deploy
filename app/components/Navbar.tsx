"use client"

import Link from "next/link"

export default function Navbar(){

return(

<nav

className="

sticky
top-0

z-50

bg-slate-950/80

backdrop-blur-md

border-b

border-slate-800

"

>

<div

className="

max-w-7xl

mx-auto

flex

justify-between

items-center

p-5

"

>

<h1

className="

text-2xl

font-bold

bg-gradient-to-r

from-indigo-500

to-purple-500

bg-clip-text

text-transparent

"

>

🎮 Zona Xp

</h1>

<div
className="
flex
gap-7
"
>

<Link href="/">

Inicio

</Link>

<Link href="/biblioteca">

Biblioteca

</Link>

<Link href="/estadisticas">

Stats

</Link>

</div>

</div>

</nav>

)

}