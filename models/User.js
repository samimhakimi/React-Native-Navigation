import { graphqlOperation } from 'aws-amplify'
import Auth from "@aws-amplify/auth";
import API from "@aws-amplify/api";
import { getUser as GetUser } from '../src/graphql/queries'
import { createUser } from '../src/graphql/mutations'

class User {
  username = ''
  email = ''
  
  async init() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      const { attributes } = user;
      console.log(attributes)
      this.username = attributes.sub
      this.email = attributes.email
      
    } catch (err) {
      console.log('error getting user data... ', err)
    }
    console.log('username:', this.username)
    // check if user exists in db, if not then create user
    if (this.username !== '') {
      this.checkIfUserExists(this.username)
    }

  }

  async checkIfUserExists(id) {
    try {
      const user = await API.graphql(graphqlOperation(GetUser, {id}))
      const { getUser } = user.data
      if (!getUser) {
        await this.createUser()
      } else {
        console.log('me:', getUser)
      }
    } catch (err) {
      console.log('error fetching user: ', err)
    }
  }

  async createUser() {
    try {
      await API.graphql(graphqlOperation(createUser, { username: this.username }))
    } catch (err) {
      console.log('Error creating user! :', err)
    }
  }

  async fetchRatings() {

  }

  async fetchTeamMembers() {

  }

  async fetchEvaluationReques() {
    return 
  }
}


export default new User()
