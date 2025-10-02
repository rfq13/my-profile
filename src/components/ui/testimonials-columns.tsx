"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 rounded-2xl glass-card-light border border-neutral-200 dark:border-neutral-700 shadow-lg max-w-xs w-full hover:scale-105 transition-transform duration-300" key={i}>
                  <div className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-600"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-neutral-900 dark:text-neutral-50 text-sm">{name}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};