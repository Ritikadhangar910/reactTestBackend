import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
const Input = (props) => {
  const [name, setName] = useState("");
  const [desp, setDesp] = useState("");
  const [price, setPrice] = useState("");
  const [quan, setQuan] = useState("");

  async function summitHandler(e) {
    e.preventDefault();
    const obj = { name, desp, price, quan };
    try {
      const response = await axios.post(
        "http://localhost:4000/product/create",
        obj
      );
      props.onSummit(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div style={{ width: "350px", paddingTop: "10px", paddingLeft: "30px" }}>
        <h2>Add Items</h2>
        <Form onSubmit={summitHandler}>
          <Form.Group className="mb-3" controlId="formBasicItem">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter item"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesp">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={desp}
              onChange={(e) => {
                setDesp(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quantity"
              value={quan}
              onChange={(e) => {
                setQuan(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Input;
