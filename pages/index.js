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

import { Experiences as ExperienceList } from '../components/Experiences'
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
					},
					{
						title: 'Systems developer',
						company: 'LS Elektronik AB',
						description:
							'LS Elektronik AB is an engineering and manufacturing company. They have a broad range of products with a focus on radio technology and radio over IP.',
						start: 'October 2016',
						end: 'August 2018'
					},
					{
						title: 'Bachelor Thesis',
						company: 'LS Elektronik AB',
						description:
							'As a part of my education at the KTH Royal Institute of Technology, a bachelor thesis was conducted at LS Elektronik. The thesis was conducted as a case study that examined a large set of existing tools that use JSON Schemas to generate graphical user interfaces. The thesis also present a new kind  of tool that use JSON Schemas to generate a user input form to manipulate the data described and annotated by a given JSON Schema.',
						start: 'March 2018',
						end: 'June 2018'
					},
					{
						title: 'Study coach',
						company: 'My Academy',
						description:
							'I helped young students reach their goals by teaching them mathematics on secondary school level.',
						start: 'January 2016',
						end: 'June 2016'
					}
				]
			},
			{ title: 'Education', items: [] }
		]
	}

	render() {
		return (
			<Container>
				<TitleBar>
					<SectionTitle>Experiences</SectionTitle>
					<SectionTitle>Experiences</SectionTitle>
				</TitleBar>
				<ExperienceList
					items={
						this.state.sections[this.state.selectedSection].items
					}
				/>
				<div style={{ height: '100px' }} />
			</Container>
		)
	}
}

export default index
