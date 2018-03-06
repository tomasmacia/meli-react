const React = require('react');

class SearchBar extends React.Component {
  render(){
    return (
      <input
        type="text"
        placeholder="Nunca dejes de buscar..."
      />
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <SearchBar />
      </header>
    )
  }
}

class MeLiLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
          <Header />
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = MeLiLayout;
