import Card from "./card.jsx";
import Sr from './assets/profile.jpg';
import Sr2 from './assets/profile2.jpg';

function mcard() {
    return (
        <>
            <Card srcc={Sr} /> {/* Should display default "lawra" for name */}
            <Card name="Sumit Sarkar" srcc={Sr2} />
        </>
    );
}

export default mcard;
