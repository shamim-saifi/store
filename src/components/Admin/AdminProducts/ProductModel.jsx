import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const ProductModel = ({ isOpen, onClose, deleteButtonHandler, addLectureHandler, _id, lecture = [], courseTitle, loading }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [video, setVideo] = useState('')
    const [videopre, setVideopre] = useState('')

    const chnageVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setVideopre(reader.result)
            setVideo(file)
        }
    }

    const closeHandler = () => {
        setTitle('')
        setDescription('')
        setVideo('')
        setVideopre('')
        onClose()
    }

    
  return (
<Modal isOpen={isOpen} size={'full'} onClose={closeHandler} scrollBehavior={'outside'}>
    <ModalOverlay /> 
    <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={closeHandler} />
        <ModalBody p={'16'}>
            <Grid templateColumns={['1fr', '3fr 1fr']}>
                <Box px={['0', '16']} >
                    <Box my={'5'}>
                        <Heading children='Coursetitle' />
                        <Heading children='id' size={'sm'} opacity={'.6'} />
                    </Box>
                    <Heading children='Lecture' size={'lg'} />

                    {
                        lecture.map((item, i) => (
                            <VideoCard
                                key={i}
                                title={item.title}
                                description={item.description}
                                num={i + 1}
                                lectureId={item._id}
                                courseId={_id}
                                deleteButtonHandler={deleteButtonHandler}
                                isLoading={loading}
                            />
                        ))
                    }

                </Box>
                <Box>
                    <form onSubmit={(e) => addLectureHandler(e, title, description, video, _id)}>
                        <VStack>
                            <Heading children='add lecture' size={'md'} textTransform={'uppercase'} />
                            <Input
                                required value={title} placeholder='enter title' type='text'
                                onChange={(e) => setTitle(e.target.value)}
                                focusBorderColor='yellow.500'
                            />
                            <Input
                                required value={description} placeholder='enter description' type='text'
                                onChange={(e) => setDescription(e.target.value)}
                                focusBorderColor='yellow.500'
                            />
                            <Input
                                required type='file'
                                focusBorderColor='yellow.500'
                                accept='video/mp4'
                                onChange={chnageVideoHandler}
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
                            />
                            {
                                videopre && (
                                    <video src={videopre} controls controlsList='nodownload' />
                                )
                            }
                            <Button colorScheme={'purple'} type='submit' w={'full'} isLoading={loading}>
                                Upload
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Grid>
        </ModalBody>
        <ModalFooter>
            <Button onClick={closeHandler}>
                close
            </Button>
        </ModalFooter>
    </ModalContent>
</Modal>
  )
}

export default ProductModel

function VideoCard({ title, description, num, lectureId, courseId, deleteButtonHandler }) {
    return (
        <Stack
            direction={['column', 'row']}
            my={'8'}
            p={['4', '8']}
            borderRadius={'lg'}
            boxShadow={'0 0 10px black'}
            justifyContent={['flex-start', 'space-between']}
        >
            <Box>
                <Heading children={`#${num} ${{ title }}`} size={'sm'} />
                <Text children={description} />
            </Box>
            <Button color={'purple.600'} onClick={() => deleteButtonHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    )
}