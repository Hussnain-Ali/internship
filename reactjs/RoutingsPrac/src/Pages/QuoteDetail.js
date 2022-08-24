import { Fragment, useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote.js'
import Comments from '../components/comments/Comments.js'
import useHttp from '../hooks/use-http.js'
import { getSingleQuote } from '../lib/api.js'
import LoadingSpinner from '../components/UI/LoadingSpinner.js'
const QuoteDetail = () => {
    const matchRoute = useRouteMatch()
    const params = useParams();
    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true)
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }



    if (!loadedQuotes.text) {
        return <h1>No Quote Found:(Invalid ID)</h1>
    }
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
            <Route path={matchRoute.path} exact>
                <div className='centered'>
                    <Link className='btn--flat'
                        to={`${matchRoute.url}/comments`}>Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${matchRoute.path}/comments`} >
                <Comments />
            </Route>

        </Fragment >

    )
}

export default QuoteDetail