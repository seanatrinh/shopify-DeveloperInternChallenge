import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import ItemList from './itemlist';
import CreateItem from './CreateItem';
import CreateWarehouse from './CreateWarehouse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      warehouses: [{warehouse: 'Brisbane'}],
    };
    this.createWarehouse = this.createWarehouse.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    axios.get('/items')
      .then(res => {
        this.setState({ items: res.data });
        axios.get('/warehouses')
          .then(res => this.setState({ warehouses: res.data }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  createItem(item) {
    console.log(item);
    axios.post('/item', item)
      .then(() => {
        axios.get('/items')
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  createWarehouse(warehouse) {
    axios.post('/warehouse', warehouse)
      .then(() => {
        axios.get('/warehouses')
          .then(res => this.setState({ warehouses: res.data }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  editItem(item) {
    axios.put('/item', item)
      .then(() => {
        axios.get('/items')
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  deleteItem(itemID) {
    axios.delete('/item', { data: {id: itemID} })
      .then((res) => {
        console.log(res);
        axios.get('/items')
          .then(res => this.setState({ items: res.data }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Inventory Tracking Application</h1>
        <h3>item list</h3>
        <ItemList
          items={this.state.items}
          warehouses={this.state.warehouses}
          editItem={this.editItem}
          deleteItem={this.deleteItem}
        />
        <h3>create item</h3>
          <CreateItem
            warehouses={this.state.warehouses}
            createItem={this.createItem}
          />
        <h3>create warehouse</h3>
          <CreateWarehouse
            createWarehouse={this.createWarehouse}
          />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
