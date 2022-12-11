import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/projeto'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projeto = () => (
  <Layout title="Proffy">
    <Container>
      <Title>
        Proffy <Badge>2020</Badge>
      </Title>
      <P>
        Solução para conectar alunos e professores, facilitando o encontro e
        divulgação das aulas, aplicação web feita em em ReactJS, mobile em React
        Native e BackEnd em NodeJS com BD PostgreSQL, desenvolvido durante a
        Maratona Next Level Week #2, projeto da Rocketseat.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/LiilSniper/proffy-web">
            Web <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://github.com/LiilSniper/proffy-mobile" ml="8px">
            Mobile <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://github.com/LiilSniper/proffy-db" ml="8px">
            DB <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem mb="25px">
          <Meta>Stack</Meta>
          <span>React, React Native, NodeJS, PostgreSQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projetos/proffy_banner.png" alt="Proffy" />
      <WorkImage src="/images/projetos/proffy_banner.png" alt="Proffy" />
      <WorkImage src="/images/projetos/proffy_banner.png" alt="Proffy" />
    </Container>
  </Layout>
)

export default Projeto
export { getServerSideProps } from '../../components/chakra'
