"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Recipe } from "../types/recipe";
interface RecipeCardProps {
  recipe: Recipe;
}
export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleExpand();
    }
  };
  return (
    <motion.article
      role="button"
      tabIndex={0}
      onClick={toggleExpand}
      onKeyDown={handleKeyDown}
      aria-expanded={isExpanded}
      aria-controls={`ingredients-${recipe.id}`}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="group flex flex-col overflow-hidden rounded-2xl glass-card cursor-pointer focus-ring text-left w-full h-full"
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
        >
          <Image
            src={recipe.image}
            alt={`Gourmet dish: ${recipe.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
        <span className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
          Recipe
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-400 flex-1">
          {recipe.shortDescription}
        </p>
        <div className="mt-6 flex items-center justify-between rounded-xl bg-white/5 border border-white/5 py-2.5 px-4 text-xs font-semibold text-slate-200 transition-all group-hover:bg-orange-500/10 group-hover:border-orange-500/20 group-hover:text-orange-300">
          <span>{isExpanded ? "Hide Ingredients" : "View Ingredients"}</span>
          <motion.svg
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="w-4 h-4 text-slate-400 group-hover:text-orange-300 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`ingredients-${recipe.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="overflow-hidden bg-black/20 border-t border-white/4"
          >
            <div className="px-6 py-5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-3.5">
                Required Ingredients
              </h4>
              <ul className="space-y-2.5">
                {recipe.ingredients.map((ingredient, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    className="flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-orange-500 to-amber-400 shadow-sm shadow-orange-500/50" />
                    <span>{ingredient}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
