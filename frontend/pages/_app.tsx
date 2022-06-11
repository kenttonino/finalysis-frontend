import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'

import { store } from 'src/redux/store'
import { LocalStorage } from 'src/consts/local-storage';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isSSR = typeof window !== 'undefined'

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT,
  })

  const authLink = setContext((_, { headers }) => {
    let token
    if (isSSR) token = localStorage.getItem(LocalStorage.ACCESS_TOKEN)

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    ssrMode: isSSR,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous" 
          />
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
