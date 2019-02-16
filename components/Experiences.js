import { Fragment } from 'react'
import { ExperienceCard } from '../components/styles/ExperienceCard'

export const Experiences = ({ items }) => (
	<Fragment>
		{items.map((item, i) => (
			<ExperienceCard
				key={i}
				title={item.title}
				company={item.company}
				description={item.description}
				start={item.start}
				end={item.end}
			/>
		))}
	</Fragment>
)
