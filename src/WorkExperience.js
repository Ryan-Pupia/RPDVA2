import React, {Component} from 'react'

class WorkExperience extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div class="Section">
                <div class="Sect_Title_div">
                    <p class="Sect_Title">Work Experience</p>
                </div>

                <div class="Section_Content" id="Joblist">
                    {this.props.jobs.map(job => (
                        <div class="Past_Job">
                            <p class="subheading">{`${job.title} at ${job.company} (${job.date})`}</p>
                            <p>{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
  export default WorkExperience;