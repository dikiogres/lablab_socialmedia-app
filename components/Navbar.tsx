import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, GoogleLogout  } from 'react-google-login';

const Navbar = () => {
  return (
    <div>
        <Link>
            <Image
                className="cursor-pointer"
                
            />
        </Link>
    </div>
  )
}

export default Navbar