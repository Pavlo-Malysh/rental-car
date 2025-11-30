"use client"
import Image from "next/image"
import css from "./CarDetailsClient.module.css"
import { Car } from "@/types/car"
import BookingForm from "@/components/BookingForm/BookingForm"

interface Props {
    car: Car
}

const CarDetailsClient = ({ car }: Props) => {

    return (
        <div className={`container ${css.boxDetails}`}>
            <div className={`${css.boxContainer}`}>
                <div className={css.wrapImg}>
                    <Image className={css.img} src={car.img} alt={`${car.brand}`} width={640} height={512} />
                </div>
                <div className={css.wrapForm}>
                    <BookingForm />
                </div>
            </div>
            <div className={`${css.boxDetailsItem}`}>
                <h2 className={css.title}>{`${car.brand} ${car.model}, ${car.year}`}   <span className={css.carId}>id:{car.id.split("-")[0]}</span></h2>
                <div className={css.subBox}>
                    <div className={css.boxLocation}>
                        <svg width="16" height="16" className={css.icon}>
                            <use href={`/icons.svg#icon-Location`}></use>
                        </svg>
                        <p className={css.textItem}>{car.address.split(",").slice(-2).join(", ")}</p>
                    </div>

                    <p className={css.textItem}>Mileage: {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km</p>
                </div>
                <p className={css.price}>${car.rentalPrice}</p>
                <p className={`${css.text} ${css.description}`}>{car.description}</p>
                <ul className={css.carInfoList}>
                    <li className={css.carInfoItem}>
                        <h3 className={css.subtitle}>Rental Conditions:</h3>
                        {car.rentalConditions.map((condition, index) => <div className={css.condition} key={index}>
                            <svg width="16" height="16" className={css.icon}>
                                <use href={`/icons.svg#icon-check-circle`}></use>
                            </svg>
                            <p className={css.text} >{condition}</p>
                        </div>)}
                    </li>
                    <li className={css.carInfoItem}>
                        <h3 className={css.subtitle}>Car Specifications:</h3>
                        <div className={css.condition} >
                            <svg width="16" height="16" className={css.icon}>
                                <use href={`/icons.svg#icon-calendar`}></use>
                            </svg>
                            <p className={css.text} >Year: {car.year}</p>
                        </div>
                        <div className={css.condition} >
                            <svg width="16" height="16" className={css.icon}>
                                <use href={`/icons.svg#icon-car`}></use>
                            </svg>
                            <p className={css.text}>Type: <span className={css.typeText}>{car.type}</span></p>
                        </div>
                        <div className={css.condition} >
                            <svg width="16" height="16" className={css.icon}>
                                <use href={`/icons.svg#icon-fuel-pump`}></use>
                            </svg>
                            <p className={css.text} >Fuel Consumption: {car.fuelConsumption}</p>
                        </div>
                        <div className={css.condition} >
                            <svg width="16" height="16" className={css.icon}>
                                <use href={`/icons.svg#icon-gear`}></use>
                            </svg>
                            <p className={css.text} >Engine Size: {car.engineSize}</p>
                        </div>
                    </li>
                    <li className={css.carInfoItem}>
                        <h3 className={css.subtitle}>Accessories and functionalities:</h3>
                        {car.functionalities.map((functional, index) => <div className={css.condition} key={index}>
                            <svg width="16" height="16" className={css.icon}>
                                <use href={`/icons.svg#icon-check-circle`}></use>
                            </svg>
                            <p className={css.text} >{functional}</p>
                        </div>)}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CarDetailsClient