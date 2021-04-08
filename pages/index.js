import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PriceTable from './component/PriceTable'
import NavBar from './component/NavBar/NavBar'
import ProductPageBody from './component/ProductPageBody/ProductPageBody'


const Home = () => {
    return (
<>
	<div><NavBar/></div>
	<div><ProductPageBody/></div>
	</>
	)
	}

export default Home;
