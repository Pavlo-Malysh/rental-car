"use client";
import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SwipeEventData, useSwipeable } from "react-swipeable";

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Блокуємо scroll коли меню відкрите
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup при unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handlerClick = () => {
        setIsOpen(!isOpen);
    }

    const handlerSwipeable = useSwipeable({
        delta: 10,
        swipeDuration: Infinity,
        onSwipedRight: (eventData: SwipeEventData) => setIsOpen(!isOpen)
    })

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
                                className={`${css.navLink} ${pathname === '/' ? css.navLinkActive : ''}`.trim()}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/catalog"
                                className={`${css.navLink} ${pathname === '/catalog' ? css.navLinkActive : ''}`.trim()}
                            >
                                Catalog
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={handlerClick} type="button" className={css.burgerBtn}>
                    <svg width="23" height="23" className={css.burgerIcon}>
                        <use href="/icons.svg#icon-burger"></use>
                    </svg>
                </button>
            </div>
            <div className={`${css.mobileMenu} ${isOpen ? css.mobileMenuOpen : ''}`.trim()} {...handlerSwipeable}>
                <div className={`container ${css.mobileMenuContainer}`}>
                    <button type="button" onClick={handlerClick} className={css.mobileMenuBtnClose}>
                        <svg width="8" height="8" className={css.modalIconClose}>
                            <use href="/icons.svg#icon-close-btn"></use>
                        </svg>
                    </button>
                    <nav className={css.navigationModal}>
                        <ul className={css.menuListModal}>
                            <li className={css.menuItemModal}>
                                <Link
                                    href="/" onClick={handlerClick}
                                    className={`${css.navLinkModal} ${pathname === '/' ? css.navLinkActive : ''}`.trim()}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/catalog" onClick={handlerClick}
                                    className={`${css.navLinkModal} ${pathname === '/catalog' ? css.navLinkActive : ''}`.trim()}
                                >
                                    Catalog
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    );
};

export default Header;
