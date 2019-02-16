import React, { Component } from 'react'
import Container from '../components/styles/Container'
import { Experiences as ExperienceList } from '../components/Experiences'
import { NavBar, SectionTitle } from '../components/styles/NavBar'
import data from '../data/data'

class index extends Component {
	state = {
		selectedSection: 0,
		sections: data
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
			</Container>
		)
	}
}

export default index
