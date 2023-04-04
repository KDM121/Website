export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("418-error.svg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-slate-900/70 border-secondary border-8 rounded-lg">
            <h1 className="mb-5 text-5xl font-bold">418</h1>
            <p>I'm a teapot!</p>
            <p className="mb-5 ">Maybe go back and try again?</p>
            <button className="btn btn-primary">
              <a href="/">Home</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
