import { Box, Button, FormControl, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Header from '../../components/header'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from 'axios'
import { api } from '../../../api/api'

const Dashboard = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [values, setValues] = useState({name: '', img: '', desc: '', year: '', country: '', lang: '', age: '', video: '', trailer: '', type: '', genre:'',countinuous: ''})
    const [all, setAll] = useState('api/create-movies/new')
    const [admin, setAdmin] = useState(false);
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const toast = useToast()
    const handleEnter = (e) => {
        e.preventDefault();
        if(username === 'tony' && pass === '12345678'){
            setAdmin(false)
            toast({
                position: 'top-right',
                title: 'Admin',
                description: "You entered",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        } else{
            toast({
                position: 'top-right',
                title: 'Admin',
                description: "You entered wrong data",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }
    }
    const handlePost = () => {
        try {
            axios.post(`${api}${all}`, {
                'name': values.name,
                'image': values.img,
                'description': values.desc,
                'year': values.year,
                'country': values.country,
                'lang': values.lang,
                'age': values.age,
                'video': values.video,
                'trailer': values.trailer,
                'countinuous': values.countinuous,
                'type': values.type,
                'genre': values.genre,
            }).then((res) => {
                console.log(res.data);
                alert('maluimot saqlandi')
            }) 
        } catch (error) {
            alert('hato')
        }
    }
  return (
    <Box>
        {admin ? <Box w={'100%'} minH={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box w={{base: '90%', md: '450px'}} m={'auto'} h={'200px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <form onSubmit={handleEnter}>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} focusBorderColor='#EAB308' w={'400px'} placeholder='username' mb={'20px'} />
                <InputGroup>
                    <Input onChange={(e) => setPass(e.target.value)} value={pass} focusBorderColor='#EAB308'
                        pr='4.5rem'
                        type={show ? 'number' : 'password'}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' bg={'transparent'} pr={0} _hover={''} _active={''} onClick={handleClick}>
                        {show ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button type='submit' onClick={handleEnter} mt={'20px'} w={'400px'}>Enter</Button>
            </form>
        </Box>
      </Box> : 


      <Box w={'100%'} h={'100vh'} bg={'#151A20'}>
         <Box h={'9vh'}>
            <Header />
         </Box>
         <Box pt={'30px'} w={{'2xl': '60%', base: '90%'}} m={'auto'}>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Tab onClick={() => setAll('api/create-movies/new')}>All films</Tab>
                    <Tab onClick={() => setAll('api/create-cardMovies/new')}>Movies</Tab>
                    <Tab onClick={() => setAll('api/create-cardCartoons/new')}>Cartoons</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box>
                            <form onSubmit={function(e){
                                e.preventDefault();
                                handlePost()
                            }}>
                            <Input required placeholder='name' onChange={(e) => setValues({...values, name: e.target.value})} value={values.name}></Input>
                            <Input required placeholder='img' onChange={(e) => setValues({...values, img: e.target.value})} value={values.img}></Input>
                            <Input required placeholder='desc' onChange={(e) => setValues({...values, desc: e.target.value})} value={values.desc}></Input>
                            <Input required placeholder='year' onChange={(e) => setValues({...values, year: e.target.value})} value={values.year}></Input>
                            <Input required placeholder='country' onChange={(e) => setValues({...values, country: e.target.value})} value={values.country}></Input>
                            <Input required placeholder='lang' onChange={(e) => setValues({...values, lang: e.target.value})} value={values.lang}></Input>
                            <Input required placeholder='age' onChange={(e) => setValues({...values, age: e.target.value})} value={values.age}></Input>
                            <Input required placeholder='video' onChange={(e) => setValues({...values, video: e.target.value})} value={values.video}></Input>
                            <Input required placeholder='trailer' onChange={(e) => setValues({...values, trailer: e.target.value})} value={values.trailer}></Input>
                            <Input required placeholder='type' onChange={(e) => setValues({...values, type: e.target.value})} value={values.type}></Input>
                            <Input required placeholder='genre' onChange={(e) => setValues({...values, genre: e.target.value})} value={values.genre}></Input>
                            <Input required placeholder='countinuous' onChange={(e) => setValues({...values, countinuous: e.target.value})} value={values.countinuous}></Input>
                            <button type='submit' onClick={handlePost}>send</button>
                            </form>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                         <Box>
                            <FormControl onSubmit={function(e){
                                e.preventDefault();
                                handlePost()
                            }}>
                            <Input placeholder='name' onChange={(e) => setValues({...values, name: e.target.value})} value={values.name}></Input>
                            <Input placeholder='img' onChange={(e) => setValues({...values, img: e.target.value})} value={values.img}></Input>
                            <Input placeholder='desc' onChange={(e) => setValues({...values, desc: e.target.value})} value={values.desc}></Input>
                            <Input placeholder='year' onChange={(e) => setValues({...values, year: e.target.value})} value={values.year}></Input>
                            <Input placeholder='country' onChange={(e) => setValues({...values, country: e.target.value})} value={values.country}></Input>
                            <Input placeholder='lang' onChange={(e) => setValues({...values, lang: e.target.value})} value={values.lang}></Input>
                            <Input placeholder='age' onChange={(e) => setValues({...values, age: e.target.value})} value={values.age}></Input>
                            <Input placeholder='video' onChange={(e) => setValues({...values, video: e.target.value})} value={values.video}></Input>
                            <Input placeholder='trailer' onChange={(e) => setValues({...values, trailer: e.target.value})} value={values.trailer}></Input>
                            <Input placeholder='type' onChange={(e) => setValues({...values, type: e.target.value})} value={values.type}></Input>
                            <Input placeholder='genre' onChange={(e) => setValues({...values, genre: e.target.value})} value={values.genre}></Input>
                            <Input placeholder='countinuous' onChange={(e) => setValues({...values, countinuous: e.target.value})} value={values.countinuous}></Input>
                            <button type='submit' onClick={handlePost}>send</button>
                            </FormControl>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                         <Box>
                            <FormControl onSubmit={function(e){
                                e.preventDefault();
                                handlePost()
                            }}>
                            <Input placeholder='name' onChange={(e) => setValues({...values, name: e.target.value})} value={values.name}></Input>
                            <Input placeholder='img' onChange={(e) => setValues({...values, img: e.target.value})} value={values.img}></Input>
                            <Input placeholder='desc' onChange={(e) => setValues({...values, desc: e.target.value})} value={values.desc}></Input>
                            <Input placeholder='year' onChange={(e) => setValues({...values, year: e.target.value})} value={values.year}></Input>
                            <Input placeholder='country' onChange={(e) => setValues({...values, country: e.target.value})} value={values.country}></Input>
                            <Input placeholder='lang' onChange={(e) => setValues({...values, lang: e.target.value})} value={values.lang}></Input>
                            <Input placeholder='age' onChange={(e) => setValues({...values, age: e.target.value})} value={values.age}></Input>
                            <Input placeholder='video' onChange={(e) => setValues({...values, video: e.target.value})} value={values.video}></Input>
                            <Input placeholder='trailer' onChange={(e) => setValues({...values, trailer: e.target.value})} value={values.trailer}></Input>
                            <Input placeholder='type' onChange={(e) => setValues({...values, type: e.target.value})} value={values.type}></Input>
                            <Input placeholder='genre' onChange={(e) => setValues({...values, genre: e.target.value})} value={values.genre}></Input>
                            <Input placeholder='countinuous' onChange={(e) => setValues({...values, countinuous: e.target.value})} value={values.countinuous}></Input>
                            <button type='submit' onClick={handlePost}>send</button>
                            </FormControl>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
         </Box>
      </Box>
      }
      
    </Box>
  )
}

export default Dashboard
