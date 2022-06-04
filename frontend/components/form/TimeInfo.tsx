import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    date: string;
    time: string;
};

export default function LocationInfo({
    getTimeInfo,
    nextStep,
    prevStep
}: {
    getTimeInfo: Function;
    nextStep: Function;
    prevStep: React.MouseEventHandler;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        getTimeInfo(data);
        nextStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-sm py-10 text-left"
        >
            <div>
                <label className="block" htmlFor="date">
                    Date
                </label>
                <input
                    className="w-full"
                    id="date"
                    type="date"
                    placeholder="date"
                    {...register("date", {
                        value: new Date().toISOString().split("T")[0]
                    })}
                />
            </div>

            <div>
                <label className="block w-full" htmlFor="time">
                    Time
                </label>
                <input
                    id="time"
                    className="w-full"
                    type="time"
                    placeholder="time"
                    {...register("time", {
                        value: new Date().toISOString().slice(11, -8)
                    })}
                />
            </div>

            {errors.date && errors.time && <span>This field is required</span>}

            <div className="mt-5 flex justify-between">
                <button onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
