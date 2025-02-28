import { ShuttlecockIcon } from './Icons';

const Description = () => {
    return (
        <div className="flex flex-col items-center text-center gap-4 pb-4 text-sm ds-custom:text-2xl ">
            <p>
                We are a non-profit social badminton club. <br></br>
                All levels of players are welcome. <br></br>
                Come and join us for fun, fitness and meeting friends!
            </p>
            <ShuttlecockIcon />
        </div>
    );
};

export default Description;