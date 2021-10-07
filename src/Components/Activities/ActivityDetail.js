import React, { useState, useEffect } from 'react';
import { Center, Text } from '@chakra-ui/react';
import TitlePages from '../UI/TitlePages';
import { showErrorAlert } from '../../Services/alertsService';
import Loading from '../UI/Loading';
import { useSelector } from 'react-redux';

const ActivityDetail = (props) => {
  const { match: { params } } = props;                         //obtengo el id del url
  const { activities: {activities, status} } = useSelector(state => state);

  const [activity, setActivity] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    setActivity(activities.filter(activity => activity.id == params.id)[0]);
  }, []);
  let content;
  switch (status) {
  case 'success':
    content = (
      <div>
        <TitlePages text={activity.name} image={activity.image} />
        <Text> <span dangerouslySetInnerHTML={{ __html: activity.description }} /> </Text>
      </div>
    );
    break;
  case 'loading':
    content = ( <Center h="50vh" > <Loading/> </Center>  );
    break;
  case 'failed':
    showErrorAlert('Ha ocurrido un error al recuperar la informacion');
    content = (<div></div>);
    break;
  
  default:
    content = (<div></div>);
    break;
  }
  return content;                     //para mostrar al usuario que esta cargando use un spinner
};

export default ActivityDetail;
