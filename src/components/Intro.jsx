import { useTranslation } from 'react-i18next';
function Intro() {

    const { t } = useTranslation();

    return (
      <section className="bg-stone-200 w-full mt-12 py-[20px] max-w-[1920px]">
        <div className="flex flex-col items-center md:flex-row-reverse md:justify-center">
            <img className="pt-[60px] pb-[20px] px-[30px] w-full max-w-[500px] lg:max-w-[600px]" src="./pizza.png" alt="Pizza" />
            <div className="flex flex-col items-center md:items-start">
                <p className="text-[32px] text-center md:text-left px-[20px] font-black text-stone-100 drop-shadow-[0_1px_3px_rgba(28,25,23,100)] md:text-[48px] md:pl-[60px]">
                    {t('intro1_heading')}
                </p>
                <p className="text-[14px] px-[30px] max-w-[500px] text-center py-[10px] md:text-left md:pl-[60px] md:py-[30px]">
                    {t('intro1_content')}
                </p>
                <a className="py-[8px] px-[25px] bg-red-800 rounded-full text-stone-200 md:ml-[60px]" href="">
                    {t('order_now_btn')}
                </a>
            </div>
        </div>
      </section>
    )
  }
  
  export default Intro
  
  
  
  
  