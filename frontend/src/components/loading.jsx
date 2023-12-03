import React, { useEffect, useRef } from 'react'
import './loader.css'
import { Box } from '@chakra-ui/react'
import lottie from 'lottie-web'
const Loading = ({pending}) => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true, 
      autoplay: true, 
      path: "https://lottie.host/a20099ae-9ab6-49f7-ba10-115282ce2347/2Jn1DKDoH2.json", 
    });


    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <Box w={'100%'} h={pending ? '52.1vh' : '100vh'} bg={'#151A20'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box w={'200px'} h={'200px'} ref={lottieContainer}></Box>
    </Box>
  )
}

export default Loading
