import { Button, Container, Grid, HStack, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { AdminCreateProduct } from '../../../Redux/Action/ProductActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CreateProducts = () => {
    const [name, setname] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [category, setCategory] = useState('') 

    const [imgpre, setImgpre] = useState('')
    const [createdBy, setCreatedBy] = useState('')
    const [productImages, setProductImages] = useState({})
    // console.log(productImages)

    const dispatch=useDispatch()
    const navigate=useNavigate()


    const categories = ['Bedroom', 'Dining', 'Kitchen']


    const handleImages = (e,i) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if(reader.readyState===2){
                if(i===1){
                    setProductImages({...productImages,image1:reader.result})
                }
                if(i===2){
                    setProductImages({...productImages,image2:reader.result})
                }
                if(i===3){
                    setProductImages({...productImages,image3:reader.result})
                }
                if(i===4){
                    setProductImages({...productImages,image4:reader.result})
                }
                if(i===5){
                    setProductImages({...productImages,image5:reader.result})
                }
            }
           
        }
    }

    const createCourseHandler = async (e) => {
        e.preventDefault()
        // const formdata = new FormData()
        // formdata.append('name', name)
        // formdata.append('description', description)
        // formdata.append('createdBy', createdBy)
        // formdata.append('category', category)
        // formdata.append('file', img)
        dispatch(AdminCreateProduct(name, description, category, price, stock,productImages))

    }



  return (
    <HStack w={'100%'} >
        <Container py={'16'}  >
            <form onSubmit={createCourseHandler} >
                <Heading children='Create Product' textAlign={['center', 'left']} textTransform={'uppercase'} />
                <VStack m={'auto'} spacing={'8'} >
                    <Input
                         value={name} placeholder='enter name' type='text'
                        onChange={(e) => setname(e.target.value)}
                        focusBorderColor='yellow.500'
                    />
                    <Input
                         value={description} placeholder='enter description' type='text'
                        onChange={(e) => setDescription(e.target.value)}
                        focusBorderColor='yellow.500'
                    />
                    <Input
                         value={price} placeholder='enter price' type='number'
                        onChange={(e) => setPrice(e.target.value)}
                        focusBorderColor='yellow.500'
                    />
                    <Input
                         value={stock} placeholder='enter stock' type='number'
                        onChange={(e) => setStock(e.target.value)}
                        focusBorderColor='yellow.500'
                    />
                    <Select
                         value={category}
                        focusBorderColor='yellow.500'
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option >{'select category'}</option>
                        { 
                            categories.map((item) => (
                                <option  key={item} value={item}>{item}</option>
                            ))
                        }
                    </Select>
                    <Input
                        required type='file' focusBorderColor='yellow.500' accept='image/*'
                        onChange={(e) => handleImages(e,1)}                       
                    />
                    <Input
                        required type='file' focusBorderColor='yellow.500' accept='image/*'
                        onChange={(e) => handleImages(e,2)}                       
                    />
                    <Input
                        required type='file' focusBorderColor='yellow.500' accept='image/*'
                        onChange={(e) => handleImages(e,3)}                       
                    />
                    <Input
                        required type='file' focusBorderColor='yellow.500' accept='image/*'
                        onChange={(e) => handleImages(e,4)}                       
                    />
                    <Input
                        required type='file' focusBorderColor='yellow.500' accept='image/*'
                        onChange={(e) => handleImages(e,5)}                       
                    />
                    {/* <Input
                        required type='file'
                        focusBorderColor='yellow.500'
                        accept='image/*'
                        onChange={chnageImgHandler}
                        css={{
                            "&::file-selector-button": {
                                cursor: 'pointer',
                                width: '110%',
                                marginLeft: '-5%',
                                border: 'none',
                                height: '100%',
                                color: 'blue',
                                backgroundColor: 'white'
                            }
                        }}
                    /> */}
                    {/* {
                        imgpre && (
                            <Image src={imgpre} boxSize={'64'} objectFit={'contain'} />
                        )
                    } */}
                    <Button w={'full'} colorScheme={'purple'} type='submit' >
                        Create
                    </Button>
                </VStack>
            </form>
        </Container>
    </HStack>
  )
}

export default CreateProducts