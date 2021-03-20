import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import NProgress from 'next-nprogress-emotion';

const MeuApp = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyle />
            <NProgress
                color="#29d"
                options={{ trickleSpeed: 50 }}
                showAfterMs={300}
                spinner />
            <Component {...pageProps} />
        </>
    )
}

export default MeuApp