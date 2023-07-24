import DocKelas from "@/public/DocKelas.png";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

const About: FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [windowWidth, setWindowWidth] = useState("100%");
  const [compWidth, setCompWidth] = useState("100%");
  const [compHeigth, setCompHeigth] = useState("100%");
  const [textPosition, setTextPosition] = useState("100%");
  const [textPositionSec, setTextPositionSec] = useState("100%");
  const [compMobilePosition, setCompMobilePosition] = useState("100%");
  const [compMobilePositionSec, setCompMobilePositionSec] = useState("100%");
  const [imgMobilePosition, setImgMobilePosition] = useState("100%");
  const [shadowMobileHeigth, setShadowMobileHeigth] = useState("100%");
  const [shadowMobilePosition, setShadowMobilePosition] = useState("100%");
  const [shadowMobilePositionSec, setShadowMobilePositionSec] = useState("100%");
  const [borderTopMobile, setBorderTopMobile] = useState("100%");
  const [borderX, setBorderX] = useState("100%");
  const [borderY, setBorderY] = useState("100%");
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeigth, setImageHeigth] = useState(0);
  const [containerHeigth, setContainerHeigth] = useState(0);

  const handlePlaybackChange = () => {
    if (videoRef.current) {
      const rollbackValue = videoRef.current.currentTime;
      videoRef.current.currentTime = rollbackValue;
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateWidth = () => {
        const windowWidth = document.documentElement.clientWidth;
        setWindowWidth(`${windowWidth}px`);

        if (windowWidth < 1920) {
          // Laptop
          const desiredWidth = windowWidth / 1.79899;
          const desiredHeigth = windowWidth / 1.83;
          const desiredBorderX = desiredWidth - desiredWidth / 1.11211;
          const desiredBorderY = desiredWidth / 2.165;
          const desiredImageWidth = windowWidth / 1.89;
          const desiredImageHeigth = desiredWidth / 2.17;
          setCompWidth(`${desiredWidth}px`);
          setCompHeigth(`${desiredHeigth}px`);
          setBorderX(`${desiredBorderX}px`);
          setBorderY(`${desiredBorderY}px`);
          setImageWidth(desiredImageWidth);
          setImageHeigth(desiredImageHeigth);
          // Smartphone
          const desiredTextPosition = windowWidth * 0.605;
          const desiredCompMobilePosition = windowWidth * 0.421;
          const desiredShadowHeigth = windowWidth * 0.25;
          const desiredShadowPosition = windowWidth * 0.3;
          const desiredBorderTopMobile = windowWidth * 0.111;

          // smartpohne heigth component
          if (windowWidth < 768) {
            if (imageRef.current) {
              const naturalHeight = imageRef.current.offsetHeight;
              const desiredContainer = naturalHeight * 2 + 70 * 4 * 2;
              setContainerHeigth(desiredContainer);
            }
          } else {
            if (imageRef.current) {
              const naturalHeight = imageRef.current.offsetHeight;
              const desiredContainer = naturalHeight * 2 + 75 * 4 * 2;
              setContainerHeigth(desiredContainer);
            }
          }

          //Image Bawah
          if (windowWidth < 768) {
            const desiredImgMobilePosition = windowWidth / 2.499 + 328;
            setImgMobilePosition(`${desiredImgMobilePosition}px`);
          } else {
            const desiredImgMobilePosition = windowWidth / 2.5 + 400;
            setImgMobilePosition(`${desiredImgMobilePosition}px`);
          }

          //shadow Bawah
          if (windowWidth < 768) {
            const desiredShadowPositionSec = windowWidth / 1.4 + 328;
            setShadowMobilePositionSec(`${desiredShadowPositionSec}px`);
          } else {
            const desiredShadowPositionSec = windowWidth / 1.43 + 400;
            setShadowMobilePositionSec(`${desiredShadowPositionSec}px`);
          }

          // Komponen Bawah Hijau
          if (windowWidth < 768) {
            const desiredCompMobilePosition = windowWidth / 1.219 + 328;
            setCompMobilePositionSec(`${desiredCompMobilePosition}px`);
          } else {
            const desiredCompMobilePosition = windowWidth / 1.219 + 400;
            setCompMobilePositionSec(`${desiredCompMobilePosition}px`);
          }

          //position text bawah
          if (windowWidth < 768) {
            const desiredTextPositionSec = windowWidth / 0.99 + 328;
            setTextPositionSec(`${desiredTextPositionSec}px`);
          } else {
            const desiredTextPositionSec = windowWidth / 0.99 + 400;
            setTextPositionSec(`${desiredTextPositionSec}px`);
          }

          setTextPosition(`${desiredTextPosition}px`);
          setCompMobilePosition(`${desiredCompMobilePosition}px`);
          setShadowMobileHeigth(`${desiredShadowHeigth}px`);
          setShadowMobilePosition(`${desiredShadowPosition}px`);
          setBorderTopMobile(`${desiredBorderTopMobile}px`);
        } else {
          const desiredWidth = 1920 / 1.8;
          const desiredBorderX = desiredWidth - desiredWidth / 1.11211;
          const desiredBorderY = desiredWidth / 2.15;
          const desiredImageWidth = 1920 / 1.9;
          const desiredImageHeigth = desiredWidth / 2.1652;
          setCompWidth(`${desiredWidth}px`);
          setBorderX(`${desiredBorderX}px`);
          setBorderY(`${desiredBorderY}px`);
          setImageWidth(desiredImageWidth);
          setImageHeigth(desiredImageHeigth);
        }
      };

      window.addEventListener("resize", updateWidth);
      updateWidth();

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  }, []);

  return (
    <>
      {/* LAPTOP */}
      <div className="mx-auto hidden max-w-[1920px] py-6 lg:block" style={{ height: compHeigth }}>
        {/* SubSection 1 */}
        <div className="relative flex w-full overflow-hidden" style={{ height: imageHeigth }}>
          <div
            className="absoulute left-0 z-40 border-r-transparent border-t-[#2F2B15]"
            style={{ width: compWidth, borderRightWidth: borderX, borderTopWidth: borderY }}
          >
            <div className="absolute top-8 w-[560px] pl-10 font-rubik text-[#FFF3B0] xl:top-14 xl:w-[650px] xl:pl-16 2xl:top-20 2xl:w-[920px] 2xl:pl-24">
              <h1 className="py-2 text-2xl font-bold xl:text-3xl 2xl:text-5xl ">
                Apa itu KSL UAJY?
              </h1>
              <p className="py-2 text-lg font-normal tracking-wider xl:text-xl 2xl:text-3xl">
                Kelompok Studi Linux (KSL) adalah kelompok studi yang berada dibawah naungan
                HIMAFORKA UAJY. Kelompok studi ini akan membahas berbagai topik yang berhubungan
                dengan GNU/Linux serta berbagai aplikasi yang sering digunakan sehari-hari sebagai
                pengguna OS Linux.
              </p>
            </div>
          </div>
          <div
            className="absolute right-0 top-0 bg-white object-bottom"
            style={{ width: imageWidth }}
          >
            <Image
              alt="kegiatan"
              className="w-[1011px] overflow-hidden"
              src={DocKelas}
              style={{ height: imageHeigth }}
            />
          </div>
        </div>
        {/* SubSection 2 */}
        <div className="relative flex w-full overflow-hidden" style={{ height: imageHeigth }}>
          <div className="overflow-hidden" style={{ width: imageWidth }}>
            <video autoPlay loop muted onEnded={handleVideoEnded} ref={videoRef}>
              <source src="docVideoCop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              {videoRef.current && (
                <input
                  max={videoRef.current.duration}
                  min="0"
                  onChange={handlePlaybackChange}
                  step="0.1"
                  type="range"
                  value={videoRef.current.currentTime}
                />
              )}
            </div>
          </div>
          <div
            className="absolute right-0 top-0 z-40 border-b-[#142521] border-l-transparent"
            style={{ width: compWidth, borderLeftWidth: borderX, borderBottomWidth: borderY }}
          >
            <div className="absolute right-0 top-8 w-[560px] pr-10 text-right font-rubik text-[#BAFFEF] xl:top-16 xl:w-[650px] xl:pr-16 2xl:top-20 2xl:w-[920px] 2xl:pr-24">
              <h1 className="py-2 text-2xl font-bold xl:text-3xl 2xl:text-5xl ">
                Apa yang dipelajari di sini?
              </h1>
              <p className="py-2 text-lg font-normal tracking-wider xl:text-xl 2xl:text-3xl">
                Kita akan membahas berbagai hal tentang Linux secara umum, mulai dari basic hingga
                networking dan peretasan etis. Belum bisa memakai Linux? Tidak apa-apa dan boleh
                banget untuk bergabung, kita akan belajar dari awal kok.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Smartphone */}
      <div className="relative w-screen lg:hidden " style={{ height: `${containerHeigth}px` }}>
        <Image
          alt="kegiatan"
          className="absolute"
          ref={imageRef}
          src={DocKelas}
          style={{ width: windowWidth }}
        />
        <div
          className="after:before absolute z-10 bg-gradient-to-t from-[#666323]  to-transparent"
          style={{ width: windowWidth, height: shadowMobileHeigth, top: shadowMobilePosition }}
        ></div>
        <div
          className="absolute z-20 h-80 border-l-[#2F2B15] border-t-transparent md:h-96"
          style={{
            width: windowWidth,
            borderLeftWidth: windowWidth,
            top: compMobilePosition,
            borderTopWidth: borderTopMobile,
          }}
        ></div>
        <div
          className="absolute left-0 z-30 font-rubik text-[#FFF3B0]"
          style={{ top: textPosition }}
        >
          <h1 className="text-center text-xl font-bold md:text-2xl ">Apa itu KSL UAJY?</h1>
          <p className="px-6 py-2 text-justify text-base font-normal md:px-12 md:py-4 md:text-lg">
            Kelompok Studi Linux (KSL) adalah kelompok studi yang berada dibawah naungan HIMAFORKA
            UAJY. Kelompok studi ini akan membahas berbagai topik yang berhubungan dengan GNU/Linux
            serta berbagai aplikasi yang sering digunakan sehari-hari sebagai pengguna OS Linux.
          </p>
        </div>
        <div
          className="absolute overflow-hidden"
          style={{ width: windowWidth, top: imgMobilePosition }}
        >
          <video autoPlay loop muted onEnded={handleVideoEnded} ref={videoRef}>
            <source src="docVideoCop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            {videoRef.current && (
              <input
                max={videoRef.current.duration}
                min="0"
                onChange={handlePlaybackChange}
                step="0.1"
                type="range"
                value={videoRef.current.currentTime}
              />
            )}
          </div>
        </div>
        <div
          className="after:before absolute z-10 bg-gradient-to-t from-[#3B655B]  to-transparent"
          style={{ width: windowWidth, height: shadowMobileHeigth, top: shadowMobilePositionSec }}
        ></div>
        <div
          className="absolute z-20 h-80 border-l-[#142521] border-t-transparent md:h-96"
          style={{
            width: windowWidth,
            borderLeftWidth: windowWidth,
            top: compMobilePositionSec,
            borderTopWidth: borderTopMobile,
          }}
        ></div>
        <div
          className="absolute left-0 top-[730px] z-30 font-rubik text-[#BAFFEF]"
          style={{ top: textPositionSec }}
        >
          <h1 className="text-center text-xl font-bold md:text-2xl ">
            Apa yang dipelajari di sini?
          </h1>
          <p className="px-6 py-2 text-justify text-base font-normal md:px-12 md:py-4 md:text-lg">
            Kita akan membahas berbagai hal tentang Linux secara umum, mulai dari basic hingga
            networking dan peretasan etis. Belum bisa memakai Linux? Tidak apa-apa dan boleh banget
            untuk bergabung, kita akan belajar dari awal kok.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
