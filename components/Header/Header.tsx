"use client";
import css from "./Header.module.css";
import Link from "next/link";




const Header = () => {


    return (
        <header className={css.header}>
            <div className={`container ${css.headerBlock}`}>
                <Link href="/" className={css.logoLink}>
                    <svg width="104" height="16" className={css.logo}>
                        <use href="/icons.svg#icon-logo"></use>
                    </svg>
                </Link>
                <nav className={css.navigation}>
                    <ul className={css.menuList}>
                        <li>  <Link href="/" className={css.navLink} >Home</Link></li>
                        <li> <Link href="/catalog" className={css.navLink} >Catalog</Link></li>
                    </ul>
                </nav>
            </div>

        </header >
    );
};

export default Header;
