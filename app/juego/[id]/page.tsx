"use client"

import {
useEffect,
useState
} from "react"

import { getGame } from "@/app/services/rawg"

export default function JuegoDetalle({

params

}:{

params:{
id:string
}

}){

const[
game,
setGame
]=useState<any>(null)

const[
loading,
setLoading
]=useState(true)

useEffect(()=>{

loadGame()

},[])

async function loadGame(){

setLoading(true)

const data=
await getGame(
params.id
)

setGame(data)

setLoading(false)

}

if(loading){

return(

<div
className="
min-h-screen
flex
justify-center
items-center
text-2xl
"
>

🎮 Cargando...

</div>

)

}

if(!game){

return(

<div
className="
min-h-screen
flex
justify-center
items-center
"
>

Juego no encontrado

</div>

)

}

return(

<div
className="
max-w-6xl
mx-auto
p-8
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
h-[450px]
object-cover
rounded-3xl
mb-8
shadow-2xl
"

/>

<div
className="
flex
justify-between
items-center
mb-6
"
>

<h1
className="
text-5xl
font-bold
"
>

{game.name}

</h1>

<div
className="
bg-yellow-500
text-black
font-bold
px-4
py-2
rounded-xl
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

Lanzamiento:

{game.released}

</p>

<div
className="
flex
gap-3
flex-wrap
mb-6
"
>

{

game.genres?.map(

(genre:any)=>(

<span

key={
genre.id
}

className="
bg-indigo-600
px-3
py-1
rounded-full
"

>

{genre.name}

</span>

)

)

}

</div>

<p
className="
leading-8
text-slate-300
"
>

{

game.description_raw

||

"No hay descripción"

}

</p>

</div>

)

}