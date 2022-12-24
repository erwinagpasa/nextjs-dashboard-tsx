import Image from 'next/image'

export const UserList = () => {
  return (
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden rounded-lg">
        {/* Body */}
        <div className="overflow-x-auto relative">

          <div className="flex flex-wrap items-center px-4 py-2 bg-white">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-gray-900">Latest Transactions</h3>
            </div>

            <div className="relative inline-block text-left dropdown pt-3 pr-4">
              <span className="rounded-md shadow-sm">
                <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                  <span>Filter</span>
                  <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </span>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div className="absolute  w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                  <div className="py-1">
                    <a href="javascript:void(0)" tabIndex={0} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Account settings</a>
                    <a href="javascript:void(0)" tabIndex={1} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Support</a>
                    <span role="menuitem" tabIndex={-1} className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>
                    <a href="javascript:void(0)" tabIndex={2} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a>
                  </div>
                  <div className="py-1"><a href="javascript:void(0)" tabIndex={3} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</a></div>
                </div>
              </div>
            </div>

            <div className="relative pt-3">
              <div className="flex absolute inset-y-0 left-0 items-center pl-4 pt-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for users" />
            </div>
          </div>

          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="py-3 px-6">Name</th>
                <th scope="col" className="py-3 px-6">Position</th>
                <th scope="col" className="py-3 px-6">Status</th>
                <th scope="col" className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  hover:bg-gray-50">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                  </div>
                </td>
                <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                  <Image src="/erwin.jpg" alt="Picture of the author" width={40} height={40} className="object-cover rounded-full" loading="lazy" />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Erwin Agpasa</div>
                    <div className="font-normal text-gray-500">erwin@devph.io</div>
                  </div>
                </td>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600  hover:underline">Edit user</a>
                </td>
              </tr>
              <tr className="bg-white border-b  hover:bg-gray-50 ">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                  </div>
                </td>
                <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                  <Image src="/erwin.jpg" alt="Picture of the author" width={40} height={40} className="object-cover rounded-full" loading="lazy" />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Erwin Agpasa</div>
                    <div className="font-normal text-gray-500">erwin@devph.io</div>
                  </div>
                </td>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                  </div>
                </td>
                <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                  <Image src="/erwin.jpg" alt="Picture of the author" width={40} height={40} className="object-cover rounded-full" loading="lazy" />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Erwin Agpasa</div>
                    <div className="font-normal text-gray-500">erwin@devph.io</div>
                  </div>
                </td>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                  </div>
                </td>
                <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                  <Image src="/erwin.jpg" alt="Picture of the author" width={40} height={40} className="object-cover rounded-full" loading="lazy" />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Erwin Agpasa</div>
                    <div className="font-normal text-gray-500">erwin@devph.io</div>
                  </div>
                </td>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  focus:ring-2" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                  </div>
                </td>
                <td scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                  <Image src="/erwin.jpg" alt="Picture of the author" width={40} height={40} className="object-cover rounded-full" loading="lazy" />
                  <div className="pl-3">
                    <div className="text-base font-semibold">Erwin Agpasa</div>
                    <div className="font-normal text-gray-500">erwin@devph.io</div>
                  </div>
                </td>
                <td className="py-4 px-6">React Developer</td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                    Online
                  </div>
                </td>
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Body end */}
        {/* Pagination */}
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-200 sm:grid-cols-9">
          <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </button>
                </li>
                <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button></li>
                <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button></li>
                <li><button className="px-3 py-1 text-white transition-colors duration-150 bg-blue-600 border border-r-0 border-blue-600 rounded-md focus:outline-none focus:shadow-outline-purple">3</button></li>
                <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button></li>
                <li><span className="px-3 py-1">...</span></li>
                <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button></li>
                <li><button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button></li>
                <li>
                  <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
        {/* Pagination end */}
      </div>
    </div>
  );
}