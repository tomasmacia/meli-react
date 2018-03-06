const React = require('react')

class ItemCard extends React.Component {
  render(){
    return (
      <div>
        {this.props.item.title} | Precio: ${this.props.item.price.amount}
      </div>
    )
  }
}

class SearchPage extends React.Component {
  render(){
    return (
      <div>
        {this.props.itemList.map((item) => {
          return <ItemCard item={item} key={item.id} />
        })}
      </div>
    )
  }
}

module.exports = SearchPage
