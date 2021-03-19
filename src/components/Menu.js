import React from "react";
import { Link } from "react-router-dom";
import { Radio } from "antd";

import routes from "../router/routes";

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: routes.filter((route) => route.isMenu),
            curRoutePath: "",
        };

        this.handleRouteChange = this.handleRouteChange.bind(this);
    }

    handleRouteChange(e) {
        this.setState({ curRoutePath: e.target.value });
    }

    render() {
        let { menuList, curRoutePath } = this.state;
        return (
            <Radio.Group
                value={curRoutePath}
                onChange={this.handleRouteChange}
                optionType="button"
                buttonStyle="solid"
            >
                {menuList.map((v) => {
                    return (
                        <Link to={v.path} key={v.path}>
                            <Radio.Button value={v.name}>
                                {v.label}
                            </Radio.Button>
                        </Link>
                    );
                })}
            </Radio.Group>
        );
    }
}

export default Menu;
