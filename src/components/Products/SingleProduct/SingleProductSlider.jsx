import React, { useEffect, useState } from 'react';
import './SingleProductSlider.css';
import p1 from '../../../img/p1.jpg'
import p2 from '../../../img/p2.jpg'
import p3 from '../../../img/p3.jpg'
import p4 from '../../../img/p4.jpg'
import { Button, HStack, Img, VStack } from '@chakra-ui/react';
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";


const SingleProductSlider = ({productImgs}) => {
    const imgs=[
        {id:0,value:productImgs.image1.url},
        {id:1,value:productImgs.image2.url},
        {id:2,value:productImgs.image3.url},
        {id:3,value:productImgs.image4.url},
        {id:4,value:productImgs.image5.url},
      ]
      const [wordData,setWordData]=useState(imgs[0])
      const [val,setVal] = useState(0)

      const handleClick=(index)=>{
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
      }
      const handleNext = ()=>{
        let index = val < imgs.length -1 ? val +1 : val;
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
      }
      const handlePrevious = ()=>{
        let index = val <= imgs.length -1 && val > 0? val - 1 : val;
        setVal(index)
        const wordSlider=imgs[index];
        setWordData(wordSlider)
      }
  return (
    <VStack  w={'100%'} justifyContent={'center'} alignItems={'center'} >
        <HStack   w={'90%'} justifyContent={'center'} alignItems={'center'} >
            <Button  size={'sm'} colorScheme={'orange'} children={<IoIosArrowBack  />} onClick={handlePrevious} />
            <Img w={'80%'} src={wordData.value} aspectRatio={'4/5'} /> 
            <Button  size={'sm'} colorScheme={'orange'} children={<IoIosArrowForward  />} onClick={handleNext} />
        </HStack>
        <HStack  justifyContent={'center'} alignItems={'center'} >
            {imgs.map((data,i)=>
                <HStack  key={i} >
                    <Img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} aspectRatio={'3/3'} maxH={'70'} height="60" width="100" />
                </HStack>
            )}
        </HStack>
      
  </VStack>
  )
}

export default SingleProductSlider