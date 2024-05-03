import logo from '@/app/favicon.ico'
import Image from "next/image";
import Link from "next/link";

export function AppLogo() {
    return (
        <div className="flex px-4 py-5">
            <Link className="flex flex-row items-center gap-2" href="/">
                <Image
                    src={logo}
                    alt="pikavec-logo"
                    className="w-10 h-10 rounded-xl"
                />
                <h2 className="text-2xl">Pikavec</h2>
            </Link>
        </div>
    )
}
