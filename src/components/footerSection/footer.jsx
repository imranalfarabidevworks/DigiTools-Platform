import { FiGlobe, FiTwitter } from 'react-icons/fi';
import { FaFacebook} from 'react-icons/fa';

const socialLinkClass = 'flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#11192f] transition duration-300 hover:-translate-y-1 hover:bg-[#7a38f5] hover:text-white hover:shadow-[0_12px_24px_rgba(122,56,245,0.28)] active:-translate-y-0.5 active:bg-[#7a38f5] active:text-white'
const footerLinkClass = 'block leading-7 transition duration-200 hover:text-white active:translate-x-1 active:text-white'
const bottomLinkClass = 'leading-7 transition duration-200 hover:text-white active:translate-x-1 active:text-white'

const Footer = () => {
  return (
    <footer className="bg-[#11192f] py-14 text-white sm:py-16" id="footer">
      <div className="mx-auto w-[min(1120px,calc(100%-1.5rem))] pl-2 sm:pl-3 md:pl-0">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <h3 className="text-[1.75rem] font-extrabold tracking-[-0.05em] sm:text-[2.2rem]">DigiTools</h3>
            <p className="mt-4 max-w-full text-sm leading-8 text-white/65 sm:mt-5 sm:max-w-[18rem]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold sm:text-lg">Product</h4>
            <div className="mt-4 space-y-2.5 text-sm text-white/65 sm:mt-5 sm:space-y-3">
              <a className={footerLinkClass} href="#steps">Features</a>
              <a className={footerLinkClass} href="#pricing">Pricing</a>
              <a className={footerLinkClass} href="#products">Templates</a>
              <a className={footerLinkClass} href="#products">Integrations</a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold sm:text-lg">Company</h4>
            <div className="mt-4 space-y-2.5 text-sm text-white/65 sm:mt-5 sm:space-y-3">
              <a className={footerLinkClass} href="#hero">About</a>
              <a className={footerLinkClass} href="#footer">Blog</a>
              <a className={footerLinkClass} href="#footer">Careers</a>
              <a className={footerLinkClass} href="#footer">Press</a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold sm:text-lg">Resources</h4>
            <div className="mt-4 space-y-2.5 text-sm text-white/65 sm:mt-5 sm:space-y-3">
              <a className={footerLinkClass} href="#footer">Documentation</a>
              <a className={footerLinkClass} href="#footer">Help Center</a>
              <a className={footerLinkClass} href="#footer">Community</a>
              <a className={footerLinkClass} href="#footer">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold sm:text-lg">Social Links</h4>
            <div className="mt-4 flex items-center gap-3 sm:mt-5">
              <a href="#footer" className={socialLinkClass}>
                <FiGlobe />
              </a>
              <a href="#footer" className={socialLinkClass}>
                <FaFacebook />
              </a>
              <a href="#footer" className={socialLinkClass}>
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:mt-12 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p className="leading-7">© 2026 DigiTools. All rights reserved.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a className={bottomLinkClass} href="#footer">Privacy Policy</a>
            <a className={bottomLinkClass} href="#footer">Terms of Service</a>
            <a className={bottomLinkClass} href="#footer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer