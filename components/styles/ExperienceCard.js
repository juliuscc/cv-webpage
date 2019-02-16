import styled from 'styled-components'

const Card = styled.div`
	background-color: ${props => props.theme.white};
	border-radius: 5px;
	padding: 20px 30px;
	margin-bottom: 20px;
`

const Title = styled.h3`
	margin: 0;
	margin-bottom: 5px;
`

const Company = styled.div`
	margin: 0;
`

const Date = styled.div`
	color: #777;
`

const Description = styled.p`
	margin: 0;
	margin-top: 10px;
`

export const ExperienceCard = ({ title, company, description, start, end }) => (
	<Card>
		<Title>{title}</Title>
		<Company>{company}</Company>
		<Date>
			{start}
			{` - ${end ? end : 'Present'}`}
		</Date>
		{description.split('\n').map((line, i) => (
			<Description key={i}>{line}</Description>
		))}
	</Card>
)
