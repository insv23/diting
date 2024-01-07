import Link from 'next/link'
import { Copyright } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='fixed inset-x-0 bottom-0 w-screen flex justify-center py-3 bg-gray-100 text-gray-500 border-gray-300 border text-sm'>
            <Copyright />Copyright 2024, All Rights Reserved
        </footer>
    )
}