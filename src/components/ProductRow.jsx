function ProductRow(props) {
    const inStockStyle = {
        color: 'black',
    }

    const notInStockStyle = {
        color: 'red',
    }

    return (
        <tr>
            <td style={props.product.inStock ? inStockStyle : notInStockStyle}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductRow;