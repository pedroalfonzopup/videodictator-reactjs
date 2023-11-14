import { useState, useContext } from "react"
import "./ShopPage.css"
import TextField from "@mui/material/TextField";
import { addDoc, collection, getDocs, Timestamp, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import { CartContext } from "../../context/cartContext"


const initialState = {
    name: "",
    lastName: "",
    age: "",
}

const ShopPage = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");
    const { cart, clearCart } = useContext(CartContext)

  
  

    const handleOnChange = (e) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "purchases"), {
        values, cart
      });

      const dbRef = collection(db, 'games')
      const noStock = [] 
      const cartIds = cart.map(product => product.id)
      const myBatch = writeBatch(db)
      const productosAAñadir = await getDocs(query(dbRef, where(documentId(), "in", cartIds)))
      const { docs } = productosAAñadir
      docs.forEach(prod => {
        const data = prod.data()
        const dataBaseStock = data.stock
        const products = cart.find(doc => doc.id === prod.id)
        const prodQuantity = products?.quantity
        if(dataBaseStock >= prodQuantity){
          myBatch.update(prod.ref, {stock: dataBaseStock - prodQuantity})
        }else {
          noStock.push({id: prod.id, ...data})
          }
      }) 

      if(noStock.length === 0){
        myBatch.commit()
      }

      setValues(initialState);
      setPurchaseID(docRef.id);
    };

    return (
        <div className="main-shoppage">
          <h1>Shop</h1>
          <form className="FormContainer" onSubmit={handleOnSubmit}>
            <TextField
                placeholder="Name"
                style={{ margin: 10, width: 400, }}
                name="name"
                value={values.name}
                onChange={handleOnChange}
                required
            />
            <TextField
                placeholder="Last Name"
                style={{ margin: 10, width: 400 }}
                name="lastName"
                value={values.lastName}
                onChange={handleOnChange}
                required
            />
            <TextField
                placeholder="Age"
                style={{ margin: 10, width: 400 }}
                name="age"
                value={values.age}
                onChange={handleOnChange}
                required
            />
            <button className="btnASendAction">Send</button>
          </form>
          {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
        </div>
      );
  };
  
  export default ShopPage;
  