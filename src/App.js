import './App.css';
import { Component } from 'react';
import CreateList from './list';

class App extends Component {
  constructor(props) {  
    super(props);

    this.state = {
      dataList: ["test data"],
      textData: ""
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onClick() {
    let tempData = this.state.dataList;
    //console.log(tempData);
    tempData.push(this.state.textData);
    this.setState({dataList: tempData});
    
  }

  onChange(e) {
    this.setState({textData: e.target.value});
  }

  render() {
    return(
      <div className="App">
        <input type="text" className="input" placeholder="Item Name" onChange={this.onChange} />
        <button onClick={this.onClick} className="btn btn-primary">Add to List</button>
        <CreateList inputArray={this.state.dataList}/>
      </div>
    )
  }
}

export default App;
