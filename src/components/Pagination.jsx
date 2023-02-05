import { useHouseContext } from "../context/HouseContext";


const Pagination = ({ totalPaginationNumber }) => {

    const { setPageNumber, pageNumber } = useHouseContext();

    const handleClickPagination = pNumber => {
        if (
            pNumber >= 1 &&
            pNumber <= totalPaginationNumber &&
            pNumber !== pageNumber
        ) {
            // by changing this page number, we can change display data...
            setPageNumber(pNumber);
        }
    }

    
    return (
        <div className='text-center mt-10 text-2xl flex items-center justify-center gap-4 select-none'>
            <p
                className={`cursor-pointer duration-300 ${pageNumber > 1 ? 'opacity-100' : 'opacity-20'}`}
                onClick={() => handleClickPagination(pageNumber - 1)}
            >
                ⬅️
            </p>

            {
                // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
                [...Array(totalPaginationNumber)].map((_, idx) =>
                    <p
                        key={idx}
                        onClick={() => handleClickPagination(idx + 1)}
                        className={`${pageNumber === idx + 1 ? 'bg-violet-800' : 'bg-violet-500'} 
                        text-white w-8 rounded leading-8 hover:bg-violet-700 duration-300 cursor-pointer`}
                    >
                        {idx + 1}
                    </p>
                )
                // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
            }

            <p
                className={`cursor-pointer duration-300 ${pageNumber < totalPaginationNumber ? 'opacity-100' : 'opacity-20'}`}
                onClick={() => handleClickPagination(pageNumber + 1)}
            >
                ➡️
            </p>
        </div>
    )
}

export default Pagination