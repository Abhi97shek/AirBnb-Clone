import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from "next/dist/client/router";
import {format} from "date-fns";
import Info from "../components/Info";
const Search = ({searchResults}) => {

    console.log(searchResults);
    const router = useRouter();
    const {location,startDate,endDate,noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate),'dd MMMM yy');
    const formattedEndDate = format(new Date(endDate),'dd MMMM yy');
    const range = `${formattedEndDate} - ${formattedEndDate}`;

    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">

                        <p className="button">Cancellation Flexibilty</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col">
                    {searchResults.map(({img,title,location,star,price,total,long,lat,description})=> (
                            <Info key={img} img={img} title={title} location={location} star={star} price={price} total={total} description={description}/>
                    ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;


export const getServerSideProps =async()=>{

    const searchResults = await fetch('https://links.papareact.com/isz').then(response => response.json());



    return {
        props:{
            searchResults
        }
    }

};