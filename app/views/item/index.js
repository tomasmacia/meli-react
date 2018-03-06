const React = require('react');
const classNames = require('classnames');


class ItemImage extends React.Component {
  render() {
    return <div></div>;
  }
}

class ItemInfo extends React.Component {
  _itemPrice(price) {
    if (price.decimals !== 0) {
      return `$${price.amount}.${price.decimals}`
    }
    return `$${price.amount}`
  }
  _itemCondition(condition){
    if (condition == 'new'){
      return "Nuevo";
    } else {
      return "Usado";
    }
  }
  render() {
    return (
      <div >
      <h6>{this._itemCondition(this.props.item.condition)} | {this.props.item.sold_quantity} vendidos</h6>
      <h1>{this.props.item.title}</h1>
      <h3>{this._itemPrice(this.props.item.price)}</h3>
      </div>
    )
  }
}

class ItemDescription extends React.Component {

  render() {
    return <div><h1>This is React :)</h1></div>
  }
}

class ItemPage extends React.Component {
  render() {
    return (
      <ItemInfo item={this.props.item} />
    )
  }
}



module.exports = ItemPage;
