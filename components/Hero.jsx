"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownLine,
} from "react-icons/ri";

// Components
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 sm:h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Left Content */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="sm:text-6xl text-4xl leading-[45px] font-bold sm:leading-[65px] sm:tracking-[-2px] mb-6"
            >
              Hi, I'm Maryam Fatima
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="subtitle max-w-[490px] mx-auto xl:mx-0"
            >
              I design and develop modern, responsive, and scalable
              applications for web and mobile.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 mt-8"
            >
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1teT6hFOmylsnzQTTQ9uEmHsreYrP3x4O/view?usp=drive_link"
                target="_blank"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden xl:flex relative justify-center items-center w-[520px]"
          >
            {/* Badge 1 */}
            <Badge
              conatainerStyles="absolute top-[18%] -left-16 z-20"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Core Specialties"
            />

            {/* Badge 2 */}
            <Badge
              conatainerStyles="absolute bottom-8 left-0 z-20"
              icon={<RiTodoFill />}
              endCountNum={6}
              badgeText="Finished Projects"
            />

            {/* Badge 3 */}
            <Badge
              conatainerStyles="absolute top-[48%] -right-10 z-20"
              icon={<RiTeamFill />}
              endCountNum={3}
              badgeText="Tech Stacks"
            />

            {/* Animated Glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[430px] h-[430px] rounded-full bg-primary/25 blur-3xl"
            />

            {/* Gradient Ring */}
            <div className="relative p-[8px] rounded-full bg-gradient-to-br
from-orange-300
via-primary
to-red-500 shadow-[0_0_50px_rgba(254,107,87,0.55)]">
              <motion.img
                src="/hero/smileprofile.png"
                alt="Maryam Fatima"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="w-[340px] h-[340px] rounded-full object-cover border-[8px] border-background"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-6 animate-bounce">
          <RiArrowDownLine className="text-2xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;