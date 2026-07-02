"use client";

import { motion } from "motion/react";
import { containerVariants, itemVariants } from "./HeroAnimations";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-12 text-center sm:px-8 sm:pt-24 sm:pb-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6"
      >
        <div className="absolute top-1/2 left-1/2 -z-10 h-[150px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[80px]" />

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-sans"
        >
          Discover{" "}
          <span className="bg-linear-to-r from-orange-500 via-amber-400 to-amber-300 bg-clip-text text-transparent">
            Delicious
          </span>{" "}
          Recipes
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl"
        >
          Explore carefully selected recipes made with fresh ingredients and
          simple cooking techniques. Crafted to inspire your inner chef.
        </motion.p>
      </motion.div>
    </section>
  );
}
