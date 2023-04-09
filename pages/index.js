import Head from "next/head";
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
              {/* Main content*/}
              <div className="hero pt-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div>
                    <h1 className="text-7xl text-primary text-center underline underline-offset-4 decoration-4 py-2">
                      Hi,
                    </h1>
                    <h1 className="text-5xl text-primary text-center underline underline-offset-4 decoration-4 py-2">
                      I'm Kieran
                    </h1>
                    <h1 className="text-3xl text-primary text-center underline underline-offset-4 decoration-4 py-2">
                      Welcome to my website!
                    </h1>
                    <div className="grid grid-flow-col py-8 justify-center">
                      <a href="https://discord.com/users/765288448059637781">
                        <i className="fa-brands fa-discord text-4xl hover:animate-bounce px-6"></i>
                      </a>
                      <a href="http://mcdonnell.cc/">
                        <i className="fa-light fa-envelope text-4xl hover:animate-bounce px-6"></i>
                      </a>
                      <a href="https://github.com/KDM121">
                        <i className="fa-brands fa-github text-4xl hover:animate-bounce px-6"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero">
                <div className="hero-content text-center text-4xl py-16">
                  <div className="grid grid-rows-2 gap-7">
                    <div className="grid grid-cols-2 gap-7">
                      <Link
                        className="btn-wide bg-slate-900 border-8 rounded-lg border-secondary py-2 hover:underline hover:decoration-4"
                        href="/Projects"
                      >
                        <i className="fa-regular fa-diagram-project pr-2"></i>
                        Projects
                      </Link>
                      <Link
                        className="btn-wide bg-slate-900 border-8 rounded-lg border-secondary py-2 hover:underline hover:decoration-4"
                        href="/Links"
                      >
                        <i className="fa-solid fa-link pr-2"></i>
                        Links
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                      <Link
                        className="btn-wide bg-slate-900 border-8 rounded-lg border-secondary py-2 hover:underline hover:decoration-4"
                        href="/About"
                      >
                        <i className="fa-solid fa-address-card pr-2"></i>
                        About Me
                      </Link>
                      <Link
                        className="btn-wide bg-slate-900 border-8 rounded-lg border-secondary py-2 hover:underline hover:decoration-4"
                        href="/Contact"
                      >
                        <i className="fa-regular fa-address-book pr-2"></i>
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-neutral/60 text-base-content border-x-info border-x-8 bg-gradient-to-b from-primary/60 to-secondary/60">
                {/*      <!-- Sidebar content here --> */}
                <li>
                  <Link href="/">
                    <i className="fa-solid fa-house-chimney"></i>
                    <h1 className="link link-hover">Home</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Projects">
                    <i className="fa-regular fa-diagram-project"></i>
                    <h1 className="link link-hover">Projects</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Links">
                    <i className="fa-solid fa-link"></i>
                    <h1 className="link link-hover">Links</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/About">
                    <i className="fa-solid fa-address-card"></i>
                    <h1 className="link link-hover">About Me</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Contact">
                    <i className="fa-solid fa-address-book"></i>
                    <h1 className="link link-hover">Contact</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
