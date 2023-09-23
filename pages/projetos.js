import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbProffy from '../public/images/projetos/proffy_banner.png'
import thumbRocketHelp from '../public/images/projetos/rockethelp_banner.png'
import thumbNutriFormando from '../public/images/projetos/nutriformando_banner.png'
import thumbUploadai from '../public/images/projetos/uploadai_banner.png'

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
              Solução para conectar alunos e professores, desenvolvido com o
              objetivo de facilitar o encontro e divulgação das aulas.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="rockethelp"
              title="RocketHelp"
              thumbnail={thumbRocketHelp}
            >
              Aplicativo desenvolvido com o objetivo de gerenciar solicitações
              de manutenção em dispositivos e máquinas para atender empresas.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="nutriformando"
              title="NutriFormando"
              thumbnail={thumbNutriFormando}
            >
              Aplicativo móvel desenvolvido com objetivo de auxiliar a população
              geral com alertas relacionados a alimentação.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="upload-ai"
              title="Upload.ai"
              thumbnail={thumbUploadai}
            >
              Projeto desenvolvido utilizando GPT 3.5 com a finalidade de
              otimizar o processo de criação de conteúdo para o YouTube.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projetos
