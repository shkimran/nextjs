'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'
import './about.css';
 
export default function layout ({children}){
    const router=useRouter();
    const pathName=usePathname(); 
    console.log(pathName); //pathname stored 
    return (
  <div>
{
    pathName!=="/about/aboutcollege"? //conditional rendering
    <ul className='aboutnav'>
    <li><h3>Logo here</h3></li>
    <li><Link href={'/about'}>About main</Link></li>
    <li><Link href={'/about/aboutstudent'}>About student</Link></li>
    <li><Link href={'/about/aboutcollege'}>About college</Link></li>

</ul>
:null //instead of null you can also show anything you want

}

  {/* <button onClick={()=>router.push('/about')}>about</button>
  <button onClick={()=>router.push('/about/aboutstudent')}>about student</button>
    <button onClick={()=>router.push('/about/aboutcollege')}>about college</button> */}
     <div style={{textAlign:'center'}}> {children}</div>
  </div>
    )
  }
  