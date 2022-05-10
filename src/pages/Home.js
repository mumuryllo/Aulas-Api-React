import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaProdutos from "../components/ListaProdutos";

export default function Home() {
const [produtos, setProdutos] = useState([])
useEffect(() => {
axios.get('http://localhost:3001/produtos/')
.then((response)=> {
setProdutos(response.data)
})

.catch((err)=> {
console.error("Ops! ocorreu um erro" + err)
})
}, [])
return (
<div>
<h1>Home</h1>
<ListaProdutos produtos={produtos} />
</div>
)
}
