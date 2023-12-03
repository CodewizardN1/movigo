import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { AiOutlineHeart } from 'react-icons/ai'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const Header = ({bg}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const open = () => {
      setMenuOpen(true);
    };
  
    const close = () => {
      setMenuOpen(false);
    };
    useEffect(() => {
        // Add or remove a class to the body when the menu state changes
        if (menuOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        // Clean up the class when the component unmounts
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [menuOpen]);



    
  return (
    <Box className={'navbar'} px={{base: '5px', md: '40px'}} bg={bg ? 'transparent' : 'rgba(0,0,0, 0.4)'} position={'relative'} zIndex={'20'} left={{base: '0', lg: '0', '2xl': '20%', sm: '0%'}} w={{'2xl': '60%', base: '100%'}} m={'auto'} h={'9vh'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
            <Link to={'/'}>
                <Image transition={'all .3s'} _hover={{transform: "rotate(-2deg)"}} w={{md:'160px', base: '140px'}} src={logo} />
            </Link>
            <Box display={{md:'flex', base: 'none'}} color={'white'} gap={{lg:'30px', md: '24px'}} alignItems={'center'} justifyContent={'center'}  fontSize={'20px'} fontWeight={'500'}>
                <Link to={'/'} className='links'><Text>Asosiy</Text></Link>
                <Link to={'/all'} className='links'><Text>Barchasi</Text></Link>
                <Link to={'/allMovies'} className='links'><Text>Kinolar</Text></Link>
                <Link to={'/allCartoons'} className='links'><Text>Multfilmlar</Text></Link>
            </Box>
            {menuOpen && (
                <Box >
                <Box className='menu'>
                    <Box position={'absolute'} top={'20px'} left={'40px'}>
                        <Image src={logo} w={'170px'}/>
                    </Box>
                        <Box position={'absolute'} cursor={'pointer'} top={'40px'} right={'50px'}><CloseIcon color={'#EAB308'}  fontWeight={'900'} onClick={close} fontSize={'30px'} /></Box>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} minH={'100vh'}>
                        <Link className="text" top={'/'}><Text></Text>Main</Link>
                        <Link className="text" top={'/allMovies'}><Text></Text>All films</Link>
                        <Link className="text" top={'/movies'}><Text></Text>Movies</Link>
                        <Link className="text" top={'/cartoons'}><Text></Text>Cartoons</Link>
                    </Box>
                </Box>

                </Box>
            )}
            
            <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                <Link to={'/donate'}>
                <Button className='button' p={0}  color={'white'} transition={'.4s'} fontSize={{base: '15px', md:'18px'}} h={{md:'45px', base: '40px'}} _hover={{bg: '#FFC30D'}} fontWeight={'600'} w={{md:'130px', base: '120px'}} bg={'#151A20'} border={'1px solid #fff'} letterSpacing={'1px'}>Donate <AiOutlineHeart color='#F57070' /></Button>
                </Link>
                <Box display={{md:'none', base: 'flex'}} cursor={'pointer'}>
                <HamburgerIcon fontSize={'30px'} fontWeight={'800'} onClick={open} className="bars" />
            </Box>
            </Box>
        </Box>  
  )
}

export default Header
