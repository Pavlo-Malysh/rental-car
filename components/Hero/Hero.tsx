"use client";
import Link from "next/link";
import css from "./Hero.module.css";




const Hero = () => {


    return (
        <div className={`${css.bgImage}`}>
            <h1 className={css.title}>Find your perfect rental car</h1>
            <p className={css.text}>Reliable and budget-friendly rentals for any journey</p>
            <Link href="/catalog" className={css.heroLink}>View Catalog</Link>
        </div>
    );
};

export default Hero;
