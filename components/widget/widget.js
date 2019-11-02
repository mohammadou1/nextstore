import Link from 'next/link';
import './style.less';
const widget = ({ imageSrc, href, hrefAs, children }) => {
    return (
        <Link href={href || '/'} as={hrefAs || href || '/'}>
            <div className="widget" style={{ backgroundImage: `url('${imageSrc}')` }}>
                {children}
            </div>
        </Link>
    );
}

export default widget;
