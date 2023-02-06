import { faq } from '../constants';
import { AccordionItem } from '.';
import { useState } from 'react';


const FAQ = () => {

    const { icon, title, accordions } = faq;
    const [openId, setOpenId] = useState(0);

    const handleAccordionItemClick = (index) => {
        if (openId === index) {
            return setOpenId(0);
        }
        setOpenId(index);
    }

    return (
        <section className='mb-10'>
            <div className='max-w-[768px] mx-auto lg:bg-FAQ bg-no-repeat bg-custom bg-center bg-contain'>

                {/* section title */}
                <div className='flex items-center justify-center lg:justify-center 
                -space-x-12 lg:space-x-0 lg:max-w-[540px] mx-auto px-4 lg:px-0'>
                    <img className='pb-4 lg:pb-0 lg:hidden' src={icon} alt='' />
                    <h2 className='font-bold text-2xl lg:text-4xl pb-4'>{title}</h2>
                </div>

                {/* accordion list */}
                <div className='flex flex-col gap-y-4 px-4'>
                    {
                        accordions.map((accordion, id) => (
                            <AccordionItem
                                key={id}
                                accordion={accordion}
                                active={openId === id}
                                onToggle={() => handleAccordionItemClick(id)}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FAQ;