import Image from 'next/image';

type CL = {
    logo: string;
    name: string;
    provider: string;
    date: string;
    credId?: string;
    details?: string;
};

export default function Certifications() {
    return (
        <section className="flex flex-col gap-4 border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold">Licenses & certifications</h2>
            <div className="flex flex-col gap-2 ">
                {cls.map((cl, index) => (
                    <div key={index}>
                        <CLCard cl={cl} />
                        {index < cls.length - 1 && (
                            <div className="border-b border-slate-200 my-4" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function CLCard({ cl }: { cl: CL }) {
    return (
        <div className="flex flex-row gap-4">
            <Image
                src={cl.logo}
                height={45}
                width={45}
                alt={`${cl.provider} logo`}
                className="object-contain h-fit"
            />
            <div className="flex flex-col">
                <h3 className="text-base font-semibold">{cl.name}</h3>
                <p className="text-md font-normal">{cl.provider}</p>
                <p className="text-sm text-slate-500">{cl.date}</p>
                <p className="text-sm text-slate-500">{cl.credId}</p>
                <p>{cl.details}</p>
            </div>
        </div>
    );
}

const cls = [
    {
        logo: 'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1630530042036/coursera_logo?e=1728518400&v=beta&t=v2MYSnuBw7_XcJ6DhkgekBiosXmg0Ih3k4voiRUiQ1E',
        name: 'Supervised Machine Learning: Regression and Classification',
        provider: 'Coursera',
        credId: 'CREDENTIAL ID BBNZSWAPFDCM',
        date: 'Issued Jun 2023',
    },
    {
        logo: 'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1630530042036/coursera_logo?e=1728518400&v=beta&t=v2MYSnuBw7_XcJ6DhkgekBiosXmg0Ih3k4voiRUiQ1E',
        name: 'Introduction to Back-End Development',
        provider: 'Coursera',
        credId: 'CREDENTIAL ID LAFEQBXXVXFN',
        date: 'Issued Jun 2023',
    },
    {
        logo: 'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1630530042036/coursera_logo?e=1728518400&v=beta&t=v2MYSnuBw7_XcJ6DhkgekBiosXmg0Ih3k4voiRUiQ1E',
        name: 'Introduction to Front-End Development',
        provider: 'Coursera',
        credId: 'CREDENTIAL ID  9MTS44SYLKYX',
        date: 'Issued Jun 2023',
    },
    {
        logo: 'https://media.licdn.com/dms/image/C560BAQFbnqtpV-DA7w/company-logo_100_100/0/1630650286430?e=1728518400&v=beta&t=Qft215bAw2TTw2AhenPTXrjaLi5B1Uc6fGkMILzFl4o',
        name: 'C Programming',
        provider: 'Spoken Tutorial',
        date: 'Issued Jul 2021',
    },
    {
        logo: 'https://media.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1630536914848/udemy_logo?e=1728518400&v=beta&t=XNatgr_tbM1FAFjyWu5rJ2Bdc8atnsmqR1zAR1PZKhw',
        name: 'Full Stack Development',
        provider: 'Udemy',
        credId: 'CREDENTIAL ID  UC-e5794cee-5c26-4233-a279-270a3351824b',
        date: 'Issued Jul 2021',
    },
] satisfies CL[];
