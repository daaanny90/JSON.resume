export const TailwindUiTemplate = () => {
  return (
    <div>
    <div className="flex">
  <div className="sidebar flex max-w-md flex-col bg-lime-200 p-5">
    {/* <!-- Start Profile --> */}
    <div className="mb-5 space-y-4">
      <div className="aspect-w-3 aspect-h-2">
        <img className="max-w-sm rounded-lg object-cover shadow-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
      </div>

      <div className="space-y-2">
        <div className="space-y-1 text-lg font-medium leading-6">
          <h3>Lindsay Walton</h3>
          <p className="text-indigo-600">Front-end Developer</p>
        </div>
        <ul className="flex space-x-5">
          <li>
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
          </li>
          <li>
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
          </li>

          <li className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>

          </li>

          <li className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5"><path fill="currentColor" d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/></svg>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- End Profile --> */}

    {/* <!-- Start Personal Informations --> */}
    <div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">City, Country</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Dresden, Germany</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Street Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Bautzner Str. 65, 01099</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">hi@dannyspina.com</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Telephone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">+49 15175019301</dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Website</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">dannyspina.com</dd>
          </div>
        </dl>
      </div>
      <br />
      <br />
      <ul className="text-xs text-gray-500">
        <li>Generated with 💜 from <a className="text-indigo-600 underline" href="http://mygithubrepo.com">JSON.resume</a></li>
        <li>Version: 1.2.0</li>
      </ul>
    </div>
    {/* <!-- End Personal Informations --> */}
  </div>

  <div className="main-content p-5">
    {/* <!-- Start Summary --> */}
    <h1>
      <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Summary</span>
    </h1>
    <p className="my-8 text-xl leading-8 text-gray-500">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
    {/* <!-- End Summary --> */}

    {/* <!-- Work experiences --> */}
    <h1>
      <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Work Experiences</span>
    </h1>
    <div className="my-8">
      <ul>
        <li>
          <div className="relative pb-8">
            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
            <div className="relative flex items-start space-x-3">
              <div className="relative h-10 w-10">
                <img className="flex bg-gray-400 object-scale-down ring-8 ring-white" src="https://zalari.de/assets/icons/icon.png" alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm">
                    <a href="https://dannyspina.com" className="font-medium text-gray-900">Zalari GmbH</a>
                  </div>
                  <p className="mt-0.5 text-sm text-indigo-600">Software Engineer</p>
                  <p className="mt-0.5 text-sm text-gray-500">3 years and 2 months (october 2019 - today)</p>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="relative pb-8">
            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
            <div className="relative flex items-start space-x-3">
              <div className="relative h-10 w-10">
                <img className="flex bg-gray-400 ring-8 ring-white" src="https://www.ostec.de/images/ostecLogo.webp" alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm">
                    <a href="https://dannyspina.com" className="font-medium text-gray-900">Ostec GmbH</a>
                  </div>
                  <p className="mt-0.5 text-sm text-indigo-600">Web Developer</p>
                  <p className="mt-0.5 text-sm text-gray-500">2 years and 1 months (october 2019 - december 2022)</p>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    {/* <!-- End work experiences --> */}

    {/* <!-- Start education --> */}
    <h1>
      <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Education</span>
    </h1>
    <ul className="divide-y divide-gray-200">
      <li className="relative bg-white py-5 px-4">
        <div className="flex justify-between space-x-3">
          <div className="min-w-0 flex-1">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="truncate text-sm font-medium text-gray-900">Bachelor</p>
            <p className="truncate text-sm text-indigo-500">Computer Science</p>
          </div>
          <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">2010 - 2013</time>
        </div>
        <div className="mt-1">
          <p className="line-clamp-2 text-sm text-gray-600">Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
        </div>
      </li>

      <li className="relative bg-white py-5 px-4">
        <div className="flex justify-between space-x-3">
          <div className="min-w-0 flex-1">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="truncate text-sm font-medium text-gray-900">Bachelor</p>
            <p className="truncate text-sm text-indigo-500">Computer Science</p>
          </div>
          <time dateTime="2021-01-27T16:35" className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">2010 - 2013</time>
        </div>
        <div className="mt-1">
          <p className="line-clamp-2 text-sm text-gray-600">Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.</p>
        </div>
      </li>
    </ul>
    {/* <!-- End education --> */}

    {/* <!-- Start Projects --> */}
    <h1>
      <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Projects</span>
    </h1>

    <div className="my-5">
      <div className="mb-3">
        <span className="inline-flex items-center rounded-full bg-lime-200 px-3 py-0.5 text-sm font-medium text-indigo-700">Automation</span>
        <span className="inline-flex items-center rounded-full bg-lime-200 px-3 py-0.5 text-sm font-medium text-indigo-700">GitHub</span>
      </div>

      <p className="text-xl font-semibold text-gray-900">JSON.resume()</p>
      <p className="mt-3 text-base text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
    </div>

    <div className="my-5">
      <div className="mb-3">
        <span className="inline-flex items-center rounded-full bg-lime-200 px-3 py-0.5 text-sm font-medium text-indigo-700">Social</span>
        <span className="inline-flex items-center rounded-full bg-lime-200 px-3 py-0.5 text-sm font-medium text-indigo-700">GitHub</span>
      </div>

      <p className="text-xl font-semibold text-gray-900">Facebook Scraper</p>
      <p className="mt-3 text-base text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
    </div>
    {/* <!-- End Projects --> */}

    {/* <!-- Start Skills --> */}
    <h1>
      <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Skills</span>
    </h1>
    <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">GA</div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <a href="https://dannyspina.com" className="font-medium text-gray-900 hover:text-gray-600">Graph API</a>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">TS</div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <a href="https://dannyspina.com" className="font-medium text-gray-900 hover:text-gray-600">TypeScript</a>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">GA</div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <a href="https://dannyspina.com" className="font-medium text-gray-900 hover:text-gray-600">Graph API</a>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">TS</div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <a href="https://dannyspina.com" className="font-medium text-gray-900 hover:text-gray-600">TypeScript</a>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">GA</div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <a href="https://dannyspina.com" className="font-medium text-gray-900 hover:text-gray-600">Graph API</a>
          </div>
        </div>
      </li>

      <li className="col-span-1 flex rounded-md shadow-sm">
        <div className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-pink-600 text-sm font-medium text-white">TS</div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
          <div className="flex-1 truncate px-4 py-2 text-sm">
            <a href="https://dannyspina.com" className="font-medium text-gray-900 hover:text-gray-600">TypeScript</a>
          </div>
        </div>
      </li>
    </ul>
    {/* <!-- End Skills --> */}
  </div>
</div>
</div>
  )
}

export default TailwindUiTemplate;