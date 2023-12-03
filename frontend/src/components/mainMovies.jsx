import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from 'axios'
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const MainMovies = () => {
  const navigate = useNavigate()

const [data, setData] = useState([])
useEffect(() => {
  axios.get(`${api}api/get-cardMovies`).then((res) => {
    setData(res.data)
  })
}, [])

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";j  
  } else {
    return str;
  }
};
const swiperRef = useRef(null)

  return (
    <Box
      w={{ "2xl": "60%", base: "90%" }}
      
      pt={"90px"}
      h={"58vh"}
      m={"auto"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontWeight={"600"} fontSize={"35px"} color={"white"}>
            Movies
          </Text>
        </Box>
        <Box display={{base: 'none', md: 'flex'}}>
          <Link to={'/allMovies'}>
            <Button
              h={"45px"}
              w={"130px"}
              border={"1px solid #374151"}
              bg={"#1F2937"}
              borderRadius={"11px"}
              display={{md:'flex', base: 'none'}} alignItems={'center'} justifyContent={'center'}
            >
              Barchasi  
              <BsChevronRight />
            </Button>
          </Link>
        </Box>
      </Box>
      <Box pt={"40px"} display={'flex'} alignItems={'center'}>
        
        <Swiper
          style={{ minHeight: "370px" }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            290: {
              slidesPerView: 1.3,
              navigation: false,
            },
            300: {
              slidesPerView: 1.4,
              navigation: false
            },
            340: {
              slidesPerView: 1.5,
            },
            360: {
              slidesPerView: 1.6,
            },
            400: {
              slidesPerView: 1.75,
            },
            440: {
              slidesPerView: 1.9,
            },
            480: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 2.2,
            },
            540: {
              slidesPerView: 2.35,
            },
            580: {
              slidesPerView: 2.55,
            },
            620: {
              slidesPerView: 2.75,
            },
            660: {
              slidesPerView: 2.9,
            },
            700: {
              slidesPerView: 3.1,
            },
            768: {
              slidesPerView: 3.25,
            },
            800: {
              slidesPerView: 3.45,
            },
            850: {
              slidesPerView: 3.6,
            },
            900: {
              slidesPerView: 3.9,
            },
            950: {
              slidesPerView: 4.25,
            },
            1080: {
              slidesPerView: 4.75,
            },
          }}
          spaceBetween={10}
          slidesPerView={4.5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
        }}
          className="swiper2"
        >
          {data.map((item) => (
            <Box key={item._id}>
              <SwiperSlide style={{marginTop: '20px'}}>
                <Box>
                  <Link to={`/movie/cardMovies/${item._id}`}>
                    <Image
                      className="image"
                      h={{md:"320px", base: '290px'}}
                      w={"224px"}
                      src={item.image}
                      borderRadius={'6px'}
                    />
                  </Link>
                </Box>
                  <Text
                    fontSize={{md:"18px", base: '14px'}}
                    lineHeight={"25px"}
                    letterSpacing={"1px"}
                    pt={"5px"}
                  >
                    {truncateString(item?.name, 16)}{" "}
                  </Text>
                  <Text
                    fontSize={{md:"18px", base: '14px'}}
                    lineHeight={"12px"}
                    color={"#686F7C"}
                    pt={"5px"}
                  >
                    {truncateString(item?.genre, 20)}{" "}
                  </Text>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
        
      </Box>
    </Box>
  );
};

export default MainMovies;
