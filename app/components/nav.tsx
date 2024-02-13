"use client"
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500  border-zinc-800 "
                }`}
            >
                <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            href="mailto:contact@solamurai.com"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <img
                                src="/outlook.png"
                                alt="Outlook"
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link
                            href="https://twitter.com/solamuraicoin"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <img
                                src="/x.png"
                                alt="Twitter"
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link
                            href="https://t.me/solamurai"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <img
                                src="/telegram.png"
                                alt="Telegram"
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/solamurai?igshid=czV4d3VlYzlqc3lz"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <img
                                src="/instagram.png"
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </Link>
                                            <Link
                            href="https://warpcast.com/solamurai"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <img
                                src="/farcaster.png"
                                alt="Farcaster"
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link
                            href="https://medium.com/@solamurai"
                            className="duration-200 text-zinc-400 hover:text-zinc-100"
                        >
                            <img
                                src="/medium.png"
                                alt="Medium"
                                className="w-6 h-6"
                            />
                        </Link>

                    </div>

                    <Link
                        href="/"
                        className="duration-200 text-zinc-300 hover:text-zinc-100"
                    >
                        <ArrowLeft className="w-6 h-6 " />
                    </Link>
                </div>
            </div>
        </header>
    );
};
