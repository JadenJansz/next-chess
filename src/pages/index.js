import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ContextProvider } from '../hooks/ContextProvider';
import App from '../components/App';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </DndProvider>
  )
}
