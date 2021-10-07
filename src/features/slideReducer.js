//import { GetRequest, PostRequest, PutRequest, DeleteRequest } from '../Services/privateApiService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetSlides, PutSlides,GetSlidesWithQuery, PostSlides, DeleteSlides } from '../Services/SlidesService';
//const
const dataInicial ={
  Status:'idle',
  Slides:[{}],
  error: {}
};




//types

const GET_SLIDES = 'GET_SLIDES';
const getSlidesWithQuery='slides/getSlides';
const CREATE_SLIDE = 'CREATE_SLIDE';
const UPDATE_SLIDE = 'UPDATE_SLIDE';
const DELETE_SLIDE = 'DELETE_SLIDE';
const LOADING_SLIDE = 'LOADING_SLIDE';
const ERROR = 'ERROR';  

//reducer

export default function slidesReducer(state = dataInicial, action){

  switch ( action.type ) {
  case GET_SLIDES:
    return { Slides : action.payload.Slides, Status : 'success' };
  case getSlidesWithQuery:
    return { Slides : action.payload.Slides, Status : 'loading' };  
  case CREATE_SLIDE:
    return { ...state, Status : 'success' };
  case UPDATE_SLIDE:
    return { ...state, Status : 'success' };
  case DELETE_SLIDE:
    return { Slides : action.payload.Slides, Status : 'success' };
  case LOADING_SLIDE:
    return { ...state, Status : 'loading' };     
  case ERROR:
    return { Slides : {}, Status : 'failed', error : action.payload.error };    
  default:
    return state;
  }
}

//actions

export const getSlidesAction = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_SLIDE,
  });
  try {
    const res = await GetSlides( id );
    dispatch({
      type: GET_SLIDES,
      payload: { Slides : res.data },
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error : error }
    });
  }
};



export const createSlideAction = ( data ) => async ( dispatch ) => {
  dispatch({
    type: LOADING_SLIDE,
  });
  try {
    await PostSlides( data );
    dispatch({
      type: CREATE_SLIDE,      
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error : error }
    });
  }
};

export const updateSlideAction = ( id, data ) => async (dispatch) => {
  dispatch({
    type: LOADING_SLIDE,
  });
  try {
    await PutSlides(id, data);
    dispatch({
      type: UPDATE_SLIDE,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error : error }
    });
  }
};

export const deleteSlideAction = (id) => async (dispatch, getState) => {

  let { Slides } = getState().slides;

  Slides = Slides.filter(x => (!(x.id === id)));

  dispatch({
    type: LOADING_SLIDE,
  });
  try {
    await DeleteSlides( id );
    dispatch({
      type: DELETE_SLIDE,
      payload: { Slides : Slides }
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error : error }
    });
  }
};

