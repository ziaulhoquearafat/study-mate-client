import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#05305a] text-white">
      {/* Top section */}
      <div className="w-11/12 mx-auto py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About section prothome */}
        <div>
          <p className="text-base text-gray-200 mb-4 leading-relaxed">
            <p className="text-xl md:text-2xl uppercase font-montserrat font-bold text-white">
              Study<span className="text-amber-300">Mate</span>
            </p>
            <br />
            Helps students find and connect with study partners, making learning
            more interactive and effective.
          </p>
          <div className="flex space-x-4 cursor-pointer">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank">
              <FaFacebook size={25} />
            </a>

            {/* X */}
            <a href="https://x.com/" target="_blank">
              <FaSquareXTwitter size={25} />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin size={25} />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/" target="_blank">
              {" "}
              <FaInstagramSquare size={25} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#32bee9] transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-[#32bee9] text-gray-300 py-4 text-center text-sm">
        &copy; 2025 StudyMate Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
