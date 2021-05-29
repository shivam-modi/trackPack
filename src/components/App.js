import React, { Component } from "react";
import Create from "./Create";
import Transfer from "./Transfer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Web3 from "web3";
import "./App.css";
import AssetTrackerJSON from "../abis/AssetTracker.json";

//Declare IPFS
// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // const AssetTracker = new Web3.eth.Contract(AssetTrackerAbi,)
    // // Network ID
    const networkId = await web3.eth.net.getId();
    const deployedAddress = AssetTrackerJSON.networks[networkId].address;
    const contract = new web3.eth.Contract(
      AssetTrackerJSON.abi,
      deployedAddress
    );
    this.setState({
      contract: contract,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      loading: false,
      currentHash: null,
      contract: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar account={this.state.account} />
          <Switch>
            <Route path="/create">
              <Create
                contract={this.state.contract}
                account={this.state.account}
              />
            </Route>
            <Route path="/transfer">
              <Transfer
                contract={this.state.contract}
                account={this.state.account}
              />
            </Route>
            <Route path="/">
              <div>
                {this.state.loading ? (
                  <div id="loader" className="text-center mt-5">
                    <p>Loading...</p>
                  </div>
                ) : (
                  <Main
                    contract={this.state.contract}
                    account={this.state.account}
                  />
                )}
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
