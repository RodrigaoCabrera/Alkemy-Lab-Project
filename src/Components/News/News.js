import {React,useEffect,useState} from 'react';
import { GetNews } from '../../Services/NovedadesService';
import TitlePages from '../UI/TitlePages';
import NewsList from './NewsList';


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
    </div>
  );
};

export default News;
