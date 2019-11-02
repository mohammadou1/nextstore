import Link from 'next/link';
const banner = ({ imageSrc, children, href, hrefAs, alt }) => {
    return (

        <div className="relative inline-block banner">
            <Link href={href || '/'} as={hrefAs || href || '/'}>
                <a>
                    <img className="img-fluid" src={imageSrc} alt={alt || ""} />
                    <div className="overlay">
                        {children}
                    </div>
                </a>
            </Link>
        </div >

    );
}
export default banner;

