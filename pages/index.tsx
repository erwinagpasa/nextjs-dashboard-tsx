import Head from 'next/head'
import { MainNavbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import { Address } from '../widgets/Address'


import { ContactForm } from '../widgets/ContacForm'
import { ActiveOrders } from '../widgets/ActiveOrders'
import { UserList } from '../widget/UserList'
import { GoogleMappage } from '../widget/GoogleMap'
import { Overview } from '../widget/Overview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
        <MainNavbar />
        <Sidebar />


        <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
          <Overview />


          <div className="p-4">
            <div className="flex flex-row">
              <div className="flex-initial  w-2/5 pr-2 hidden md:block">
                <ActiveOrders />
              </div>
              <div className="flex-initial max-sm:w-full w-3/5 pl-3 ">
                <GoogleMappage />
                {/* <ChartWidget /> */}
              </div>
            </div>
          </div>


          {/* <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">    
          <SocialTraffic />
          <RecentActivities />
        </div> */}

          <UserList />

          <div className="mt-8 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Address />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
