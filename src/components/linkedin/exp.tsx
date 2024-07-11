import Image from 'next/image';

type Exp = {
    logo: string;
    position: string;
    company: string;
    type: string;
    date: string;
    location: string;
    details?: string;
};

export default function Experience() {
    return (
        <section className="flex flex-col gap-4 border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold">Experience</h2>
            <div className="flex flex-col gap-2 ">
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <ExpCard exp={experience} />
                        {index < experiences.length - 1 && (
                            <div className="border-b border-slate-200 my-4" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function ExpCard({ exp }: { exp: Exp }) {
    return (
        <div className="flex flex-row gap-4">
            <Image
                src={exp.logo}
                height={45}
                width={45}
                alt={`${exp.company} logo`}
                className="object-contain h-fit"
            />
            <div className="flex flex-col">
                <h3 className="text-base font-semibold">{exp.position}</h3>
                <p className="text-md font-normal">
                    {exp.company} · {exp.type}
                </p>
                <p className="text-sm text-slate-500">{exp.date}</p>
                <p className="text-sm text-slate-500">{exp.location}</p>
                <p>{exp.details}</p>
            </div>
        </div>
    );
}

const experiences = [
    {
        logo: 'https://media.licdn.com/dms/image/D4D0BAQHtxCYrhSYlmw/company-logo_100_100/0/1698655505530/cryptlex_logo?e=1728518400&v=beta&t=rdGHEVrXw1GfnoueSDEdPo181taQpdKrUHxlTL4Yfd8',
        position: 'Software Engineer Intern',
        company: 'Cryptlex',
        type: 'Internship',
        date: 'Apr 2024 - Present',
        location: 'Srinagar, Jammu & Kashmir, India · On-site',
    },
    {
        logo: 'https://media.licdn.com/dms/image/C560BAQGBjznCIpHmaQ/company-logo_100_100/0/1631324405071?e=1728518400&v=beta&t=AOP8QZ5LqPUhHc7tab-CmvzhmOHGDUxbCJ9vTxcGjYo',
        position: 'Software Developer',
        company: 'Qunata Analytics',
        type: 'Internship',
        date: 'Dec 2023 - Apr 2024 · 5 mos',
        location: 'Kolkata, West Bengal, India · Remote',
        details: 'Full Stack development',
    },
    {
        logo: 'https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1630652622688/microsoft_logo?e=1728518400&v=beta&t=wah0x3AC9bOf6JG6aTb4ca5aKWloneFbRDleDU7bypw',
        position: 'Mentee',
        company: 'Microsoft',
        type: 'Apprenticeship',
        date: 'May 2022 - May 2022 · 1 mo',
        location: 'Remote · Remote',
        details:
            'Intern Engage is a program for engineering students across India graduating in 2024. It is designed to provide a platform for engineering students to accelerate their growth and foster industry-relevant skills through mentorship, coding challenges, workshops and networking opportunities.',
    },
] satisfies Exp[];
