"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../public/logo-project-poli.png";
import Image from "next/image";

const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Planes y membresias", href: "/planes-membresias" },
    { name: "servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Testimonios", href: "/testimonios" },
];

export default function Header() {
    const router = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white lg:py-6">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px- lg:gap-x-16">
                <div className="flex">
                    <Link href="/" className="-m-1.5 p-1.5 flex justify-around items-center gap-1.5">
                        <Image
                            alt="company"
                            src={logo}
                            width={40}
                            height={40}
                            style={{ objectFit: "contain" }}
                            className="object-cover object-center"
                        />
                        <span className="uppercase text-xl">Fit track</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 cursor-pointer"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-8" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "text-base uppercase ",
                                router == item.href ? "border-b-[0.15rem] border-[#eefb03]" : ""
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:justify-center lg:gap-x-12 text-base">
                    <Link href="/login" className="button-primary w-[12rem]">
                        Iniciar sesión
                    </Link>
                    <Link href="/register" className="button-primary w-[12rem]">
                        Registro
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-2 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex justify-around items-center gap-1.5">
                            <Image
                                alt="company"
                                src={logo}
                                width={40}
                                height={40}
                                style={{ objectFit: "contain" }}
                                className="object-cover object-center"
                            />
                            <span className="uppercase text-xl">Fit track</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500">
                            <div className="space-y-2 py-6">
                                {navigation.map(item => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={clsx(
                                            "-mx-3 block px-3 py-2 text-base/7 font-semibold text-white hover:rounded-lg hover:bg-gray-500",
                                            router == item.href
                                                ? "rounded-none border-b-[0.15rem] border-[#eefb03]"
                                                : ""
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/iniciar-sesion"
                                    className={clsx(
                                        "-mx-3 block px-3 py-2 text-base/7 font-semibold text-white hover:rounded-lg hover:bg-gray-500"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Iniciar sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}