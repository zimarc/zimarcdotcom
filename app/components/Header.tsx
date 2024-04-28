
import Link from 'next/link';

const links =["Home", "Work", "About", "Contact"];


export default function Header() {
    return <nav className="  uppercase">
        
        {/*logo*/}
        
        <div className="container mx-auto flex  p-2">
           
        <Link href="/">
          <div className="text-black cursor-pointer inline-block hover:text-gray-400 transition-colors mr-4">work</div>
        </Link>
        <Link href="/about">
        <div className="text-black cursor-pointer inline-block hover:text-gray-400 transition-colors mr-4">About</div>
        </Link>
        {/* Add more links as needed */}

        
        <div className="sm:hidden" id="mobile-menu">
   
  </div>
      </div>    
    
        </nav>
}