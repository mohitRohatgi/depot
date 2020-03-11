import React from "react"
import {  Table } from 'semantic-ui-react'

export function CartItem(props) {
    let title = props.cartDetail.title
    let quantity = props.cartDetail.quantity
    let price = props.cartDetail.price
    let subTotal = parseInt(quantity) * parseInt(price)
    return (
        <Table.Row>
                <Table.Cell>{title}</Table.Cell>
                <Table.Cell>{quantity}</Table.Cell>
                <Table.Cell>${price}</Table.Cell>
                <Table.Cell>${subTotal}</Table.Cell>
        </Table.Row>
    )
}