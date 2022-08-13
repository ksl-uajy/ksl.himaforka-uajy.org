import react from 'react'


const CardViMi = ({title, desk, style}) =>{
    return(
        <div className={style + ' font-display text-fontColor bg-cardColor  lg:mr-0 rounded-2xl xl:rounded-3xl p-4 xl:px-8 xl:py-6 text-justify'}>
            <div className='opacity-80'>
                
            <h1 className='text-lg md:text-xl xl:text-3xl font-medium'>{title}</h1>
            <p className='text-sm md:text-base xl:text-xl xl:mt-4 font-light'>{desk}</p>
            </div>
        </div>
    )
}
export default CardViMi;