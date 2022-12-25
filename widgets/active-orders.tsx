export const ActiveOrders = () => {
  return (
    <div className="w-full bg-white rounded py-2">
      <div className="flex flex-wrap items-center px-4 py-2">
        <div className="relative w-full max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-gray-900">Active Orders</h3>
        </div>
        <div className="relative w-full max-w-full flex-grow flex-1 text-right">
          <button className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
      </div>


      <div className="h-96 overflow-y-auto px-3 hidden md:block">
        <div className="overflow-hidden">
          <div className="bg-slate-50 p-3 mb-2 rounded-lg">
            <div className="rightbox">
              <div className="rb-container">
                <ul className="rb">
                  <li className="rb-item" ng-repeat="itembx">
                    <a href="#" className="relative flex flex-row ">
                      <span className="text-sm font-bold text-slate-600">Manama Bahrain</span>
                      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-emerald-500 rounded-full">Out for delivery</span>
                    </a>
                    <small className="text-xs  text-slate-500">3rd May 2020 7:00 PM</small>
                  </li>

                  <li className="rb-item" ng-repeat="itembx">
                    <a href="#" className="relative flex flex-row ">
                      <span className="text-sm font-bold text-slate-600">Ilocos Norte Philippines</span>
                    </a>
                    <small className="text-xs text-slate-500">19th May 2020 3:00 PM</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="bg-slate-50 p-3 mb-2 rounded-lg">
            <div className="rightbox">
              <div className="rb-container">
                <ul className="rb">
                  <li className="rb-item" ng-repeat="itembx">
                    <a href="#" className="relative flex flex-row ">
                      <span className="text-sm font-bold text-slate-600">GuangZhou China</span>
                      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-slate-500 bg-slate-200 rounded-full">Warehouse</span>
                    </a>
                    <small className="text-xs text-slate-500">3rd May 2020 7:00 PM</small>
                  </li>

                  <li className="rb-item" ng-repeat="itembx">
                    <a href="#" className="relative flex flex-row ">
                      <span className="text-sm font-bold text-slate-600">Dasmariñas Philippines</span>
                    </a>
                    <small className="text-xs text-slate-500">19th May 2020 3:00 PM</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="bg-slate-50 p-3 mb-2 rounded-lg">
            <div className="rightbox">
              <div className="rb-container">
                <ul className="rb">
                  <li className="rb-item" ng-repeat="itembx">
                    <a href="#" className="relative flex flex-row ">
                      <span className="text-sm font-bold text-slate-600">Yiwu China</span>
                      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">In transit</span>
                    </a>
                    <small className="text-xs  text-slate-500">3rd May 2020 7:00 PM</small>
                  </li>

                  <li className="rb-item" ng-repeat="itembx">
                    <a href="#" className="relative flex flex-row ">
                      <span className="text-sm font-bold text-slate-600">Valenzuela Philippines</span>
                    </a>
                    <small className="text-xs text-slate-500">19th May 2020 3:00 PM</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}