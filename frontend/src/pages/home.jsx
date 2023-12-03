import { Box, Button, Heading, Image, Text, filter } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {FaFire} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from '../components/header'
import MainMovies from "../components/mainMovies";
import MainCartoons from "../components/mainCartoons";
import Footer from "../components/footer";


const Home = ({homeMovies}) => {


  return (
    <Box>
        <Header />
       <Box w={"100%"} minH={"85vh"}>
        <Box
          w={"100%"}
          position={"absolute"}
          display={"flex"}
          zIndex={"10"}
          left={"0%"}
          top={"0"}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            
            {homeMovies.slice(0, 5).map((item) => (
                
                <SwiperSlide key={item._id} className="swiper_Slide">
                  <Box 
                    w={{'2xl':"60%", base: '100%'}}
                    display={"flex"}
                    alignItems={"center"}
                    m={"auto"}
                    boxShadow='lg' rounded='md' 
                  >
                    <Image w={'100%'} h={'85vh'} visibility={'unset'} objectFit={'cover'} src={item.image} alt="image" className="photo"/>
                    <Box
                      left={{ base: "20px",md: '40px', '2xl': '22%' }}
                      position={"absolute"} zIndex={'999'}
                      top={"180px"}
                    >
                      <Box display={'flex'} alignItems={'center'} gap={'4px'} position={'relative'} zIndex={'999'}>
                        <FaFire color="#FFC30D" size={'33px'} />
                        <Text lineHeight={'40px'} letterSpacing={'2px'} fontSize={{base: '30px', md: '45px'}} fontWeight={'800'}>{item.type}</Text>
                      </Box>
                      <Heading
                        fontSize={{base: "40px" , xl: '50px'}} w={{base: '100%', md: '500px'}}
                        color={"#fff"}
                      >
                        {item.name}
                      </Heading>
                      <Heading
                        pt={'5px'}
                        fontSize={{ lg: "35px", base: "25px" }}
                       display={{base: 'none', sm: 'flex'}}
                          color={'#fff'}
                      >
                       Genre: <Text lineHeight={'48px'} letterSpacing={'3px'} color={"#FACC15"}>{item.genre}</Text>
                      </Heading>
                      <Link to={`/movie/movies/${item._id}`}>
                        <Button
                          mt={"15px"}
                          fontSize={"20px"}
                          w={"120px"}
                          h={"45px"}
                          className="btn"
                          // onClick={() => setId(item._id)}
                        >
                          Ko'rish
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </SwiperSlide>
            ))}
          </Swiper> 
        </Box>
    </Box>



    <Box>
      <MainMovies /> 
      <MainCartoons />
    </Box>
    <Box>
      <Footer />
    </Box>
    </Box>
  )
}

export default Home
