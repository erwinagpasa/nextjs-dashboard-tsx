export const ContactForm = () => {
  return (
    <form className="p-6 flex flex-col justify-center">
      <div className="flex flex-col">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Full name" />
      </div>

      <div className="flex flex-col mt-4">
        <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your email address" />
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We'll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
      </div>

      <div className="flex flex-col mt-3">
        <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>
      </div>

      <button type="submit" className="md:w-32 bg-gray-200 text-slate-500 hover:text-slate-100 py-2 px-3 rounded-lg mt-4 hover:bg-slate-500 transition ease-in-out duration-300">Submit</button>
    </form>
  );
}