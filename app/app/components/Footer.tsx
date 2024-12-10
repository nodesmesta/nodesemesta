// app/components/Footer.tsx
import { Box, Text, Container } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="gray.800"
      color="white"
      py={4}
      position="relative"
      bottom={0}
      width="100%"
    >
      <Container maxW="container.lg" textAlign="center">
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Nodesemesta. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
