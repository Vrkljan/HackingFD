// pages/province/[province].js
import { useRouter } from 'next/router';

const ProvincePage = () => {
    const router = useRouter();
    const { province } = router.query;



    return (
        <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold"> {province}</h1>
        </div>
    );
};

export default ProvincePage;