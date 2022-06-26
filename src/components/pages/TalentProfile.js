import {useState, useRef} from 'react';
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
import { generateURL } from '../commons/Livepeer';
import { uploadAsset } from '../commons/Livepeer';

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

    const inputRef = useRef();

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [source, setSource] = useState();
    const [video, setVideo] = useState();

	const changeHandler = (event) => {
		const file = event.target.files[0];
        
    // const url = URL.createObjectURL(file);
    setSource(file);
	};
    const handleChoose = (event) => {
        inputRef.current.click();
      };

	const handleSubmission = async () => {

        const playbackId = await generateURL(source);
        const livepeerURL = `https://livepeercdn.com/asset/${playbackId}/video`;

        setTimeout(() => {
            console.log("Delayed for 1 second.");
            setVideo(livepeerURL);
          }, 9000)

        
        console.log('livepeer url', livepeerURL)
        console.log(source);
	};



    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem>
            <VStack alignItems="flex-start" pr={10}>
              <UserCard/>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex direction="column">
            <Heading as='h2' size='xl' pb={30}>
    Talent Profile
  </Heading>
  <Heading as='h3' size='s' pb={10}>
    Customize Your Profile with a Personalized Video!
  </Heading>
  <Box>
  <video
          className="VideoInput_video"
          width="100%"
          controls
          src={video}
        />
  <Input type="file" id="livepeer-video" ref={inputRef} placeholder='Upload candidate video' onChange={changeHandler}/>
  {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
  <Button type="submit" onClick={handleSubmission} bg="linear-gradient(90deg, rgba(255,105,22,1) 35%, rgba(247,179,0,1) 100%)" mb={10}>Upload</Button>
  </Box>
 
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign="center" mb={10}>
                Proof-of-Skill Badges
              </Heading>
        <BadgeDisplay/>
      </Box>
    );
  }