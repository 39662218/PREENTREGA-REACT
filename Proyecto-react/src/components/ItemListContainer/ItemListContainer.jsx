import React from "react";
import Products from "Productsdata.js"
import { Card } from "react-booststrap";





const ItemListContainer =(products) => {
    
    return (
        <div>
          
        </div>
    );
}

return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 20, height:"400px " }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>m , kn,
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );

export default ItemListContainer;