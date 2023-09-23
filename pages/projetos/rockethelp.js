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
import { assetPrefix } from '../../next.config'

const Projeto = () => (
  <Layout title="RocketHelp">
    <Container>
      <Title>
        RocketHelp <Badge>2022</Badge>
      </Title>
      <P>
        Aplicativo desenvolvido com o objetivo de gerenciar solicitações de
        manutenção em dispositivos e máquinas para atender empresas. Realizado
        durante a terceira edição do IgniteLab, evento da RocketSeat, ministrado
        por Rodrigo Golçalves.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/RodrigoHerzog/rockethelp">
            Mobile <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile App</span>
        </ListItem>
        <ListItem mb="25px">
          <Meta>Stack</Meta>
          <span>React Native, Expo Bare Workflow, Native Base, Firebase</span>
        </ListItem>
      </List>

      <Heading size="md" textAlign="center" mb={4}>
        Mobile App
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
        <WorkImage
          src={`${assetPrefix}/images/projetos/rockethelp_1.png`}
          alt="RocketHelp mobile app img 1"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/rockethelp_2.png`}
          alt="RocketHelp mobile app img 2"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/rockethelp_3.png`}
          alt="RocketHelp mobile app img 3"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/rockethelp_4.png`}
          alt="RocketHelp mobile app img 4"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/rockethelp_5.png`}
          alt="RocketHelp mobile app img 5"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/rockethelp_6.png`}
          alt="RocketHelp mobile app img 6"
        />
      </Grid>
    </Container>
  </Layout>
)

export default Projeto
export { getInitialProps } from '../../components/chakra'
