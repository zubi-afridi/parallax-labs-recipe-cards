import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/6 bg-bg-dark/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-tr from-orange-600 to-amber-400 font-serif text-lg font-bold text-white shadow-lg shadow-orange-500/10">
            <Image
              src="/ingredients.png"
              alt="RecipeHub logo"
              width={100}
              height={100}
              className="rounded-lg size-8"
            />
          </div>
          <div className="flex flex-col">
            <span className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-sm font-bold tracking-widest text-transparent uppercase">
              RecipeHub
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold leading-tight">
              by Zubair Khan
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-4" aria-label="Header Navigation">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
