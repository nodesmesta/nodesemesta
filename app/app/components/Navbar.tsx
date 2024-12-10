'use client'

import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isClient) {
    // Fallback untuk server render
    return (
      <Flex
        as="nav"
        position="fixed"
        top={0}
        width="100%"
        padding={2}
        bg="transparent"
        color="white"
        zIndex={10}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box maxW="1200px" width="100%" mx="auto">
          <Flex justify="space-between" align="center">
            <Text>Loading...</Text>
          </Flex>
        </Box>
      </Flex>
    )
  }

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      width="100%"
      padding={2}
      bg={scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'}
      color={scrolled ? 'black' : 'white'}
      zIndex={10}
      justifyContent="space-between"
      alignItems="center"
      transition="background-color 0.3s ease"
      boxShadow={scrolled ? 'md' : 'none'}
    >
      <Box maxW="1200px" width="100%" mx="auto">
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Flex as="a" align="flex-start" _hover={{ textDecoration: 'none' }}>
              <Image
                src="/logo.png"
                alt="Logo"
                height="25px"
                width="auto"
                objectFit="contain"
              />
              <Text
                fontSize="lg"
                letterSpacing="wider"
                textTransform="uppercase"
                color={scrolled ? 'black' : 'white'}
                transition="color 0.3s ease"
                alignSelf="flex-end"
                ml="3px"
              >
                Nodesemesta
              </Text>
            </Flex>
          </Link>

          <Flex>
            <Button variant="link" colorScheme={scrolled ? 'black' : 'teal'} mr={4} fontSize="sm">
              About
            </Button>
            <Button variant="link" colorScheme={scrolled ? 'black' : 'teal'} mr={4} fontSize="sm">
              Services
            </Button>
            <Button variant="link" colorScheme={scrolled ? 'black' : 'teal'} fontSize="sm">
              Contact
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
