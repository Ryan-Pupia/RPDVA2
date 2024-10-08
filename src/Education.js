import React, {Component} from 'react'

class Education extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div class="Section" id="Last_Section">
                <div class="Sect_Title_div">
                    <p class="Sect_Title">Education</p>
                </div>

                <div class="Section_Content">
                    {this.props.educations.map(education => (
                        <div class="Past_Education">
                            <p class="subheading">{education.university}</p>
                            <p>{education.degree}</p>
                            <p>{education.date}</p>
                            <p>{education.gpa}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
  export default Education;