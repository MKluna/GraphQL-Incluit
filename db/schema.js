const { gql } = require("apollo-server");

const typeDefs = gql`

type Student{
    id:ID
    name:String
    lastname:String
    courseID:ID
}
type Course{
    id:ID
    name:String
    description:String
}

type Grade{
    id:ID
    courseID:ID
    studentID:ID
    grade:String
}




input StudentInput{
    id:ID!
    name:String!
    lastname:String!
    courseID:ID!
}

input CourseInput{
    id:ID!
    name:String!
    description:String!
}

input GradeInput{
    id:ID!
    courseID:ID!
    studentID:ID!
    grade:String!
}



type Query{
    getStudent:[Student]
    getStudentID(id:ID!):Student
    getCourse:[Course]
    getCourseID(id:ID!):Course
    getGrade:[Grade]
    getGradeID(id:ID!):Grade
}

type Mutation{
    newStudent(input:StudentInput):[Student]
    newCourse(input:CourseInput):[Course]
    newGrade(input:GradeInput):[Grade]


    deleteStudent(id:ID!):[Student]
    deleteCourse(id:ID!):[Course]
    deleteGrade(id:ID!):[Grade]
}

`;

module.exports = typeDefs;