"use client";
import { motion } from "motion/react";
import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";
export default function RecipeGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 items-stretch"
      >
        {recipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            variants={itemVariants}
            className="flex w-full"
          >
            <RecipeCard recipe={recipe} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
