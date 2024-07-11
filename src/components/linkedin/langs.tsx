type Langs = {
    prof: string;
    lang: string;
};

export default function Languages() {
    return (
        <section className="flex flex-col gap-4 border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold">Languages</h2>
            <div className="flex flex-col gap-2 ">
                {langs.map((lang, index) => (
                    <div key={index}>
                        <LangCard lang={lang} />
                        {index < langs.length - 1 && (
                            <div className="border-b border-slate-200 my-4" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function LangCard({ lang }: { lang: Langs }) {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex flex-col">
                <h3 className="text-base font-semibold">{lang.lang}</h3>
                <p className="text-md font-normal">{lang.prof}</p>
            </div>
        </div>
    );
}

const langs = [
    {
        prof: 'English',
        lang: 'Professional working proficiency',
    },
    {
        prof: 'Urdu',
        lang: 'Limited working proficiency',
    },
    {
        prof: 'Kashmiri',
        lang: 'Native or bilingual proficiency',
    },
] satisfies Langs[];
