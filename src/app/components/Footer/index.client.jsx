const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} UniTech. All rights reserved.</p>
          <p className="mt-2"> Cape Town, South Africa</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
