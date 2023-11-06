
import CardSelected from "../../components/CardSelected/CardSelected"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./CardPage.css"
import { db } from "../../firebase/firebaseConfig"
import { collection, query, where, getDocs, documentId } from "firebase/firestore"

const CardPage = () => {
    const { id } = useParams()
    const [gameData, setGameData] = useState([])


    useEffect(() => {
        const getGameData = async () => {
            const q = query(collection(db, "games"), where(documentId(), "==", id))
            const docs = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})

            })
            setGameData(docs)
        }
        getGameData()
    }, [id])
    return (
      <div className="detail-main">
        <div className="specific-item">
          <div className="item-detail">
            {gameData.map((game) => {
              return <CardSelected game={game} key={game.id}/>
            })}
          </div>
        </div>
      </div>
    ) 
  }

  export default CardPage
