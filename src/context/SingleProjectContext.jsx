import { useState, createContext } from 'react';
import { useParams } from 'react-router-dom';
import { loadData } from '../data/dataLoader';


const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const { projectId } = useParams();
	const [singleProjectData, setSingleProjectData] = useState(
		loadData(projectId)
	);
console.log([singleProjectData, setSingleProjectData])
	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
