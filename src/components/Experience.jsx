/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant, staggerContainer } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: '#1d1836', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px solid #232631' }}
			// eslint-disable-next-line react/prop-types
			date={ experience.date }
			// eslint-disable-next-line react/prop-types
			iconStyle={{ background: experience.iconBg}}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img 
						// eslint-disable-next-line react/prop-types
						src={ experience.icon } 
						// eslint-disable-next-line react/prop-types
						alt={ experience.company_name } 
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">
					{ experience.title }
				</h3>
				<p 
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{ experience.company_name }
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2 ">
				{ experience.points.map((point, index) => 
					<li 
						key={ `experience-point-${ index }` }
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{ point }
					</li>
				)}
			</ul>
		</VerticalTimelineElement>
	)
}

const Experience = () => {
	return (
		<motion.section
			variants={ staggerContainer() } 
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25}}
			className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
		>
			<motion.div variants={ textVariant() }>
				<p className={ styles.sectionSubText }>What I have done so far</p>
				<h2 className={ styles.sectionHeadText }>Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => 
						<ExperienceCard key={ index } experience={ experience } />
					)}
				</VerticalTimeline>
			</div>
		</motion.section>
		
	);
};

export default Experience;
