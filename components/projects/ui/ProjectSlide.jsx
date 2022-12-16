import Image from 'next/image'
import { UI, Web, IoT } from '../../../constant/Project';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from '../style/ui/ProjectSlide.module.css'

export default function ProjectSlide({
    onthumbnailClick,
    project
}){

    return(
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {project === "ui" && 
                UI.map((projects) => {
                    return(
                        <SwiperSlide key={projects.id}>
                            <div 
                                className={styles.projectThumbnailContainer} 
                                onClick={() => onthumbnailClick(projects.title, projects.description, projects.socialmedia)}
                            >
                                <div className={styles.projectThumbnail}>
                                    <Image
                                        src={projects.thumbnail}
                                        layout="fill"
                                        objectFit='contain'
                                        priority={true}
                                        alt={project.title}
                                    />
                                </div>
                            </div>
                            <span className={styles.titleProject}>{projects.title}</span>
                        </SwiperSlide> 
                )})
            }
            {project === "web" && 
                Web.map((projects) => {
                    return(
                        <SwiperSlide key={projects.id}>
                            <div 
                                className={styles.projectThumbnailContainer} 
                                onClick={() => onthumbnailClick(projects.title, projects.description, projects.socialmedia)}
                            >
                                <div className={styles.projectThumbnail}>
                                    <Image
                                        src={projects.thumbnail}
                                        layout="fill"
                                        objectFit='contain'
                                        priority={true}
                                        alt={project.title}
                                    />
                                </div>
                            </div>
                            <span className={styles.titleProject}>{projects.title}</span>
                        </SwiperSlide> 
                )})
            }
            {project === "iot" && 
                IoT.map((projects) => {
                    return(
                        <SwiperSlide key={projects.id}>
                            <div 
                                className={styles.projectThumbnailContainer} 
                                onClick={() => onthumbnailClick(projects.title, projects.description, projects.socialmedia)}
                            >
                                <div className={styles.projectThumbnail}>
                                    <Image
                                        src={projects.thumbnail}
                                        layout="fill"
                                        objectFit='contain'
                                        priority={true}
                                        alt={project.title}
                                    />
                                </div>
                            </div>
                            <span className={styles.titleProject}>{projects.title}</span>
                        </SwiperSlide> 
                )})
            }
        </Swiper>
    )
}