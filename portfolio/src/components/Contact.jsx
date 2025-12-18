const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to reach out for internships, collaborations,
          or any opportunities.
        </p>

        <form className="max-w-xl mx-auto space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
