import Typography from "@/components/typography";
import Container from "@components/Container";
import Logo from "@/components/common/Logo";

const ContactMeSection = () => {
  return (
    <Container>
      <div
        id="contact"
        className="relative py-32 sm:py-40 flex flex-col items-center max-w-[480px] mx-auto text-center"
      >
        <Logo image="stefan-catalin-logo-blue.svg" />
        <Typography
          tag="h1"
          className="text-5xl font-black text-white mb-8 leading-tight"
        >
          Get in touch
        </Typography>
        <Typography tag="p" className="text-lightBlue-200 mb-4">
          Ready to shape the digital world? Let's connect!
        </Typography>
        <Typography tag="p" className="text-lightBlue-200 mb-4">
          Whether you're seeking advice, inspiration, or simply want to chat
          about all things web development and design, I'm here.
        </Typography>
        <Typography tag="p" className="text-lightBlue-200 mb-10">
          Reach out and let's start a conversation that could spark the next big
          idea!
        </Typography>
        <Typography tag="p" className="text-lightBlue-100 font-black text-xl">
          Email me at
        </Typography>
        <a
          href="mailto:stefan.cata92@gmail.com"
          className=" font-black text-xl text-primary hover:text-primary-300"
        >
          stefan.cata92@gmail.com
        </a>
      </div>
    </Container>
  );
};

export default ContactMeSection;
