import {React,useEffect,useState} from 'react';
import '../../Components/FormStyles.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {FormLabel,Button,Container,Alert,AlertIcon,Text} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { showErrorAlert } from '../../Services/alertsService';
import { getCategories } from '../../Services/categoryService';
import { useDispatch } from 'react-redux';
import { postNews, putNews} from '../../features/newsReducer';

const NewsForm = ({location: {novedades}}) => {

  const dispatch = useDispatch();
  const [Categoria, setCategoria] = useState([]);
  const [EnvioExitoso, setEnvioExitoso] = useState(false);
  const [EnvioError, setEnvioError] = useState(false);

  useEffect(() => {
    try {
      getCategories().then(res => {
        setCategoria(res.data);
      });
    } catch (error) {
      showErrorAlert();
    }
  }, []);

  return ( 
    <Container mt={3}>
      <Formik
        initialValues={{
          name: novedades ? novedades.name : '',
          content: novedades ? novedades.content : '',
          slug: novedades && novedades.slug !== null && novedades.slug || '',
          image: novedades ? novedades.image : '',
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
          name: Yup.string().required('Requiere un título').min(4,'Minimo 4 caracteres'),
          content: Yup.string().required('Requiere un contenido'),
          slug: Yup.string().required('Requiere una categoría'),
          image: Yup.string().required('Requiere una imagen'),
        })}
      >
        {({handleSubmit,values,handleChange,handleBlur,errors,touched,initialValues})=>(
        
          <form  className="form-container" onSubmit={handleSubmit}>
            <Text as="samp" fontSize="2xl" color="#398BE1" marginTop={7} textAlign="center" fontWeight="bold">Formulario novedades</Text>
            <FormLabel htmlFor="name">Título</FormLabel>
            <input className="input-field" id="name"type=" text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur}></input>
            {touched.name && errors.name && <Alert status="error"><AlertIcon />{errors.name}</Alert>}
            <FormLabel htmlFor="content">Descripción</FormLabel>
            <CKEditor
              editor={ ClassicEditor }
              data={initialValues.content}
              onChange={ ( event, editor ) => values.content=editor.getData().slice(3,-4)}
            // onBlur={ ( event, editor ) => values.content.length === 0 ? ErrorConst= true : ErrorConst=false}
            />
            {touched.content && errors.content && <Alert status="error"><AlertIcon />{errors.content}</Alert>}
            <FormLabel htmlFor="slug">Categoría</FormLabel>
            <select className="select-field" id="slug" name="slug" onChange={handleChange} onBlur={handleBlur}>
              <option value="" disabled >Selecciona una categoría</option> 
              {Categoria === []
                ?<p>Falta Categoría</p>
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
            <Button
              width='full'
              marginTop={4}
              type='submit'
              backgroundColor='#398BE1'
              color='#FFF'
              _hover={{
                bg: '#5FA5ED'
              }}
              _active={{
                bg: '#5FA5ED'
              }}
            >
              {novedades ? 'Actualizar' : 'Crear'}
            </Button>
            {EnvioExitoso && <Alert status="success"><AlertIcon />Novedad Enviada</Alert>}
            {EnvioError && showErrorAlert()}
          </form >
        )}
      </Formik>
    </Container>
  );
};
export default NewsForm;
