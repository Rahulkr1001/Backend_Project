//Method 1
const asyncHandler = (requesthandler) => {
    return (req, res, next) => {
        promise.resolve(requesthandler(req, res, next)).
        catch((error) => next(error));
    }
}

export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}

// Methed 2
// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next);
//     } catch(error){
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }