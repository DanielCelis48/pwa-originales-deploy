"use client"

import {useFavorites} from "../hooks/useFavorites"

export default function Estadisticas(){

const{
favorites
}=useFavorites()

const totalGames=
favorites.length

const promedio=

favorites.length

?

(

favorites.reduce(

(a,b)=>

a+b.rating

,0

)

/

favorites.length

).toFixed(1)

:

"0"

const mejorJuego=

favorites.length

?

favorites.reduce(

(prev,current)=>

prev.rating>

current.rating

?

prev

:

current

)

:

null

const peorJuego=

favorites.length

?

favorites.reduce(

(prev,current)=>

prev.rating<

current.rating

?

prev

:

current

)

:

null

const ultimoJuego=

favorites.length

?

favorites[
favorites.length-1
]

:

null

const genres:{[
key:string
]:number}={}

favorites.forEach(

(game:any)=>{

game.genres?.forEach(

(g:any)=>{

genres[g.name]=

(

genres[g.name]

||

0

)

+1

}

)

}

)

const generoFavorito=

Object.entries(

genres

)

.sort(

(a,b)=>

b[1]-a[1]

)

[0]

return(

<div
className="
max-w-7xl
mx-auto
p-8
"
>

<h1
className="
text-4xl
font-bold
mb-8
"
>

📊 Estadísticas

</h1>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"
>

<Card

titulo="Juegos guardados"

valor={
totalGames
}

/>

<Card

titulo="Rating promedio"

valor={
`⭐ ${promedio}`
}

/>

<Card

titulo="Género favorito"

valor={

generoFavorito

?

generoFavorito[0]

:

"Ninguno"

}

/>

<Card

titulo="Mejor juego"

valor={

mejorJuego

?

mejorJuego.name

:

"Ninguno"

}

/>

<Card

titulo="Peor juego"

valor={

peorJuego

?

peorJuego.name

:

"Ninguno"

}

/>

<Card

titulo="Último agregado"

valor={

ultimoJuego

?

ultimoJuego.name

:

"Ninguno"

}

/>

</div>

{

mejorJuego

&&

<div
className="
mt-10
bg-slate-900
rounded-3xl
overflow-hidden
border
border-slate-800
"
>

<img

src={
mejorJuego.background_image
}

alt={
mejorJuego.name
}

className="
w-full
h-72
object-cover
"

/>

<div
className="
p-6
"
>

<h2
className="
text-2xl
font-bold
mb-2
"
>

🏆 Juego Top

</h2>

<h3
className="
text-xl
mb-2
"
>

{

mejorJuego.name

}

</h3>

<p
className="
text-yellow-400
"
>

⭐ {

mejorJuego.rating

}

</p>

</div>

</div>

}

</div>

)

}

function Card({

titulo,
valor

}:any){

return(

<div
className="
bg-slate-900
border
border-slate-800
rounded-2xl
p-6
hover:border-indigo-500
transition
"
>

<p
className="
text-slate-400
mb-3
"
>

{

titulo

}

</p>

<h2
className="
text-2xl
font-bold
"
>

{

valor

}

</h2>

</div>

)

}