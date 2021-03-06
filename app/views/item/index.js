const React = require('react');


class ItemImage extends React.Component {
  render() {
    return <div></div>;
  }
}

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.itemPrice = this.itemPrice.bind(this);
    this.itemCondition = this.itemCondition.bind(this);
    this.itemSoldQuantity = this.itemSoldQuantity.bind(this);
    this.itemTitle = this.itemTitle.bind(this);
  }

  itemPrice() {
    if (this.props.item.price.decimals !== 0) {
      return "$" + this.props.item.price.amount + this.props.item.price.decimals;
    }
    return "$" + this.props.item.price.amount;
  }

  itemCondition(){
    if (this.props.item.condition == 'new'){
      return "Nuevo";
    } else {
      return "Usado";
    }
  }

  itemSoldQuantity(){
    return this.props.item.sold_quantity;
  }

  itemTitle(){
    return this.props.item.title;
  }

  render() {
    return (
      <div >
      <h6>{this.itemCondition()} | {this.itemSoldQuantity()} vendidos</h6>
      <h1>{this.itemTitle()}</h1>
      <h3>{this.itemPrice()}</h3>
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
      <ItemInfo  item={this.props.item} />
    )
  }
}



module.exports = ItemPage;
