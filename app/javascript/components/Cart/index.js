import { CartItem } from "./CartItem"
import React from "react"
import {  Table } from 'semantic-ui-react'


export function Cart(props) {
    var cartItems = props.cartDetails.map(( (cartDetail) => {
        return <CartItem cartDetail={cartDetail} key={cartDetail.title}/>
    }))

    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Product Title</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>SubTotal</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {cartItems}
                <Table.Row>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>Total Price = </Table.Cell>
                    <Table.Cell>${props.totalPrice}</Table.Cell>
                </Table.Row>
            </Table.Body>
    </Table>
    )
}