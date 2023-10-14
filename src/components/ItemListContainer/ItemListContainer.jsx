import { useState, useEffect } from "react"
import axios from "axios"
import "./ItemListContainer.css"
import CardUser from "../CardUser/CardUser"
import { Link } from "react-router-dom"


const ItemListContainer = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character"
        ).then((res) =>
            setChars(res.data.results)) 
    }, [])

    return (
        <div className="main">
            <div className="items-main">
                <div className="items-container">
                    {chars.map((char) => {
                        return (
                        <div className="item" key={char.id}>
                            <Link to={`/selected/${char.id}`}>
                                <CardUser char={char} />
                            </Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}


export default ItemListContainer