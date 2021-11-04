import { Layout, Nav, Button, Avatar, Input, } from '@douyinfe/semi-ui';
import { IconFaceuLogo, IconBell, IconHelpCircle, IconHome, IconLive, IconSetting, IconSearch } from '@douyinfe/semi-icons';


function Header() {
    const { Header } = Layout
    return  (
        <Header style={ { backgroundColor: 'var(--semi-color-bg-1)' } }>
          <div>
            <Nav mode='horizontal' defaultSelectedKeys={['Home']}>
              <Nav.Header>
                <IconFaceuLogo style={{ fontSize: 36 }} />
              </Nav.Header>
              <Nav.Item itemKey='Home' text='Home' icon={<IconHome size="large" />} />
              <Nav.Item itemKey='Live' text='Short moment' icon={<IconLive size="large" />} />
              <Nav.Item itemKey='Setting' text='Setting' icon={<IconSetting size="large" />} />
              <Nav.Item itemKey='Search'> 
                <Input   suffix={<IconSearch />} showClear></Input>
              </Nav.Item>
              <Nav.Footer>
                <Button
                  theme="borderless"
                  icon = {<IconBell size="large"/>}
                  style={{
                    color:'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Button
                  theme="borderless"
                  icon = {<IconHelpCircle size="large"/>}
                  style={{
                    color:'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Avatar color='orange' size='small'>YJ</Avatar>
              </Nav.Footer>
            </Nav>
          </div>
        </Header>
    )
}

export default Header