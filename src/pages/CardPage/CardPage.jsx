
import CardSelected from "../../components/CardSelected/CardSelected"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./CardPage.css"
const CardPage = () => {
    let { id } = useParams()
  
    const [char, setChar] = useState([])
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
        setChar(res.data)
      );
    }, [id])
  
    return (
      <div className="detail-main">
        <div className="item-detail">
          <div className="specific-item">
            {char.id ? <CardSelected char={char} /> : null}
          </div>
        </div>
      </div>
    )
  }
  
  export default CardPage
  