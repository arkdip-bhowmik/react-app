import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

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
      .catch((rejectedValue) => console.log("Error"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList name="Ark">
            {this.state.products.map((product) => (
              <h1 key={product.id}>{product.name}</h1>
            ))}
          </CardList>
        </header>
      </div>
    );
  }
}

export default App1;
