const React = require('react')
const MeLiLayout = require('../layout/layout')

class HomePage extends React.Component {
  render(){
    return (
      <MeLiLayout title={this.props.title}>
        <h1>HOME</h1>
      </MeLiLayout>
    )
  }
}

module.exports = HomePage
