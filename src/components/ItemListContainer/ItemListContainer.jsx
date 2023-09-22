import "./ItemListContainer.css"

const ItemListContainer = ({greetings = "Bienvenidos/as"}) => {
    return (
        <div className="ItemListContainer">
            <div className="greet-container">
                <h1>{greetings}</h1>
            </div>
        </div>
    )
}


export default ItemListContainer