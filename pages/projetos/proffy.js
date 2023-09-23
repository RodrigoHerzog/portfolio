import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Grid,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projeto'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import proffywebsite1Img from '../../public/images/projetos/proffy_web_1.png'
import proffywebsite2Img from '../../public/images/projetos/proffy_web_2.png'
import proffywebsite3Img from '../../public/images/projetos/proffy_web_3.png'
import proffymobile1Img from '../../public/images/projetos/proffy_mobile_1.png'
import proffymobile2Img from '../../public/images/projetos/proffy_mobile_2.png'
import proffymobile3Img from '../../public/images/projetos/proffy_mobile_3.png'

const Projeto = () => (
  <Layout title="Proffy">
    <Container>
      <Title>
        Proffy <Badge>2020</Badge>
      </Title>
      <P>
        Solução para conectar alunos e professores, desenvolvido com o objetivo
        de facilitar o encontro e divulgação das aulas, aplicação web feita em
        em ReactJS, mobile em React Native e BackEnd em NodeJS com BD
        PostgreSQL, projeto realizado durante a Maratona Next Level Week #2,
        evento da Rocketseat.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/RodrigoHerzog/proffy/tree/master/proffy-web">
            Web <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href="https://github.com/RodrigoHerzog/proffy/tree/master/proffy-mobile"
            ml="8px"
          >
            Mobile <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href="https://github.com/RodrigoHerzog/proffy/tree/master/proffy-db"
            ml="8px"
          >
            Backend <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website / Mobile App</span>
        </ListItem>
        <ListItem mb="25px">
          <Meta>Stack</Meta>
          <span>React, React Native, NodeJS, PostgreSQL</span>
        </ListItem>
      </List>

      <Heading size="md" textAlign="center" mb={4}>
        Website
      </Heading>

      <WorkImage src={proffywebsite1Img} alt="Proffy website img 1" />

      <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
        <WorkImage src={proffywebsite2Img} alt="Proffy website img 2" />
        <WorkImage src={proffywebsite3Img} alt="Proffy website img 3" />
      </Grid>

      <Heading size="md" textAlign="center" mb={4}>
        Mobile App
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
        <WorkImage src={proffymobile1Img} alt="Proffy mobile app img 1" />
        <WorkImage src={proffymobile2Img} alt="Proffy mobile app img 2" />
        <WorkImage src={proffymobile3Img} alt="Proffy mobile app img 3" />
      </Grid>
    </Container>
  </Layout>
)

export default Projeto
export { getInitialProps } from '../../components/chakra'
