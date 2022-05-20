import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      name: this.props.item.name,
      quantity: this.props.item.quantity,
      warehouse: this.props.item.warehouse,
      showEdit: false,
    }
    this.showEdit = this.showEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showEdit(){
    this.setState({
      showEdit: !this.state.showEdit,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm() {
    this.props.editItem({
      id: this.props.item.id,
      name: this.state.name,
      quantity: this.state.quantity,
      warehouse: this.state.warehouse,
    });
    this.setState({
      showEdit: !this.state.showEdit,
    })
  }

  handleDelete() {
    this.props.deleteItem(this.state.id);
  }

  render() {
    let warehouseList = this.props.warehouses.map(wh => {
      return (
        <option key={wh.warehouse} name={wh.warehouse}>{wh.warehouse}</option>
      )
    }, this);
    if (this.state.showEdit) {
      return (
        <div>
          <div>
            <h4>edit item: {this.props.item.name}</h4>
            <div>
              <label>Change {this.props.item.name} to: </label>
              <input type="text" id="name" placeholder={this.state.name} onChange={this.handleChange}></input>
            </div>
            <div>
              <label>Change {this.props.item.quantity} to: </label>
              <input type="text" id="quantity" placeholder={this.state.quantity} onChange={this.handleChange}></input>
            </div>
            <div>
              <label>Warehouse: </label>
              <select onChange={this.handleChange} id="warehouse" >
                {warehouseList}
              </select>
            </div>
          </div>
            <button onClick={this.submitForm}>SUBMIT CHANGE</button>
            <button onClick={this.showEdit}>CANCEL CHANGE</button>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            id--{this.props.item.id}--
            name--{this.props.item.name}--
            quantity--{this.props.item.quantity}--
            warehouse--{this.props.item.warehouse}
          </div>
          <button onClick={this.showEdit}>edit item</button>
          <button onClick={this.handleDelete}>delete item</button>
        </div>
      )
    }
  }
}

export default Item;