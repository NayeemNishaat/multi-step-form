import { useState } from "react";
import type { NextPage } from "next";
import PersonalInfo from "../components/form/PersonalInfo";
import LocationInfo from "../components/form/LocationInfo";
import TimeInfo from "../components/form/TimeInfo";

const Home: NextPage = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const personalInfoHandler = (data: {}) => console.log(data);
    const locationInfoHandler = (data: {}) => console.log(data);
    const timeInfoHandler = (data: {}) => console.log(data);

    switch (step) {
        case 1:
            return (
                <PersonalInfo
                    getPersonalInfo={personalInfoHandler}
                    nextStep={nextStep}
                />
            );
        case 2:
            return (
                <LocationInfo
                    getLocationInfo={locationInfoHandler}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <TimeInfo
                    getTimeInfo={timeInfoHandler}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );

        default:
            return <></>;
    }
};

export default Home;
