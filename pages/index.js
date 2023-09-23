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
import { IoMailSharp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
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
          p={6}
          mb={6}
          display={{ md: 'flex' }}
          textAlign="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Box flexGrow={1} textAlign="center">
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
                src="/../public/images/perfil.jpeg"
                alt="Imagem de perfil"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
          <Box flexGrow={1} alignSelf={'center'}>
            <Heading as="h2" variant="page-title">
              Rodrigo Herzog
            </Heading>
            <p>Cientista da Computação</p>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Paragraph>
            Brasileiro, desenvolvedor fullstack com mais de 5 anos de
            experiência nas linguagens Javascript e Python, utilizando os
            frameworks React, React Native, NodeJs e Firebase.
          </Paragraph>
          <Box align="center" my={6}>
            <NextLink href="/projetos" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Meus projetos
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Formação acadêmica
          </Heading>
          <BioSection>
            <BioYear>2023</BioYear>
            Bacharelado em Ciências da Computação - Universidade Cruzeiro do
            Sul.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            React Native: Desenvolva APPs Nativos para Android e IOS - Cod3r.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Introdução a Gestão de Projetos - Fundação Bradesco.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Rust Programming Master Class: From Beginner to Expert - Nouman
            Azam.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Participação em eventos
          </Heading>
          <BioSection>
            <BioYear>2020</BioYear>
            2ª Next Level Week - Rocketseat.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            3ª IgniteLab - Rocketseat.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            13ª Next Level Week - Rocketseat.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Idiomas
          </Heading>
          <BioSection>Português - fluente.</BioSection>
          <BioSection>Inglês - intermediário.</BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Dados pessoais
          </Heading>
          <Paragraph>
            Nascido em 15 de dezembro de 1999, natural da Bahia, atualmente
            reside na cidade da Serra - ES.
          </Paragraph>
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
              <Link
                href="https://www.linkedin.com/in/rodrigohg-dev"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  rodrigohg-dev
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
export { getInitialProps } from '../components/chakra'
