import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kierans Website</title>
        <meta name="description" content="Kieran's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon.ico" />
      </Head>
      <main className="bg-background h-full w-full">
        <div>
          {/*drawer */}
          <div className="navbar border-b-8 border-secondary">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl" href="/">
                Home
              </a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end"></div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar drawer-button"
                  htmlFor="my-drawer-4"
                >
                  <div className="w-10 rounded-full">
                    <img src="./iconround.png" />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {" "}
              <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src="iconround.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div>
                    <h1 className="text-7xl text-primary text-right underline underline-offset-4 decoration-4">
                      Hi,
                    </h1>
                    <h1 className="text-5xl text-primary text-right underline underline-offset-4 decoration-4">
                      I'm Kieran
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-neutral text-base-content">
                {/*      <!-- Sidebar content here --> */}
                <li>
                  <Link className="link link-hover" href="/">
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link link-hover" href="/Projects">
                    <i class="fa-regular fa-diagram-project"></i>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="link link-hover" href="/Links">
                    <i class="fa-solid fa-link"></i>
                    Links
                  </Link>
                </li>
                <li>
                  <Link className="link link-hover" href="/About">
                    <i class="fa-solid fa-address-card"></i>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link link-hover" href="/Contact">
                    <i class="fa-solid fa-address-book"></i>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="link link-hover" href="/Wiki">
                    <i class="fa-solid fa-books"></i>
                    Wiki
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <footer className="footer p-10 text-base-content border-t-8 border-secondary">
            <div>
              <Link className="link link-hover" href="/">
                Home
              </Link>
              <Link className="link link-hover" href="/Projects">
                Projects
              </Link>
              <Link className="link link-hover" href="/Links">
                Links
              </Link>
            </div>
            <div>
              <Link className="link link-hover " href="/About">
                About Me
              </Link>
              <Link className="link link-hover " href="/Contact">
                Contact
              </Link>
              <Link className="link link-hover " href="/Wiki">
                Wiki
              </Link>
            </div>
            <div>
              <div className="grid grid-flow-col gap-4">
                <a href="https://discord.com/users/765288448059637781">
                  <i className="fa-brands fa-discord text-lg "></i>
                </a>
                <a href="">
                  <i className="fa-light fa-envelope text-lg "></i>
                </a>
                <a href="https://github.com/KDM121">
                  <i className="fa-brands fa-github text-lg "></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
