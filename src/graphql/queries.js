/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    createdAt
    name
    jobTitle
    avatar {
      bucket
      region
      key
    }
    teamId
    team {
      id
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      company
      members {
        id
        createdAt
        name
        jobTitle
        teamId
      }
    }
    requests {
      items {
        id
        evaluatorId
        userId
        status
        createdAt
      }
      nextToken
    }
    ratings {
      items {
        id
        userId
        authorId
        skillName
        description
        grade
        comment
        createdAt
        owner
      }
      nextToken
    }
    evaluations {
      items {
        id
        userId
        authorId
        skillName
        description
        grade
        comment
        createdAt
        owner
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      evaluations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    name
    adminId
    admin {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      evaluations {
        nextToken
      }
    }
    company
    members {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      evaluations {
        nextToken
      }
    }
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      adminId
      admin {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      company
      members {
        id
        createdAt
        name
        jobTitle
        teamId
      }
    }
    nextToken
  }
}
`;
export const getRating = `query GetRating($id: ID!) {
  getRating(id: $id) {
    id
    userId
    user {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      evaluations {
        nextToken
      }
    }
    authorId
    author {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      evaluations {
        nextToken
      }
    }
    skillName
    description
    grade
    comment
    createdAt
    owner
  }
}
`;
export const listRatings = `query ListRatings(
  $filter: ModelRatingFilterInput
  $limit: Int
  $nextToken: String
) {
  listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      user {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      authorId
      author {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      skillName
      description
      grade
      comment
      createdAt
      owner
    }
    nextToken
  }
}
`;
export const getEvaluationRequest = `query GetEvaluationRequest($id: ID!) {
  getEvaluationRequest(id: $id) {
    id
    evaluatorId
    userId
    user {
      id
      createdAt
      name
      jobTitle
      avatar {
        bucket
        region
        key
      }
      teamId
      team {
        id
        name
        adminId
        company
      }
      requests {
        nextToken
      }
      ratings {
        nextToken
      }
      evaluations {
        nextToken
      }
    }
    status
    createdAt
  }
}
`;
export const listEvaluationRequests = `query ListEvaluationRequests(
  $filter: ModelEvaluationRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvaluationRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evaluatorId
      userId
      user {
        id
        createdAt
        name
        jobTitle
        teamId
      }
      status
      createdAt
    }
    nextToken
  }
}
`;
