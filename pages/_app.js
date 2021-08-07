import React from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyle from '../src/components/theme/GlobalStyle'

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Leo Miranda - Frontend Developer</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300;400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
