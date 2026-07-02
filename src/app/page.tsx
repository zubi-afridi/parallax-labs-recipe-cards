import BackgroundDecoration from "../components/BackgroundDecoration";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecipeGrid from "../components/RecipeGrid";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg-dark  text-slate-100 selection:bg-orange-500/30 selection:text-orange-200">
      <BackgroundDecoration />
      <Header />
      <main className="grow flex flex-col relative z-10 w-full">
        <Hero />
        <RecipeGrid />
      </main>
      <Footer />
    </div>
  );
}
