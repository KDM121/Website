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
              {" "}
              {/* Main*/}
              <div class="hero min-h-screen">
                <div class="hero-content text-center text-xl">
                  <div class="max-w-2xl">
                    <h1 class="text-6xl overline font-bold py-6">About Me</h1>
                    <p class="py-2">
                      Hello, my name is Kieran and welcome to my website.
                    </p>
                    <p className="py-2">
                      As a computer science student and technology enthusiast, I
                      have been deeply passionate about computers and related
                      technologies for the past five years.
                    </p>
                    <p className="py-2">
                      During my free time, I enjoy discovering and implementing
                      various projects on my personal server. Homelabbing has
                      become a passionate hobby of mine, and this website serves
                      as a platform for sharing these projects and providing
                      convenient access to all of them in one central location.
                    </p>
                    <p className="py-2">
                      I take pleasure in creating, renovating, and restoring old
                      devices. Instead of turning them into e-waste, I prefer to
                      breathe new life into them. Over the years, I have built
                      numerous computers and helped others do the same. It
                      brings me joy to find new uses for old hardware and keep
                      them from going to waste.
                    </p>
                    <div className="border-b border-white my-4"></div>
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
                    <i class="fa-regular fa-diagram-project"></i>
                    <h1 className="link link-hover">Projects</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Links">
                    <i class="fa-solid fa-link"></i>
                    <h1 className="link link-hover">Links</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/About">
                    <i class="fa-solid fa-address-card"></i>
                    <h1 className="link link-hover">About</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Contact">
                    <i class="fa-solid fa-address-book"></i>
                    <h1 className="link link-hover">Contact</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/*Footer*/}
          <footer className="footer p-10 text-base-content border-t-8 border-primary">
            <div>
              <Link href="/" className="link link-hover">
                Home
              </Link>
              <Link href="/Projects" className="link link-hover">
                Projects
              </Link>
              <Link href="/Links" className="link link-hover">
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
            </div>
            <div>
              <div className="grid grid-flow-col gap-4">
                <a href="https://discord.com/users/765288448059637781">
                  <i className="fa-brands fa-discord text-xl "></i>
                </a>
                <a href="http://mcdonnell.cc/">
                  <i className="fa-light fa-envelope text-xl "></i>
                </a>
                <a href="https://github.com/KDM121">
                  <i className="fa-brands fa-github text-xl "></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
