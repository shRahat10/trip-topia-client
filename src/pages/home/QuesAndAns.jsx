import { useLottie } from "lottie-react";
import faq_lottie from "../../assets/lottie/faq_lottie.json"
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const QuesAndAns = () => {
    const options = {
        animationData: faq_lottie,
        loop: true,
        style: { height: 400, }
    };
    const { View } = useLottie(options);

    const [head] = useTypewriter({
        words: ['FAQ'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })

    return (
        <div>
            <div className='App text-center mb-6'>
                <span className="text-3xl font-semibold dark:text-white">{head}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 items-center">
                <div>{View}</div>
                <div className="col-span-2 join join-vertical w-full dark:text-white">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What are some must-visit tourist spots in Southeast Asia?
                        </div>
                        <div className="collapse-content">
                            <p>Southeast Asia is renowned for its diverse and breathtaking attractions. Some must-visit tourist spots include the ancient temples of Angkor Wat in Cambodia, the stunning limestone karsts of Halong Bay in Vietnam, the bustling street markets of Bangkok in Thailand, the tranquil beaches of Bali in Indonesia, and the vibrant cultural heritage sites of Luang Prabang in Laos.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I plan a budget-friendly trip to Southeast Asia?
                        </div>
                        <div className="collapse-content">
                            <p>Planning a budget-friendly trip to Southeast Asia is entirely feasible with careful planning and research. Consider traveling during the off-peak season, opting for local transportation and accommodations, exploring street food markets for affordable dining options, and taking advantage of free or low-cost attractions such as temples, parks, and cultural performances.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What are the best ways to experience local culture in Southeast Asia?
                        </div>
                        <div className="collapse-content">
                            <p>Experiencing the local culture in Southeast Asia is a highlight of any trip to the region. Engage in cultural activities such as participating in cooking classes, visiting traditional villages, attending local festivals and ceremonies, exploring indigenous crafts markets, and interacting with locals through homestay programs or community-based tourism initiatives.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Are there any eco-friendly tourism options in Southeast Asia?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, there are numerous eco-friendly tourism options in Southeast Asia that promote sustainable travel practices and environmental conservation. Consider staying at eco-resorts or eco-lodges that prioritize renewable energy, waste reduction, and conservation efforts. Additionally, participate in responsible wildlife viewing experiences, support local conservation projects, and minimize your carbon footprint by choosing eco-friendly transportation options.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What should I pack for a trip to Southeast Asia?
                        </div>
                        <div className="collapse-content">
                            <p>Packing for a trip to Southeast Asia requires careful consideration of the region climate, cultural norms, and activities. Essentials include lightweight and breathable clothing suitable for hot and humid weather, comfortable walking shoes, sun protection (hat, sunglasses, sunscreen), insect repellent, travel documents (passport, visas), a reusable water bottle, and any necessary medications. Additionally, pack a lightweight rain jacket or umbrella for the tropical downpours common in some parts of the region.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuesAndAns;