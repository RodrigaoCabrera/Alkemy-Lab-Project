import React, { useState } from 'react';
import Member from './Member';
import { Flex, Text, Box } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const MembersList = () => {

    const [membersList, setMembersList] = useState([
        { name: 'miembro1', photo: '', id: '1' },
        { name: 'miembro2', photo: '', id: '2' },
        { name: 'miembro3', photo: '', id: '3' },
        { name: 'miembro4', photo: '', id: '4' },
    ]);

    //Función para eliminar miembros de la lista. Se lo pasa por props a el componente Buttons.
    const deletMember = (id) => {
        const newMember = membersList.filter(m => m.id !== id);//Se filtra los miembros que sean diferentes al que se quiere eliminar. Así se crea un nuevo array con los miembros deseados
        setMembersList(newMember);
    };
    //Función para editar miembros de la lista. Se lo pasa por props a el componente Buttons.
    const editMember = (name, id, image) => {
        const editedMember = membersList.map(member => member.id === id ? {name: name, id: id, photo: image} : member)//Se mapea los miembros y se agrega el miembro editado mediante una validación de id. El resto ssigue igual.
        setMembersList(editedMember);
    };
    
console.log(membersList)
    return (
        <Box bg='#cdfcff'>

            <Text
                align='center'
                fontSize='3xl'
                color='#6898c8'
            >
                Lista de miembros
            </Text>
            <Flex justify='center'>
                <Link
                    as={ReachLink}
                    to="/backoffice/members/create"
                    color='#9AC9FB'
                    fontSize='20px'
                >
                    Crear Miembro
                </Link>
            </Flex>

            <Flex
                w='100%'
                wrap='wrap'
                justify='space-around'
                align='stretch'
            >
                {
                    membersList.map((member, idx) => (
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

        </Box>
    )
}

export default MembersList
