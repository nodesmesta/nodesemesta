// app/components/Header.tsx
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box
      position="relative"
      height="100vh"
      backgroundImage="url('/images/header-image.jpg')" // Pastikan gambar ada di folder /public/images/
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      {/* Konten di dalam header */}
      <Container textAlign="center" maxW="container.md">
        <Heading as="h1" size="4xl" mb={4}>
          Selamat datang di Website Kami
        </Heading>
        <Text fontSize="xl" mb={6}>
          Kami menawarkan berbagai produk dan layanan terbaik untuk Anda.
        </Text>
        <Button colorScheme="teal" size="lg">
          Mulai Sekarang
        </Button>
      </Container>
    </Box>
  )
}
