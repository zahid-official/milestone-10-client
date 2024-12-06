import Banner from "./Banner";
import SectionTitle from "./SectionTitle";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* Latest visas section */}
            <section className="px-4">
                <SectionTitle subHeading={'Latest Visas'} heading={'Discover New Visas & Key Details'}></SectionTitle>
            </section>
        </div>
    );
};

export default Home;