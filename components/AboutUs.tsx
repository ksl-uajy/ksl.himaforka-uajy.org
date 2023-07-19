import React from "react";
import { FC, useEffect, useState } from "react";

const AboutUs: FC = () => {
  return (
    <div className="container mx-auto px-6 font-rubik md:px-0">
      <h1 className="py-4 text-xl font-bold text-[#FAFFC4] md:text-3xl">Tentang Kami</h1>
      <p className="text-base text-white md:text-xl">
        Kelompok Studi Linux (KSL) adalah kelompok studi yang mempelajari tentang dasar-dasar dan
        konsep dari kernel/sistem operasi berbasis GNU/Linux. KSL UAJY didirikan pada 23 Februari
        2002 (?) dan berdiri dibawah naungan HIMAFORKA UAJY. Di kelompok studi ini, Anda dapat
        belajar berbagai ilmu yang tidak diajarkan semasa kuliah, tetapi cukup esensial seperti cara
        memakai Git, cara memakai terminal, dan perangkat lunak lainnya. Di sini, Anda juga akan
        menjelajahi berbagai jenis pelajaran seperti linux, networking, peretasan etis, dan lainnya.{" "}
      </p>
    </div>
  );
};

export default AboutUs;
