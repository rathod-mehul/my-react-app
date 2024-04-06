function apiMiddleware(store){
    return function(next){
        return function(action){
            console.log('this is api Middleware');
            return next(action);
        }
    }
}
export default apiMiddleware;