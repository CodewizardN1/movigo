import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import {HiOutlineDownload} from 'react-icons/hi'
import {FaEye, } from 'react-icons/fa'
import Loading from '../components/loading';
import Header from '../components/header';
import ReactPlayer from 'react-player/youtube'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
import { api } from '../../api/api';
import Footer from '../components/footer';
const SingleDatas = () => {
  const [count, setCount] = useState(0);
  const [tab, setTab] = useState(true)
  const [data, setData] = useState(null)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const {id, category} = useParams()
 
  useEffect(() => {
    try {
      const getData = async () => {
        await axios.get(`${api}api/getId-${category}/${id}`).then((res) => {
          setData(res.data.project)
          setLoading(false)
        })
      }
      getData()
    } catch (error) {
      console.log(error);
    }
  },[id, category])
  return (
    <>
    {loading  ? <Loading /> : 
    <Box>
        <>
        <Box>
          <Box><Header /></Box>
          <Box minH={'100vh'} pb={'50px'} w={{'2xl':'60%', base: '90%', lg: '90%'}} m={'auto'} pt={'120px'}>   
          <Box>
            <Heading color={'white'} fontSize={{base: '30px', md: '45px'}}>{data.name}</Heading>
            <Box display={'flex'} alignItems={'center'} gap={'2rem'} flexDirection={{base: 'column', lg: 'row'}}>
              <Box pt={'30px'}>
                <Image objectFit={'cover'} w={'288px'} h={'384px'} borderRadius={'14px'} src={data.image} />
              </Box>
              <Box>
              <Box display={'flex'} alignItems={'center'} gap={'3rem'}>
                <Box color={'#9CA3AF'} display={'flex'} flexDirection={'column'} gap={'10px'} fontSize={'19px'}>
                  <Text>Year:</Text>
                  <Text>Country:</Text>
                  <Text>Genre:</Text>
                  <Text>Time:</Text>
                  <Text>Language:</Text>
                  <Text>Age:</Text>
                </Box>
                <Box display={'flex'} alignItems={'flex-start'} flexDirection={'column'}  gap={'10px'}>
                  <Text borderRadius={'5px'} p={'3px 12px'} bg={'#1F2937'} color={'white'} fontWeight={'400'}>{data.year}</Text>
                  <Text borderRadius={'5px'} p={'3px 12px'} bg={'#1F2937'} color={'white'} fontWeight={'400'}>{data.country}</Text>
                  <Text borderRadius={'5px'} p={'3px 12px'} bg={'#1F2937'} color={'white'} fontWeight={'400'}>{data.genre}</Text>
                  <Text borderRadius={'5px'} p={'3px 12px'} bg={'#1F2937'} color={'white'} fontWeight={'400'}>{data.countinuous}</Text>
                  <Text borderRadius={'5px'} p={'3px 12px'} bg={'#1F2937'} color={'white'} fontWeight={'400'}>{data.lang}</Text>
                  <Text borderRadius={'5px'} p={'3px 12px'} bg={'#1F2937'} color={'white'} fontWeight={'400'}>{data.age}</Text>
                </Box>
    
              </Box>
                <Text color={'white'} pt={'10px'} fontSize={'14px'} w={{'2xl': '590px', lg: '600px'}}>{data.description}</Text>
    
              </Box>
    
            </Box>
            <a>
            <Button mt={'20px'}>Donwload<HiOutlineDownload /></Button>
            </a>
    
            <Box pt={'30px'}>
              <Box display={'flex'} alignItems={'center'} gap={'12px'}>
                <Button onClick={() => setTab(true)} borderBottomRadius={'none'} fontSize={{base: '13px', md: '14px'}} w={'140px'} h={'40px'} bg={tab ? '#374151'  : '#1F2936'} _hover={''}>Watch {data.type}</Button>
                <Button onClick={() => setTab(false)} borderBottomRadius={'none'} fontSize={{base: '13px', md: '14px'}} w={'140px'} h={'40px'} bg={tab ? '#1F2936'  : '#374151'}  >Watch Trailer</Button>
              </Box>
              <Box>
              
              <Box className="iframeContainer">
                {tab ?
              <ReactPlayer playing={true}  id="myIframe" light="https://res.cloudinary.com/file-upload/image/upload/v1676240802/Group_1_loswzg.png"  controls url={data.video} /> : <ReactPlayer playing={true}  id="myIframe" light="https://res.cloudinary.com/file-upload/image/upload/v1676240802/Group_1_loswzg.png"  controls url={data.trailer} />
                }
               
              </Box>
              <Box w={'100%'} h={'6vh'} borderRadius={'14px'} bg={'#1F2937'} mt={'10px'}>
                  <Box display={'flex'} alignItems={'center'} minH={'6vh'} pl={'20px'}>
                      <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                        <Box bg={'#151A20'} w={'40px'} h={'40px'} display={'flex'} p={'2px'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'}><FaEye size={'27px'} color='white' /></Box>
                        <Text fontSize={'20px'} color={'white'}>{count}</Text>
                      </Box>
                  </Box>
              </Box>
              
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>

        <Box>
          <Footer />
        </Box>
        </>
    </Box>
   }
    
    </>
  )
}

export default SingleDatas
