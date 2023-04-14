import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.brand}</strong>
            <h3>{product.name}</h3>
            <p>{product.noofvideos}</p>
            <p>{product.coursetime}</p>
            <Card.Img src={product.profile} variant='top' />
            <p>{product.username}</p>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Product
