'use client';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
const items: MenuProps['items'] = [
      {
            label: <a className='label' href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
            </a>,
            key: 'mail',
            icon: <MailOutlined />,

      },
      {
            label: <a className='label' href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
            </a>,
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
      },
      {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                  {
                        type: 'group',
                        label: 'Item 1',
                        children: [
                              {
                                    label: <a className='label' href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                          Navigation Four - Link
                                    </a>,
                                    key: 'setting:1',
                              },
                              {
                                    label: 'Option 2',
                                    key: 'setting:2',
                              },
                        ],
                  },
                  {
                        type: 'group',
                        label: 'Item 2',
                        children: [
                              {
                                    label: 'Option 3',
                                    key: 'setting:3',
                              },
                              {
                                    label: 'Option 4',
                                    key: 'setting:4',
                              },
                        ],
                  },
            ],
      },
      {
            label: (
                  <a className='label' href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                  </a>
            ),
            key: 'alipay',
      },
];

const TabBar: React.FC = () => {
      const [current, setCurrent] = useState('mail');

      const currentPath = usePathname();
      useEffect(() => {
            if (currentPath === '/') {
                  setCurrent('mail');
            } else if (currentPath === '/app') {
                  setCurrent('app');
            } else if (currentPath === '/SubMenu') {
                  setCurrent('SubMenu');
            } else if (currentPath === '/alipay') {
                  setCurrent('alipay');
            }
      }
      );


      const onClick: MenuProps['onClick'] = (e) => {
            console.log('click ', e);
            setCurrent(e.key);
      };

      return <Menu className='menuTab' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default TabBar;