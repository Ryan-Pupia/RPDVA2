import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div id="Personal_Info" class="Section">
                <div id="Name_Title">
                    <p id="Name">{this.props.info.name}</p>
                    <p>{this.props.title}</p>
                </div>

                <div id="Contact Info">
                    <p>Email: <a>{this.props.info.email}</a></p>
                    <p>Web: {this.props.info.web}</p>
                    <p>Mobile: {this.props.info.mobile}</p>
                </div>
            </div>
        )
    }
}
  export default Header;