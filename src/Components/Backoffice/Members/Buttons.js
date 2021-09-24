import React from 'react';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';
import { MdDelete, MdEdit } from "react-icons/md"


const Buttons = ({ deletMember, member, idMember, setIdMember, nameMember, setNameMember, isEdit, setIsEdit, editMember, onToggle, memberImage }) => {

    const deleteMember = () => {
        deletMember;//Borrar un miembro.
        onToggle();//Método de chakra para realizar una transición lenta.
    };

    const handleUpdateMemberList = () => {
        if (isEdit) {//Si se está editando se ejecuta 'editMember' que envía el los nuevos datos para agregarlos al array 'membersList'. Se actualiza.
            editMember(nameMember, idMember, memberImage);
            setIsEdit(false);
            
        } else {//Si no se está editando, se establece el nombre y el id del miembro para que se lo pueda editar.
            setIsEdit(true);
            setIdMember(member.id);
            setNameMember(member.name);
        }
        
    };

    return (
        <Stack
            spacing={4}
            direction='row'
            align='center'
            justify='center'
        >
            <Button
                size='md'
                colorScheme='blue'
                color="#fff"
                bg='#9ac9fb'
                _hover={{
                    bg: "#cdfcff",
                    color: "#000"
                }}
                onClick={handleUpdateMemberList}
                isDisabled={nameMember.length === 0  || memberImage.length === 0} /*Se deshabilita el boton sino tiene imagen o nombre */
                leftIcon={!isEdit && <MdEdit />}
            >
                {isEdit ? 'Actualizar' : 'Editar'}
            </Button>
            <Button
                leftIcon={<MdDelete />}
                size='md'
                color="#fff"
                bg='#a42429'
                _hover={{
                    bg: "#db5752",
                    color: "#000"
                }}
                onClick={deleteMember}
            >
                Eliminar
            </Button>
        </Stack>
    )
}

export default Buttons
