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
              <div class="carousel carousel-center rounded-box">
                <div class="carousel-item">
                  <img src="/carousel/Nginx.png" alt="Nginx" />
                </div>
                <div class="carousel-item">
                  <img src="/carousel/Seafile.png" alt="Seafile" />
                </div>
                <div class="carousel-item">
                  <img src="/carousel/Truenas.png" alt="Truenas core" />
                </div>
                <div class="carousel-item">
                  <img src="/carousel/Uptime.png" alt="Uptime Kuma" />
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                    alt="Pizza"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
                    alt="Pizza"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                    alt="Pizza"
                  />
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
                    <h1 className="link link-hover">About</h1>
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
