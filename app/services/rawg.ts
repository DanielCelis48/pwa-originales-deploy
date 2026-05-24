import axios from "axios"

const api = axios.create({
 baseURL:"https://api.rawg.io/api"
})

export async function getGames(
 search="",
 genre="",
 page=1
){

 try{

 const cacheKey=
 `games-${search}-${genre}-${page}`

 if(typeof window!=="undefined"){

 const cached=
 localStorage.getItem(
 cacheKey
 )

 if(cached){

 return JSON.parse(cached)

 }

 }

 let url=

 `/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&page=${page}&page_size=20`

 if(search){

 url+=`&search=${search}`

 }

 if(genre){

 url+=`&genres=${genre}`

 }

 const response=
 await api.get(url)

 const games=
 response.data.results

 if(typeof window!=="undefined"){

 localStorage.setItem(

 cacheKey,

 JSON.stringify(games)

 )

 }

 return games

 }catch(error){

 console.log(
 "RAWG ERROR:",
 error
 )

 return []

 }

}

export async function getGame(
 id:string
){

 try{

 const cacheKey=
 `game-${id}`

 if(typeof window!=="undefined"){

 const cached=

 localStorage.getItem(
 cacheKey
 )

 if(cached){

 return JSON.parse(cached)

 }

 }

 const response=

 await api.get(

 `/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_KEY}`

 )

 const game=
 response.data

 if(typeof window!=="undefined"){

 localStorage.setItem(

 cacheKey,

 JSON.stringify(game)

 )

 }

 return game

 }catch(error){

 console.log(error)

 return null

 }

}