import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    note: string;
};

export default function LocationInfo({
    getNote,
    nextStep,
    prevStep
}: {
    getNote: Function;
    nextStep: Function;
    prevStep: React.MouseEventHandler;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        getNote(data);
        nextStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-sm py-10 text-left"
        >
            <div>
                <label className="block" htmlFor="note">
                    Note
                </label>
                <textarea
                    className="w-full border"
                    id="note"
                    rows={10}
                    {...register("note", {
                        required: true,
                        value: `
,'"" ./\=?!:;
"",""a"",""b""
ヲンヰヱヴーヾ・
ｧｰｭｿﾏﾞﾟ
㌶Ⅲ⑳㏾☎㈱髙﨑
¢£¬‖−〜―
<script>alert('Bug!!!');</script>
&lt;&copy;&amp;
జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
§¦ЙЁКД§∪§¦ЙЁКД§
t҉̠̩̰͔͇͔͓̤͕̪̱̗̖̳̭͒̊̓̆̂͌̐̿̎̈́͂̓̇̆e҉͉̤̣̤͕̙̖͓͍͇̤͔͎̦̗̣͎͓̖̫͂̌̿͂͐̈̽̋͛̈̀̂́̂̐̽̂̓̇̆̅͗ͅx҉̰̤̰͉͕̪̙͖̭̜̪͎̮̗̞͇̞̫̬̝̲͈̔́̔͋̿̆̒̋͗͋̀͌͋̈́͂̃̒ͅt̸͚͖͙̮̘̥̯̞͈̲͚̱͚́͒̐̾̋͋̔̓̉̋̈́̉͗̌͑́͌̉̀͂̂͂̌"				
				
				
				
				
				
				
				
				
						`
                    })}
                />
            </div>

            {errors.note && <span>This field is required</span>}

            <div className="mt-5 flex justify-between">
                <button onClick={prevStep}>Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
}
