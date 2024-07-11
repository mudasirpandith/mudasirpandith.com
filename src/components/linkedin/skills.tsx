import Image from 'next/image';

type Skill = {
    name: string;
};

export default function Skills() {
    return (
        <section className="flex flex-col gap-4 border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold">Skills</h2>
            <div className="flex flex-col gap-2 ">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <SkillCard skill={skill} />
                        {index < skills.length - 1 && (
                            <div className="border-b border-slate-200 my-4" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function SkillCard({ skill }: { skill: Skill }) {
    return <h3 className="text-base font-semibold">{skill.name}</h3>;
}

const skills = [
    {
        name: 'React Js',
    },
    {
        name: 'Next Js',
    },
    {
        name: 'HTML',
    },
    {
        name: 'Tailwind CSS',
    },
] satisfies Skill[];
