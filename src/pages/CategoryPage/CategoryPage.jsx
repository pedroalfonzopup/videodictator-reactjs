import { useEffect, useState } from "react"
import axios from "axios"
import CardUser from "../../components/CardUser/CardUser"
import { useParams } from "react-router-dom"
import "./CategoryPage.css"
import { Link } from "react-router-dom"

const CategoryPage = () => {
    const [chars, setChars] = useState([])
    let { categoryId } = useParams()

    useEffect(() => {
        axios("https://rickandmortyapi.com/api/character").then((res) => setChars(res.data.results))
    }, [])

    let filteredCharacters = chars.filter((char) => {
        return char.status === categoryId
    })

    return (
        <div className="main">
            <div className="items-main">
                <div className="items-container">
                    {filteredCharacters.map((char) => {
                        return (
                            <div className="item" key={char.id}>
                                <Link to={`/selected/${char.id}`}>
                                    <CardUser char={char} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage