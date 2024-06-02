import {Observer} from 'rxjs';

export const observadoresAny: Observer<any>={
    next(res){
        console.log(res);
    },
    error(err){
        console.log(err);
    },
    complete(){
        console.log("Operacion terminada");
    }
    
};
