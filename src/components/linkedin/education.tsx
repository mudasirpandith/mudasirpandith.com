import Image from 'next/image';

type Edu = {
    logo: string;
    degree: string;
    institute: string;
    date: string;
};

export default function Education() {
    return (
        <section className="flex flex-col gap-4 border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold">Education</h2>
            <div className="flex flex-col gap-2 ">
                {educations.map((experience, index) => (
                    <div key={index}>
                        <EduCard exp={experience} />
                        {index < educations.length - 1 && (
                            <div className="border-b border-slate-200 my-4" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function EduCard({ exp }: { exp: Edu }) {
    return (
        <div className="flex flex-row gap-4">
            <Image
                src={exp.logo}
                height={45}
                width={45}
                alt={`${exp.institute} logo`}
                className="object-contain h-fit"
            />
            <div className="flex flex-col">
                <h3 className="text-base font-semibold">{exp.institute}</h3>
                <p className="text-md font-normal">{exp.degree}</p>
                <p className="text-sm text-slate-500">{exp.date}</p>
            </div>
        </div>
    );
}

const educations = [
    {
        logo: 'https://media.licdn.com/dms/image/C560BAQEKD8d47ajr0A/company-logo_100_100/0/1630636736020/national_institute_of_technology_srinagar_logo?e=1728518400&v=beta&t=05DiVllGkVAHYRjS0TjWqQ3GcLN65b8XBqir9bqz0Ik',
        degree: 'Bachelor of Technology, Electronics and Communications Engineering',
        institute: 'National Institute of Technology Srinagar',

        date: '2020 - 2024',
    },
] satisfies Edu[];
