import { ToastrService } from "ngx-toastr";

export function mostrarMensaje(tipo: string, mensaje: string, alerta: string, toast: ToastrService):void{

    const parametros = {
        timeOut: 6000,
        closeButton: true,
        enableHtml: true,
        progresBar: true,
        positionClass: 'toast-top-center',
        preventDuplicates:true,
    };

    switch (tipo) {
        case 'success':
            toast.success(mensaje, alerta, parametros);
            break;
        case 'info':
            toast.info(mensaje, alerta, parametros);
            break;
        case 'error':
            toast.error(mensaje, alerta, parametros);
            break;
        case 'warning':
            toast.warning(mensaje, alerta, parametros);
            break;
    
        default:
            toast.clear(0);
            break;
    }
}
