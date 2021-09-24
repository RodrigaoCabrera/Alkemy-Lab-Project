import React, { useState } from 'react';
import { Text, Flex, ScaleFade, useDisclosure, Input  } from "@chakra-ui/react";
import Buttons from './Buttons';
import MemberImage from './MemberImage';


const Member = ({ member, deletMember, editMember }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [idMember, setIdMember] = useState('');
    const [nameMember, setNameMember] = useState(member.name);
    const [memberImage, setMemberImage] = useState(member.image);

    const handleChange = (e) => {
        setNameMember(e.target.value);//Se establece el nombre que se edita en el input
        setIdMember(member.id);
    };

    const { isOpen, onToggle } = useDisclosure();//useHooks de chakra para la transición animada cuando se boorra un elemento.

    return (
        <ScaleFade initialScale={0.9} in={!isOpen}>
            <Flex
                bg='#6898c8'
                w='320px'
                minH='300px'
                mt='10px'
                direction='column'
                justify='space-between'
                boxShadow={isEdit ? '2xl' : 'md'}
                borderRadius='6px'
                p='3px'
            >
                <MemberImage 
                    isEdit={isEdit}
                    memberImage={memberImage} 
                    setMemberImage={setMemberImage} 
                />

                {isEdit && member.id === idMember ? //Condicional que permite editar la card que se seleccione por medio de la comprobación de la id. 

                    <Input 
                        value={nameMember}
                        onChange={handleChange}
                        size='md'
                        bg='#cdfcff'
                    />
                    :
                    <Text
                        align='center'
                        fontSize='xl'
                        pl='10px'
                        pb='10px'
                        color='#fff'
                    >{idMember === member.id ? nameMember : member.name}</Text>
                }
                <Buttons
                    deletMember={() => deletMember(member.id)}
                    member={member}
                    editMember={editMember}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    idMember={idMember}
                    setIdMember={setIdMember}
                    nameMember={nameMember}
                    setNameMember={setNameMember}
                    memberImage={memberImage}
                    onToggle={onToggle}
                />
            </Flex>
        </ScaleFade>
    )
};

export default Member;
