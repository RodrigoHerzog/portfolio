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
import uploadai1Img from '../../public/images/projetos/uploadai_1.png'
import uploadai2Img from '../../public/images/projetos/uploadai_2.png'

const Projeto = () => (
  <Layout title="Upload.ai">
    <Container>
      <Title>
        Upload.ai <Badge>2023</Badge>
      </Title>
      <P>
        Projeto desenvolvido utilizando GPT 3.5 com a finalidade de otimizar o
        processo de criação de conteúdo para o YouTube. Realizado durante a
        décima terceira edição do Next Level Week, evento da RocketSeat,
        ministrado por Diogo Fernandes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/RodrigoHerzog/upload.ai/tree/main/upload-ai-web">
            Web <ExternalLinkIcon mx="2px" />
          </Link>
          <Link
            href="https://github.com/RodrigoHerzog/upload.ai/tree/main/upload-ai-server"
            ml="8px"
          >
            Backend <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem mb="25px">
          <Meta>Stack</Meta>
          <span>React, Next, Tailwind, GPT 3.5</span>
        </ListItem>
      </List>

      <Heading size="md" textAlign="center" mb={4}>
        Website
      </Heading>

      <Grid templateColumns="repeat(1, 1fr)" gap={4} mb={4}>
        <WorkImage src={uploadai1Img} alt="Upload.ai website img 1" />
        <WorkImage src={uploadai2Img} alt="Upload.ai website img 2" />
      </Grid>
    </Container>
  </Layout>
)

export default Projeto
export { getInitialProps } from '../../components/chakra'
