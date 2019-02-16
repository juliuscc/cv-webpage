import { Fragment } from 'react'
import { ExperienceCard } from '../components/styles/ExperienceCard'

export const Experiences = () => (
	<Fragment>
		<ExperienceCard
			title={'IT Consultant'}
			company={'We Know IT'}
			description={
				'A student consultant company focusing on web and app development.'
			}
			start={'February 2019'}
		/>
		<ExperienceCard
			title={'Systems developer'}
			company={'LS Elektronik AB'}
			description={
				'LS Elektronik AB is an engineering and manufacturing company. They have a broad range of products with a focus on radio technology and radio over IP.'
			}
			start={'October 2016'}
			end={'August 2018'}
		/>
		<ExperienceCard
			title={'Bachelor Thesis'}
			company={'LS Elektronik AB'}
			description={
				'As a part of my education at the KTH Royal Institute of Technology, a bachelor thesis was conducted at LS Elektronik. The thesis was conducted as a case study that examined a large set of existing tools that use JSON Schemas to generate graphical user interfaces. The thesis also present a new kind  of tool that use JSON Schemas to generate a user input form to manipulate the data described and annotated by a given JSON Schema.'
			}
			start={'March 2018'}
			end={'June 2018'}
		/>
		<ExperienceCard
			title={'Study coach'}
			company={'My Academy'}
			description={
				'I helped young students reach their goals by teaching them mathematics on secondary school level.'
			}
			start={'January 2016'}
			end={'June 2016'}
		/>
	</Fragment>
)
