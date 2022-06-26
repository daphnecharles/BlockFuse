import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import GraphBadge from '../../images/Graph-8.png';
import IPFS from '../../images/IPFS-8.png'
import Lens from '../../images/Lens-8.png'
import Polygon from '../../images/Polygon-8.png'
import Tatum from '../../images/Tatum-8.png'
  
  const IMAGES =
  [
    {brand: "The Graph", src: GraphBadge, title: "ETHNewYork Bounty Winner" },
    {brand: "IPFS", src: IPFS, title: "Encode Club Bootcamp Graduate"},
    {brand: "Lens Protocol", src: Lens, title: "7 Days of Lens Protocol Participant"},
    {brand: "Tatum", src: Tatum, title: "ETHAmsterdam Bounty Winner"},
    {brand: "Polygon", src: Polygon, title: "Web3 Camp Graduate"}
  ]
    
  
  export default function ProductSimple() {
    return (
      <Center py={12}>
          {IMAGES.map((item)=> {
              return (
<Box
          role={'group'}
          p={10}
          boxShadow={'2xl'}
          rounded={'lg'}
          mx={7}
          zIndex={1}
          background="#3B4755">
    
          <Box
            rounded={'lg'}
            >
            <Image
              rounded={'lg'}
                height={100}
              objectFit={'cover'}
              src={item.src}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             {item.brand}
            </Text>
            <Heading fontSize={'l'} fontFamily={'body'} fontWeight={500}>
              {item.title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              {/* <Text fontWeight={800} fontSize={'xl'}>
                $57
              </Text> */}
              {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text> */}
            </Stack>
          </Stack>
        </Box>
              )
          })}
        
      </Center>
    );
  }