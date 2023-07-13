const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-70">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-4 lg:px-8">
        <p className="mt-10 text-center text-xs leading-5 text-gray-40">
          &copy; {currentYear} StefanCatalin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
