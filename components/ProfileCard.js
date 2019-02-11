import styled from 'styled-components'

const WrapperCard = styled.div`
    margin: 0 auto;
    margin-top: -100px;
    padding: 20px;
    width: 600px;
    display: flex;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.75) 0px -3px 60px -15px;

    div {
        flex: 1;
    }
`
const ProfileImage = styled.img`
    width: 250px;
    margin-right: 20px;
`

const ProfileText = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    h1 {
        margin: 0;
    }

    p {
        margin: 0;
        margin-top: 16px;
    }
`

const ProfileCard = () => (
    <WrapperCard>
        <ProfileImage src="/static/profile-square.jpg" />
        <ProfileText>
            <h1>Julius Celik</h1>
            <p>
                I am a curious student, studying computer science with a masters
                in distributed systems. I see myself as a quick learner, with an
                enthusiastic and positive personality.
            </p>
            <p>
                My goal is to work with systems architecture and project
                management. I have a deep interest in developer experience (DX)
                and how developer productivity is impacted by leadership methods
                and organizational structure.
            </p>
        </ProfileText>
    </WrapperCard>
)

export default ProfileCard
