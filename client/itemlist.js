import React from 'react';
import Item from './item';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <div key={item.id}>
            <Item
              item={item}
              warehouses={this.props.warehouses}
              editItem={this.props.editItem}
              deleteItem={this.props.deleteItem}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default ItemList;