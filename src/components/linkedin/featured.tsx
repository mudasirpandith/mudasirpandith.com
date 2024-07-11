import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type Feat = {
    logo: string;
    url: string;
    title: string;
    name: string;
};

export default function Featured() {
    return (
        <section className="flex flex-col gap-4 border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold">Featured</h2>
            <div className="flex flex-row overflow-x-scroll gap-2 ">
                {feats.map((feat, index) => (
                    <div key={index}>
                        <FeatCard feat={feat} />
                    </div>
                ))}
            </div>
        </section>
    );
}

function FeatCard({ feat }: { feat: Feat }) {
    return (
        <Card className=" w-[300px]">
            <CardHeader className="flex flex-col items-start p-2 m-0">
                <p>Link</p>
            </CardHeader>
            <CardContent className="bg-red-100 p-0 m-0">
                <Image
                    src={feat.logo}
                    alt=""
                    className="w-full h-auto"
                    width={1000}
                    height={1000}
                />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-2 m-0">
                <p>{feat.title}</p>
                <p>{feat.name}</p>
            </CardFooter>
        </Card>
    );
}

const feats = [
    {
        logo: 'https://avatars.githubusercontent.com/u/78873815?v=4',
        title: 'mudasirpandith - Overview',
        name: 'GitHub',
        url: 'https://github.com/mudasirpandith',
    },
    {
        logo: 'https://avatars.githubusercontent.com/u/78873815?v=4',
        title: 'mudasir_ahmad_pandith.pdf',
        name: 'Resume',
        url: 'https://github.com/mudasirpandith',
    },
] satisfies Feat[];
