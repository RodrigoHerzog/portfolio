import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Não encontrado</Heading>
      <Text>A página que você está procurando não existe.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Voltar ao início</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
