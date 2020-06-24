/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser($id: String!) {
  onCreateUser(id: $id) {
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
export const onUpdateUser = `subscription OnUpdateUser($id: String!) {
  onUpdateUser(id: $id) {
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
export const onDeleteUser = `subscription OnDeleteUser($id: String!) {
  onDeleteUser(id: $id) {
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
export const onCreateTeam = `subscription OnCreateTeam($adminId: String!) {
  onCreateTeam(adminId: $adminId) {
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
export const onUpdateTeam = `subscription OnUpdateTeam($adminId: String!) {
  onUpdateTeam(adminId: $adminId) {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateRating = `subscription OnCreateRating {
  onCreateRating {
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
export const onUpdateRating = `subscription OnUpdateRating($owner: String!) {
  onUpdateRating(owner: $owner) {
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
export const onDeleteRating = `subscription OnDeleteRating($owner: String!) {
  onDeleteRating(owner: $owner) {
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
export const onCreateEvaluationRequest = `subscription OnCreateEvaluationRequest($evaluatorId: String!) {
  onCreateEvaluationRequest(evaluatorId: $evaluatorId) {
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
export const onUpdateEvaluationRequest = `subscription OnUpdateEvaluationRequest {
  onUpdateEvaluationRequest {
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
export const onDeleteEvaluationRequest = `subscription OnDeleteEvaluationRequest($evaluatorId: String!) {
  onDeleteEvaluationRequest(evaluatorId: $evaluatorId) {
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
