import "./globals.css"

import Navbar
from "./components/Navbar"

import type {
Metadata
} from "next"

export const metadata:Metadata={

title:"Zona XP",

description:
"Explora videojuegos, guarda favoritos y crea tu biblioteca gamer.",

manifest:"/manifest.json",

icons:{

icon:"/icon-192.png",

apple:
"/apple-touch-icon.png"

},

themeColor:"#4f46e5"

}

export default function RootLayout(
{
children
}:{
children:
React.ReactNode
}
){

return(

<html
lang="es"
>

<body
className="
bg-slate-950
text-white
min-h-screen
"
>

<Navbar/>

{children}

</body>

</html>

)

}