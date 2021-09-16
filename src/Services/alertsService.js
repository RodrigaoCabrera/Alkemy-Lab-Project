import Swal from 'sweetalert2';


export const showErrorAlert = (errorMessage = 'por favor chequee la información e intente nuevamente') =>{
  Swal.fire({
    titleText: 'Ha ocurrido un error!',
    text: errorMessage,
    icon: 'error',
    showCloseButton: true
  });
};
export const showSuccessAlert = (withTimer=undefined) =>{
  Swal.fire({
    titleText: 'Operacion Exitosa!',
    icon: 'success',
    timer: withTimer,
    showCloseButton: true,
  });
};
export const showInfoAlert = (message) =>{
  Swal.fire({
    titleText: 'Atencion',
    icon: 'info',
    text: message,
    showCloseButton: true,

  });
};
