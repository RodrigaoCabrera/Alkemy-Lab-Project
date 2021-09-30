import { showErrorAlert} from './alertsService';

export default function errorApiAlert(dato) {
  switch (dato) {
  case 400:
    return showErrorAlert('400 : La solicitud tiene una sintaxis incorrecta');
  case 401:
    return showErrorAlert('401 : El cliente debe autenticarse para obtener la respuesta solicitada');
  case 402:
    return showErrorAlert('402 : Pago Requerido');
  case 403:
    return showErrorAlert('403 : La página solicitada existe pero se ha denegado el acceso');
  case 404:
    return showErrorAlert('404 : la página que se está tratando de cargar no se ha encontrado');
  case 406:
    return showErrorAlert('406 : El código que no puede ser interpretado por el navegador');
  case 407:
    return showErrorAlert('407 : Requiere autentificacion del Proxy');
  case 408:
    return showErrorAlert('408 : Tiempo de espera de la Solicitud');
  case 409:
    return showErrorAlert('409 : Conflicto con el estado actual del servidor');
  case 410:
    return showErrorAlert('410 : El contenido solicitado se ha eliminado permanentemente del servidor');
  case 411:
    return showErrorAlert('411 : El servidor lo requiere.Content-Length');
  case 412:
    return showErrorAlert('412 : El cliente ha indicado condiciones previas en sus encabezados que el servidor no cumple');
  case 413:
    return showErrorAlert('413 : La entidad de solicitud es mayor que los límites definidos por el servidor');
  case 414:
    return showErrorAlert('414 : El URI solicitado por el cliente es más largo de lo que el servidor está dispuesto a interpretar');
  case 415:
    return showErrorAlert('415 : El formato multimedia de los datos solicitados no es compatible con el servidor');
  case 416:
    return showErrorAlert('416 : El rango especificado por el campo de encabezado en la solicitud no se puede cumplir');
  case 417:
    return showErrorAlert('417 : El servidor no puede cumplir con la expectativa indicada por el campo de encabezado de solicitud');
  case 422:
    return showErrorAlert('422 : La solicitud estaba bien formada, pero no se pudo seguir debido a errores semánticos');
  case 423:
    return showErrorAlert('423 : El recurso al que se está accediendo está bloqueado');
  case 424:
    return showErrorAlert('424 : La solicitud falló debido a la falla de una solicitud anterior');
  case 425:
    return showErrorAlert('425 : Indica que el servidor no está dispuesto a arriesgarse a procesar una solicitud');
  case 426:
    return showErrorAlert('426 : El servidor se niega a realizar la solicitud utilizando el protocolo actual');
  case 428:
    return showErrorAlert('428 : El servidor de origen requiere que la solicitud sea condicional');
  case 429:
    return showErrorAlert('429 : El usuario ha enviado demasiadas solicitudes en un período de tiempo determinado');
  case 431:
    return showErrorAlert('431 : El servidor no está dispuesto a procesar encabezado demasiado grande');
  case 451:
    return showErrorAlert('451 : El agente de usuario solicitó un recurso que no se puede proporcionar legalmente');
  case 500:
    return showErrorAlert('500 : Error interno del servidor');
  case 501:
    return showErrorAlert('501 : El método de solicitud no es compatible con el servidor');
  case 502:
    return showErrorAlert('502 : Puerta de enlace incorrecta');
  case 503:
    return showErrorAlert('503 : Servidor no disponible');
  case 504:
    return showErrorAlert('504 : Tiempo de espera de la puerta de enlace');
  case 505:
    return showErrorAlert('505 : La versión HTTP utilizada en la solicitud no es compatible con el servidor');
  case 506:
    return showErrorAlert('506 : El servidor tiene un error de configuración interno');
  case 507:
    return showErrorAlert('507 : Almacenamiento insuficiente');
  case 508:
    return showErrorAlert('508 : Bucle detectado');
  case 510:
    return showErrorAlert('510 : Se requieren más extensiones a la solicitud para que el servidor la cumpla');
  case 511:
    return showErrorAlert('511 : El cliente necesita autenticarse para obtener acceso a la red');
  default:
    return dato;
  }
}
