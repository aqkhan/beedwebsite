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
            <div>
                {
                    showdown &&
                    <ul>
                        <li onClick={() => Logout()}>Logout</li>
                    </ul>

                }
                <i className={!showdown ? "fa fa-angle-down" : " fa fa-angle-down rotate-arrow"}
                   onClick={() => Showdownfunction() }/>
            </div>
        )
    }


}
export default reactOutside(HeaderDropdown);