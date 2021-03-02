import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Ripples from 'react-ripples';

const ExpandButton = ({ setExpand, expand }) => {
	const handleClick = () => {
		setExpand((prev) => !prev);
	};
	return (
		<div
			style={{
				marginTop: '30px',
				display: 'inline-flex',
				borderRadius: 50,
				overflow: 'hidden',
			}}
		>
			<Ripples>
				<button className={`button-expand`} onClick={handleClick}>
					{!expand ? (
						<div className='heartbeat'>
							<FaArrowDown />
						</div>
					) : (
						<FaArrowUp />
					)}
				</button>
			</Ripples>
		</div>
	);
};

export default ExpandButton;
