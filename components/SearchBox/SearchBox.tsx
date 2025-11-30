"use client"
import { useId } from "react";
import css from "./SearchBox.module.css";
import { SearchForm } from "@/types/car";



interface Props {
    brands: string[];
    rentalPrice: string[];
    onSubmit: (data: SearchForm) => void
}


const SearchBox = ({ brands, rentalPrice, onSubmit }: Props) => {

    const fieldId = useId();

    const handleSubmit = (formData: FormData) => {
        const data = Object.fromEntries(formData)
        console.log("FORMDATA", data);
        onSubmit(data);

    }


    return (
        <form action={handleSubmit} className={css.filtersForm}>
            <div className={css.filterField}>
                <label htmlFor={`brand-${fieldId}`} className={css.filterLabel}>Car brand</label>
                <select name="brand" id={`brand-${fieldId}`} className={`${css.filterControl}`}>
                    <option value="">Choose a brand</option>
                    {brands.map((brand) => (<option key={brand} value={brand}>{brand}</option>))}
                </select>
            </div>
            <div className={css.filterField}>
                <label htmlFor={`price-${fieldId}`} className={css.filterLabel}>Price/ 1 hour</label>
                <select name="rentalPrice" id={`price-${fieldId}`} className={`${css.filterControl}`}>
                    <option value="">Choose a price</option>
                    {rentalPrice.map((price) => (<option key={`${price}-${fieldId}`} value={price}>{price}</option>))}
                </select>
            </div>
            <div className={css.filterField}>
                <label htmlFor={`minMileage-${fieldId}`} className={css.filterLabel}>
                    Сar mileage / km
                </label>
                <div>
                    <input type="text" name="minMileage" placeholder="From" className={`${css.filterControl}`} />
                    <input type="text" name="maxMileage" placeholder="To" className={`${css.filterControl}`} />
                </div>


            </div>
            <button type="submit" className={css.filterSubmit}>Search</button>
        </form>
    )
}

export default SearchBox