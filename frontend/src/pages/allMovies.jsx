import { Box, Button, Image, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Header from '../components/header'
import { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import { api } from '../../api/api';
import Loading from '../components/loading';
import Footer from '../components/footer'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { HiFilm } from 'react-icons/hi';

const AllMovies = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [pending, setPending] = useState(false)

  const handleNextTab = () => {
    setCurrentTab((prevTab) => (prevTab === 1 ? 0 : prevTab + 1));
    setPending(true)
    setTimeout(() => {
      setPending(false)
    }, 3000);
    window.scroll(0, 0)
  };

  const handleTabClick = (index) => {
    if (index === currentTab) return;
    setCurrentTab(index);
    setPending(true)
    setTimeout(() => {
      setPending(false)
    }, 3000);
    window.scroll(0, 0)
  };
  

  useEffect(() => {
    window.scroll(0, 0)
    axios.get(`${api}api/get-cardMovies`).then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <>
    {loading  ? <Loading /> :
    <Box>
      <Box h={'9vh'}>
        <Header />
      </Box>
      <Box w={'100%'} minH={'77vh'} bg={'#151A20'}>
        <Box w={{'2xl': '60%', base: '90%'}} m={'auto'}>
          <Tabs isLazy index={currentTab}>
            
            <TabPanels>
              <TabPanel>

                <Box py={'30px'} display={'flex'} alignItems={'center'} w={'100%'} justifyContent={'space-between'}>
                  <Box><Text fontSize={'30px'} fontWeight={'600'}>Movies</Text></Box>
                  <Box >
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Filter
                    </MenuButton>
                    <MenuList >
                      <MenuItem>Views</MenuItem>
                      <MenuItem>Likes</MenuItem>
                    </MenuList>
                  </Menu>
                  </Box>
                </Box>
                {pending ? <Loading pending={pending} /> : <Box>
                <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'center'} gap={'1.5rem'}>
                  {data.slice(0, 12).map((movies) => (
                    <Box key={movies._id} display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                      <Image className='image' src={movies.image} w={'240px'} h={'320px'} rounded={'md'} transition={'.4s'} transform={{scale: '102'}}/>
                      <Text fontSize={'16px'} color={'#fff'} pt={'5px'}>{movies.name}</Text>
                      <Text fontSize={'16px'} color={'#6B7280'}>{movies.genre}</Text>
                    </Box>
                  ))}
                </Box>

                </Box>}
              </TabPanel>
              <TabPanel>
                <Box py={'30px'} display={'flex'} alignItems={'center'} w={'100%'} justifyContent={'space-between'}>
                    <Box><Text fontSize={'30px'} fontWeight={'600'}>Movies</Text></Box>
                    <Box >
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Filter
                      </MenuButton>
                      <MenuList >
                        <MenuItem>Views</MenuItem>
                        <MenuItem>Likes</MenuItem>
                      </MenuList>
                    </Menu>
                    </Box>
                  </Box>
                {pending ? <Loading pending={pending}/> : 
                <Box>
                  <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'center'} gap={'1.5rem'}>
                    {data.map.length > 12 ? <Box>
                        {data.slice(12, 24).map((movies) => (
                      <Box key={movies._id} display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                        <Image src={movies.image} w={'240px'} h={'320px'} rounded={'md'} transition={'.4s'} transform={{scale: '102'}}/>
                        <Text fontSize={'16px'} color={'#fff'} pt={'5px'}>{movies.name}</Text>
                        <Text fontSize={'16px'} color={'#6B7280'}>{movies.genre}</Text>
                      </Box>
                    ))}
                    </Box> : <Box h={'52vh'} color={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                            <HiFilm size={'70px'} color='#EAB308' /> 
                            <Text fontSize={'20px'} fontWeight={'600'}>There is no enough movie :(</Text> 
                        </Box>
                        </Box>}
                    
                  </Box>
              </Box>
              }
              </TabPanel>
            </TabPanels>

              <Box pt={'20px'} pb={'60px'} justifyContent={'center'} display={'flex'} alignItems={'center'} gap={'7px'}>
                <Tab className='tab' bg={'#CA8A04'} _selected={{bg: '#A16207'}} onClick={() => handleTabClick(0)}>1</Tab>
                <Tab className='tab' bg={'#CA8A04'}  _selected={{bg: '#A16207'}} onClick={() => handleTabClick(1)}>2</Tab>
                <button className='buttonallMovies' onClick={handleNextTab}><FaChevronRight size={'10px'} /></button>
              </Box>

          </Tabs>
        </Box>
      </Box> 

      <Box>
        <Footer />
      </Box>
    </Box>
    }
    
    </>
  )
}

export default AllMovies
