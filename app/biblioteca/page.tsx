"use client"

import {
motion
} from "framer-motion"

import {
useFavorites
} from "../hooks/useFavorites"

export default function Biblioteca(){

const {

favorites,
removeGame

}=useFavorites()

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

🎮 Mi Biblioteca

</h1>

{

favorites.length===0

?

(

<div
className="
text-slate-400
"
>

No tienes juegos guardados

</div>

)

:

(

<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"
>

{

favorites.map(

(game:any)=>(

<motion.div

key={
game.id
}

layout

whileHover={{

scale:1.03

}}

className="

bg-slate-900

rounded-2xl

overflow-hidden

border

border-slate-800

shadow-xl

"

>

<img

src={
game.background_image
}

alt={
game.name
}

className="
w-full
h-52
object-cover
"

/>

<div
className="
p-4
"
>

<h2
className="
font-bold
text-lg
mb-2
"
>

{game.name}

</h2>

<p
className="
text-yellow-400
mb-4
"
>

⭐ {game.rating}

</p>

<button

onClick={()=>{

removeGame(
game.id
)

}}

className="
w-full

bg-red-600

hover:bg-red-700

py-3

rounded-xl

font-bold

transition

"

>

🗑 Eliminar

</button>

</div>

</motion.div>

)

)

}

</div>

)

}

</div>

)

}