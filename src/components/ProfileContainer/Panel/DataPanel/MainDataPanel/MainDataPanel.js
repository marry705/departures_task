import React from 'react';
import { useSelector } from 'react-redux';
import { Display, WhenError, WhenLoading, WhenNoAction } from '../../../../Display/Display';
import DeparturesPanel from '../DeparturesPanel/DeparturesPanel';

const MainDataPanel = () => {
    const { isLoading, errorMessage } = useSelector(state => state.departures);

    let isError = errorMessage ? true : false;
  
    return (
      <>
        <Display ifLoading={isLoading} ifError={isError}>               
            <WhenLoading>   
            <div className='main-wrapper'>
                <div className='cssload-speeding-wheel dark'></div>
            </div>        
            </WhenLoading>  
            <WhenError> 
            <div className='main-wrapper'>
                <div className='error-block'>
                <p>{errorMessage}</p>
                </div> 
            </div>            
            </WhenError>  
            <WhenNoAction>
                <DeparturesPanel/>
            </WhenNoAction>
        </Display>
      </>
    );
  };
  
  export default MainDataPanel;
