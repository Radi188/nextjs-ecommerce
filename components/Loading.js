import Lottie from 'react-lottie'
import loading from '../public/assets/loading.json'

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div className='loading-wrap'>
            <Lottie options={defaultOptions}
                height={200}
                width={200}
            >
            </Lottie>
        </div>
    );
}

export default Loading;