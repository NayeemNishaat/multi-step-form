import { useState } from "react";
import type { NextPage } from "next";
import PersonalInfo from "../components/form/PersonalInfo";
import LocationInfo from "../components/form/LocationInfo";
import TimeInfo from "../components/form/TimeInfo";
import Amount from "../components/form/Amount";
import Note from "../components/form/Note";
import Overview from "../components/form/Overview";
import Success from "../components/form/Success";
import Fail from "../components/form/Fail";

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
    const [msg, setMsg] = useState("");
    const [step, setStep] = useState(1);
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

    const nextStep = (currentStep: number, msg: string) => {
        if (currentStep) {
            setMsg(msg);
            setStep(currentStep);
            return;
        }
        setStep(step + 1);
    };
    const prevStep = (e: React.MouseEvent) => {
        e.preventDefault();

        setStep(step - 1);
    };

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
        case 7:
            return <Success id={msg} nextStep={nextStep} />;
        case 8:
            return <Fail msg={msg} nextStep={nextStep} />;

        default:
            return <></>;
    }
};

export default Home;
