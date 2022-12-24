export const ContactForm = () => {
  return (
    <form className="p-6 flex flex-col justify-center">
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">Full Name</label>
        <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800  font-semibold focus:border-blue-500 focus:outline-none" />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="tel" className="hidden">Number</label>
        <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
      </div>

      <button type="submit" className="md:w-32 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 transition ease-in-out duration-300">Submit</button>
    </form>
  );
}