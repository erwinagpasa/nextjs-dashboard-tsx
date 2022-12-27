import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'


export const Address = () => {
  return (
    <div className="p-6 mr-2 bg-white  sm:rounded-lg">
      <h1 className="text-lg sm:text-2xl font-extrabold">Get in touch</h1>
      <p className="text-normal text-gray-600 mt-2">Fill in the form to submit any query</p>

      <div className="flex items-center mt-8 text-gray-600">
        <MapPinIcon className="h-6 w-6" aria-hidden="true" />
        <div className="ml-4 text-md tracking-wide font-semibold">Ilocos Norte, Philippines</div>
      </div>

      <div className="flex items-center mt-4 text-gray-600">
        <PhoneIcon className="h-6 w-6" aria-hidden="true" />
        <div className="ml-4 text-md tracking-wide font-semibold w-40">+880 1234567890</div>
      </div>

      <div className="flex items-center mt-4 text-gray-600">
        <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
        <div className="ml-4 text-md tracking-wide font-semibold w-40">rootaccess000@gmail.com</div>
      </div>
    </div>
  );
}