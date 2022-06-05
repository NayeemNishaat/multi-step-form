import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    amount: number;
};

export default function Amount({
    getAmount,
    nextStep,
    prevStep
}: {
    getAmount: Function;
    nextStep: Function;
    prevStep: React.MouseEventHandler;
}) {
    const [error, setError] = useState(false);
    const [amount, setAmount] = useState({ amount: 0 });

    const { handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        getAmount(data);
        // nextStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-sm py-10 text-left"
        >
            <div>
                <label className="block" htmlFor="date">
                    Amount (BDT)
                </label>
                <input
                    className="border"
                    type="text"
                    required
                    onFocus={(e) => {
                        const value = e.target.value;
                        e.target.type = "number";
                        e.target.value = value.replace(/,/g, "");
                        e.target.min = "0";
                        e.target.step = "0.01";
                    }}
                    onBlur={(e) => {
                        e.target.type = "text";
                        e.target.value = Number(
                            +Number(e.target.value).toFixed(2) < 0
                                ? +Number(e.target.value).toFixed(2) * -1
                                : Number(e.target.value).toFixed(2)
                        ).toLocaleString("en-US", { useGrouping: true });
                    }}
                />
            </div>

            {error && (
                <span>
                    This field is required and must have 8 digits with 2 decimal
                    points!
                </span>
            )}

            <div className="mt-5 flex justify-between">
                <button onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
