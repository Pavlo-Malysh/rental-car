"use client"
import Image from "next/image";
import css from "./CarItem.module.css"
import { CarCatalog } from "@/types/car";
import Link from "next/link";
import { useCarsListStore } from "@/store/carsListStore";
import { useState, useEffect } from "react";


type Props = {
    item: CarCatalog;
    isPriority?: boolean;
};

const CarItem = ({ item, isPriority }: Props) => {
    const { toggleFavorite, isFavorite } = useCarsListStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
    }, []);

    const isItemFavorite = mounted && isFavorite(item.id);

    const handleToggleFavorite = () => {
        toggleFavorite(item);
    };

    return (
        <li className={css.itemCar}>
            <button
                type="button"
                className={css.btnSelect}
                onClick={handleToggleFavorite}
            >
                <svg width="16" height="16" className={`${css.icon} ${isItemFavorite ? css.iconActive : ''}`.trim()}>
                    <use href={`/icons.svg#${isItemFavorite ? 'icon-heart-filled' : 'icon-heart'}`}></use>
                </svg>
            </button>
            <div className={css.wrapImg}>
                <Image src={item.img} alt={item.brand} height={268} width={276} className={css.img} priority={isPriority} />
            </div>

            <div className={css.titleWrap}>
                <h3 className={css.title}>{item.brand} <span className={css.accent}>{item.model}</span>, {item.year}</h3>
                <p className={css.price}>${item.rentalPrice}</p>
            </div>
            <ul className={css.textWrapList}>
                <ul className={`${css.textWrap} ${css.textWrapFirst}`}>
                    {item.address.split(",").slice(-2).map((value, index) => (<li className={css.textItem} key={index}>{value}</li>))}
                    <li className={css.textItem}>{item.rentalCompany}</li>
                </ul>
                <ul className={css.textWrap}>
                    <li className={`${css.type} ${css.textItem}`}>{item.type}</li>
                    <li className={css.textItem}>{item.mileage.toLocaleString("en-US").replace(/,/g, " ")}</li>
                </ul>

            </ul>
            <Link href={`/catalog/${item.id}`} className={css.linkDetails}>Read more</Link>
        </li>
    );
}

export default CarItem;
