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
              <div className="grid grid-cols-3 grid-flow-rows gap-4">
                <div class="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/qr-codes/seafile_QR.png"
                      alt="QR code for seafile"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">Seafile</h2>
                    <p>seafile.kieranmcdonnell.com</p>
                    <p>km27.uk/seafile</p>
                    <div class="card-actions justify-end">
                      <a
                        target="_blank"
                        href="https://seafile.kieranmcdonnell.com/"
                      >
                        <button class="btn btn-primary">Go to</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card lg:card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/qr-codes/status-qr.png"
                      alt="QR code for seafile"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">Uptime Kuma</h2>
                    <p>status.kieranmcdonnell.com </p>
                    <p>km27.uk/status</p>
                    <div class="card-actions justify-end">
                      <a
                        target="_blank"
                        href="https://status.kieranmcdonnell.com/"
                      >
                        <button class="btn btn-primary">Go to</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div>3</div>
                <div>4</div>
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
