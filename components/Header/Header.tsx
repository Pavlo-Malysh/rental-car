"use client";
import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

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
                        <li>
                            <Link
                                href="/"
                                className={`${css.navLink} ${pathname === '/' ? css.navLinkActive : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/catalog"
                                className={`${css.navLink} ${pathname === '/catalog' ? css.navLinkActive : ''}`}
                            >
                                Catalog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header >
    );
};

export default Header;
