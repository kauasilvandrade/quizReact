import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <header>
          <h1 className="text-5xl font-bold mb-8">
            Questionário sobre React :)
          </h1>
        </header>
        <main className="bg-white rounded-4xl p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
