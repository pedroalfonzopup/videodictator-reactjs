import "./CardUser.css"

const CardUser = ( {games} ) => {
    const { img, name, company, genre, console } = games
    return (
        <div className="card">
            <img src={img} alt={name} className="card-img" />
            <h5 className="card-name">
                {name}
            </h5>
            <h5 className="card-name">
                {genre}
            </h5>
            <h6 className="card-company">
                {company}
            </h6>
            <h6 className="card-console">
                {console}
            </h6>
        </div>
    )
}

export default CardUser