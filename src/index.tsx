import "uno.css";
import { render } from "solid-js/web";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <>
      <main class="flex h-screen justify-center items-center">
        <div class="flex flex-col gap-4 justify-center items-center">
          <img
            src="/assets/logo.svg"
            alt="Millennium Logo"
            class="sm:w-64 w-48 select-none pointer-events-none"
          />
          <h1 class="sm:text-4xl text-2xl text-white text-center font-300 tracking-wider select-none">
            MILLENNIUM | NETWORK
          </h1>
        </div>
      </main>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
