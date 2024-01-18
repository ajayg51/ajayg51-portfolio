const AboutMe = {
    greet: "Hello world!",
    me: `I am Ajay Kumar Gond 2022 B.Tech passout 
         from NIT Patna with major stream as 
         Computer Science and Engineering.`,
    meAsWell: {
        coder: "coder",
        developer: "developer",
        singer: "singer",
    }
};

const WorkExperiece = {
    ps: {
        intern: `I have worked as ASE 
        (Associate Software Engineer - Flutter Developer)
        at PeopleStrong Technologies Pvt. Ltd. from Jan-2022
        to Jun-2022`,
        sde1: `I have worked as SDE 1 
        (Software Development Engineer 1 - Flutter Developer)
        at PeopleStrong Technologies Pvt. Ltd. from Jul-2022
        to Jul-2023`,
    }
};


const Skills = {
    frameworks: {

        flutter: "Flutter",
        reactJS: "ReactJS",
    },
    languages: {
        dart: "Dart",
        js: "JavaScript",
        cpp: "C++",
        java: "Java",
        sql: "SQL",
        python: "Python",
    },
    tools: {
        git: "Git"
    },
};


const Education = {
    graduate: {
        college: "NIT Patna",
        duration: {
            from: 2018,
            to: 2022,
        },
        degree: "B.Tech",
        stream: "CSE",
        cgpa: 8.59,
    },
    schooling: {
        12: {
            school: "Rani Laxmi Bai Memorial School - Lucknow",
            percentage: 93.2,
        },
        10: {
            school: "Netajee Defence Academy - Gorakhpur",
            cgpa: 9.4,
        }
    },

};


const Projects = {
    flutter: {
        teamManagement: {
            name: "Team Management",
            about: `A web-app to assist in inclusion of a 
            domain-specific employee to team and view the same,
            it remembers which of the employee were included
            across app launches restricts inclusion of same 
            domain-employee.`,
            hostedLink: `https://flutterapps-22.web.app/`,
            githubLink: `https://github.com/ajayg51/addEmployeeToTeam/tree/main`,
        },
        expenseTracker: {
            name: "Expense Tracker",
            about: `An android/iOS app to manage self expenses and get to know whom to pay and receive from`,
            githubLink: `https://github.com/ajayg51/expense_tracker/tree/main`,
        },
    }

}

const Achievements = {
    dataAnalyticsWithPython: {
        name: "Data Analytics with Python",
        percentage: 98,
        from: "IIT Roorkee",
        certificateLink: `https://drive.google.com/file/d/1InONMLB4WsnAE8q-n5xZSLvHDxeuwKVj/view`,
    },
    theJoyOfComputingUsingPython: {
        name: "The joy of computing using Python",
        percentage: 96,
        remark : "Topper 1%",
        from: "IIT Madras",
        certificateLink: `https://drive.google.com/file/d/1To-rMMGhTI87ekNGzrGNI9ZwMLg6h6Re`,
    },
    ethicalHacking: {
        name: "Ethical Hacking",
        percentage: 88,
        remark : "Topper 2%",
        from: "IIT Kharagpur",
        certificateLink: `https://drive.google.com/file/d/12YuPPbWWaNV_TM5kmfon06ia4WQGLfyP/view`,
    },
};


const LeftPaneContent = {
    aboutMe: AboutMe,
    workExperiece: WorkExperiece,
    skills: Skills,
    education: Education,
    projects: Projects,
    achievements: Achievements,
}

export default LeftPaneContent;