import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
   
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import {Router, Link, Navigate, Redirect} from 'react-router-dom' 

  import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
  import { useWeb3React } from '@web3-react/core'
  import RecruiterSignUp from './RecruiterSignup'

  import { InjectedConnector } from "@web3-react/injected-connector";
import { useState, useEffect } from 'react';

  const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
   });
   const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
   });
  export default function SimpleCard() {

    const { activate, deactivate, active, chainId, account } = useWeb3React();
    const [redirect, setRedirect] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if(active) setRedirect(true)
        }, 2000);
        return () => clearTimeout(timer);
      }, [active]);

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('grey.50', 'gray.00')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'}>Build A Degen Portfolio Here</Heading>
            <Text fontSize={'lg'} color={'gray.400'}>
              Gain Knowledge. Provide Proof. Display Utility.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('orange.500', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="lens">
                <FormLabel>Lens Address :</FormLabel>
                <Input type="text" />
              </FormControl>
              
           
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Link to='/recruiter-signup'>Are you a recruiter? Sign Up Here</Link>

                <Button  bg={'gray.700'}color={'gray.100'}onClick={() => { activate(WalletConnect) }}>Wallet Connect</Button>
                <Button  bg={'gray.700'}color={'gray.100'}onClick={deactivate}>Disconnect</Button>
                {/* <div>Connection Status: {active}</div> */}
    <div>Account: {account}</div>
    <div>Network ID: {chainId}</div>
    {redirect && (
          <Redirect to="/talent-profile" />
        )}
                <Button
                  bg={'gray.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }