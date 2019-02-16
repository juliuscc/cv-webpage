import { ThemeProvider } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'

const theme = {
	white: '#eee'
}

const Page = props => (
	<ThemeProvider theme={theme}>
		<div>
			<Meta />
			<Header />
			<>{props.children}</>
		</div>
	</ThemeProvider>
)

export default Page
