import { useRouteError } from 'react-router-dom';

interface RouteError {
    statusText?: string;
    message?: string;
    status?: number;
    data?: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an error occurred.</p>
            <p>
                <i>{error.statusText || error.status }</i>
            </p>
            <p>
                <i>{error.status}</i>
            </p>
            <p>
                <i>{error.data}</i>
            </p>
        </div>
    );
}