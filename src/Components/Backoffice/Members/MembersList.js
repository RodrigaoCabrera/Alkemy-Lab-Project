import React, { useState, useEffect } from 'react';
import Member from './Member';
import { Flex, Box, Heading, Stack } from '@chakra-ui/layout';
import { Link, Spinner, Center } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { GetMembers } from '../../../Services/MembersService';

const MembersList = () => {
    const [membersList, setMembersList] = useState([]);

    useEffect(() => {
        GetMembers() //Método get.
            .then((response) => {
                setMembersList(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log('Erroor');
            });
    }, []);

    //Función para eliminar miembros de la lista. Se lo pasa por props a el componente Buttons.
    const deletMember = (id) => {
        const newMember = membersList.filter(m => m.id !== id);//Se filtra los miembros que sean diferentes al que se quiere eliminar. Así se crea un nuevo array con los miembros deseados
        setMembersList(newMember);
    };
    //Función para editar miembros de la lista. Se lo pasa por props a el componente Buttons.
    const editMember = (name, id, image) => {
        const editedMember = membersList.map(member => member.id === id ? { name: name, id: id, photo: image } : member)//Se mapea los miembros y se agrega el miembro editado mediante una validación de id. El resto ssigue igual.
        setMembersList(editedMember);
    };

    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            marginTop='5'
            spacing={6}
        >

            <Heading as='h1'>Listado Actividades</Heading>
            <Flex justify='center'>
                <Link
                    as={ReachLink}
                    to="/backoffice/members/create"
                    color='#9AC9FB'
                    fontWeight='bold'
                    fontSize='18px'
                >
                    Crear Miembro
                </Link>
            </Flex>

            <Flex
                w='100%'
                wrap='wrap'
                justify='space-around'
            >
                {
                    membersList?.map((member, idx) => (
                        <Flex direction='column' key={idx}>
                            <Member
                                member={member}
                                deletMember={deletMember}
                                editMember={editMember}
                            />
                        </Flex>
                    ))
                }
            </Flex>
        </Stack>
    )
}

export default MembersList;
