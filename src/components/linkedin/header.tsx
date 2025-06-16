import { Button } from '@/components/ui/button';
import { Github, Instagram, Mail, Pen, ShieldCheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
    return (
        <section className=" border border-slate-200 bg-white">
            <section className="relative">
                <Image
                    src="https://media.licdn.com/dms/image/D5616AQFSGs8JL39ovg/profile-displaybackgroundimage-shrink_350_1400/0/1683319219822?e=1726099200&v=beta&t=iw44PG8ifcETApqjlWNZ7Y9f790F12maIQQUKk3ZC_U"
                    alt=""
                    width={1200}
                    height={200}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                    <Image
                        src="/profile_avatar.jpeg"
                        alt=""
                        width={72}
                        height={72}
                        className="rounded-full border-4 border-white"
                    />
                </div>
            </section>
            <div className="p-4 flex flex-col gap-2">
                <section className="flex flex-col md:flex-row justify-between py-2">
                    <section>
                        <div className="flex flex-row gap-1 items-center py-2">
                            <h1 className="text-2xl font-bold">
                                Mudasir Pandith
                            </h1>
                            <ShieldCheckIcon />
                        </div>

                        <p className="text-sm">
                            Intern at Cryptlex • React • Next • Final Year NIT
                            Srinagar
                        </p>

                        <div className="flex flex-col md:flex-row gap-1">
                            <p className="text-md  text-slate-500">
                                Srinagar, Jammu & Kashmir, India
                            </p>
                            <Link href={'#'}>
                                <p className="flex text-blue-500 font-semibold">
                                    Contact Info
                                </p>
                            </Link>
                        </div>
                    </section>
                    <section className="flex flex-row gap-1 md:hidden ">
                        <p>Cryptlex</p>
                        <p>•</p>
                        <p> National Institute of Technology Srinagar</p>
                    </section>
                    <section className="flex flex-col gap-4 hidden md:flex">
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                src="https://media.licdn.com/dms/image/D4D0BAQHtxCYrhSYlmw/company-logo_100_100/0/1698655505530/cryptlex_logo?e=1728518400&v=beta&t=rdGHEVrXw1GfnoueSDEdPo181taQpdKrUHxlTL4Yfd8"
                                alt=""
                                width={40}
                                height={40}
                            />
                            <p className="font-semibold">Cryptlex</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                src="https://media.licdn.com/dms/image/C560BAQEKD8d47ajr0A/company-logo_100_100/0/1630636736020/national_institute_of_technology_srinagar_logo?e=1728518400&v=beta&t=05DiVllGkVAHYRjS0TjWqQ3GcLN65b8XBqir9bqz0Ik"
                                alt=""
                                width={40}
                                height={40}
                            />
                            <p className="font-semibold">
                                National Institute of <br /> Technology Srinagar
                            </p>
                        </div>
                    </section>
                </section>
                <section className="flex items-center gap-1">
                    <p className="font-semibold text-blue-500">972 followers</p>
                    <span>•</span>
                    <p className="font-semibold text-blue-500">
                        500+ connections
                    </p>
                </section>

                <section className="flex flex-wrap gap-1">
                    <Button
                        variant="default"
                        className="bg-blue-500 text-white rounded-full px-4 py-1"
                    >
                        Resume
                    </Button>
                    <Button
                        variant="ghost"
                        className="border-slate-500 text-slate-500 rounded-full px-4 py-1"
                    >
                        <Github />
                    </Button>
                    <Button
                        variant="ghost"
                        className="border-slate-500 text-slate-500 rounded-full px-4 py-1"
                    >
                        <Instagram />
                    </Button>

                    <Button
                        variant="ghost"
                        className="border-slate-500 text-slate-500 rounded-full px-4 py-1"
                    >
                        <Mail />
                    </Button>
                </section>
                <section className="bg-blue-100 rounded-md p-4 w-fit">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Open to work</p>
                    </div>

                    <p className="mt-2">
                        Full Stack Engineer, Frontend Developer and Machine
                        Learning Engineer roles.
                    </p>
                    <p className="text-blue-500 font-semibold mt-2">
                        Show details
                    </p>
                </section>
            </div>
        </section>
    );
}
