import {React,useEffect,useState} from 'react';
import { GetNews } from '../../Services/NovedadesService';
import TitlePages from '../UI/TitlePages';
import NewsList from './NewsList';
import UltimoEvento from './UltimoEvento';


const News = () => {
  const [NewMock, setNewMock] = useState([]);
  useEffect(() => {
    GetNews()
      .then(res => setNewMock(res.data));
  }, []);
  return (
    <div>
      <TitlePages text="Novedades" />
      <NewsList news={ NewMock } />
      <UltimoEvento
        videoUrl={'https://www.youtube.com/watch?v=4YnSk1gI_Oo'}/>
    </div>
  );
};

export default News;
