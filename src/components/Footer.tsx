import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/6 bg-black/20 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-tr from-orange-600 to-amber-400 font-serif text-lg font-bold text-white shadow-lg shadow-orange-500/10">
              <Image
                src="/ingredients.png"
                alt="Creamy Garlic Pasta"
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
          <p className="text-center text-xs text-slate-500 md:text-left">
            &copy; {new Date().getFullYear()} RecipeHub. All rights reserved.
            Created as a Frontend Assessment.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a className="hover:text-orange-400 transition-colors focus-ring cursor-pointer">
              Privacy Policy
            </a>
            <a className="hover:text-orange-400 transition-colors focus-ring cursor-pointer">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
