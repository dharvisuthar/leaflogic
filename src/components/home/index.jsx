import React from 'react'
import { useLayout } from '../../common/hooks';
import Header from '../Layout-UI/header'
import { MainContent } from '../Layout-UI/main-content';
import { Sidebar } from '../Layout-UI/sidebar/sidebar'
import { layoutStyle } from '../Layout-UI/sidebar/style';

const Home = () => {
    const { isOpen, setIsOpen } = useLayout();
    const classes = layoutStyle();

    return (
        <div>
            <Header />
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default Home