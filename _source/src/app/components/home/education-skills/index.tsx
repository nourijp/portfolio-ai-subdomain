"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import pageDataJson from "../../../../../public/data/page-data.json";

const EducationSkills = () => {
  const educationData = pageDataJson?.educationData;

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Core Strengths & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-7 w-full">
              {educationData?.categories?.map((category: any, index: any) => (
                <div
                  key={index}
                  className="p-6 xl:p-8 border border-softGray rounded-lg flex flex-col gap-5"
                >
                  <h5>{category?.title}</h5>
                  <div className="flex flex-wrap gap-2.5">
                    {category?.skills?.map((skill: string, i: number) => (
                      <p
                        key={i}
                        className="bg-softGray py-2 px-4 w-fit rounded-full text-sm xl:text-base text-black"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
