import React, { FC, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import Checks from '../../components/bootstrap/forms/Checks';
// import Badge from '../../components/bootstrap/Badge';
import Button from '../../components/bootstrap/Button';
import useSortableData from '../../hooks/useSortableData';
import useSelectTable from '../../hooks/useSelectTable';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import Icon from 'theme/components/icon/Icon';
import { useNavigate } from 'react-router-dom';
import { any } from 'prop-types';

interface ITableComponentProps {
  dummyDataHeader: any;
  dummyDataToShow: any;
  name: string;
  setModalShow: any;
  setCurrentData: any;
  handleDeleteInvitation?: any;
  // setDeleteID: any;
  // SelectAllCheck: any;
}

const TableComponent: FC<ITableComponentProps> = ({
  dummyDataHeader,
  dummyDataToShow,
  name,
  setModalShow,
  setCurrentData,
  handleDeleteInvitation,
}) => {
  // console.log("🚀 ~ file: TableComponent.tsx:26 ~ dummyDataToShow", dummyDataToShow)
  // const { darkModeStatus } = useDarkMode();
  const navigate = useNavigate();
  const keys = Object.keys(dummyDataToShow[0]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
  const { items, requestSort, getClassNamesFor } = useSortableData(dummyDataToShow);
  const onCurrentPageItems = dataPagination(items, currentPage, perPage);
  const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageItems);
  const [ showInput, setShowInput ] = useState(false)

  // For Opening Modals on Click on certain col of any row.
  const handleValue = (data: any, value: any) => {
    if (value === 4 && name === 'qrCode') {
      setModalShow(true)
      setCurrentData(data)
    }
    else if (value === 0 && name === "barCode") {
      setModalShow(true)
      setCurrentData(data)
    }
  }

  return (
    <table className="table table-modern table-hover">
      <thead>
        <tr>
          {/* <th scope='col'></th> */}
          {/* <th
						scope='col'
						// onClick={() => requestSort('id')}
						className='cursor-pointer text-decoration-underline'>
						# <Icon size='lg' className={getClassNamesFor('id')} icon='FilterList' />
					</th> */}
          {dummyDataHeader?.map((item: string, index: number) => (
            <th key={index} scope="col">
              {item}
            </th>
          ))}
          <th scope="col" className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {!showInput && 
        <tr >
          <td><input id='id 1' size={10}/></td>
          <td><input id='id 1' size={10}/></td>
          <td><input id='id 1' size={10}/></td>
        </tr>
        }
        {dummyDataToShow?.map((item: any, index: number) => (
          <tr key={index}>
            {/* <th scope='row'>
							<Checks
								// id={(index + 1).toString()}
								id={item.invitation_id}
								// name={'selectedList'}
								value={item.invitation_id}
							// onChange={selectTable.handleChange}
							// checked={selectTable.values.selectedList.includes(
							// 	// @ts-ignore
							// 	item.invitation_id,
							// )}
							/>
						</th> */}
            {/* {[...Array(Number(Object.keys(item).length))].map((data, value) => (
              <td key={index + value} style={{ whiteSpace: 'nowrap' }}>
                {JSON.stringify(item[keys[value]])}
              </td>
            ))} */}
            {[...Array(Number(Object.keys(item).length))].map((data, value) => {
              if (keys[value] === 'emp_profile') {
                return (
                  <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                      <img src={item[keys[value]]} alt='User Profile' width={50} />
                      <p style={{ marginBottom: '0px', marginLeft: '10px', fontWeight: 'bold' }}>
                        {item[keys[value + 1]]}
                      </p>
                    </div>
                  </td>
                );
              } else if (keys[value] === 'timePeriodFrom') {
                return (
                  <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                    <div style={{ textAlign: 'center' }}>
                      <p>{item[keys[value]]}</p>
                      <p style={{ fontWeight: 'bold' }}>To</p>
                      <p>{item[keys[value + 1]]}</p>
                    </div>
                  </td>
                );
              } else if (keys[value] === 'status') {
                return (
                  <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                    <div
                      style={{
                        backgroundColor: item[keys[value]] === 'Paid' ? '#F6FFED' : '#FFF1F0',
                        borderRadius: '5px',
                        padding: '8px',
                        color: item[keys[value]] === 'Paid' ? '#7AB94C' : '#F64D56',
                        border:
                          item[keys[value]] === 'Paid' ? '1px solid #D0ECBC' : '1px solid #FFC7C3',
                        textAlign: 'center',
                      }}>
                      {item[keys[value]]}
                    </div>
                  </td>
                );
              } else if (keys[value] === 'active') {
                return (
                  <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                    <div
                      style={{
                        backgroundColor: item[keys[value]] === 'Active' ? '#46BCAA' : '#E7E7E7',
                        borderRadius: '20px',
                        padding: '6px 8px',
                        color: item[keys[value]] === 'Active' ? '#ffff' : '#323232',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                      }}>
                      {item[keys[value]]}
                    </div>
                  </td>
                );
              } else if (keys[value] === 'association') { //my work
                return (
                  <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                    <div
                      style={{
                        backgroundColor: item[keys[value]] === 'Association' ? '#46BCAA' : '#E7E7E7',
                        borderRadius: '20px',
                        padding: '6px 8px',
                        color: item[keys[value]] === 'Association' ? '#ffff' : '#323232',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                      }}>
                      {item[keys[value]]}
                    </div>
                  </td>
                );
              } else if (
                keys[value] !== 'timePeriodTo' &&
                keys[value] !== 'emp_name' &&
                keys[value] !== 'id'
              ) {
                // return (
                if (item[keys[value]] !== null) {
                  return (
                    <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                      {item[keys[value]]}
                    </td>
                  );
                }
                else {
                  return (
                    <td key={index + value} style={{ minWidth: '120px' }} onClick={() => handleValue(item, value)}>
                      None
                    </td>
                  );
                }
                // );
              }
            })}
            <td className="text-center" style={{ whiteSpace: 'nowrap' }}>
              <Button
                color='dark'
                isLight
                icon='Edit'
                tag='a'
                style={{ marginRight: '20px' }}
                // to={`../${demoPages.sales.subMenu.productID.path}/${id}`}
                onClick={() => navigate('../zones/addZone')}
              />
              <Button
                color="danger"
                isLight
                icon="Delete"
                tag="a"
                // to={`../${demoPages.sales.subMenu.productID.path}/${id}`}
                onClick={() => {
                  handleDeleteInvitation(dummyDataToShow[index].invitation_id);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
