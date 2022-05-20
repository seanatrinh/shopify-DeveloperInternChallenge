import React from 'react';

class CreateWarehouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      warehouse: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.CreateWarehouse = this.CreateWarehouse.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  CreateWarehouse() {
    this.props.createWarehouse(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <label>Warehouse Name: </label>
          <input type="text" id="warehouse" onChange={this.handleChange}></input>
        </div>
        <button onClick={this.CreateWarehouse}>CONFIRM WAREHOUSE CREATION</button>
      </div>
    )
  }
}

export default CreateWarehouse;