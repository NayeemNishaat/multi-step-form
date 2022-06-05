import React, { useState, useEffect } from "react";
import { encrypt, decrypt } from "../../lib/crypto";
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
    const [same, setSame] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<Inputs>();

    useEffect(() => {
        const parsedLocationInfo = decrypt("locationInfo");

        if (!parsedLocationInfo) return;

        setValue("from", parsedLocationInfo.from, {
            shouldValidate: true
        });

        setValue("to", parsedLocationInfo.to);
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (data.from === data.to) return setSame(true);
        getLocationInfo(data);

        encrypt(data, "locationInfo");

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
                    className="w-full border"
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
                    className="w-full border"
                    id="to"
                    {...register("to", {
                        required: true
                    })}
                >
                    <option value=""></option>
                    <option value="東京">東京</option>
                    <option value="横浜">横浜</option>
                    <option value="名古屋">名古屋</option>
                    <option value="大阪">大阪</option>
                </select>
            </div>
            {same && <span>From and To cannot be the same</span>}
            {errors.from && errors.to && <span>This field is required</span>}

            <div className="mt-5 flex justify-between">
                <button onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
