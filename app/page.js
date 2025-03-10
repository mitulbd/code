"use client";
import { useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import Image from "next/image";
import data from "@/app/data/data.json";
import Link from "next/link";
import ToTopButton from '../app/ToTopButton';
import "../app/assets/scss/main.scss"

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

      {/**
       * 
      
       $('.wpcf7-tel').on('input', function () {
    let num = $(this).val().replace(/\D/g, '').slice(0, 10);
    $(this).val(num.replace(/(\d{3})(\d{3})?(\d{4})?/, (_, a, b, c) => c ? `(${a}) ${b}-${c}` : b ? `(${a}) ${b}` : a));
  });

  $('.wpcf7-quiz').on('input', function () {
    $(this).val($(this).val().replace(/\D/g, '').slice(0, 2));
  });

  $('input[name="your-name"]').on('input', function () {
    $(this).val($(this).val().replace(/[^a-zA-Z\s]/g, ''));
  });

  $('.wpcf7-email').on('input', function () {
    $(this).val($(this).val().replace(/\s/g, ''));
  })

  $('.wpcf7-form-control').on('input', function () {
    let value = $(this).val();
    if ($(this).is('textarea')) {
      value = value.replace(/ {2,}/g, ' '); // Allow line breaks, remove extra spaces
    } else {
      value = value.replace(/\s{2,}/g, ' ').trimStart(); // Remove multiple spaces
    }
    $(this).val(value);
  });

       * 
      */}
    </>
  );
}