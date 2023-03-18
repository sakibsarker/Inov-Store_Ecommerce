import Logo from '../../assets/INOV.jpg'
import { Link } from 'react-router-dom'
import { Search } from '../Sections/Search'
export const Header = () => {
  return (
    <header>
    
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="InovBook Store" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Store</span>
        </Link>
        <div className="flex items-center">
            <span className='class="bi bi-gear-wide mr-5 text-xl text-gray-500 dark:text-white cursor-pointer'></span>
            <span className="bi bi-search mr-5 text-xl text-gray-500 dark:text-white cursor-pointer"></span>
            <span className="bi bi-bag mr-5 text-xl text-gray-500 dark:text-white cursor-pointer"></span>
            <span className='bi bi-person-circle mr-5 text-xl text-gray-500 dark:text-white cursor-pointer'></span>
           
        </div>
    </div>
</nav>
<Search/>

    </header>
  )
}
