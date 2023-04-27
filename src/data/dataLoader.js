import { singleProjectData as singleProjectData1 } from './singleProjectData1';
import { singleProjectData as singleProjectData2 } from './singleProjectData2';
import { singleProjectData as singleProjectData3 } from './singleProjectData3';



export function loadData(projectId) {
    
  
    switch (projectId) {
      case '1':
        return singleProjectData1;
      case '2':
        return singleProjectData2;
      case '3':
        return singleProjectData3;
      default:
        return null;
    }

  }
  