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

                        <li><i style={{marginRight:"8px"}} className="fa fa-tachometer"/> Dashboard</li>
                        <li><i style={{marginRight:"10px"}} className="fa fa-user"/> Profile</li>
                        <li onClick={() => Logout()}> <i style={{marginRight:"10px"}} className="fa fa-sign-out"/> Logout</li>
                    </ul>

                }
                <button className="btn dropdown-button d-flex" onClick={() => Showdownfunction() }>
                    More
                    <i className={!showdown ? "fa fa-angle-down" : " fa fa-angle-down rotate-arrow"}
                       />
                </button>
            </div>
        )
    }


}
export default reactOutside(HeaderDropdown);