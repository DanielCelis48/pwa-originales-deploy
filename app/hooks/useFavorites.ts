"use client"

import { useEffect, useState } from "react"

export function useFavorites(){

const [favorites,setFavorites]=useState<any[]>([])

useEffect(()=>{

const saved=JSON.parse(

localStorage.getItem("games")
||
"[]"

)

setFavorites(saved)

},[])

function addGame(game:any){

const exists=

favorites.some(

fav=>

fav.id===game.id

)

if(exists){

return false

}

const updated=[

...favorites,
game

]

setFavorites(updated)

localStorage.setItem(

"games",

JSON.stringify(
updated
)

)

return true

}

function removeGame(id:number){

const updated=

favorites.filter(

game=>

game.id!==id

)

setFavorites(updated)

localStorage.setItem(

"games",

JSON.stringify(
updated
)

)

}

return{

favorites,
addGame,
removeGame

}

}