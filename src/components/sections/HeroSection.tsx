import Typography from "@/components/typography";
import Container from "@components/Container";
import Button from "@components/common/Button";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <Container>
      <div className="relative py-32 sm:py-56">
        <Typography
          tag="span"
          className="text-primary mb-1 block font-fira-code font-bold"
        >
          Greetings, my name is
        </Typography>
        <Typography
          tag="h1"
          className="text-5xl font-black text-white mb-8 leading-tight"
        >
          Stefan Catalin. <br />
          <Typography tag="span" className="text-lightBlue-200">
            Crafting the Web, One Pixel at a Time.
          </Typography>
        </Typography>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button variant="contained">Check out my work</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HeroSection;
