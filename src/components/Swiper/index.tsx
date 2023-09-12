import { FaArrowRight } from "react-icons/fa";
import Button from "../../components/Button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import img from "../../assets/background.png";
const SwiperPage = ({
  title,
  subTitle,
  description,
  url,
}: {
  title: string;
  subTitle: String;
  description: String;
  url: any;
}) => {
  return (
    <div className="md:bg-purpleColor">
      {/* background */}
      <div className="motion-safe:animate-pulse flex flex-col relative lg:w-[98vw] mx-auto md:h-[60vh]">
        <div className="sm:space-y-2 md:space-y-8 h-[100%] p-6 txtShadow">
          <p className="text-white font-black text-xl animate-bounce">
            {title}
          </p>

          <p className="font-semibold text-white text-md sm:text-lg md:text-xl lg:text-2xl">
            {subTitle}
          </p>
          <p className="text-white text-sm sm:text-sm md:text-md lg:text-lg p-">
            {description}
          </p>
          <div className="md:flex w-full md:w-11/12 lg:w-2/3 xl:w-1/2 gap-12 sm:translate-y-8 md:translate-y-12 lg:translate-y-24 space-y-2 md:space-y-0 mx-0 ">
            <Button
              text="View Academic Structure"
              className="bg-purpleColor md:p-4  xl:px-12 px-4 sm:px-14 rounded-lg text-white p-2 "
              icon={<FaArrowRight />}
            />
            <Button
              text="Student or Staff? Use Portal"
              className="text-purpleColor md:p-4 xl:px-16 p-2 sm:px-16 px-6 rounded-lg bg-[#D9D9D9]  border border-purpleColor"
            />
          </div>
        </div>
        <div className="absolute -z-20 w-[100%] h-[110%] ">
          <Image
            src={url}
            alt="image"
            fill
          />
        </div>
      </div>
      <div className="h-32 w-full hidden sm:block"></div>
    </div>
  );
};
export default SwiperPage;