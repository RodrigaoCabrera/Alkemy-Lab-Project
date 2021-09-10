import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Center, Text } from "@chakra-ui/react";
import TitlePages from '../UI/TitlePages';

const ActivityDetail = (props) => {

    const { match: { params } } = props;                         //obtengo el id del url

    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            url: `http://ongapi.alkemy.org/api/activities/${params.id}`,
        })
            .then((response) => {
                setActivity(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setActivity, setLoading]);

    return (loading === false) ? (
        <div>
            <TitlePages text={activity.name} image={activity.image} />
            <Text> <span dangerouslySetInnerHTML={{ __html: activity.description }} /> </Text>
        </div>
    ) : <Center h="50vh" > <Spinner /> </Center>;                          //para mostrar al usuario que esta cargando use un spinner
}

export default ActivityDetail;
