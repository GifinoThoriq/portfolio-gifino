import styles from '../styles/Experience.module.css'
import expData from '../constant/ExperienceData'
import ExperienceList from '../components/experiences/ExperienceList'
import BackArrow from '../components/ui/BackArrow'

export default function experience(){
    return(
        <div className={styles.container}>
            <div>
                <BackArrow/>
                <span className={styles.title}>Experiences</span>
            </div>
            
            <div>
                <ul className={styles.experienceListContainer}>
                    {expData.map(exp => {
                        return(
                            <ExperienceList
                                company={exp.company}
                                duration={exp.duration}
                                role={exp.role}
                                desc={exp.desc}
                                key={exp.id}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}