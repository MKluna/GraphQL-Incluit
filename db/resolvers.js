const student = require('../models/Student.json')
const course = require('../models/Course.json')
const grade = require('../models/Grade.json')

const resolvers={
    Query:{
        getStudent:()=>student,
        getCourse:()=>course,
        getGrade:()=>grade,
        getStudentID:async(_,{id})=>{
            return student.find(students=>students.id ===id)
        },
        getCourseID:async(_,{id})=>{
            return course.find(courses=>courses.id==id)
        },
        getGradeID:async(_,{id})=>{
            return grade.find(grades=>grades.id===id)
        }
    },
    Mutation:{
        newStudent:async(_,{input})=>{
           const {name,lastname,id} = input;  
          student.map(students=>{
              if (students.name === name && students.lastname === lastname&&students.id === id) {
                  throw new Error('There is already a user with that name and surname')
              }
          })
          student.push(input)  
          return student
        },
        newCourse:async(_,{input})=>{
            const {name,description,id} = input;
            course.map(courses=>{
                if (courses.name === name && courses.description === description&&courses.id===id) 
                {
                    throw new Error('A course is already registered with the same name and description')
                }
            })
            course.push(input);
            return course
        },
        newGrade:async(_,{input})=>{
            grade.push(input)
            return grade;
        },
        

        deleteStudent:async(_,{id})=>{
            let deleteStudents = student.filter(studentID_=>studentID_.id!==id);
            return deleteStudents
        },
        deleteCourse:async(_,{id})=>{
            let deleteCourses = course.filter(courseID =>courseID.id!==id);
            return deleteCourses;
        },
        deleteGrade:async(_,{id})=>{
            let deleteGrades = grade.filter(gradeID=>gradeID.id!==id);
            return deleteGrades;
        }
    }
}

module.exports = resolvers;
