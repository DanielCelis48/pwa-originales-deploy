"use client"

interface Props{
 value:string
 setValue:(value:string)=>void
}

export default function SearchBar(
{
value,
setValue
}:Props
){

return(

<input
value={value}
onChange={
(e)=>setValue(
e.target.value
)
}

placeholder="Buscar juego..."

className="
w-full
p-3
rounded
bg-slate-800"
/>

)

}