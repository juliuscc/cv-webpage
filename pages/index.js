import React, { Component } from 'react'
import Container from '../components/styles/Container'

import styled from 'styled-components'

const SectionTitle = styled.h2`
	font-size: 30px;
	color: ${props => props.theme.white};
	border-bottom: solid 5px;
	line-height: 1.3;
`

const TitleBar = styled.div`
	display: flex;

	h2 {
		flex: 1;
	}
`

import { Experiences } from '../components/Experiences'
class index extends Component {
	state = {
		selectedSection: 0,
		sections: [
			{
				title: 'Experiences',
				items: [
					{
						title: 'IT Consultant',
						company: 'We Know IT',
						description:
							'A student consultant company focusing on web and app development.',

						start: 'February 2019'
					}
				]
			}
		]
	}

	render() {
		return (
			<Container>
				<TitleBar>
					<SectionTitle>Experiences</SectionTitle>
					<SectionTitle>Experiences</SectionTitle>
				</TitleBar>
				<Experiences />
				<div style={{ height: '100px' }} />
			</Container>
		)
	}
}

export default index
