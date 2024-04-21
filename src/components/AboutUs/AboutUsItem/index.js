import Image from 'next/image'

import classes from './index.module.scss'

export const AboutUsItem = ({
    iconUrl,
    title,
    description
}) => {
    return (
        <li className={`${classes.card}`}>
            <div className={`${classes.card__wrapper}`}>
                <Image 
                    src={iconUrl}
                    width={32}
                    height={32}
                    alt={title}
                />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </li>
    )
}

export default AboutUsItem