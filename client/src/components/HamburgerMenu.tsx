import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import { Modal } from '@mui/base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function HamburgerMenu() {
    const [userSettings, setUserSettings] = useState(false);
    const handleUserSettings = () => setUserSettings(!userSettings);
    const handleCloseModal = () => setUserSettings(false);
    const handleModalClick = (e: any) => {
        e.stopPropagation();
    };

    return (
        <div>
            <Dropdown>
                <MenuButton><FontAwesomeIcon icon={faBars} /></MenuButton>
                <Menu className='bg-lightRed rounded p-4'>
                    <MenuItem>
                        <button className='flex flex-row gap-1 items-center'
                            onClick={handleUserSettings}>
                            <FontAwesomeIcon icon={faToolbox} />
                            <p>User Settings</p>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className='flex flex-row gap-1 items-center'
                            onClick={() => { location.href = '/' }}>
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <p>Signout</p>
                        </button>
                    </MenuItem>
                </Menu>
            </Dropdown>
            {userSettings && (
                <div className="overlay" onClick={handleCloseModal}></div>
            )}
            <Modal
                open={userSettings}
                onClose={handleCloseModal}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onBackdropClick={handleCloseModal} // Close modal when backdrop (outside modal) is clicked
            >
                <div className='bg-lightRed p-4 rounded' onClick={handleModalClick}>
                    <p> Hello </p>
                </div>
            </Modal>
            <style >{`
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
                    z-index: 999; /* Ensure it's above everything else */
                }
            `}</style>
        </div>
    )
}

export default HamburgerMenu;
