import React, {Component} from 'react'
import Header from "./Header.js"
import PersonalProfile from "./PersonalProfile.js"
import WorkExperience from "./WorkExperience.js"
import Skills from "./Skills.js"
import Education from "./Education.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      info: {
        name: "Zh Rimel",
        title: "Data Scientist",
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      personalprofile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      jobs: [
        {
          title: "Job Title",
          company: "Company",
          date: "August 2022 – December 2023",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          title: "Job Title 2",
          company: "Company 2",
          date: "August 2020 – December 2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ],
      skills: [
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
        "A Key Skill",
      ],
      educations: [
        {
          university: "New Jersey Institute of Technology",
          degree: "BS in Computer Science",
          date: "2018 - 2022",
          gpa: "GPA 3.9"
        },
        {
          university: "New Jersey Institute of Technology",
          degree: "MS in Data Science",
          date: "2022 - 2023",
          gpa: "GPA 4.0"
        }
      ]
    }  
  }

  render(){
    return(
      <div id="resume">

        <Header info={this.state.info}/>
        <PersonalProfile personalprofile={this.state.personalprofile}/>
        <WorkExperience jobs={this.state.jobs}/>
        <Skills skills={this.state.skills}/>
        <Education educations={this.state.educations}/>
    </div>
    )
  }
}

export default App;
