import React from 'react'
import { Nav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'

const styles = {
    marginBottom: 50
};

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
            <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
                Home
            </Nav.Item>
            <Nav.Item eventKey="Public">Public</Nav.Item>
            <Nav.Item eventKey="Private">Private</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>

        </Nav>
    );
};

export class NavbarRr extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'home'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(activeKey) {
        this.setState({ active: activeKey });
    }
    render() {
        const { active } = this.state;
        return (
            <div>
                <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
            </div>
        );
    }
}






// export const NavbarRr = () => {
//     return (
//         <Nav appearance="subtle">
//             <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
//             <Nav.Item>News</Nav.Item>
//             <Nav.Item>Solutions</Nav.Item>
//             <Nav.Item>Products</Nav.Item>
//             <Nav.Item>About</Nav.Item>
//         </Nav>
//     )
// }
