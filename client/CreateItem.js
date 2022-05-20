import React from 'react';

class CreateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      warehouse: this.props.warehouses[0].warehouse,
    }
    this.handleChange = this.handleChange.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  createItem() {
    this.props.createItem(this.state);
  }

  render() {
    let warehouseList = this.props.warehouses.map(wh => {
      return (
        <option key={wh.warehouse} name={wh.warehouse}>{wh.warehouse}</option>
      )
    }, this);

    return (
      <div>
          <div>
            <div>
              <label>Item Name: </label>
              <input type="text" id="name" onChange={this.handleChange}></input>
            </div>
            <div>
              <label>Item Quantity: </label>
              <input type="text" id="quantity" onChange={this.handleChange}></input>
            </div>
            <div>
              <label>Warehouse: </label>
              <select onChange={this.handleChange} id="warehouse" >
                {warehouseList}
              </select>
            </div>
          </div>
            <button onClick={this.createItem}>CONFIRM ITEM CREATION</button>
        </div>
    )
  }
}

export default CreateItem;