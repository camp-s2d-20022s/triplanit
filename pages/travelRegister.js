import SetPlan from '../components/setPlan'
import Head from 'next/head'

export default function travelRegister() {
    return (
        <>
            <div>
                <Head>
                    <title>여행 등록</title>
                </Head>
            </div>
            {/* 여기 div 스타일은 진아껄로 맞추기 */}
            <div>
                <SetPlan />
            </div>

            {/* 여기부터 수연코드 시작 */}


        </>
    );
}