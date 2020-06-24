import React, { useEffect, useState } from 'react'
import MyTeamScreen from '../screens/MyTeamScreen'

import API, {  graphqlOperation } from '@aws-amplify/api';
import { getTeam, listUsers, getUser } from '../src/graphql/queries'


const MyTeamContainer = (props) => {

  const [teamMembers, setMembers] = useState([{name:"TeamContainer", jobTitle:'Founder'},{name:'Thomas', jobTitle:'developer'}])

  return (
    <MyTeamScreen
      navigation={props.navigation}
      teamMembers={teamMembers}
    />
  )
}

export default MyTeamContainer
