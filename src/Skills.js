import React, {Component} from 'react'

class Skills extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div class="Section">
                <div class="Sect_Title_div">
                    <p class="Sect_Title">Key Skills</p>
                </div>

                <div class="Section_Content">
                    <div id="Skill_List">
                        {this.props.skills.map(skill => (
                            <p>{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
  export default Skills;