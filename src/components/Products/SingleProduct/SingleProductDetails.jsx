import { Box, Button, ButtonGroup, Divider, HStack, Heading, Icon, IconButton, Input, Link, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { Component, useEffect, useState }  from 'react'
import { IoMdCheckmarkCircle,IoMdHeartEmpty,IoIosGitCompare } from "react-icons/io";
import { FaPlus,FaMinus,FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";

import Slider  from 'react-slick'
import p1 from '../../../img/p1.jpg'
import p2 from '../../../img/p2.jpg'
import p3 from '../../../img/p3.jpg'
import p4 from '../../../img/p4.jpg'
import SingleProductSlider from './SingleProductSlider';
import SingleProductReview from './SingleProductReview';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { Navigate, useNavigate } from 'react-router-dom';
import { CreateProductReview, LoadAllProductReviews } from '../../../Redux/Action/ProductActions';
import { addItemsToCart } from '../../../Redux/Action/CartActions';
import { addItemsToWishlist } from '../../../Redux/Action/wishlistActions';

const SingleProductDetails = () => {

  const [rating,setUserRating]=useState(0)
  const [comment,setUserComment]=useState('')
  const [qty,setqty]=useState(1)

  const dispatch=useDispatch()
  const navigate=useNavigate() 


  const { SignleProduct,ProductReviews, loading } = useSelector(
		state => state.productContainer
	);

if(SignleProduct){
  const stock=SignleProduct.stock;

  var increamentQty=()=>{
    if(stock<=qty) return
    const newQty=qty+1;
    setqty(newQty)
  }
}

const decreamentQty=()=>{
  if(1>=qty) return
  const newQty=qty-1;
  setqty(newQty)
}

  const changeRating = (newRating) => {
    setUserRating(newRating);
    // You can perform additional actions here, like submitting the rating to a server.
};

  const reviewHadler=async (productId)=>{
   await dispatch(CreateProductReview(productId, comment, rating))
   await dispatch(LoadAllProductReviews(productId))

}

const addToCartHandler=async (id,quantity)=>{
   await dispatch(addItemsToCart(id,quantity))
   navigate('/cart') 
}

const addToWishlistHandler=async (id,quantity)=>{
  await dispatch(addItemsToWishlist(id,quantity))
  navigate('/wishlist') 
}

  useEffect(()=>{
  if(SignleProduct){

    dispatch(LoadAllProductReviews(SignleProduct._id))
  }
  },[dispatch]) 
  
  return (
    <>
    {
      SignleProduct && SignleProduct.name? (

        <Box w={'100%'} >
            <Stack p={'6'} w={'100%'} direction={{base:'column',md:'column',lg:'row'}} alignItems={'center'} justifyContent={{base:'space-evenly',md:'space-evenly',lg:'center'}}>

                {/* for slider */}
                <Box w={{base:'100%',md:'100%',lg:'50%'}} >              
                  <SingleProductSlider productImgs={SignleProduct.productImages}/>
                </Box>


                {/* product details */}
                <VStack w={{base:'100%',md:'100%',lg:'50%'}} alignItems={'flex-start'} spacing={'6'} p={'4'} >
                    <Heading children={SignleProduct.name} />
                    <Text children={`Rs - ${SignleProduct.price}`} />
                    <HStack   justifyContent={'center'} alignItems={'center'} >
                        <Icon boxSize={'10'}  >
							            <IoMdCheckmarkCircle color={SignleProduct.stock>=1?'green':'red'}/>
						            </Icon>
							          {/* <IoMdCheckmarkCircle  size={'2vmax'} color={SignleProduct.stock>=1?'green':'red'} /> */}
                        <Text children={SignleProduct.stock>=1?'In Stock':'Out Of Stock'} />
                    </HStack>    	
                    <Text children={`
                        Up branch to easily missed by do. Admiration considered acceptance too led one melancholy
                        expression. Are will took form the nor true. Winding enjoyed minuter her letters evident
                        use eat colonel. He attacks observe mr cottage inquiry am examine gravity. Are dear but
                        near left was.
                        `} 
                    />

                    <HStack>
                        <ButtonGroup size='sm' isAttached variant='outline'>                       
                            <IconButton onClick={()=>decreamentQty()} icon={ <FaMinus /> } />
                            <Button _readOnly={true} children={qty} />
                            <IconButton onClick={()=>increamentQty()} icon={<FaPlus />} />
                        </ButtonGroup>
                        <Button onClick={()=>addToCartHandler(SignleProduct._id,qty)}  variant={'solid'} colorScheme={'orange'} children={'Add To Cart'} />                                                
                    </HStack>

                    <Divider orientation='horizontal' />

                    <HStack alignItems={'center'} >
                        {/* <Text children={'Share:'} /> */}
                        <Link>
                            <Button fontSize={{base:'3.5vmax',md:'2vmax'}} variant={'link'} colorScheme={'orange'} children={<FaFacebookF />}  />
                        </Link>
                        <Link>
                            <Button fontSize={{base:'3.5vmax',md:'2vmax'}} variant={'link'} colorScheme={'orange'} children={<FaTwitter />}  />
                        </Link>
                        <Link>
                            <Button fontSize={{base:'3.5vmax',md:'2vmax'}} variant={'link'} colorScheme={'orange'} children={<FaLinkedin />}  />
                        </Link>
                        <Link>
                            <Button fontSize={{base:'3.5vmax',md:'2vmax'}} variant={'link'} colorScheme={'orange'} children={<FaInstagram />}  />
                        </Link>
                    </HStack>

                    <Divider orientation='horizontal' />

                    <HStack>                        
                        <Button fontSize={{base:'3.5vmax',md:'2vmax'}} onClick={()=>addToWishlistHandler(SignleProduct._id,qty)}  variant={'link'} color={'#db6a2c'} children={<IoMdHeartEmpty />}  />    
                    		<Button fontSize={{base:'3.5vmax',md:'2vmax'}} children={<IoIosGitCompare  />} variant={'link'} color={'#db6a2c'} />

                        {/* <Button size={'lg'} variant={'ghost'} colorScheme={'orange'} children={<IoIosGitCompare />}  />                    */}
                    </HStack>
                   
                </VStack>
            </Stack>

            {/* tabs of product */}
            {/* <Box border={'1px solid red'} w={'80%'} m={'auto'}>
              <Tabs isFitted  variant='enclosed'>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Additional information</Tab>
                  <Tab>Reviews (1)</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Text children={`
                        Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income.
                        Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming 
                        object seemed put did admire figure. Principles travelling frequently far delightful its especially
                        acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable
                        continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will
                        up able in both do sing.
                      `} 
                    />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box> */}


            {/* user Reviews product */}
            <VStack spacing={'8'}  >
              <Heading textAlign={'center'} children={'Reviews '} />
              <VStack p={'1vmax'} w={'90%'} m={'auto'}  >
           
                <StarRatings
                  rating={rating}
                  changeRating={changeRating}
                  numberOfStars={5}
                  name='rating' 
                  starRatedColor={'orange'} 
                  starHoverColor={'orange'}
                  starEmptyColor={'whiteAlpha.200'} 
                  starDimension="30px" 
                  starSpacing="15px" 
                />
                <Textarea borderColor={'#db6a2c'} onChange={(e)=>setUserComment(e.target.value)} value={comment} role='3' cols={'3'} placeholder='Give your Feedback here' />
                <Button isLoading={loading} onClick={()=>reviewHadler(SignleProduct._id)} variant={'solid'} colorScheme={'orange'} children={'Your Review'} />

              </VStack>
              {
               ProductReviews && ProductReviews.Reviews.map((item)=>(

                  <SingleProductReview  avatar={item.avatar} name={item.name} comment={item.comment} rating={item.rating} />
                ))
              }
              <SingleProductReview />
            </VStack>




        </Box>
      ):(
        <Navigate to={'/'} />
      )
    }
    </>
  )
}

export default SingleProductDetails