"use client";
import { useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import Image from "next/image";
import data from "@/app/data/data.json";
import Link from "next/link";
import ToTopButton from '../app/ToTopButton';
import ParticlesBackground from "./ParticlesBackground";
import "../app/assets/scss/main.scss"
import Contact from "../app/Contact"

export default function Home() {
  const lightboxRef = useRef(null);
  return (
    <>
      <section>
        <LightGallery ref={lightboxRef}>
          {data.map((item) => (
            <Link href={item.images} key={item.id}>
              <Image src={item.images} alt={item.items} width={200} height={200} />
              <p>{item.items}</p>
            </Link>
          ))}
        </LightGallery>
      </section>
      <ToTopButton />
      {/* <ParticlesBackground />*/}
      <Contact/>
    </>
  );
}