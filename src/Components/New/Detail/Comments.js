import React, { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Text, SlideFade, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import Skeleton from './Skeleton';
import Comment from './Comment';
import { showErrorAlert } from '../../../Services/alertsService';

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const { isOpen, onToggle } = useDisclosure();

  //Llamada a la API para traer los comentarios
  const getComments = () => {
    axios
      .get('http://ongapi.alkemy.org/api/comments')
      .catch((err) => {
        setIsLoading(false);
        showErrorAlert(err);
      })
      .then((res) => {
        if (res) {
          setComments(res.data.data);
        } else {
          setComments([]);
        }
        setIsLoading(false);
      });
  };

  //Función para hacer aparecer y desaparecer la sección de comentarion cuando se hace scroll.
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 130) {
      //Si el scroll supera los 200:
      // document.getElementById('comment').style.display = 'block'; //La sección 'comments' aparece
      getComments(); //Se invoca el método que llama a la api.
      !isOpen && onToggle(); //Se activa la animación.
    } else {
      // Si el scroll es menora a 200:
      // document.getElementById('comment').style.display = 'none'; //La sección 'comments' desaparece.
      isOpen && onToggle(); //Se desactiva la animación.
      setIsLoading(true); // Se activa el skeleton.
    }
  };

  const debounce = (funcion, tiempo) => {
    let timeoutId;
    return function (){
      if(timeoutId){
        clearTimeout(timeoutId);
      }
      const context = this;
      const args = arguments;
      timeoutId = setTimeout(() => {
        funcion.apply(context, args);
      }, tiempo);
    };
  };

  const debounceScroll = useCallback(debounce(handleScroll, 500), []);

  useEffect(() => {
    window.onscroll = () => debounceScroll();
  }, []);

  return (
    <>
      <Text
        as="h2"
        fontSize={{ base: '20px', md: '25px' }}
        fontWeight="700"
        color="#398be1"
        textAlign="center"
        padding="20px 20px"
      >
        Comentarios
      </Text>

      {isLoading ? (
        <Skeleton isOpen={isOpen} />
      ) : (
        <Flex minH="400px">
          {comments.length !== 0 || !comments ? (
            <Box id="comment" bgColor="#398be1" py="5px">
              <SlideFade in={isOpen} offsetY="40px">
                {comments?.map((comment) => (
                  <Box key={comment.id}>
                    <Comment text={comment.text} />
                  </Box>
                ))}
              </SlideFade>
            </Box>
          ) : (
            <Box id="comment">
              <SlideFade in={isOpen} offsetY="40px">
                <Text
                  as="h3"
                  fontSize={{ base: '15px', md: '20px' }}
                  fontWeight="700"
                  color="#db5752"
                  textAlign="center"
                  padding="20px 20px"
                >
                  No hay comentarios
                </Text>
              </SlideFade>
            </Box>
          )}
        </Flex>
      )}
    </>
  );
};

export default Comments;
