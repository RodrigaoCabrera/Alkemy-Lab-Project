import {React,useEffect,useState} from 'react';
import '../../Components/FormStyles.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {FormLabel,Button,Container,Alert,AlertIcon,Text} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { showErrorAlert } from '../../Services/alertsService';
import { useDispatch } from 'react-redux';
import { postNews, putNews} from '../../features/newsReducer';


const NewsForm = ({novedades}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-undef
  const url = process.env.REACT_APP_NEWS;
  const [Categoria, setCategoria] = useState([]);
  const [EnvioExitoso, setEnvioExitoso] = useState(false);
  const [EnvioError, setEnvioError] = useState(false);
  useEffect(() => {
    const obtenerDatos = async() =>{
      try {const  {data}  = await axios.get('http://ongapi.alkemy.org/api/categories');
        setCategoria(data.data);
      } catch (error) {console.log(error);}
    };
    obtenerDatos();
  }, []);
  return ( 
    <Container mt={3}>
      <Formik
        initialValues={{
          name: novedades ? novedades.name : '',
          content: novedades ? novedades.content : '',
          slug: '',
          image: '',
          id: novedades ? novedades.id : 0}}
        onSubmit ={(formData,{resetForm})=>{ 
          if (novedades === undefined) {
            const data ={
              name: formData.name,
              content: formData.content,
              slug: formData.slug,
              image: formData.image
            };
            dispatch(postNews(data)).then(() => {
              setEnvioExitoso(true);
              resetForm();
            }).catch(() => {
              setEnvioError(true);
            });
          } 
          else {
            const data ={
              name: formData.name,
              content: formData.content,
              image: formData.image,
              id: novedades.id,
              slug: formData.slug,
            };
            dispatch(putNews(data)).then(() => {
              setEnvioExitoso(true);
              resetForm();
            }).catch(() => {
              setEnvioError(true);
            });
          }
        }}
        validationSchema ={Yup.object({
          name: Yup.string().required('Requiere title').min(4,'Minimo 4 caracteres'),
          content: Yup.string().required('Requiere la content'),
          slug: Yup.string().required('Requiere la category'),
          image: Yup.string().required('Requiere la category'),
        })}
      >
        {({handleSubmit,values,handleChange,handleBlur,errors,touched,initialValues})=>(
        
          <form  className="form-container" onSubmit={handleSubmit}>
            <Text as="samp" fontSize="2xl" color="teal.500" marginTop={7} textAlign="center" fontWeight="bold">Formulario novedades</Text>
            <FormLabel htmlFor="name">First name</FormLabel>
            <input className="input-field" id="name"type=" text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}></input>
            {touched.name && errors.name && <Alert status="error"><AlertIcon />{errors.name}</Alert>}
            <FormLabel htmlFor="content">Content</FormLabel>
            <CKEditor
              editor={ ClassicEditor }
              data={initialValues.content}
              onChange={ ( event, editor ) => values.content=editor.getData().slice(3,-4)}
            // onBlur={ ( event, editor ) => values.content.length === 0 ? ErrorConst= true : ErrorConst=false}
            />
            {errors.content && <Alert status="error"><AlertIcon />{errors.content}</Alert>}
            <FormLabel htmlFor="slug">Categoria</FormLabel>
            <select className="select-field" id="slug" name="slug" onChange={handleChange} onBlur={handleBlur}>
              <option value="" disabled >Select category</option>
              {Categoria === []
                ?<p>Falta Categoria</p>
                :Categoria.map((e,index) =>
                  <option key={index} value={e.name}>{e.name}</option>)}
            </select>
            {touched.slug && errors.slug && <Alert status="error"><AlertIcon />{errors.slug}</Alert>}
            <FormLabel htmlFor="image">Imagen</FormLabel>
            <input className="input-field" 
              id="image" 
              type="file" 
              name="image" 
              onBlur={handleBlur} 
              onChange={(e)=>{
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = function () {values.image=reader.result;};
              }} 
              accept="image/gif ,image/jpeg, image/png"></input>
            {touched.image && errors.image &&<Alert status="error"><AlertIcon />{errors.image}</Alert>}
            <Button  mt={4} colorScheme="teal" type="submit">Send</Button>
            {EnvioExitoso && <Alert status="success"><AlertIcon />Novedad Enviada</Alert>}
            {EnvioError && showErrorAlert()}
          </form >
        )}
      </Formik>
    </Container>
  );
};
export default NewsForm;
