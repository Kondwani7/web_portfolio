import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="text-slate-700 font-sans flex flex-col gap-7">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>

    </Layout>
  )
}

export default MyApp
