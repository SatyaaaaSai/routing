import { useRouteError } from "react-router-dom"

const ErrorPage=()=>{
    const error=useRouteError();
    console.log(error);
    return(
        <div id="error-page">
            <h1>Oopssss!!!</h1>
            <p>An unexpected Error has been Occured!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;
