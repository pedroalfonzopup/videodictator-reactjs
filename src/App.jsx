import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MyNavbar from './components/Navbar/Navbar'

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
