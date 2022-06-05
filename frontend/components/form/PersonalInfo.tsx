import React, { useEffect } from "react";
import { encrypt, decrypt } from "../../lib/crypto";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    gender: string;
};

export default function PersonalInfo({
    getPersonalInfo,
    nextStep
}: {
    getPersonalInfo: Function;
    nextStep: Function;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<Inputs>();

    useEffect(() => {
        const parsedPersonalInfo = decrypt("personalInfo");

        if (!parsedPersonalInfo) return;

        setValue("name", parsedPersonalInfo.name, {
            shouldValidate: true
        });

        setValue("gender", parsedPersonalInfo.gender);
    }, []);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        getPersonalInfo(data);

        encrypt(data, "personalInfo");

        nextStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-sm py-10 text-left"
        >
            <div>
                <label htmlFor="name" className="block">
                    Name
                </label>
                <input
                    id="name"
                    className="border"
                    {...register("name", {
                        required: true
                    })}
                />
            </div>

            <div>
                <p className="block">Gender</p>
                <div>
                    <input
                        id="male"
                        {...register("gender")}
                        type="radio"
                        value="male"
                    />
                    <label className="ml-2" htmlFor="male">
                        Male
                    </label>
                </div>
                <div>
                    <input
                        id="female"
                        {...register("gender")}
                        type="radio"
                        value="female"
                    />
                    <label className="ml-2" htmlFor="female">
                        Female
                    </label>
                </div>
            </div>

            {errors.name && <span>This field is required</span>}

            <div className="text-right">
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
