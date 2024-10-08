import React, {Component} from 'react'

class PersonalProfile extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div class="Section">
                <div class="Sect_Title_div">
                    <p class="Sect_Title">Personal Profile</p>
                </div>

                <div class="Section_Content">
                    <p>{this.props.personalprofile}</p>
                </div>
            </div>
        )
    }
}
  export default PersonalProfile;