import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App1 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      SearchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((rejectedValue) => console.log("Error"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="search"
            placeholder="Search monsters..."
            onChange={(e) => {
              this.setState({ SearchField: e.target.value }, () =>
                console.log(this.state.SearchField)
              );
            }}
          />
          <CardList monsters={this.state.monsters} />
        </header>
      </div>
    );
  }
}

export default App1;
