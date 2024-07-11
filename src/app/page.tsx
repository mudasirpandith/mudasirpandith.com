import About from '@/components/linkedin/about';
import Certifications from '@/components/linkedin/certifications';
import Education from '@/components/linkedin/education';
import Experience from '@/components/linkedin/exp';
import Header from '@/components/linkedin/header';
import Languages from '@/components/linkedin/langs';

export default function Home() {
    return (
        <div className="bg-gray-100  ">
            <div className=" md:container md:w-3/4 mx-auto flex flex-col gap-4 p-0 md:p-4">
                <Header />
                <About />
                <Experience />
                <Education />
                <Certifications />
                <Languages />
            </div>{' '}
        </div>
    );
}
