import Typography from "@/components/typography";
import Container from "@components/Container";
import TechnologyPill from "@components/common/TechnologyPill";
import Image from "next/image";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { LinkIcon } from "@components/icons";

const portfolio = [
  {
    title: "Bienala Timișoreană de Arhitectură",
    description:
      "Leading the digital front for Betacity 2022, I crafted a custom WordPress site, embedding multilingual support to resonate globally. The site became a seamless platform for hosting and navigating over 40 architectural events, effortlessly bridging the gap between innovative dialogues and a diverse audience.",
    image: "/images/bienala-timisoreana-de-arhitectura.png",
    technologies: ["Next.js", "Tailwind CSS", "Prismic CMS"],
    linkTo: "https://betacity.eu/en/",
  },
  {
    title: "Bienala Timișoreană de Arhitectură",
    description:
      "Leading the digital front for Betacity 2022, I crafted a custom WordPress site, embedding multilingual support to resonate globally. The site became a seamless platform for hosting and navigating over 40 architectural events, effortlessly bridging the gap between innovative dialogues and a diverse audience.",
    image: "/images/bienala-timisoreana-de-arhitectura.png",
    technologies: ["Next.js", "Tailwind CSS", "Prismic CMS"],
    linkTo: "https://betacity.eu/en/",
  },
  {
    title: "Bienala Timișoreană de Arhitectură",
    description:
      "Leading the digital front for Betacity 2022, I crafted a custom WordPress site, embedding multilingual support to resonate globally. The site became a seamless platform for hosting and navigating over 40 architectural events, effortlessly bridging the gap between innovative dialogues and a diverse audience.",
    image: "/images/bienala-timisoreana-de-arhitectura.png",
    technologies: ["Next.js", "Tailwind CSS", "Prismic CMS"],
    linkTo: "https://betacity.eu/en/",
  },
  {
    title: "Bienala Timișoreană de Arhitectură",
    description:
      "Leading the digital front for Betacity 2022, I crafted a custom WordPress site, embedding multilingual support to resonate globally. The site became a seamless platform for hosting and navigating over 40 architectural events, effortlessly bridging the gap between innovative dialogues and a diverse audience.",
    image: "/images/bienala-timisoreana-de-arhitectura.png",
    technologies: ["Next.js", "Tailwind CSS", "Prismic CMS"],
    linkTo: "https://betacity.eu/en/",
  },
];

const PortfolioSection = () => {
  const isEven = (n: number) => n % 2 === 0;

  const useHoverAnimation = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, 300], [0, -8]);
    const rotateY = useTransform(x, [0, 300], [0, 8]);

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
      const rect = event.currentTarget.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    }

    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }

    return { rotateX, rotateY, handleMouse, handleMouseLeave }; // Return handleMouseLeave here
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <div id="portfolio" className="relative py-20">
        <div className="w-full max-w-[550px] pb-8">
          <Typography
            tag="h2"
            className="text-3xl font-black text-white mb-2 font-fira-code"
          >
            <Typography tag="span" className="text-primary font-fira-code">
              02.
            </Typography>
            A Selection of My Builds.
          </Typography>
          <Typography tag="p" className="text-lightBlue-200">
            Collaborating with a diverse range of clients across various
            industries has been an enlightening journey, enriching my
            understanding and perspective in myriad ways.
          </Typography>
        </div>
        {portfolio.map((item, index) => {
          const { rotateX, rotateY, handleMouse, handleMouseLeave } =
            useHoverAnimation(); // Get handleMouseLeave here

          return (
            <a className="block" target="_blank" key={index} href={item.linkTo}>
              <motion.div
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave} // New event here
                style={{ rotateX, rotateY }}
                className={`grid grid-cols-12 gap-2 items-center pb-14 ${
                  index % 2 === 0 ? "" : "grid-cols-12 lg:flex-row-reverse"
                } transition-all cursor-pointer`}
                variants={fadeInUp}
                initial="hidden"
                animate="show"
              >
                <div
                  className={`col-span-7 ${
                    isEven(index) ? "order-1 mr-auto" : "order-2 ml-auto"
                  }`}
                >
                  <Image
                    width={1920}
                    height={1080}
                    src={item.image}
                    alt={item.title}
                    className="object-cover rounded-lg max-w-[480px]"
                  />
                </div>
                <div
                  className={`col-span-5 ${
                    isEven(index) ? "order-2 text-right" : "order-1 text-left"
                  }`}
                >
                  <Typography
                    tag="span"
                    className="text-primary mb-1 block font-fira-code font-bold"
                  >
                    Featured Project
                  </Typography>
                  <Typography
                    tag="h3"
                    className="text-white font-bold mb-5 font-fira-code"
                  >
                    {item.title}
                  </Typography>
                  <div className="bg-base-500 rounded-2xl p-4 mb-5">
                    <Typography tag="p" className="text-lightBlue-100 mb-2">
                      {item.description}
                    </Typography>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-5 ${
                      isEven(index) ? "justify-end" : "justify-start"
                    }`}
                  >
                    {item.technologies.map((technology, index) => (
                      <TechnologyPill animationOn={false} key={index}>
                        {technology}
                      </TechnologyPill>
                    ))}
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 ${
                      isEven(index) ? "justify-end" : "justify-start"
                    }`}
                  >
                    <LinkIcon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default PortfolioSection;
