"use client"

import {
useEffect,
useState
} from "react"

import SearchBar
from "./components/SearchBar"

import FilterBar
from "./components/FilterBar"

import GameCard
from "./components/GameCard"

import {
getGames
}
from "./services/rawg"

export default function Home(){

const[
games,
setGames
]=useState<any[]>([])

const[
search,
setSearch
]=useState("")

const[
genre,
setGenre
]=useState("")

const[
page,
setPage
]=useState(1)

const[
loading,
setLoading
]=useState(false)

useEffect(()=>{

loadGames(1)

},[])

async function loadGames(

currentPage:number

){

setLoading(true)

const data=

await getGames(

search,
genre,
currentPage

)

if(

currentPage===1

){

setGames(data)

}else{

setGames(

prev=>[

...prev,

...data

]

)

}

setLoading(false)

}

async function handleSearch(){

setPage(1)

loadGames(1)

}

async function loadMore(){

const next=

page+1

setPage(next)

loadGames(next)

}

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
mb-6
"
>

🎮 Zona XP -
Explora • Guarda • Juega

</h1>

<div
className="
flex
gap-3
mb-5
"
>

<SearchBar

value={search}

setValue={setSearch}

/>

<button

onClick={
handleSearch
}

className="
bg-indigo-600
px-5
rounded-xl
hover:bg-indigo-700
"
>

Buscar

</button>

</div>

<FilterBar

genre={genre}

setGenre={setGenre}

/>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"
>

{

games.map(

(game:any)=>(

<GameCard

key={
game.id
}

game={game}

/>

)

)

}

</div>

<div
className="
flex
justify-center
mt-10
"
>

<button

onClick={
loadMore
}

disabled={
loading
}

className="
bg-purple-600
hover:bg-purple-700
px-6
py-3
rounded-xl
font-bold
"
>

{

loading

?

"Cargando..."

:

"Cargar más"

}

</button>

</div>

</div>

)

}