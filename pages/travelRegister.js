import Head from 'next/head'
import Plan_sidebar from '../components/plan_sidebar'
import Mapscreen from '../components/MapScreen';

export default function TravelRegister() {

    return (
        <>
            <div>
                <Head>
                    <title>여행 등록</title>
                </Head>
            </div>

            <div className='fixed z-50'> 
                <Plan_sidebar /> 
            </div>

            <div className='z-10'>
                <Mapscreen />
            </div>
            
            <button className="fixed z-50 bottom-10 right-8 items-center px-6 py-2 bg-blue-400 hover:bg-blue-700 text-white font-xl rounded-md mx-2 hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">
                플랜 저장
            </button>
            

        </>
    );

}