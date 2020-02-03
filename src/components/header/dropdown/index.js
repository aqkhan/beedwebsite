import React, {Component} from "react";
import reactOutside from "react-click-outside";
class HeaderDropdown extends Component {
    handleClickOutside() {
        let {outside} = this.props;
        outside();
    }

    render() {
        let {Logout, Showdownfunction, showdown} = this.props;
        return (
            <div style={{position:"relative"}}>
                {
                    showdown &&
                    <ul className="dropdown-list">

                        <li> Dashboard</li>
                        <li>Profile</li>
                        <li onClick={() => Logout()}>Logout</li>
                    </ul>

                }
                    <i onClick={() => Showdownfunction() } className={!showdown ? "fa fa-angle-down" : " fa fa-angle-down rotate-arrow"}
                       />

            </div>
        )
    }


}
export default reactOutside(HeaderDropdown);