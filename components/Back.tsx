"use client";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useRouter } from 'next/navigation';

const BackButton = () => {
      const router = useRouter();

      const handleBack = () => {
            router.back();
      };

      return (
            <button className="flex flex-row align-middle justify-center items-center text-black gap-2 text-xl" onClick={handleBack}>
                  <IoMdArrowRoundBack />
                  Back
            </button>
      );
};

export default BackButton;
