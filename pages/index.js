import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Image from 'next/image'
import { IoMailSharp, IoLogoGithub } from 'react-icons/io5'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Olá, sou um desenvolvedor fullstack!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rodrigo Herzog
            </Heading>
            <p>Desenvolvedor Fullstack</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/rodrigo.jpg"
                alt="Imagem de perfil"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projetos
          </Heading>
          <Paragraph>
            Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre
            mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim
            Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre
            mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim Sobre mim.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projetos" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Meu portfólio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biografia
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Nascido em Teixeira de Freitas, Bahia, Brasil.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Bacharelado em ciências da computação pela Universidade Cruzeiro do
            Sul.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>Filmes, músicas, jogos... tururu........</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contato
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/RodrigoHerzog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @RodrigoHerzog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:rodrigo.h.g.dev@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMailSharp />}
                >
                  rodrigo.h.g.dev@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
