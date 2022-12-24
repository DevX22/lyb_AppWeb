import Swal  from "sweetalert2";

export function alert_success(title: string){
    Swal.fire({
        icon:'success',
        title: title,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 2500
    });
}

export function alert_warning(title:string){
    Swal.fire({
        //position: 'top-end',
        icon: 'warning',
        title: title,
        showConfirmButton: false,
        timer: 2500
    });
}

export function alert_error(title: string, message: string){
    Swal.fire({
        icon: 'error',
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 2500
    });
}

export function alert_delete()
{
    Swal.fire({
        title: "¿Está seguro que desea eliminar este registro?",
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton:true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar',
        iconColor: '#F28E2E'
    }).then((result)=>{
        if(result.isConfirmed){
            return true;
            //Swal.fire(
                //'Eliminado!',
                //'Registro eliminado de forma satisfactoria',
                //'success'
            //)
        }
        else{
            return false;
        }
    });
}