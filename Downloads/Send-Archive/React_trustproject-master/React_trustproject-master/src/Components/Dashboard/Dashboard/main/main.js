import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, Redirect } from 'react-router-dom';

import Card from '../Card/card';
import Table from '../Table/table';
import AddPost from '../../AddPost/addPost';
import ListPost from '../../ListPost/listPost';
import 'antd/dist/antd.css';
import './main.module.css';
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UserOutlined,
	UploadOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Main = ({data}) => {
	const [ viewl, setViewl ] = useState('Dashboard');

	let display;
	if (viewl == 'Dashboard') {
		display = (
			<div>
				<Card /> <Table />
			</div>
		);
	} else if (viewl == 'AddPost') {
		display = <AddPost />;
	} else if (viewl == 'listPost') {
		display = <ListPost />;
	}
	return (
		<div>
			<Layout>
				<Sider
					style={{
						overflow: 'auto',
						height: '100%',
            position: 'fixed',
            paddingTop:"5%",
						left: 0
					}}
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '4' ]}>
						<Menu.Item key="1" onClick={() => setViewl('Dashboard')} icon={<UserOutlined />}>
							{/* <Link to="/">Dashboard</Link> */}
							Dashboard
						</Menu.Item>
						<Menu.Item key="2" onClick={() => setViewl('AddPost')} icon={<VideoCameraOutlined />}>
							{/* <Link to="/addposts">Add Post</Link> */}
							Add Post
						</Menu.Item>
						<Menu.Item key="3" onClick={() => setViewl('listPost')} icon={<UploadOutlined />}>
							{/* <Link to="/listposts">List Post</Link> */}
							List Post
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout" style={{ marginLeft: 200 }}>
					<Header className="site-layout-background" style={{ padding: 0 }} />
					<Content className="site-layout" style={{ padding: '0 50px' }}>
						<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
							{display}
						</div>
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};

export default Main;
