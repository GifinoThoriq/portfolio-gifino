import styles from './ExperienceList.module.css'
import { useEffect, useState } from 'react'
import useWindowDimensions from '../../helper/useWindowsDimensions'

function largeScreen(id, company, duration, role, desc){
    return(
        <li key={id}>
            <div className={styles.header}>
                <span>{company}</span>
                <span>{duration}</span>
            </div>
            <span className={styles.role}>as {role}</span>
            <p className={styles.description}>{desc}</p>
        </li>
    )
}

function smallScreen(id, company, duration, role, desc){
    return(
        <li key={id}>
            <div className={styles.header}>
                <span>{company}</span>
            </div>
            <div className={styles.content}>
                <span className={styles.role}>as {role}</span>
                <span>{duration}</span>
            </div>
            <p className={styles.description}>{desc}</p>
        </li>
    )
}

export default function ExperienceList({id, company, duration, role, desc}){

    const { width } = useWindowDimensions()

    if (width > 426){
        return largeScreen(id, company, duration, role, desc)
    } else {
        return smallScreen(id, company, duration, role, desc)
    }
}