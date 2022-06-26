import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    chakra
  } from '@chakra-ui/react';
  import talent from "../../images/talent-profile.jpeg"
  
  export default function SocialProfileWithImage() {
    return (
      <Center py={6}>
        <Box
          
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={talent}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={10}>
            <Stack spacing={0} align={'center'} mb={5} >
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color="gray.800">
                Shannon Case
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600} color="gray.800">3</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Technical Skill Badges
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600} color="gray.800">2</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Non-Technical Skill Badges
                </Text>
                
              </Stack>
              
            </Stack>
            <chakra.p color={'gray.500'} pt={10}>
                Hi I'm Shannon! I'm an enthusiastic artist looking for my first role in web3. I've been getting into NFTs lately by designing the Blu3 DAO PFP collection. I would love to find a company that would like to invest in onboarding a web2 designer into web3. I'm interested in taking BlockFuse challenges to upskill and earn proof-of-skill badges!
              </chakra.p>
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('darkgrey')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Send Challenge
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }