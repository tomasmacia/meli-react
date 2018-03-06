const React = require('react')
const HomePage = require('./home/index')

class Home extends React.Component {
  render() {
    return <HomePage title="Home" />;
  }
}

module.exports = Home;
