import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function HamburgerMenu() {
    return (
        <Dropdown>
            <MenuButton><FontAwesomeIcon icon={faBars} /></MenuButton>
            <Menu>
                <MenuItem >Profile</MenuItem>
                <MenuItem >
                    Language settings
                </MenuItem>
                <MenuItem >Log out</MenuItem>
            </Menu>
        </Dropdown>
    )
}

export default HamburgerMenu