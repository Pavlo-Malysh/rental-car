"use client"
import { useId, useState, useRef, useEffect } from "react";
import css from "./SearchBox.module.css";
import { SearchForm } from "@/types/car";



interface Props {
    brands: string[];
    rentalPrice: string[];
    onSubmit: (data: SearchForm) => void
}


const SearchBox = ({ brands, rentalPrice, onSubmit }: Props) => {
    const [openSelect, setOpenSelect] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [minMileage, setMinMileage] = useState("");
    const [maxMileage, setMaxMileage] = useState("");
    const fieldId = useId();
    const brandRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);

    const toggleSelect = (selectName: string) => {
        setOpenSelect(openSelect === selectName ? null : selectName);
    }

    const handleSelectBrand = (brand: string) => {
        setSelectedBrand(brand);
        setOpenSelect(null);
    }

    const handleSelectPrice = (price: string) => {
        setSelectedPrice(price);
        setOpenSelect(null);
    }

    const formatNumber = (value: string) => {
        const number = value.replace(/,/g, '');
        if (!number || isNaN(Number(number))) return value;
        return Number(number).toLocaleString('en-US');
    }

    const handleMileageBlur = (type: 'min' | 'max') => {
        if (type === 'min') {
            setMinMileage(formatNumber(minMileage));
        } else {
            setMaxMileage(formatNumber(maxMileage));
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                brandRef.current && !brandRef.current.contains(event.target as Node) &&
                priceRef.current && !priceRef.current.contains(event.target as Node)
            ) {
                setOpenSelect(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = (formData: FormData) => {
        const data = Object.fromEntries(formData) as SearchForm;

        if (data.minMileage) {
            data.minMileage = String(data.minMileage).replace(/,/g, '');
        }
        if (data.maxMileage) {
            data.maxMileage = String(data.maxMileage).replace(/,/g, '');
        }

        onSubmit(data);
    }


    return (
        <form action={handleSubmit} className={css.filtersForm}>
            <div className={css.filterField} ref={brandRef}>
                <label htmlFor={`brand-${fieldId}`} className={css.filterLabel}>Car brand</label>
                <input type="hidden" name="brand" value={selectedBrand} />
                <div className={css.customSelect}>
                    <button
                        type="button"
                        id={`brand-${fieldId}`}
                        onClick={() => toggleSelect('brand')}
                        className={css.filterControl}
                    >
                        <span>{selectedBrand || "Choose a brand"}</span>
                        <svg width="16" height="16" className={`${css.selectArrow} ${openSelect === 'brand' ? css.selectArrowUp : ''}`.trim()}>
                            <use href="/icons.svg#icon-select"></use>
                        </svg>
                    </button>
                    {openSelect === 'brand' && (
                        <ul className={css.selectDropdown}>
                            <li onClick={() => handleSelectBrand("")}>Choose a brand</li>
                            {brands.map((brand) => (
                                <li
                                    key={brand}
                                    onClick={() => handleSelectBrand(brand)}
                                    className={selectedBrand === brand ? css.selectOptionSelected : ''}
                                >
                                    {brand}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className={css.filterField} ref={priceRef}>
                <label htmlFor={`price-${fieldId}`} className={css.filterLabel}>Price/ 1 hour</label>
                <input type="hidden" name="rentalPrice" value={selectedPrice} />
                <div className={css.customSelect}>
                    <button
                        type="button"
                        id={`price-${fieldId}`}
                        onClick={() => toggleSelect('price')}
                        className={css.filterControl}
                    >
                        <span>{selectedPrice ? `To $${selectedPrice}` : "Choose a price"}</span>
                        <svg width="16" height="16" className={`${css.selectArrow} ${openSelect === 'price' ? css.selectArrowUp : ''}`.trim()}>
                            <use href="/icons.svg#icon-select"></use>
                        </svg>
                    </button>
                    {openSelect === 'price' && (
                        <ul className={css.selectDropdown}>
                            <li onClick={() => handleSelectPrice("")}>Choose a price</li>
                            {rentalPrice.map((price) => (
                                <li
                                    key={price}
                                    onClick={() => handleSelectPrice(price)}
                                    className={selectedPrice === price ? css.selectOptionSelected : ''}
                                >
                                    {price}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className={css.filterField}>
                <label htmlFor={`minMileage-${fieldId}`} className={css.filterLabel}>
                    Сar mileage / km
                </label>
                <div className={css.mileageInputs}>
                    <div className={css.mileageInputWrapper}>
                        <span className={css.mileageLabel}>From</span>
                        <input
                            type="text"
                            name="minMileage"
                            className={css.mileageInputFrom}
                            value={minMileage}
                            onChange={(e) => setMinMileage(e.target.value)}
                            onBlur={() => handleMileageBlur('min')}
                        />
                    </div>
                    <div className={css.mileageInputWrapper}>
                        <span className={css.mileageLabel}>To</span>
                        <input
                            type="text"
                            name="maxMileage"
                            className={css.mileageInputTo}
                            value={maxMileage}
                            onChange={(e) => setMaxMileage(e.target.value)}
                            onBlur={() => handleMileageBlur('max')}
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className={css.filterSubmit}>Search</button>
        </form>
    )
}

export default SearchBox