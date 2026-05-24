"use client"

interface Props{

genre:string

setGenre:
(value:string)=>void

}

export default function FilterBar({

genre,
setGenre

}:Props){

return(

<select

value={genre}

onChange={(e)=>
setGenre(
e.target.value
)
}

className="
bg-slate-800
p-3
rounded
mb-5
"

>

<option value="">

Todos

</option>

<option value="4">

Acción

</option>

<option value="3">

Aventura

</option>

<option value="5">

RPG

</option>

<option value="2">

Shooter

</option>

</select>

)

}