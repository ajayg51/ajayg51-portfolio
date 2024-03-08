const AboutMe = {
    greet: "Hello world!",
    me: {
        line1: `I am Ajay Kumar Gond`,
        line2: `Software Development Engineer 1`,
    },
    meAsWell: {
        coder: "coder",
        developer: "developer",
        singer: "singer",
    }
};

const WorkExperiece = {
    ps: {
        intern: {
            role: `ASE 
            (Associate Software Engineer - Flutter Developer)`,
            at: `PeopleStrong Technologies Pvt. Ltd. - Gurgaon Haryana`,
            tenure: `Jan-2022
            to Jun-2022`
        },
        sde1: {
            role: `SDE 1 
            (Software Development Engineer 1 - Flutter Developer)`,
            at: `PeopleStrong Technologies Pvt. Ltd. - Gurgaon Haryana`,
            tenure: `Jul-2022
            to Jul-2023`
        }
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
        stream: "Computer Science and Engineering",
        cgpa: 8.59,
    },
    schooling: {
        hsc: {
            school: "Rani Laxmi Bai Memorial School - Lucknow",
            stream: "Physics, Chemistry and Mathematics",
            percentage: 93.2,
            duration: {
                from: 2016,
                to: 2018
            }
        },
        ssc: {
            school: "Netajee Defence Academy - Gorakhpur",
            stream: "Physics, Chemistry and Mathematics",
            duration: {
                from: 2014,
                to: 2016
            },
            cgpa: 9.4,
        }
    },

};


const Projects = {
    flutter: {
        weatherApp: {
            name: "Weather App",
            githubLink: `https://github.com/ajayg51/assignment0`,
            techStack: "Dart and Flutter",
            about: `An android/iOS app to get weather details of any place in [India, Nepal, Bhutan, Myanmar and Sri Lanka]`,
            featureList: [
                "google authentication",
                "auto detects location",
                "quits app on error",
                "fetches device location as well as searched location weather info",
                "saves data locally",
            ],
            libraries: {
                l0: {
                    title: "flutter_bloc",
                    desc: "state management using BLoC pattern",
                },
                l1: {
                    title: "get_it",
                    desc: "dependency injection",
                },
                l2: {
                    title: "auto_route",
                    desc: "navigation",
                },
                l3: {
                    title: "hive",
                    desc: "local storage",
                },

            }

        }
    },
    java: {
        juanaTravelAgency: {
            name: "Juana Travel Agency",
            githubLink: "https://github.com/ajayg51/nymble_assignment/tree/main",
            techStack: "Java, Maven and JUnit",
            about: "A Java based executable program to help users plan their vacation",
            featureList: [
                "handles functionalities like subscription of a user for an activity",
                "puts constraints on user subscription through agency passenger capacity, activity capacity",
            ],
            libraries: {
                l0: {
                    title: "Maven",
                    desc: "used as a build tool for Java projects",
                },
                l1: {
                    title: "JUnit",
                    desc: "used as a unit testing framework to test the expected and actual behaviour of methods of each class of the program",
                },
            },
        },
    },

}

const Achievements = {
    dataAnalyticsWithPython: {
        name: "Data Analytics with Python",
        grade: 98,
        from: "IIT Roorkee",
        certificateLink: `https://drive.google.com/file/d/1InONMLB4WsnAE8q-n5xZSLvHDxeuwKVj/view`,
    },
    theJoyOfComputingUsingPython: {
        name: "The joy of computing using Python",
        grade: 96,
        remark: "Topper 1%",
        from: "IIT Madras",
        certificateLink: `https://drive.google.com/file/d/1To-rMMGhTI87ekNGzrGNI9ZwMLg6h6Re`,
    },
    ethicalHacking: {
        name: "Ethical Hacking",
        grade: 88,
        remark: "Topper 2%",
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