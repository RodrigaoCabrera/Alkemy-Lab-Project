import React from 'react';
import { Image, Input, Box, Flex } from '@chakra-ui/react';

const MemberImage = ({ memberImage, setMemberImage, isEdit }) => (
    <>
        {//Renderizado condicional. Si la imagen no existe se muestra un 'Input' para subir una, de lo contrario se la muestra.
            !memberImage ?
                <Input
                    bg='#cdfcff'
                    size='md'
                    name='image'
                    type='file'
                    accept='.png, .jpg,'
                    value={undefined}
                    onChange={(e) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.currentTarget.files[0]);
                        reader.onload = () => {
                            setMemberImage(reader.result);
                        };
                    }}
                />
                :

                <Box position='relative'>
                    <Box boxSize="200px" w='100%'>
                        <Image
                            className='img-preview'
                            src={memberImage}
                            alt='miembro de la ONG'
                            boxSize='100%'
                            borderRadius='6px'
                        />
                    </Box>
                    {isEdit && //Si se está editando se muestra el botón
                        <Flex //EL Boton para eliminar la imagen subida o cargada.
                            align='center'
                            justify='center'
                            position='absolute'
                            fontSize='25px'
                            top='5px'
                            right='5px'
                            bgColor='#a42429'
                            color='#fff'
                            boxShadow="lg"
                            w={35}
                            h={35}
                            borderRadius='9999px'
                            cursor='pointer'
                            transition='0.3s'
                            _hover={{ bgColor: '#db5752', boxShadow: '2xl' }}
                            onClick={() => {
                                setMemberImage('')
                                }
                            }
                        >
                            <Box pb='5px'>&times;</Box>
                        </Flex>
                    }
                </Box>
        }
    </>
);

export default MemberImage;