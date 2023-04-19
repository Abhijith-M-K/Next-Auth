import Head from "next/head"
import Layout from "@/layout/layout";
import Link from "next/link";
import styles from '../styles/Form.module.css'
import { HiAtSymbol,HiFingerPrint,HiOutlineUser} from "react-icons/hi";
import { useState } from "react";

export default function Register(){
    const [show,setShow] =useState(false)
    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem Ipsum is simply dummy 
           
          </p>
        </div>
        <form className="flex flex-col gap-5">
        <div className={styles.input_group}>
            <input className={styles.input_text} type="text" name="Username" placeholder="Username" />
            <span className="icon flex items-center px-4"><HiOutlineUser size={25}/></span>
          </div>
          <div className={styles.input_group}>
            <input className={styles.input_text} type="email" name="email" placeholder="Email" />
            <span className="icon flex items-center px-4"><HiAtSymbol size={25}/></span>
          </div>
          <div className={styles.input_group}>
            <input className={styles.input_text} type={`${show ? "text":"password"}`} name="password" placeholder="Password" />
            <span className="icon flex items-center px-4" onClick={()=>setShow(!show)}><HiFingerPrint size={25}/></span>
          </div>
          <div className={styles.input_group}>
            <input className={styles.input_text} type={`${show ? "text":"password"}`} name="cpassword" placeholder="Confirm Password" />
            <span className="icon flex items-center px-4" onClick={()=>setShow(!show)}><HiFingerPrint size={25}/></span>
          </div>
          <div className="input-button">
            <button className={styles.button} type="button">Register</button>
          </div>
         
        </form>
        <p className="text-center text-gray-400">
            don't have an account yet?<Link href={'/register'}><span className="text-blue-700">Sign Up</span></Link>
        </p>
      </section>
        </Layout>
    )
}