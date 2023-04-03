import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

export const MainLayout = ({children}:PropsWithChildren) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>RomApps Next Project - Home</title>
      <meta name="description" content="Home page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <main className={styles.main}>
        <div>
            {children}
        </div>
    </main>
  </div>
  )
}
