import { Box, Stack } from '@chakra-ui/layout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../features/newsReducer';
import TitlePages from '../UI/TitlePages';
import NewsList from './NewsList';
import NewsSearch from './NewsSearch';
import UltimoEvento from './UltimoEvento';


const News = () => {
  
  const dispatch = useDispatch();
  const { news } = useSelector(state => state.news);

  React.useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <Stack spacing={8}>
      <TitlePages text="Novedades" />
      <NewsSearch/>
      <Box marginX='10px'>
        <NewsList news={news.slice(news.length - 3, news.length)} />
      </Box>
      <Box alignItems='center'>
        <UltimoEvento
          videoUrl={'https://www.youtube.com/watch?v=4YnSk1gI_Oo'}/>
      </Box>
    </Stack>
  );
};

export default News;