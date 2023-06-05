import React from "react"
import { createRoot } from "react-dom/client";


import GiftExpertApp from './GifExpertApp'

const contenedor = document.querySelector('#root');
const divRoot = createRoot(contenedor)
divRoot.render(<GiftExpertApp />)