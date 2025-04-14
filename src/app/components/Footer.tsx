"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Icons

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Footer Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Start your journey with Fintral today
        </motion.h3>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/fluxpay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/fluxpay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/company/fluxpay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>

        {/* Links and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between text-sm text-zinc-400 space-y-4 md:space-y-0"
        >
          <div className="space-x-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
          <p>&copy; {new Date().getFullYear()} FluxPay. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer
