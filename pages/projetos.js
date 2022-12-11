import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbProffy from '../public/images/projetos/proffy_banner.png'
import thumbFlashCarimbos from '../public/images/projetos/flashcarimbos_banner.png'

const Projetos = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projetos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="proffy" title="Proffy" thumbnail={thumbProffy}>
              Solução para conectar alunos e professores, facilitando o encontro
              e divulgação das aulas.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="flashcarimbos"
              title="Flash Carimbos"
              thumbnail={thumbFlashCarimbos}
            >
              Site desenvolvido para empresa...
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projetos
