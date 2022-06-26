import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image
} from '@chakra-ui/react';
import './App.css'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home-container/home/Home'
import PetDetails from './components/home-container/pet-details/PetDetails'
import CreatePet from './components/create-post/CreatePet'
import TalentProfile from './components/pages/TalentProfile'
import Signup from './components/pages/Signup'
import RecruiterSignup from './components/pages/RecruiterSignup'
import Web3 from 'web3';
import MyPet from './abis/Pet.json';
import {useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}


function App() {

  const [account, setAccount] = useState('')
  const [contractData, setContractData] = useState('')


  const loadWeb3 = async () => {

    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({ method: 'eth_requestAccounts'})
    } else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    } else{
      window.alert(
        'Non-Ethereum browser detected. You should consider trying Metamask!'
      )
    }
  }

  const getContract = async () => {
    const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  setAccount(accounts[0])
  const networkId = await web3.eth.net.getId()
  const networkData = MyPet.networks[networkId]

  if (networkData) {
    const abi = MyPet.abi
    const address = MyPet.networks[networkId].address
    const myContract = new web3.eth.Contract(abi, address)
    setContractData(myContract)
  } else {
    window.alert(
      'Contract is not deployed to the detected network. Connect to the correct network!',
  )}}

  const connectWallet = async () => {
    await loadWeb3()
    await getContract()

  }

  return (
    <Router>
      <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Box className="cl" backgroundColor="#1C232C">
        <Navbar account={account} connectWallet={connectWallet} />
        <Route exact path="/" component={Home} />
        <Route exact path="/talent-profile" component={TalentProfile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/recruiter-signup" component={RecruiterSignup} />
        <Switch>
          <Route exact path="/create-pet" component={CreatePet} />
          <Route path="/pet-details/:petId">
            <PetDetails account={account} contractData={contractData}/>
          </Route>
        </Switch>
        <Footer />
      </Box>
     
      </Web3ReactProvider>
      </ChakraProvider>
    </Router>
  )
}

export default App
