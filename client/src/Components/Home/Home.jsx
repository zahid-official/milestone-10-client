import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import Card from "./Card";


const Home = () => {
    // useLoader
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            {/* Latest visas section */}
            <section className="px-4 ">
                <SectionTitle subHeading={'Latest Visas'} heading={'Discover New Visas & Key Details'}></SectionTitle>
            </section>

            <section className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 px-4 sm:px-20 pb-36">
                {
                    data.map(card => <Card key={card._id} card={card}></Card>)
                }
            </section>
        </div>
    );
};

export default Home;