import "./App.css";
import { Component } from "react";

class App1 extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ products: users }))
      .catch(rejectedValue => console.log('Error'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.products.map((product) => (
            <h1 key={product.id}>{product.name}</h1>
          ))}
        </header>
      </div>
    );
  }
}

export default App1;
