export default function Search() {
    return (
        <>
            <h2>Search Customers</h2>
            <form className="form__container form__container--search">
                <div className="form__flex-wrapper">
                    <div className="form__flex-item">
                        <input
                            type="text"
                            defaultValue=""
                            placeholder={`Search by whutevs`}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}
