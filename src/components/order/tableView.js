import React from 'react';
import NumberFormat from 'react-number-format';
import { Container, List, ListItem, ListItemText, Checkbox, ListItemIcon, TextField, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';

function CurrencyFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      decimalScale={2}
      fixedDecimalScale
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      decimalScale={0}
      thousandSeparator
      isNumericString
    />
  );
}

export default function Order() {
  let orders = [{
    name: "Mask",
    defaultProductName: "Disposable Mask",
    defaultPrice: 6,
    quantity: 0,
    moq: 10
  }, {
    name: "Glove",
    defaultProductName: "Nitrile Exam",
    defaultPrice: 13,
    quantity: 0,
    moq: 10
  }, {
    name: "Wipe",
    defaultProductName: "Lysol Disinfect Wipes",
    defaultPrice: 15,
    quantity: 0,
    moq: 1
  }, {
    name: "Shoe Cover",
    defaultProductName: "Shoe Cover",
    defaultPrice: 0.2,
    quantity: 0,
    moq: 10
  }, {
    name: "Isolated Gown",
    defaultProductName: "Isolated Gown",
    defaultPrice: 3,
    quantity: 0,
    moq: 10
  }, {
    name: "Coverall",
    defaultProductName: "3M Coverall",
    defaultPrice: 7,
    quantity: 0,
    moq: 20
  }, {
    name: "Goggle",
    defaultProductName: "Goggle",
    defaultPrice: 2,
    quantity: 0,
    moq: 10
  }, {
    name: "Face Shield",
    defaultProductName: "Face Shield",
    defaultPrice: 2,
    quantity: 0,
    moq: 10
  }];

  const [values, setValues] = React.useState({
    orders,
  })
  const handlePriceChange = (e, idx) => {
    orders = values.orders.map((item, i) => {
      i === idx && (item.defaultPrice = Number(e.target.value));
      return item;
    })
    // console.log(orders);
    setValues({
      orders
    })
  }
  const handleQuantityChange = (e, idx) => {
    orders = values.orders.map((item, i) => {
      const {value} = e.target;
      i === idx && (item.defaultQuantity = Number(value > item.moq ? value : item.moq));
      return item;
    })
    // console.log(orders);
    setValues({
      orders
    })
  }
  return <Container>
    <h1>Purchase Order</h1>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {values.orders.map((item, idx) => 
          <TableRow key={idx}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <TextField 
                defaultValue={item.defaultProductName}
              />
            </TableCell>
            <TableCell>
            <TextField 
              inputProps={{style: {textAlign: 'right'}}}
              value={item.defaultPrice}
              InputProps={{
                inputComponent: CurrencyFormatCustom
              }}
              onChange={(e) => handlePriceChange(e, idx)}
            />
            </TableCell>
            <TableCell>
            <TextField 
              inputProps={{style: {textAlign: 'right'}}}
              defaultValue={item.moq > item.quantity ? item.moq : item.quantity}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              onChange={(e) => handleQuantityChange(e, idx)}
            />

            </TableCell>
            
            
            
          </TableRow>
        )}
      </TableBody>
      
    </Table>
    <div>
      Amount: ${values.orders.reduce((a, b) => {
        b.quantity = b.quantity < b.moq ? b.moq : b.quantity;
        return {
          defaultPrice: Number(a.defaultPrice) + Number(b.defaultPrice),
          total: a.total + b.defaultPrice * b.quantity
        }
      }, {defaultPrice: 0, quantity: 0, total: 0} ).total}
    </div>
  </Container>
}
