import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'
import Project_preview from '../components/Project_preview';
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="text-slate-700 font-sans flex flex-col gap-7">
        <Header/>
        <Profile/>
        <Project_preview/>
        <Footer/>
      </div>

    </Layout>
    
  )
}

export default Home
