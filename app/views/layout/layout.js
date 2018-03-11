const React = require('react');

class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <input
          type="text"
          placeholder="Nunca dejes de buscar..."
          value={this.props.query}
        />
        <button>
          SEARCH
        </button>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <SearchBar query={this.props.query}/>
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
