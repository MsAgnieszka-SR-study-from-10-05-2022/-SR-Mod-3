import React, { useState } from 'react';

import colors from 'components/colors';
import { dataEmployees } from './dataEmployees';

const stylesForEmployeesTable = {
    margin: 5,
    padding: '5px 10px',
    width: '80vw',
    backgroundColor: colors.bgColorCustom,
    border: '1px solid black',
    stylesForTableElement : {
        display: 'flex',
        alignItems: 'center',
        minHeight: 100,
        width: '100%',
        borderBottom: '1px solid black',
    },
    styleForTableDetails: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        textAlign: 'center',
    },
    styleForTableEachItem: {
        margin: 5,
        borderBottom: '1px dotted black',
    },
};

function Employees() {
    const stylesForTable = stylesForEmployeesTable;
    const stylesForTableElement = stylesForEmployeesTable.stylesForTableElement;
    const stylesForTableDetails = stylesForEmployeesTable.styleForTableDetails;
    const styleForTableEachItem = stylesForEmployeesTable.styleForTableEachItem;

    const [ isVisible, setIsVisible ] = useState(false);

    const handleShowDetails = () => {
        setIsVisible(isVisible => !isVisible);
    };

    return (
        <div className='employees' style={stylesForTable}>
            {dataEmployees.map((elem) => {
                return (
                    <div className='employees-table' style={stylesForTableElement}>
                        <div className='employees-table__name' style={stylesForTableDetails}>
                            <p onClick={handleShowDetails}><b>{elem.firstName} {elem.lastName}</b></p>
                        </div>
                        {isVisible && <div className='employees-table__details' style={stylesForTableDetails}>
                            <p style={styleForTableEachItem}><b>Age:</b> {elem.age}</p>
                            <p style={styleForTableEachItem}><b>Salary:</b> {elem.salary} PLN</p>
                            <p style={styleForTableEachItem}><b>Position:</b> {elem.position}</p>
                        </div>}
                    </div>
                );
            })}

        </div>
    );
}

export default Employees;