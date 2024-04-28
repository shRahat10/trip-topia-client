import team1 from "../../assets/images/team1.jpg"
import team2 from "../../assets/images/team2.jpg"
import team3 from "../../assets/images/team3.jpg"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useState } from "react";

const Team = () => {
    const [isTyping, setIsTyping] = useState(true);

    const [head] = useTypewriter({
        words: ['Our Team'],
        loop: true,
        onLoopDone: () => console.log(`loop completed`)
    })
    const [text] = useTypewriter({
        words: ['Our team is a diverse group of dedicated individuals, each bringing unique skills and expertise to create memorable experiences for our community.'],
        onLoopDone: () => setIsTyping(false)
    })

    return (
        <div className=" border p-10 bg-gray-50 rounded border-primary">
            <div className='App text-center mb-3'>
                <span className="text-3xl font-semibold">{head}</span>
                <Cursor cursorColor='red' />
            </div>
            <div className='App text-center md:h-20 mb-6'>
                <span>{text}</span>
                {isTyping && <Cursor cursorColor='red' />}
            </div>
            <div className=" flex flex-wrap gap-10  justify-center">
                <div className=" bg-white w-56 p-6 border rounded shadow-md text-center space-y-2">
                    <img className=" border-2 border-primary rounded-full" src={team1} alt="" />
                    <h1 className=" text-xl font-bold">John Doe</h1>
                    <p className=" text-sm">CEO</p>
                    <p className=" text-xs">john.doe@gmail.com</p>
                </div>
                <div className=" bg-white w-56 p-6 border rounded shadow-md text-center space-y-2">
                    <img className=" border-2 border-primary rounded-full" src={team2} alt="" />
                    <h1 className=" text-xl font-bold">Jane Smith</h1>
                    <p className=" text-sm">Marketing Manager</p>
                    <p className=" text-xs">jane.smith@gmail.com</p>
                </div>
                <div className=" bg-white w-56 p-6 border rounded shadow-md text-center space-y-2">
                    <img className=" border-2 border-primary rounded-full" src={team3} alt="" />
                    <h1 className=" text-xl font-bold">Michael Brown</h1>
                    <p className=" text-sm">Technical Lead</p>
                    <p className=" text-xs">michael.brown@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Team;