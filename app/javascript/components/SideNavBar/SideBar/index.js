import React from 'react';
import { SideBarItem } from './SideBarItem';
import { Menu } from 'semantic-ui-react';

export function SideBar (props) {
    return (
      <Menu vertical className='side-nav'>
        <SideBarItem label='Home' />
        <SideBarItem label='Questions'/>
        <SideBarItem label='News' />
        <SideBarItem label='Contact' />
      </Menu>
    );
}
