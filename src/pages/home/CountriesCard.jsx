import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const CountriesCard = () => {
    const { dataCountry } = useContext(AuthContext);
    const [head] = useTypewriter({
        words: ['Country'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })

    return (
        <div>
            <div className='App text-center mb-3'>
                <span className="text-3xl font-semibold">{head}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    dataCountry?.map((e, idx) => (
                        <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="h-56 w-full object-cover object-center rounded-t-lg" src={e.image} alt="Country" />
                            <div className="p-4">
                                <p className="text-xl font-semibold mb-2 text-primary">{e.country}</p>
                                <p className="text-gray-700 h-24 overflow-hidden">{e.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CountriesCard;