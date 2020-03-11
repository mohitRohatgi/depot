import React from "react"
import { SideNavBar } from "../SideNavBar"
import {  Grid, Segment, Container, Button, Message, Step } from 'semantic-ui-react'
import { STORE_INDEX_URL, LINE_ITEM_CREATE_URL, CART_DELETE_URL } from '../../api'
import { Cart } from "../Cart"
import TopNavBar from "../topNavBar"


class Store extends React.Component {

  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
    this.fetchCartDetails = this.fetchCartDetails.bind(this)
    this.emptyCart = this.emptyCart.bind(this)
    this.state = {
      products: [],
      totalPrice: -1,
      cartDetails: [],
      cartId: null
    }
  }

  fetchCartDetails(productId) {
    fetch(LINE_ITEM_CREATE_URL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        product_id: productId
      })
    })
    .then((response) => {return response.json()})
    .then((response) => {
      this.setState( {
        totalPrice: response.total_price,
        cartDetails: response.cart_details,
        cartId: response.id
      })
    })
  }

  addToCart(e) {
    this.fetchCartDetails(e.target.value)
  }

  emptyCart(e) {
    fetch(CART_DELETE_URL + e.target.value , {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    // .then((response) => { return response.json()})
    .then((response) => {
      this.setState({
        totalPrice: -1,
        cartDetails: []
      })
    })
  }

  componentDidMount(){
    fetch(STORE_INDEX_URL)
    .then((response) => {return response.json()})
    .then((data) => {
      this.setState({
        products: data
      })
    })
  }

  render () {
    var products = this.state.products.map((product) => {
      return (
        <li>
          <Container key={product.id}>
            <h2>Tiltle: {product.title}</h2>
            <p>Description: {product.description}</p>
            <span>
              <Step.Group><Step>Price: ${product.price}</Step></Step.Group>
              <Button value={product.id} onClick={this.addToCart}>Add To Cart</Button>
            </span>
          </Container>
        </li>
      );
    })
    if (this.state.totalPrice > 0) {
      return (
        <div>
          <TopNavBar />
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={7}>
                <Cart cartDetails={this.state.cartDetails} totalPrice={this.state.totalPrice} />
                <Button value={this.state.cartId} onClick={this.emptyCart}>Empty Cart</Button>
              </Grid.Column>
              <Grid.Column width={8}>
                <ul>
                  {products}
                </ul>
              </Grid.Column>
            </Grid>
          </Segment>
        </div>   
      );
    } else {
      return (
        <div>  
          <TopNavBar />
          <Segment>
            <Grid columns={2}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column width={8}>
                {products}
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
        
      );
    }
  }
}

export default Store
