import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
export default function Login() {
  const [show, setShow] = useState(false);

  //git login
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className="input-button">
            <button className={styles.button} type="button">
              Login
            </button>
          </div>
          <div className="input-button">
            <button className={styles.button_custom} type="button">
              SignIN with Google
            </button>
          </div>
          <div className="input-button">
            <button
              onClick={handleGithubSignin}
              className={styles.button_custom}
              type="submit"
            >
              SignIN with GitHub
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          don't have an account yet?
          <Link href={"/register"}>
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
