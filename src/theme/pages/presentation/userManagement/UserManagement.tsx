import React, { useState } from 'react';
// import moment from 'moment';
import { useFormik } from 'formik';
import Button from '../../../components/bootstrap/Button';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
// import CommonTableRow from '../../_common/CommonTableRow';
// import Popovers from '../../../components/bootstrap/Popovers';
import { managementMenu } from '../../../menu';
import data from '../../../common/data/dummyProductData';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';
// import useSelectTable from '../../../hooks/useSelectTable';
// import useDarkMode from '../../../hooks/useDarkMode';
import TableManagementComponent from 'theme/pages/_common/TableComponent';
import UserManagementIcon from '../../../assets/img/portalTable/carbon_id-management_blue.png';
import UserProfile from '../../../assets/img/portalTable/userProfile.png';
import TableComponent from 'theme/pages/_common/TableComponent';

const UserManagement = () => {
	// const { themeStatus, darkModeStatus } = useDarkMode();
	// const [date, setDate] = useState<Date>(new Date());

	const [filterMenu, setFilterMenu] = useState<boolean>(false);
	const formik = useFormik({
		initialValues: {
			minPrice: '',
			maxPrice: '',
			categoryName: '3D Shapes',
			companyA: true,
			companyB: true,
			companyC: true,
			companyD: true,
		},
		onSubmit: (values) => {
			setFilterMenu(false);
		},
	});

	const filteredData = data.filter(
		(f) =>
			// Category
			f.category === formik.values.categoryName &&
			// Price
			(formik.values.minPrice === '' || f.price > Number(formik.values.minPrice)) &&
			(formik.values.maxPrice === '' || f.price < Number(formik.values.maxPrice)) &&
			//	Company
			((formik.values.companyA ? f.store === 'Company A' : false) ||
				(formik.values.companyB ? f.store === 'Company B' : false) ||
				(formik.values.companyC ? f.store === 'Company C' : false) ||
				(formik.values.companyD ? f.store === 'Company D' : false)),
	);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);

	const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);
	const onCurrentPageItems = dataPagination(items, currentPage, perPage);
	// const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageItems);

	const [filterActiveData, setFilterActiveData] = useState('All');

	// Data
	const dummyDataHeader = [
		'Employee ID',
		'Employee Name',
		'Role',
		'Salary',
		'Time Period',
		'Address',
		'Email Address',
		'Phone Number',
		'Status',
		'Active',
	];
	// All Data
	const dummyDataToShow = [
		{
			id: 1,
			emp_id: '001',
			emp_profile: UserProfile,
			emp_name: 'John',
			role: 'Associate',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Paid',
			active: 'Active',
		},
		{
			id: 3,
			emp_id: '003',
			emp_profile: UserProfile,
			emp_name: 'Mike',
			role: 'Manager',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Unpaid',
			active: 'Inactive',
		},
		{
			id: 2,
			emp_id: '002',
			emp_profile: UserProfile,
			emp_name: 'Allen',
			role: 'Manager',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Paid',
			active: 'Active',
		},
	];

	// Active Data
	const dummyActiveDataToShow = [
		{
			id: 1,
			emp_id: '001',
			emp_profile: UserProfile,
			emp_name: 'John',
			role: 'Associate',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Paid',
			active: 'Active',
		},
		{
			id: 3,
			emp_id: '003',
			emp_profile: UserProfile,
			emp_name: 'Mike',
			role: 'Manager',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Unpaid',
			active: 'Active',
		},
		{
			id: 2,
			emp_id: '002',
			emp_profile: UserProfile,
			emp_name: 'Allen',
			role: 'Manager',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Paid',
			active: 'Active',
		},
	];

	// Inactive Data
	const dummyInactiveDataToShow = [
		{
			id: 1,
			emp_id: '001',
			emp_profile: UserProfile,
			emp_name: 'John',
			role: 'Associate',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Paid',
			active: 'Inactive',
		},
		{
			id: 3,
			emp_id: '003',
			emp_profile: UserProfile,
			emp_name: 'Mike',
			role: 'Manager',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Unpaid',
			active: 'Inactive',
		},
		{
			id: 2,
			emp_id: '002',
			emp_profile: UserProfile,
			emp_name: 'Allen',
			role: 'Manager',
			salary: '$30,0000',
			timePeriodFrom: '10/08/2022',
			timePeriodTo: '11/08/2022',
			address: 'PECHS',
			emailAddress: 'admin@gmail.com',
			phoneNumber: '+925632323222',
			status: 'Paid',
			active: 'Inactive',
		},
	];

	// Modal Dialog States
	const [modalShow, setModalShow] = useState<boolean>(false);

	// Delete Invitation ID
	const handleDeleteUserManagement = (value: any) => {
		console.log("Delete UserManagement", value);
	}

	const [currentData, setCurrentData] = useState<any>(null);

	return (
		<>
			<PageWrapper title={managementMenu.userManagement.text}>
				<Page>
					<Card stretch data-tour='list'>
						<CardHeader>
							<CardLabel>
								<CardTitle style={{ display: 'flex', alignItems: 'center' }}>
									<div>
										<img
											src={UserManagementIcon}
											style={{ width: '28px', marginRight: '12px' }}
											alt='Zone'
										/>
										User Management
									</div>
									<div
										style={{
											marginLeft: '80px',
											backgroundColor: 'rgba(102, 102, 102, 0.07)',
											borderRadius: '5px',
											padding: '10px',
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
										}}>
										<div
											style={{
												borderBottom:
													filterActiveData === 'All' ? '4px solid #46BCAA' : '4px solid #fff',
												backgroundColor: '#fff',
												borderRadius: '5px',
												padding: '6px',
												width: '117px',
												textAlign: 'center',
											}}
											onClick={() => setFilterActiveData('All')}>
											<p
												style={{
													color: filterActiveData === 'All' ? '#46BCAA' : '#6D7C7E',
													marginBottom: '0px',
													padding: '5px',
												}}>
												All
											</p>
										</div>
										<div
											style={{
												marginLeft: '15px',
												borderBottom:
													filterActiveData === 'Active' ? '4px solid #46BCAA' : '4px solid #fff',
												backgroundColor: '#fff',
												borderRadius: '5px',
												padding: '6px',
												width: '117px',
												textAlign: 'center',
											}}
											onClick={() => setFilterActiveData('Active')}>
											<p
												style={{
													color: filterActiveData === 'Active' ? '#46BCAA' : '#6D7C7E',
													marginBottom: '0px',
													padding: '5px',
												}}>
												Active
											</p>
										</div>
										<div
											style={{
												marginLeft: '15px',
												borderBottom:
													filterActiveData === 'Inactive' ? '4px solid #46BCAA' : '4px solid #fff',
												backgroundColor: '#fff',
												borderRadius: '5px',
												padding: '6px',
												width: '117px',
												textAlign: 'center',
											}}
											onClick={() => setFilterActiveData('Inactive')}>
											<p
												style={{
													color: filterActiveData === 'Inactive' ? '#46BCAA' : '#6D7C7E',
													marginBottom: '0px',
													padding: '5px',
												}}>
												Inactive
											</p>
										</div>
									</div>
								</CardTitle>
							</CardLabel>
							<CardActions>
								<Button
									color='info'
									icon='Add'
									isLight
								// tag='a'
								// to='/somefile.txt'
								// target='_blank'
								// download
								// onClick={() => setModalShow(true)}
								>
									Add
								</Button>
								<Dropdown isButtonGroup>
									<Button color='success' isLight>
										Latest
									</Button>
									{/* </Popovers> */}
									<DropdownToggle>
										<Button color='success' isLight />
									</DropdownToggle>
									<DropdownMenu isAlignmentEnd>
										<DropdownItem>
											<span>Last Hour</span>
										</DropdownItem>
										<DropdownItem>
											<span>Last Day</span>
										</DropdownItem>
										<DropdownItem>
											<span>Last Week</span>
										</DropdownItem>
										<DropdownItem>
											<span>Last Month</span>
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</CardActions>
						</CardHeader>
						<CardBody className='table-responsive' isScrollable>
							<TableComponent
								dummyDataHeader={dummyDataHeader}
								dummyDataToShow={
									filterActiveData === 'All'
										? dummyDataToShow
										: filterActiveData === 'Active'
											? dummyActiveDataToShow
											: dummyInactiveDataToShow
								}
								name='userManagement'
								setModalShow={setModalShow}
								setCurrentData={setCurrentData}
								handleDeleteInvitation={handleDeleteUserManagement}

							/>
						</CardBody>
						<PaginationButtons
							data={items}
							label='items'
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							setPerPage={setPerPage}
						/>
					</Card>
				</Page>
			</PageWrapper>
		</>
	);
};

export default UserManagement;
