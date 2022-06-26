import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box px={40} py={20}>
        <Heading as='h2' size='xl' pb={40}>
    Benefits of using our Platform
  </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'For Recruiters'}
          text={
            'Whether you are a web3 company looking to hire full-time or a DAO looking for strong contributors, our platform allows you to quantitatively view candidates based on their talent ranking. Recruiting companies can also partner with our educational organizations to design and curate technical challenges for candidates to complete. As rewards for completing these challenges, candidates earn proof of skill badges which gives them a competitive edge in the recruiting process.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'For Candidates'}
          text={
            'Candidates have a platform to consolidate all the aspects of the professional identity scattered in the metaverse (GitHub, NFTs, Twitter, LinkedIn). Candidates have the opportunity to view their talent score based on their proof of skill badges and be provided a path to improving that score. Candidates can participate in sponsored challenges from hiring companies that would put them higher in the recruiting pool.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'For Educators'}
          text={
            'Educational organizations benefit by being provided the infrastructure to aggregate and mint their own proof-of-skill badges on our platform. In addition, they are rewarded when candidates who hold their proof of skill badges are hired. Educators strengthen the reputation of their curriculum by being ranked higher with the BlockFuse algorithm, thereby enticing more learners to take those courses.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}