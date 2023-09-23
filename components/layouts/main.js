import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelCmdLoader from '../voxel-cmd-loader'

const LazyVoxelCmd = dynamic(() => import('../voxel-cmd'), {
  ssr: false,
  loading: () => <VoxelCmdLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfólio - Rodrigo Herzog" />
        <meta name="author" content="Rodrigo Herzog" />
        <link rel="shortcut icon" href="favicon.png" />
        <meta property="og:site_name" content="Rodrigo Herzog" />
        <meta name="og:title" content="Rodrigo Herzog" />
        <meta property="og:type" content="website" />
        <title>Rodrigo Herzog</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelCmd />

        {children}
      </Container>
    </Box>
  )
}

export default Main
