import type { NextPage } from 'next'

import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'
import Project_preview from '../components/Project_preview';

const Home: NextPage = () => {
  return (
    <div>
        <Profile/>
        <div className="mt-4">
          <Project_preview/>
        </div>
        
    </div>
    
  )
}

export default Home
