import React from "react";

export default function Overview({
    setOverview,
    nextStep,
    prevStep
}: {
    setOverview: Function;
    nextStep: Function;
    prevStep: React.MouseEventHandler;
}) {
    const data = setOverview();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(
                "http://localhost:5000/api/v1/booking/create-booking",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );
            const receivedData = await res.json();

            if (receivedData.status === "success")
                return nextStep(7, receivedData.id);
            throw new Error(receivedData.message);
        } catch (err: any) {
            nextStep(8, err.message);
        }
    };

    return (
        <form onSubmit={onSubmit} className="mx-auto max-w-sm py-10 text-left">
            <div className="capitalize">
                Name: {data.name}
                <br />
                Gender: {data.gender}
                <br />
                From: {data.from}
                <br />
                To: {data.to}
                <br />
                Date:{" "}
                {new Date(data.date)
                    .toISOString()
                    .split("T")[0]
                    .replaceAll("-", "/")}
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
