    export const countMiddleware = (store) =>(next) =>(action) =>{
        console.log('count middleware');
        return next(action);
    }