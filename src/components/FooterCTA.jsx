const FooterCTA = () => {
  return (
    <section className="w-full bg-[var(--secondary)] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="
          text-3xl 
          md:text-5xl 
          lg:text-7xl 
          font-extrabold 
          text-black
          leading-tight
        "
        >
          Ready to Work With Us?
        </h2>

        {/* Sub text (optional but recommended) */}
        <p className="mt-6 text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
          Let’s build something strong, reliable, and lasting together. Contact
          our team today for a free consultation.
        </p>

        {/* Button */}
        <div className="mt-10">
          <a
            href="#contact"
            className="
              inline-block
              bg-[var(--accent)]
              text-white
              font-semibold
              px-10
              py-4
              text-lg
              rounded-lg
              transition
              hover:scale-105
              hover:shadow-xl
            "
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
