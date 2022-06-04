import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    from: string;
    to: string;
};

export default function LocationInfo({
    getLocationInfo,
    nextStep,
    prevStep
}: {
    getLocationInfo: Function;
    nextStep: Function;
    prevStep: React.MouseEventHandler;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        getLocationInfo(data);
        nextStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-sm py-10 text-left"
        >
            <div>
                <label htmlFor="from">From</label>
                <select
                    className="w-full"
                    id="from"
                    {...register("from", { required: true })}
                >
                    <option value=""></option>
                    <option value="東京">東京</option>
                    <option value="横浜">横浜</option>
                    <option value="名古屋">名古屋</option>
                    <option value="大阪">大阪</option>
                </select>
            </div>

            <div>
                <label htmlFor="to">To</label>
                <select
                    className="w-full"
                    id="to"
                    {...register("to", { required: true })}
                >
                    <option value=""></option>
                    <option value="東京">東京</option>
                    <option value="横浜">横浜</option>
                    <option value="名古屋">名古屋</option>
                    <option value="大阪">大阪</option>
                </select>
            </div>

            {errors.from && errors.to && <span>This field is required</span>}

            <div className="mt-5 flex justify-between">
                <button onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
