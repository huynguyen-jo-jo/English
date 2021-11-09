import {  Avatar, Dropdown } from '@douyinfe/semi-ui';
import  { Fragment } from 'react';


function User() {
    const click = () => {
        alert('click')
      }

    return (
        <Fragment>
            <Dropdown
            position={'bottomLeft'}
            render={
                <Dropdown.Menu>
                    <Dropdown.Item>See your profile</Dropdown.Item>
                    <Dropdown.Item>Setting</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Log out</Dropdown.Item>
                </Dropdown.Menu>
            }
        >
            <Avatar onClick={click} color='orange' size='small'>YJ</Avatar>
        </Dropdown>   
        </Fragment>
    )
}
export default User