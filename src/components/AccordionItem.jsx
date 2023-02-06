import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';
import { useState } from 'react';


const AccordionItem = ({ accordion, active, onToggle }) => {


    const { question, answer } = accordion;
    const [isOpen, setIsOpen] = useState(false); // open independent... as user click

    return (
        <div
            // onClick={onToggle}
            onClick={() => setIsOpen(!isOpen)}
            className='cursor-pointer'
        >

            <div className='bg-white rounded-lg group border hover:border-violet-700 duration-300'>

                <div className='min-h-[68px] flex items-center justify-between px-[30px]'>
                    <h6>{question}</h6>
                    <div>
                        {
                            // active
                            isOpen
                                ? <FaChevronCircleUp className='text-[20px] text-neutral-500 group-hover:text-violet-700 duration-300' />
                                : <FaChevronCircleDown className='text-[20px] text-neutral-500 group-hover:text-violet-700 duration-300' />
                        }
                    </div>
                </div>

                <div
                    className={`h-0 overflow-hidden px-[30px] rounded-b-lg transition-all duration-300
                    ${
                        // active
                        isOpen
                            ? `h-auto bg-violet-100`
                            : 'h-0'}`}
                >
                    <div className='my-6'>{answer}</div>
                </div>
            </div>

        </div >
    );
};

export default AccordionItem;