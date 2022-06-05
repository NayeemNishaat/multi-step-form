import { useState } from "react";
import type { NextPage } from "next";
import PersonalInfo from "../components/form/PersonalInfo";
import LocationInfo from "../components/form/LocationInfo";
import TimeInfo from "../components/form/TimeInfo";
import Amount from "../components/form/Amount";
import Note from "../components/form/Note";
import Overview from "../components/form/Overview";

interface data {
    name: string;
    gender: string;
    from: string;
    to: string;
    date: string;
    time: string;
    amount: string;
    note: string;
}

const Home: NextPage = () => {
    const [step, setStep] = useState(6);
    const [data, setData] = useState<data>({
        name: "",
        gender: "",
        from: "",
        to: "",
        date: "",
        time: "",
        amount: "",
        note: ""
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const personalInfoHandler = (personinfo: {}) =>
        setData({ ...data, ...personinfo });
    const locationInfoHandler = (locationInfo: {}) =>
        setData({ ...data, ...locationInfo });
    const timeInfoHandler = (timeInfo: {}) => setData({ ...data, ...timeInfo });
    const amountHandler = (amountInfo: {}) =>
        setData({ ...data, ...amountInfo });
    const noteHandler = (noteInfo: {}) => setData({ ...data, ...noteInfo });
    const overviewHandler = () => ({
        name: data.name,
        gender: data.gender,
        from: data.from,
        to: data.to,
        date: data.date,
        time: data.time,
        amount: data.amount,
        note: data.note
    });

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
        case 4:
            return (
                <Amount
                    getAmount={amountHandler}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 5:
            return (
                <Note
                    getNote={noteHandler}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 6:
            return (
                <Overview
                    setOverview={overviewHandler}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );

        default:
            return <></>;
    }
};

export default Home;
