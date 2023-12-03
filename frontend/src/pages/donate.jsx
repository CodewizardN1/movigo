import { Box, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import CopyToClipboard from 'react-copy-to-clipboard'

const Donate = () => {
    const [textToCopy, setTextToCopy] = useState('1111 1111 1111 1111');
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast()
  const handleCopy = () => {
    setIsCopied(true);
    toast({
        position: 'top-right',
        status: 'success',
        title: 'copy',
        description: 'text copied to clipboard',
        isClosable: true,
        duration: 2000
    })
  };
  return (
    <Box>
        <Header bg={'transparent'} />


        <Box pt={'9vh'} h={'86vh'}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'80vh'} flexDirection={'column'} gap={'20px'}>
                <Heading fontWeight={'800'}>Siz loyihani qollab quvvatlashingiz mumkin :)))</Heading>
                <Box w={'380px'} h={'76px'} bg={'#1F2937'} rounded={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontWeight={'600'} pr={'20px'} defaultValue={textToCopy} fontSize={{base: '20px', md :'40px'}}>1111 1111 1111 1111</Text>
                    <Box display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} mr={'-46px'} mb={'-30px'}>
                        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                            <button>copy</button>
                        </CopyToClipboard>
                    </Box>
                </Box>
                <Box w={'380px'} h={'76px'} bg={'#1F2937'} rounded={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontWeight={'600'} fontSize={{base: '20px', md :'35px'}}>Payme: Movigo Uz</Text>
                   
                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Box>
        <Footer />
    </Box>
  )
}

export default Donate
