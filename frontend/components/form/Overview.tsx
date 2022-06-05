import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    note: string;
};

export default function Overview({
    setOverview,
    nextStep,
    prevStep
}: {
    setOverview: Function;
    nextStep: Function;
    prevStep: React.MouseEventHandler;
}) {
    const { handleSubmit } = useForm<Inputs>();

    const data = setOverview();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        nextStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-sm py-10 text-left"
        >
            <div className="capitalize">
                Name: {data.name}
                <br />
                Gender: {data.gender}
                <br />
                From: {data.from}
                <br />
                To: {data.to}
                <br />
                Date: {data.date}
                <br />
                Time: {data.time}
                <br />
                Amount: (JPY) ¥{" "}
                {(
                    Number(data.amount.replaceAll(",", "")) * 1.47
                ).toLocaleString("en-US", {
                    useGrouping: true,
                    minimumFractionDigits: 2
                })}
                <br />
                Note:
                <br />
                <textarea
                    className="w-full border"
                    name="note"
                    id="note"
                    rows={10}
                    value={data.note}
                    readOnly
                />
            </div>
            <div className="mt-5 flex justify-between">
                <button onClick={prevStep}>Back</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
