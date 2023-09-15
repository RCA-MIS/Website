"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType} from 'swiper';
import Button from "../components/Button";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import risa from "../assets/RISALogo.png";
import rtb from "../assets/logo2.png";
import giz from "../assets/gizLogo.png";
import mineduc from "../assets/mineduc.png";
import minict from "../assets/minict.png";
import koica from "../assets/koica.png";
import nesa from "../assets/nesalogo.png";
import reb from "../assets/rebLogo.png";
import wbank from "../assets/worldBank.png";
import abank from "../assets/africaBank.png";
import Image, { StaticImageData } from "next/image";
import Card from "../components/card";
import mission from "../assets/mission.png";
import vission from "../assets/vision.png";
import goals from "../assets/goal.png";
import mainImg from "../assets/studentOne.png";
import img2 from "../assets/newThree.png";
import { pathData } from "../data/adminPath";
import Mainarticle from "../components/News/Mainarticle";
import StatView from "../components/stats";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NewsComponent from "../app/news/components/NewsComponent/NewsComponent";
import { SwiperNavigation } from "../utils/swiper";
import { useEffect, useRef, useState } from "react";
import Pathvec from "../assets/vectors/Pathvec";
import Numgraph from "../assets/vectors/Numgraph";
import { swipersInfo } from "../data";
import SwiperPage from "../components/Swiper";
import Trapezium from "../assets/vectors/Trapezium";
const HomePage = () => {
  const swiperRef = useRef<SwiperType>();
  const counterRef = useRef(null);
  const [isInViewPort, setIsInViewPort] = useState(false);
  let [years, setYears] = useState(0);
  let [projects, setProjects] = useState(0);
  let [graduates, setGraduates] = useState(0);
  let [partner, setPartner] = useState(0);
  const partners: string[] = [
    "images/studentsOne.png",
    "images/studentsOne.png",
  ];
  const sliders: StaticImageData[] = [mainImg, img2];
  const swiper = new SwiperNavigation(sliders);
  useEffect(() => {
    if (isInViewPort) {
      setInterval(() => {
        if (years < 6) {
          setYears(years++);
        }
      }, 1100);
    }
  }, [isInViewPort]);
  useEffect(() => {
    if (isInViewPort) {
      setInterval(() => {
        if (partner < 7) {
          setPartner(partner++);
        }
      }, 1200);
    }
  }, [isInViewPort]);
  useEffect(() => {
    if (isInViewPort) {
      setInterval(() => {
        if (graduates < 121) {
          setGraduates(graduates++);
        }
      }, 100);
    }
  }, [isInViewPort]);
  useEffect(() => {
    if (isInViewPort) {
      setInterval(() => {
        if (projects < 15) {
          setProjects(projects++);
        }
      }, 600);
    }
  }, [isInViewPort]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewPort(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    }
  }, []);
  const handleSetNewsPaper = ()=>{
    // console.log("newspaper set")
  }
  return (
      <>
        <div className="">
          <Navbar/>
          <Swiper
            autoplay={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {swipersInfo.map((swiper, index) => {
              return (
                <SwiperSlide key={index}>
                  <SwiperPage
                    title={swiper.title}
                    subTitle={swiper.subTitle}
                    description={swiper.description}
                    url={swiper.url}
                    key={index}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Stake holder */}
          <div className="w-full bg-white ">
            <div className="md:space-y-8 space-y-4 py-2 md:py-12">
              <h3 className="p-4 md:p-0text-textGray md:text-center text-2xl font-semibold">
                Stakeholders and partners
              </h3>
              <p className="p-4 md:p-0 text-start md:text-center text-md text-[#4343436E] md:px-[50px] xl:px-[250px]">
                Our Strong Collaborative Network: Rwanda Coding Academy is proud to
                be backed by esteemed partners and shareholders,including the
                African Development Bank, World Bank, KOICA, MINICT (Ministry of
                ICT), MINEDUC (Ministry of Education), NESA (National Examination
                and School Inspection Authority), and RISA (Rwanda Information
                Society Authority). Together, we are shaping Rwanda's tech future.
              </p>
              <div className=" grid grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-5 space-y-4 mx-8 sm:mx-40 lg:mx-64">
                <Image src={abank} alt="partner image" width={100} height={80} />
                <Image src={wbank} alt="partner image" width={100} height={80} />
                <Image src={koica} alt="partner image" width={100} height={80} />
                <Image src={nesa} alt="partner image" width={100} height={80} />

                <Image src={risa} alt="partner image" width={100} height={80} />
                <Image src={giz} alt="partner image" width={100} height={80} />

                <Image src={rtb} alt="partner image" width={100} height={80} />
                <Image src={reb} alt="partner image" width={100} height={80} />
                <Image src={mineduc} alt="partner image" width={100} height={80} />
                <Image src={minict} alt="partner image" width={100} height={80} />
              </div>
            </div>
            <div className="w-full lg:flex ">
              <div className="basis-1/2 bg-white relative py-12 px-12 sm:px-28 ">
                <div className="h-[315px]  sm:h-[450px] md:h-[630px] lg:h-[430px] w-[290px] sm:w-[390px] md:w-[450px] lg:w-[320px] xl:w-[581px] relative">
                  <Image src={mainImg} fill alt="img1" className="rounded-2xl"/>
                </div>
                <div className="h-[200px] sm:h-[320px] lg:h-[190px] md:h-[400px] xl:h-[270px] w-[157px] sm:w-[277px] md:w-[304px] lg:w-[250px] xl:w-[404px] absolute z-20 -translate-y-[270px] lg:-translate-y-[270px] sm:-translate-y-[390px] md:-translate-y-[550px] xl:-translate-y-[350px] translate-x-[175px] md:translate-x-[320px] lg:translate-x-[150px] xl:translate-x-[250px] border-8 rounded border-white ">
                  <Image src={img2} alt="img2" className="rounded-2xl" fill />
                </div>
              </div>
              {/* about us */}
              <div className="basis-1/2 p-4 space-y-8">
                <p className="text-purpleColor font-medium text-lg  text-start ">
                  MORE ABOUT US
                </p>
                <h4 className="text-textGray text-3xl font-semibold pr-20">
                  Get To Know More About Our Excellent School
                </h4>
                <p className="text-[#4343436E] text-md ">
                  At Rwanda Coding Academy, we laser-focus on two core fields:
                  Software Programming and Embedded Systems. Our secret sauce?
                  Practice-Based Learning. Students dive into real-world projects,
                  translating theory into tangible skills. In Software Programming,
                  we forge coding whizzes versed in languages, methodologies, and
                  application building keys to shaping the digital realm. Embedded
                  Systems? Think IoT wizards crafting automation. Our hands-on
                  approach nurtures practical expertise and innovation. Rwanda
                  Coding Academy isn't just about schooling; it's about incubating
                  tech leaders. Join us to master Software Programming and Embedded
                  Systems, fueling your journey towards tech excellence.
                </p>

                <Button
                  text="Continue Reading"
                  className="bg-purpleColor p-4 w-3/4 lg:w-1/3 sm:w-1/3 rounded-xl text-white flex justify-between "
                  icon={<FaArrowRight />}
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-6 px-4 lg:px-16 z-20 lg:-translate-y-8 xl:-translate-y-8">
              <Card
                className="mt-6"
                image={mission}
                title="Our Mission"
                description="Rwanda Coding Academy is dedicated to equipping young Rwandans with essential tech skills post-ordinary level education. Our mission is to foster innovation, empower future tech leaders, and contribute to Rwanda's technological advancement. Through dynamic education and partnerships, we're shaping a tech-savvy generation prepared to drive positive change."
              />
              <Card
                image={vission}
                title="Our Vision"
                description="Rwanda Coding Academy envisions a Rwanda where every graduate possesses advanced tech proficiency. Our vision is to create a nationwide culture of tech excellence. By offering a platform for growth, learning, and collaboration, we aim to catalyze innovation, elevate employability, and play a vital role in the country's journey towards becoming a tech powerhouse"
              />
              <Card
                image={goals}
                title="Our Goals"
                description=" Rwanda Coding Academy's primary goals include providing accessible high-quality tech education to all Rwandans, promoting a diverse and inclusive learning environment, fostering partnerships that drive continuous improvement, and producing graduates who are not just skilled, but also ethical and responsible tech professionals. Our ultimate aspiration is to fuel Rwanda's tech ecosystem and global competitiveness."
              />
            </div>
          </div>
          <div className="w-full md:flex relative bg-[#523873]/10 lg:h-[50vh] translate-y-8 sm:translate-y-12">
            <div className="basis-1/2 p-8 space-y-2">
              <p className="text-purpleColor font-medium text-lg  text-start ">
                INNOVATION HUB
              </p>
              <h4 className="text-textGray text-3xl font-semibold md:pr-8">
                Get to Know Our Innovation Hub and what Our Community is working on
              </h4>
              <p className="text-[#4343436E] text-md ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis et Quasi architecto beatae vitae dicta
                sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <p className="text-[#4343436E] text-md ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis et Quasi architecto beatae vitae dicta
                sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <div className="basis-1/2 ">
              <div className="w-full flex-col">
                <div className="w-full relative flex flex-col ">
                  <div className="w-[300px] sm:w-[470px] md:w-[70%] lg:w-[70%] xl:w-[70%]  2xl:w-[70%] md:h-[250px] lg:h-[300px] h-[300px] sm:h-[400px]  md:top-8 top-20 lg:top-8 left-12 xl:left-2  rounded-xl absolute bg-white flex items-center px-4 justify-between">
                    <div className="hover:cursor-pointer border-2 border-purplecolor h-8 w-8 rounded-full bg-white z-20 -ml-8 flex items-center justify-center text-purpleColor" onClick={() => swiperRef.current?.slidePrev()}>
                      <FaChevronLeft />
                    </div>
                    <div className="relative w-[80%] h-[75%]">
                      <Swiper
                        autoplay={true}
                        modules={[Navigation, Autoplay]}

                        className="mySwiper"
                        onBeforeInit={(swiper) => {
                          swiperRef.current = swiper;
                        }}
                      >
                        {partners.map((partner, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img src={partner} alt="image" />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                    <div className="hover:cursor-pointer border-2 border-purplecolor h-8 w-8 rounded-full bg-white z-20 -mr-8 flex items-center justify-center text-purpleColor" onClick={() => swiperRef.current?.slideNext()}>
                      <FaChevronRight />
                    </div>
                  </div>
                  <Trapezium />
                </div>
                </div>
              </div>
            </div>
          
          {/* Admission and road map */}
          <div className=" w-full bg-white p-4 space-y-2 translate-y-8 sm:space-y-12 sm:translate-y-12 md:translate-y-8 lg:translate-y-12 ">
            <p className="text-purpleColor font-medium text-lg text-center">
              ADMISSION TIMELINE & ROADMAP
            </p>
            <p className="text-textGray text-3xl font-semibold text-center xl:px-[300px]">
              Timeline to Get Admitted to This Great Community
            </p>
            <p className="text-[#4343436E] text-md text-center xl:px-[280px]">
              Secure your spot at Rwanda Coding Academy through exceptional
              performance in Ordinary Level National Exams,especially in Math,
              Physics, and English. Your journey into the world of tech excellence
              begins here.Where by you will get in contact with experienced teacher
              in the Tech industry of Rwanda.
            </p>
            <div className="flex-col relative">
              <div className="hidden 2xl:flex absolute w-[100%] lg:h-[100%] -translate-y-36 justify-start ml-20">
                <Pathvec />
              </div>
              <div className=" px-4 xl:px-32  md:space-y-[40px] xl:space-y-[200px]">
                {pathData.map((path) => {
                  if (path.id % 2 != 0) {
                    return (
                      <div
                        key={path.id}
                        className="w-full flex flex-col-reverse md:flex-row items-center xl:ml-32 gap-12"
                      >
                        <div className="w-20 h-20 rounded-full bg-purpleColor border-2 border-white -ml-[125px] hidden 2xl:block "></div>
                        <div className="basis-1/2 space-y-8">
                          <p className="text-purpleColor font-semibold text-xl">
                            {path.title}
                          </p>
                          <p className="text-textGray">{path.description}</p>
                        </div>
                        <div className="font-bold text-purpleColor/10 text-6xl text-center mx-auto basis-1/2 md:border-0 border-2 border-dashed border-purpleColor md:outline-none  flex items-center justify-center rounded-full md:w-0 w-16 md:h-0 h-20">
                          {path.id}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={path.id}
                      className="w-full md:flex items-center gap-20 space-y-4 md:space-y-0 "
                    >
                      <div className="font-bold text-purpleColor/10 text-6xl basis-1/2 text-end md:border-0 border-2 border-purpleColor flex items-center justify-center rounded-full md:w-0 w-16 md:h-0 h-16 mx-auto border-dashed">
                        {path.id}
                      </div>
                      <div className="w-24 h-20 rounded-full bg-purpleColor border-2 border-white mr-[250px] hidden 2xl:block"></div>
                      <div className="basis-1/3 space-y-8">
                        <p className="text-purpleColor font-semibold text-xl">
                          {path.title}
                        </p>
                        <p className="text-textGray">{path.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Core study  and research fields */}
          <div className="w-full bg-[#523873]/10 md:flex px-4 md:px-12 py-8  mt-40 lg:gap-8 h-[100%]">
            <div className="basis-2/3 space-y-12">
              <p className="text-purpleColor font-medium text-lg ">
                CORE STUDY AND RESEARCH FILEDS
              </p>
              <p className="text-textGray text-3xl font-semibol">
                Core School Study and Research Fields
              </p>
              <p className="text-[#4343436E] text-md">
                At Rwanda Coding Academy, our curriculum centers on two critical
                domains: Software Programming and Embedded Systems. Through hands-on
                learning, students master coding languages, building websites,
                mobile apps, and innovative solutions like IoT devices. In parallel,
                our emphasis on Mathematics, Physics, and English fosters essential
                problem-solving and communication skills
              </p>
              <p className="text-[#4343436E] text-md">
                Our commitment to comprehensive education is exemplified by our dual
                focus. Software Programming equips graduates with the tools to
                create digital solutions that shape the future, while Embedded
                Systems expertise empowers them to design intricate software and
                hardware interactions. This balanced foundation ensures our students
                are versatile tech professionals.
              </p>
              <p className="text-[#4343436E] text-md">
                In sync with our technical training, we recognize the enduring
                importance of Mathematics, Physics, and English. These subjects
                cultivate cognitive agility and effective communication, pivotal
                attributes in a competitive tech landscape. At Rwanda Coding
                Academy, our students emerge not only as adept programmers and
                systems designers but also as well-rounded individuals prepared to
                drive innovation.
              </p>
              <Button
                text="Know Even More About Our Curriculium"
                className="xl:px-12 px-6 w-full sm:w-2/3 md:w-1/3 md:mx-0 lg:w-4/12 space-x-12 py-4 rounded-lg bg-purpleColor mx-auto text-white text-lg flex justify-between "
                icon={<FaArrowRight />}

              />
            </div>
            <div className="basis-1/3 relative over hidden md:block">
              <div className="absolute z-20 w-full h-[1100px] space-y-2 ">
                <div className="bg-white h-[20%]   sm:mt-8 relative px-12 rounded-lg">
                  <Image src={mainImg} fill alt="image" className="rounded-lg"/>
                </div>
                <div className="bg-white h-[20%]   relative px-12 rounded-lg">
                  <Image src={img2} fill alt="image" className="rounded-lg"/>
                </div>
                <div className="bg-white h-[20%]  relative px-12 rounded-lg">
                  <Image src={mainImg} fill alt="image" className="rounded-lg"/>
                </div>
                <div className="bg-white h-[20%]  relative px-12 rounded-lg">
                  <Image src={img2} fill alt="image" className="rounded-lg"/>
                </div>
              </div>
            </div>
          </div>
          {/* Our Numbers */}
          <div className="bg-white w-full mt-[500px]">
            <p className="text-purpleColor font-medium text-lg pt-6 md:pl-12 pl-4">
              OUR NUMBERS
            </p>
            <p className="text-textGray text-3xl font-semibold md:pl-12 pl-4 pb-6">
              Lets Get To Numbers
            </p>
            <div className="bg-purpleColor relative flex-col ">
              <div className="w-full  sm:flex justify-end items-end">
                <Numgraph />
              </div>
              <div
                className="absolute sm:z-20 top-32 md:top-44 w-full px-4 sm:px-32 grid grid-cols-2 md:grid-cols-4"
                ref={counterRef}
              >
                <StatView statNo={years} statDesc="Years Of Foundation" />
                <StatView statNo={partner} statDesc="Stackholders & Partners" />
                <StatView statNo={graduates} statDesc="Students Completed" />
                <StatView statNo={projects} statDesc="Visible Projects Delivered" />
              </div>
            </div>
          </div>
          {/* Our News */}
          <div className="w-full bg-white p-8 space-y-8 translate-y-36 mb-40">
            <p className="text-purpleColor text-lg font-medium text-center">
              OUR NEWS
            </p>
            <p className="text-textGray font-semibold text-3xl text-center">
              Our Latest News
            </p>
            <p className="text-[#4343436E] text-md text-center px-[0px] xl:px-[80px]">
              Exciting Update: Rwanda Coding Academy celebrates its second
              graduation for the 2020-2023 intake. Students have successfully
              completed their National Exams, marking a significant milestone in
              their tech journey. Congratulations to the graduates who are now
              poised to make their mark in the world of innovation!
            </p>
            <div className="w-full md:flex items-baseline md:h-[560px] translate-y-40 sm:translate-y-0 md:items-start">
              <div className="basis-1/2">
                <Mainarticle
                  newsTitle="Rwanda Coding Academy Get the 5 students in the Daiho Hackerthon"
                  publicationTime="Sunday 24th September, 2020"
                />
              </div>
              <div className="basis-1/2">
                <NewsComponent
                setNewsPaper={()=> handleSetNewsPaper()}
                  date={"Sunday 24th September, 2020"}
                  title="RCA wins at the National Level"
                  content={
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci "
                  }
                  image={img2}
                />
                <NewsComponent
                setNewsPaper={()=> handleSetNewsPaper()}
                  date={"Sunday 24th September, 2020"}
                  title="RCA wins at the National Level"
                  content={
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci ipsum quia dolor sit amet, cons, adipisci "
                  }
                  image={img2}
                />
              </div>
            </div>
            <div className="w-full flex  justify-start">
            <Button
              text="Read More of Our News"
              className="xl:px-12 px-6 w-full sm:w-2/3 md:w-1/3 md:mx-0 lg:w-2/12 space-x-12 py-4 rounded-lg bg-purpleColor mx-auto text-white text-lg flex justify-between"
              icon={<FaArrowRight />}
            />
            </div>
          </div>
          {/* OUR NEWS LETTER */}
          <div className="w-full bg-white p-1 space-y-8 mb-20 lg:translate-y-0 translate-y-32 ">
            <div className="w-full md:flex">
              <div className="basis-1/2 space-y-8">
                <p className="text-purpleColor font-medium text-lg pt-6 xl:pl-12 pl-2">
                  OUR NEWS LETTER
                </p>
                <p className="text-textGray font-semibold text-3xl xl:pl-12 pl-2">
                  Subscribe To Our Daily News Letter
                </p>
                <p className="text-[#4343436E] text-md text-start xl:pl-12 pl-2 flex-wrap">
                  Stay Informed with the Rwanda Coding Academy Newsletter. Get the
                  latest school updates, achievements, and insights delivered
                  directly to your inbox. Don't miss out on our journey of
                  innovation and excellence!
                </p>

                <form className="xl:pl-12 pl-2 space-y-8 ">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="py-3 pl-4 bg-textGray/10 w-full md:w-2/4 lg:w-2/3 rounded-lg border-2 outline-none"
                  />
                  <Button
                    text="Subscribe Now"
                    icon={<FaArrowRight />}
                    className="xl:px-12 px-6 w-full sm:w-2/3 md:w-1/3 md:mx-0 lg:w-1/3 space-x-12 py-4 rounded-lg bg-purpleColor mx-auto text-white text-lg flex justify-between"
                  />
                </form>
              </div>
              <div className="basis-1/2 bg-white relative py-12 lg:px-28 px-12 flex justify-center md:justify-end lg:justify-center ">
                <div className=" md:h-[100%] lg:h-[400px] h-[315px] md:w-[50%] lg:w-[80%] xl:w-[50%] w-[60%] relative ">
                  <Image src={mainImg} fill alt="img1" className="rounded-lg"/>
                </div>
                <div className="lg:h-[330px] h-[200px] md:h-[40%] md:w-[60%] lg:w-[45%] xl:w-[250px] w-[45%] absolute -translate-x-[60%] md:-translate-x-[140px] lg:-translate-x-[160px] translate-y-12 z-20 border-8 rounded-3xl border-white ">
                  <Image src={img2} alt="img2" className="rounded-2xl " fill />
                </div>
              </div>
            </div>
          </div>
        
        <Footer/>
        
        </div>
      </>
  );
};
export default HomePage;