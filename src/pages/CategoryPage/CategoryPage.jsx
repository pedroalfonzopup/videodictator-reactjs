import { useEffect, useState } from "react"
import CardUser from "../../components/CardUser/CardUser"
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import "./CategoryPage.css"
import { Link } from "react-router-dom"

const CategoryPage = () => {
    const [gameCategory, setGamesCategory] = useState([])
    let { categoryId } = useParams()

    useEffect(() => {
        const getGamesCategory = async () => {
            const q = query(collection(db, "games"), where("company", "==", categoryId))
            const querySnapshot = await getDocs(q)
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})

            })
            setGamesCategory(docs)
        }
        getGamesCategory()
    }, [categoryId])

    return (
        <div className="main">
            <div className="items-main">
                <div className="items-container">
                    {gameCategory.map((games) => {
                        return (
                            <div className="item" key={games.id}>
                                <Link to={`/selected/${games.id}`}>
                                    <CardUser games={games} />
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