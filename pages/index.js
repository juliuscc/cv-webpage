import React, { Component } from 'react'
import HeaderBackground from '../components/HeaderBackground'
import ProfileCard from '../components/ProfileCard'
import styled from 'styled-components'

class index extends Component {
    render() {
        return (
            <>
                <HeaderBackground />
                <ProfileCard />
            </>
        )
    }
}

export default index
