import {useState} from 'react';
import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    Heading,
    Input
  } from '@chakra-ui/react';
import UserCard from '../commons/UserCard'
import BadgeDisplay from '../commons/BadgeDisplay'
import { Player } from 'video-react';
const axios = require('axios');


  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function GridListWithCTA() {

    const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }


    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <UserCard/>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex direction="column">
            <Heading as='h2' size='xl' pb={30}>
    Bio
  </Heading>
  <Box>
  <Player>
      <source src={file} />
    </Player>  
  <Input type="file" id="livepeer-video" placeholder='Upload candidate video' onChange={handleChange}/>
  <Button type="submit">Upload</Button>
  </Box>
              <chakra.p>
                Provide your customers a story they would enjoy keeping in mind
                the objectives of your website. Pay special attention to the tone
                of voice.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign="center" mb={20}>
                Proof-of-Skill Badges
              </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <BadgeDisplay/>
        </Grid>
      </Box>
    );
  }