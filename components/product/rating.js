
const rating = ({ rating = 0 }) => {
    return (
        <div className="mb">
        {
            [...Array(5)].map((_, idx) => {
                if ((idx + 1) <= rating) {
                    return <i key={idx} className="fas fa-star star-filled"></i>
                }
                return <i key={idx} className="fas fa-star star-not-filled"></i>
            })
        }
    </div>
    );
}

export default rating;
