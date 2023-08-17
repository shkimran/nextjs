'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter();
  const navigate=(page)=>{
   router.push(page)
  }
  return (
    <main className={styles.main}>
      {/* <button onClick={()=>{fun1('clicked')}}>click me</button> */}
      <h1>Main page</h1>
      <Link href={"home1"}>Home</Link> <br/> 
      <Link href={"about"}>about us</Link><br/> 
      <button onClick={()=>navigate('/home1')}>Go to home </button>
      <button onClick={()=>navigate('/about')}>Go to about </button>
      <button onClick={()=>navigate('/product')}>Go to product </button>
      <button onClick={()=>navigate('/product2')}>Go to product2 </button>
    </main>
  )
}
