import Link from 'next/link'
import { TruckIcon, ShoppingCartIcon, WalletIcon } from '@heroicons/react/24/outline'

export const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div className="bg-slate-100 rounded-md flex items-center justify-center pl-3 text-slate-700 font-medium group">
        <Link className="text-center block w-full relative " href="/">
          <span>Logistics Dashboard</span>
          <span className="block text-xs text-gray-500">Version 1.0.0 | Build 3</span>
        </Link>
      </div>

      <div className="bg-white rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border transition-all duration-300 transform group-hover:rotate-12">
          <ShoppingCartIcon className="text-slate-400 h-7 w-7" aria-hidden="true" />
        </div>

        <div className="text-right">
          <p className="text-2xl">1,257</p>
          <small>Orders</small>
        </div>
      </div>

      <div className="bg-white rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border transition-all duration-300 transform group-hover:rotate-12">
          <TruckIcon className="text-slate-400 h-8 w-8" aria-hidden="true" />
        </div>
        <div className="text-right">
          <p className="text-2xl">557</p>
          <small>This month delivered</small>
        </div>
      </div>

      <div className="bg-white rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border transition-all duration-300 transform group-hover:rotate-12">
          <WalletIcon className="text-slate-400 h-7 w-7" aria-hidden="true" />
        </div>
        <div className="text-right">
          <p className="text-2xl">$11,257</p>
          <small>This month revenue</small>
        </div>
      </div>


    </div>
  );
}