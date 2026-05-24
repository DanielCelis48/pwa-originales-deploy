"use client"

import Link from "next/link"

import {
motion
} from "framer-motion"

import {
useState
} from "react"

import {
useFavorites
} from "../hooks/useFavorites"

export default function GameCard({

game

}:any){

const {

addGame

}=useFavorites()

const [

saved,
setSaved

]=useState(false)

function handleSave(){

const result=

addGame(game)

if(result){

setSaved(true)

setTimeout(()=>{

setSaved(false)

},1500)

}

}

return(

<motion.div

whileHover={

{
scale:1.03,
y:-8
}

}

whileTap={{

scale:0.97

}}

className="

bg-slate-900

border

border-slate-800

rounded-2xl

overflow-hidden

shadow-xl

hover:border-indigo-500

transition-all

duration-300

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

h-56

object-cover

"

/>

<div
className="
p-5
"
>

<div
className="
flex
justify-between
items-start
mb-3
"
>

<h2
className="
font-bold
text-lg
"
>

{game.name}

</h2>

<div
className="
text-yellow-400
font-bold
"
>

⭐ {game.rating}

</div>

</div>

<p
className="
text-slate-400
mb-5
"
>

{game.released}

</p>

<div
className="
flex
gap-3
"
>

<button

onClick={
handleSave
}

className={`

flex-1

py-3

rounded-xl

font-bold

transition-all

duration-300

${

saved

?

"bg-green-600 scale-105"

:

"bg-indigo-600 hover:bg-indigo-700"

}

`}

>

{

saved

?

"✅ Guardado"

:

"❤️ Guardar"

}

</button>

<Link

href={
`/juego/${game.id}`
}

className="

flex-1

text-center

border

border-indigo-500

rounded-xl

py-3

hover:bg-indigo-500

transition

"

>

Ver más

</Link>

</div>

</div>

</motion.div>

)

}