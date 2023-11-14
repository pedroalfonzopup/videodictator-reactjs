import React from "react"
import "./HomePage.css"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

const HomePage = () => {
  return (
    <div className="page-titles">
      <h1>Welcome to VideoDictator</h1>
      <ItemListContainer/>
    </div>
  )
}

export default HomePage;
