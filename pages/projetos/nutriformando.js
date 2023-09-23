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
  <Layout title="NutriFormando">
    <Container>
      <Title>
        NutriFormando <Badge>2022</Badge>
      </Title>
      <P>
        Aplicativo móvel desenvolvido com objetivo de auxiliar a população geral
        com alertas relacionados a alimentação. O aplicativo fornece informações
        nutricionais com base no código de barras do produto, além de avisos
        gerais com base nas normativas da Anvisa (Agência Nacional de Vigilância
        Sanitária) e avisos personalizados de acordo com as recomendações
        listadas pelo usuário no cadastro. Realizado durante o Projeto
        Integrador Transdisciplinar em Ciência da Computação II.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/RodrigoHerzog/nutriformando">
            Mobile <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile App</span>
        </ListItem>
        <ListItem mb="25px">
          <Meta>Stack</Meta>
          <span>React Native, Expo, Native Base, Firebase</span>
        </ListItem>
      </List>

      <Heading size="md" textAlign="center" mb={4}>
        Mobile App
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
        <WorkImage
          src={`${assetPrefix}/images/projetos/nutriformando_1.jpg`}
          alt="NutriFormando mobile app img 1"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/nutriformando_2.jpg`}
          alt="NutriFormando mobile app img 2"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/nutriformando_3.jpg`}
          alt="NutriFormando mobile app img 3"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/nutriformando_4.jpg`}
          alt="NutriFormando mobile app img 4"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/nutriformando_5.jpg`}
          alt="NutriFormando mobile app img 5"
        />
        <WorkImage
          src={`${assetPrefix}/images/projetos/nutriformando_6.jpg`}
          alt="NutriFormando mobile app img 6"
        />
      </Grid>
    </Container>
  </Layout>
)

export default Projeto
export { getInitialProps } from '../../components/chakra'
