import Typography from "@/components/typography";
import Container from "@components/Container";
import TechnologyPill from "@components/common/TechnologyPill";
import ProfileImage from "@components/common/ProfilePicture";

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Figma",
];

const AboutMeSection = () => {
  return (
    <Container>
      <div id="about" className="relative py-20">
        <div className="flex justify-between">
          <div className="pb-2 w-full max-w-[500px]">
            <Typography
              tag="h2"
              className="text-3xl font-black text-white mb-8 font-fira-code"
            >
              <Typography tag="span" className="text-primary font-fira-code">
                01.
              </Typography>
              About me.
            </Typography>
            <Typography tag="p" className="text-lightBlue-200 mb-8">
              Greetings! I'm Stefan Catalin, a dedicated Frontend Developer and
              UI/UX Designer with a knack for crafting digital solutions that
              drive business performance. I launched my web development journey
              with a keen interest in HTML, CSS, and JavaScript, which
              eventually ignited a passion for creating captivating online
              experiences.
              <br />
              <br />
              Through collaborating with diverse clients, I've mastered the art
              of using design and code to tell compelling stories.
              <br />
              <br />
              My mission is simple: to deliver extraordinary user experiences
              and impactful digital solutions that help businesses soar. Let's
              build the future of the web together!
            </Typography>
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <TechnologyPill key={technology}>{technology}</TechnologyPill>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full max-w-[250px] pr-5">
            <ProfileImage />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
