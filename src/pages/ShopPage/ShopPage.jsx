import { useState } from "react"
import "./ShopPage.css"
import TextField from "@mui/material/TextField";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";


const initialState = {
    name: "",
    lastName: "",
    age: "",
}

const ShopPage = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");
  
    const handleOnChange = (e) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "purchases"), {
        values,
      });
      setValues(initialState);
      setPurchaseID(docRef.id);
    };

    return (
        <div>
          <h1>Shop</h1>
          <form className="FormContainer" onSubmit={handleOnSubmit}>
            <TextField
                placeholder="Name"
                style={{ margin: 10, width: 400 }}
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
  