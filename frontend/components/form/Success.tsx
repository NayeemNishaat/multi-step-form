function Success({ id, nextStep }: { id: string; nextStep: Function }) {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        nextStep(1);
    };

    return (
        <form onSubmit={onSubmit} className="mx-auto max-w-sm py-10 text-left">
            <div className="capitalize">
                <p>Thank You!</p>
                <p>Your Reservation ID is: {id}</p>
            </div>
            <div className="mt-5 flex justify-end">
                <button type="submit">Home</button>
            </div>
        </form>
    );
}

export default Success;
