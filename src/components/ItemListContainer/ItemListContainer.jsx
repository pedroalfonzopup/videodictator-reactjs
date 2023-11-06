import { useState, useEffect } from "react"
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore"
import "./ItemListContainer.css"
import CardUser from "../CardUser/CardUser"
import { Link } from "react-router-dom"


const ItemListContainer = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            const q = query(collection(db, "games"))
            const querySnapshot = await getDocs(q)
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})

            })
            setGames(docs)
        }
        getGames()
    }, [])

    return (
        <div className="main">
            <div className="items-main">
                <div className="items-container">
                    {games.map((games) => {
                        return (
                        <div className="item" key={games.id}>
                            <Link to={`/selected/${games.id}`}>
                                <CardUser games={games} />
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