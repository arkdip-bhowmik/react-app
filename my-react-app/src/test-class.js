import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App1 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      SearchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    //(Arrow function binds it to the place where arrow function was defined in the first place i.e app component.)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((rejectedValue) => console.log("Error"));
  }

  handleChange = (e) => {
    this.setState({ SearchField: e.target.value });
  };

  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder="Search Monsters..."
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App1;
