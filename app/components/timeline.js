const timeline = () =>{
    return(
        <div className="flex flex-col align-center justify-center w-screen ml-2 p-2">
            <h2 className="text-gray-200 text-2xl">Historia de GMC</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1902</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Fundación de Rapid Motor Vehicle Company</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Rapid Motor Vehicle Company fué pionera en el desarrollo de vehículos comerciales.</p>

        </li>
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1909</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General Motors compró Rapid. </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">General Motors al ver que Rapid era muy eficiente y sus vehiculos eran los mejores en esa época decidieron comprarla para anexarla a ellos como subsidiaria.</p>
        </li>
        <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1911</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rapid se fusiona con Reliance Motor Car Company</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Rapid se fusiona con Reliance MCC para aumentar y consolidar su producción de vehículos comerciales.</p>
        </li>
        <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1913</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rapid se renombra oficialmente como GMC Truck Company</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Se renombra Rapid por GMC Truck Company</p>
        </li>
        <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1913</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rapid se renombra oficialmente como GMC Truck Company</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Se renombra Rapid por GMC Truck Company</p>
        </li>
    </ol>
    </div>
    )
        
    }

export default timeline;