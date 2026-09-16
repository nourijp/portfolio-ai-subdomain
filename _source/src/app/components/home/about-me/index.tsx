import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <div className="flex flex-col gap-4">
                  <p>
                    I&rsquo;m an AI Product {"&"} Design Technologist with 14+ years of experience across technology, communications, digital products, education, and user-centered content.
                  </p>
                  <p>
                    A lot of my work starts the same way: I notice friction in a workflow, figure out what people actually need, prototype a solution, test it, and keep improving it until it becomes genuinely useful.
                  </p>
                  <p>
                    Recently, I&rsquo;ve built 50+ web, mobile, automation, educational, and internal tools&mdash;including multilingual collaboration systems, voice interfaces, local-AI document pipelines, creative production tools, knowledge-management systems, and hardware/software integrations.
                  </p>
                  <p>
                    I&rsquo;m especially interested in the space between product thinking and implementation: taking an idea from &ldquo;this should work better&rdquo; to something people can actually use.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "14+", label: "Years Experience" },
                    { count: "3.2M+", label: "Content Views" },
                    { count: "44K+", label: "Audience & Followers" },
                    { count: "50+", label: "Recent Builds" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Japanese", "Farsi"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
