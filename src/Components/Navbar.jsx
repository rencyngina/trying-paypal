import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className='bg-[#bb4d06] mb-0'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-0 mt-0'>
          <div className=' h-20'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 mt-6'>
                <Link href="#" passHref>
                  <div className="cursor-pointer">
                    <Image
                      className="ml-4 mt-4"
                      src="/image/logo-nyakan.webp"
                      alt="logo"
                      width={160}
                      height={150}
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
