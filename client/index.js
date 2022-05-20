import React from 'react';
import { render } from 'react-dom';
import ItemList from './itemlist';
import CreateItem from './CreateItem';
import CreateWarehouse from './CreateWarehouse';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, name: 'Steak', quantity: '10', warehouse: 'Brisbane'},
        {id: 2, name: 'Chicken', quantity: '15', warehouse: 'Arizona'},
      ],
      warehouses: [
        {warehouse: 'Brisbane'},
        {warehouse: 'Arizona'},
      ],
    };
    this.createWarehouse = this.createWarehouse.bind(this);
    this.createItem = this.createItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  createItem(item) {
    console.log(item);
  }

  createWarehouse(warehouse) {
    console.log(warehouse);
  }

  editItem(item) {
    console.log(item);
  }

  deleteItem(itemID) {
    console.log(itemID);
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
