function Fail({ msg, nextStep }: { msg: string; nextStep: Function }) {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        nextStep(1);
    };

    return (
        <form onSubmit={onSubmit} className="mx-auto max-w-sm py-10 text-left">
            <div className="capitalize">
                <p>Error!</p>
                <p>{msg}</p>
            </div>
            <div className="mt-5 flex justify-end">
                <button type="submit">Go Back</button>
            </div>
        </form>
    );
}

export default Fail;
