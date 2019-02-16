import React, { Component } from 'react'
import styled from 'styled-components'
import Container from '../components/styles/Container'
import { Experiences as ExperienceList } from '../components/Experiences'

const NavBar = styled.nav`
	background-color: ${props => props.theme.colors.white};
	color: ${props => props.theme.colors.primary};

	ul {
		display: flex;
		list-style: none;
		flex-flow: row wrap;
		justify-content: center;
		padding: 0;

		li {
			display: block;
			flex: 1;
			position: relative;
		}
	}
`

const SectionTitle = styled.li`
	padding: 20px 10px;
	font-size: 30px;
	color: ${props =>
		props.active
			? props.theme.colors.secondary
			: props.theme.colors.primary};
	line-height: 1.3;
	cursor: pointer;
	position: relative;

	a {
		display: block;
		transition: transform 0.3s;
		${props => props.active && 'transform: translateY(4px);'}
	}

	&:last-child::before {
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		height: 5px;
		background: ${props => props.theme.colors.secondary};
		content: '';
		transition: transform 0.3s;

		transform: translateX(
			-${props => props.numberOfTabs - props.activeIndex - 1}00%
		);
	}
`

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
			{ title: 'Education', items: [] },
			{ title: 'Projects', items: [] }
		]
	}

	render() {
		return (
			<Container>
				<NavBar>
					<ul>
						{this.state.sections.map(({ title }, i) => (
							<SectionTitle
								key={i}
								active={this.state.selectedSection === i}
								activeIndex={this.state.selectedSection}
								numberOfTabs={this.state.sections.length}
								onClick={() =>
									this.setState({ selectedSection: i })
								}
							>
								<a>{title}</a>
							</SectionTitle>
						))}
					</ul>
				</NavBar>
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
