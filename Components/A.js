import Link from "next/link";
import style from '../styles/A.module.css'
export default function ({
    text,
    href
}){
    return(
        <Link href={href}>
            <a className={style.link}>{text}</a>
        </Link>
    )
}
