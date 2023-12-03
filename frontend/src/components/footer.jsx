import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <Box h={'14vh'} w={'100%'} bg={'#1E242C'}>
        <Box w={{'2xl':'60%', md: '90%', base: '90%'}} minH={'14vh'} m={'auto'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box><Image cursor={'pointer'} src={logo} w={{md:'160px', base: '120px'}} /></Box>
            <Box fontSize={'15px'} display={{base: 'none', lg: 'flex'}} color={'#89909B'}>©️ 2023, movigo.uz, Barcha huquqlar himoyalangan</Box>
            <Box className='footer' flexWrap={'wrap'} display={'flex'} alignItems={'center'} gap={'8px'}>
                <a href="https://t.me/fullstacck"><Text color={'#fff'} _hover={{color: '#89909B'}} fontSize={'15px'} fontWeight={'600'}>Technical services</Text></a>
                <a href="https://t.me/fullstacck"><Text color={'#fff'} _hover={{color: '#89909B'}} fontSize={'15px'} fontWeight={'600'}>Advertisement</Text></a>
            </Box>
        </Box>
    </Box>
  )
  }

export default Footer
