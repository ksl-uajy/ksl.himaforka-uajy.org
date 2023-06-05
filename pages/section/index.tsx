import Image from "next/image";
import { FC } from "react";

import foto from "../../public/DocKelas.png";

const Section: FC = () => {
  return (
    <div className="bg-[#2F2B15]">
      <div className="flex w-full">
        <div className="w-[700px] -skew-x-12 bg-red-400"></div>
        <div>
          <Image src={foto} alt="Picture of the author" width={600} />
        </div>
      </div>
    </div>
  );
};

export default Section;
