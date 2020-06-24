/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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

export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
export const createTeam = `mutation CreateTeam(
  $input: CreateTeamInput!
  $condition: ModelTeamConditionInput
) {
  createTeam(input: $input, condition: $condition) {
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
export const updateTeam = `mutation UpdateTeam(
  $input: UpdateTeamInput!
  $condition: ModelTeamConditionInput
) {
  updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = `mutation DeleteTeam(
  $input: DeleteTeamInput!
  $condition: ModelTeamConditionInput
) {
  deleteTeam(input: $input, condition: $condition) {
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
export const createRating = `mutation CreateRating(
  $input: CreateRatingInput!
  $condition: ModelRatingConditionInput
) {
  createRating(input: $input, condition: $condition) {
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
export const updateRating = `mutation UpdateRating(
  $input: UpdateRatingInput!
  $condition: ModelRatingConditionInput
) {
  updateRating(input: $input, condition: $condition) {
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
export const deleteRating = `mutation DeleteRating(
  $input: DeleteRatingInput!
  $condition: ModelRatingConditionInput
) {
  deleteRating(input: $input, condition: $condition) {
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
export const createEvaluationRequest = `mutation CreateEvaluationRequest(
  $input: CreateEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  createEvaluationRequest(input: $input, condition: $condition) {
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
export const updateEvaluationRequest = `mutation UpdateEvaluationRequest(
  $input: UpdateEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  updateEvaluationRequest(input: $input, condition: $condition) {
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
export const deleteEvaluationRequest = `mutation DeleteEvaluationRequest(
  $input: DeleteEvaluationRequestInput!
  $condition: ModelEvaluationRequestConditionInput
) {
  deleteEvaluationRequest(input: $input, condition: $condition) {
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
