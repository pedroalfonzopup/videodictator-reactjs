import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MyNavbar from './components/Navbar/navbar'

const App = () => {

  return (
    <>
      <MyNavbar />
      <ItemListContainer 
        greetings="Hola bienvenidos a Video Dictator"
      />
    </>
  )
}

export default App
