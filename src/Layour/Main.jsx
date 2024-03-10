import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Container from '../Shared/Container';

const Main = () => {
    return (
        <Container>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </Container>
    );
};

export default Main;