import React, { useEffect } from 'react'
import useHttp from '../hooks/use-http.js'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm.js'
import { addQuote } from '../lib/api.js'
const NewQuotes = () => {
    const { sendRequest, status } = useHttp(addQuote)
    const history = useHistory()

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [status, history])

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData)
    }
    return (

        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    )
}

export default NewQuotes