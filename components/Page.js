import styled, { ThemeProvider } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'

const theme = {}

// styled.injectGlobal`
// 	body {
// 		margin: 0;
// 		background-color: #67a2ce;
// 	}
// `

const Page = props => (
	<ThemeProvider theme={theme}>
		<Meta />
		<Header />
		<>{props.children}</>
	</ThemeProvider>
)

export default Page
