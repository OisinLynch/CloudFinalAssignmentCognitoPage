import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PremiumPage from './pages/PremiumPage';
import React, { Component } from 'react';
import axios from 'axios';

class AppContent extends Component {
  state = {
    selectedFile: null,
    fileUploadedSuccesfully: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  }

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    //call api
    axios.post("https://zuw346yrn5.execute-api.eu-west-1.amazonaws.com/prod/file-upload", formData).then(() =>{
      this.setState({selectedFile: null});
      this.setState({fileUploadedSuccesfully: true});
    })
  }

  fileData = () => {
    //Display the file details to the user
    if (this.state.selectedFile) {
      return (
      <div>
        <h2>File Details</h2>
        <p>File Name: {this.state.selectedFile.name}</p>
        <p>File Name: {this.state.selectedFile.type}</p>
      </div>
      );
    } else if (this.state.fileUploadedSuccesfully) {
      return (
      <div>
        <br />
        <h4>The file has been uploaded</h4>
      </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose a file to upload</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Cloud Assignment 1 Upload</h2>
        <h3>File Upload</h3>
        <div>
          <input type = "file" onChange = {this.onFileChange} />
          <button onClick = {this.onFileUpload}>
            Upload
          </button>
        </div>
        {this.fileData()}
        <div>
          <input type="text"></input>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <NavLink className='content' exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className='content' activeClassName="active" to="/about">About</NavLink>
          <NavLink className='content' activeClassName="active" to="/premium">Premium Content</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
