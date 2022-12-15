import React, { useState } from 'react';
// import moment from 'moment';
import { useFormik } from 'formik';
// import { Calendar as DatePicker } from 'react-date-range';
// import classNames from 'classnames';
import WearHouse from '../../../assets/img/portalTable/warehouse.png';
import SubHeader, { SubHeaderRight, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
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
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import CommonFilterTag from '../../_common/CommonFilterTag';
// import CommonTableRow from '../../_common/CommonTableRow';
import Select from '../../../components/bootstrap/forms/Select';
// import Popovers from '../../../components/bootstrap/Popovers';
import { layoutMenu } from '../../../menu';
// import data from '../../../common/data/dummyProductData';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';
// import Icon from '../../../components/icon/Icon';
import useSelectTable from '../../../hooks/useSelectTable';
// import useDarkMode from '../../../hooks/useDarkMode';
import TableComponent from 'theme/pages/_common/TableComponent';
import SendInviteModal from './SendInviteModal';
import { useGetAllInvitationsQuery, useDeleteInvitationMutation } from 'api';
// Loader
import Lottie from 'react-lottie';
import animationData from '../../../components/Lotties/table-data-loader.json';
// import { boolean } from 'yup/lib/locale';


const InvitationsPage = () => {
	// const { themeStatus, darkModeStatus } = useDarkMode();
	// const [date, setDate] = useState<Date>(new Date());
	const [showSendInviteModal, setShowSendInviteModal] = useState<boolean>(false);

	// Get Invitations
	// const [onInvitations, { isLoading }] = useGetAllInvitationsQuery();
	const { data: originalData, isLoading: isLoadingInvitation } = useGetAllInvitationsQuery(null);
	// console.log("🚀 ~ file: Invitations.tsx:54 ~ InvitationsPage ~ isLoadingInvitation", isLoadingInvitation)
	console.log("🚀 ~ file: Invitations.tsx:54 ~ InvitationsPage ~ originalData", originalData)
	const [onDeleteInvitations, { isLoading }] = useDeleteInvitationMutation();

	// const [filterMenu, setFilterMenu] = useState<boolean>(false);
	// const formik = useFormik({
	// 	initialValues: {
	// 		minPrice: '',
	// 		maxPrice: '',
	// 		categoryName: '3D Shapes',
	// 		companyA: true,
	// 		companyB: true,
	// 		companyC: true,
	// 		companyD: true,
	// 	},
	// 	onSubmit: (values) => {
	// 		setFilterMenu(false);
	// 	},
	// });

	// const filteredData = data?.filter(
	// 	(f) =>
	// 		// Category
	// 		f.category === formik.values.categoryName &&
	// 		// Price
	// 		(formik.values.minPrice === '' || f.price > Number(formik.values.minPrice)) &&
	// 		(formik.values.maxPrice === '' || f.price < Number(formik.values.maxPrice)) &&
	// 		//	Company
	// 		((formik.values.companyA ? f.store === 'Company A' : false) ||
	// 			(formik.values.companyB ? f.store === 'Company B' : false) ||
	// 			(formik.values.companyC ? f.store === 'Company C' : false) ||
	// 			(formik.values.companyD ? f.store === 'Company D' : false)),
	// );

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);

	// const { items, requestSort, getClassNamesFor } = useSortableData(data);
	// const onCurrentPageItems = dataPagination(items, currentPage, perPage);
	// const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageItems);



	// Delete Invitation ID
	// const [deleteID, setDeleteID] = useState('None')
	// console.log("🚀 ~ file: Invitations.tsx:99 ~ InvitationsPage ~ deleteID", deleteID)

	const handleDeleteInvitation = (value: any) => {
		setTimeout(() => {
			onDeleteInvitations(value);
		}, 200);
	}

	// Data
	const dummyDataHeader = [
		'Invitation ID',
		'Email',
		'Status',
		'Role Id',
		'Created At',
		'Updated At',
	];

	// const dummyDataToShow = [
	// 	{
	// 		id: 1,
	// 		name: 'John',
	// 		location: 'Austin',
	// 		availability: '393',
	// 		employee: 23,
	// 		coldStorage: 22,
	// 		lastActivity: '10/10/2022',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Mark',
	// 		location: 'Austin',
	// 		availability: '393',
	// 		employee: 23,
	// 		coldStorage: 22,
	// 		lastActivity: '10/10/2022',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Charlie',
	// 		location: 'Austin',
	// 		availability: '393',
	// 		employee: 23,
	// 		coldStorage: 22,
	// 		lastActivity: '10/10/2022',
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Mike',
	// 		location: 'Austin',
	// 		availability: '393',
	// 		employee: 23,
	// 		coldStorage: 22,
	// 		lastActivity: '10/10/2022',
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Wick',
	// 		location: 'Austin',
	// 		availability: '393',
	// 		employee: 23,
	// 		coldStorage: 22,
	// 		lastActivity: '10/10/2022',
	// 	},
	// ];

	// Loader Animation Function

	const [modalShow, setModalShow] = useState<boolean>(false);
	const [currentData, setCurrentData] = useState<any>(null);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	}

	return (
		<PageWrapper title={layoutMenu.wearHouse.text}>
			{/* <SubHeader> */}
			{/* <SubHeaderRight> */}
			{/* {(!!formik.values.minPrice || !!formik.values.maxPrice) && (
						<CommonFilterTag
							title='Price'
							text={`${formik.values.minPrice || '0'} to ${
								formik.values.maxPrice || 'no limit'
							}`}
						/>
					)} */}

			{/* {!!formik.values.categoryName && (
						<CommonFilterTag title='Category' text={formik.values.categoryName} />
					)}

					{(formik.values.companyA ||
						formik.values.companyB ||
						formik.values.companyC ||
						formik.values.companyD) && (
							<CommonFilterTag
								title='Store'
								text={
									(formik.values.companyA ? 'Company A, ' : '') +
									(formik.values.companyB ? 'Company B, ' : '') +
									(formik.values.companyC ? 'Company C, ' : '') +
									(formik.values.companyD ? 'Company D ' : '')
								}
							/>
						)}
					<SubheaderSeparator /> */}
			{/* <Dropdown isOpen={filterMenu} setIsOpen={setFilterMenu}>
						<DropdownToggle hasIcon={false}>
							<Button icon='Filter' color='primary' isLight data-tour='filter'>
								Filter */}
			{/* <span
									className={classNames(
										'position-absolute',
										'top-0 start-95',
										'translate-middle',
										'badge',
										'rounded-pill',
										'bg-danger',
										'border border-2',
										{
											'border-white': !darkModeStatus,
											'border-dark': darkModeStatus,
										},
									)}
                  >
                    2/3
								</span> */}
			{/* <span className='visually-hidden'>filter</span>
							</Button>
						</DropdownToggle>
						<DropdownMenu
							isAlignmentEnd
							size='lg'
							isCloseAfterLeave={false}
							data-tour='filter-menu'>
							<div className='container py-2'>
								<form className='row g-3' onSubmit={formik.handleSubmit}>
									<div className='col-12'>
										<FormGroup>
											<Label htmlFor='minPrice'>Price</Label>
											<InputGroup>
												<Input
													id='minPrice'
													ariaLabel='Minimum price'
													placeholder='Min.'
													onChange={formik.handleChange}
													value={formik.values.minPrice}
												/>
												<InputGroupText>to</InputGroupText>
												<Input
													id='maxPrice'
													ariaLabel='Maximum price'
													placeholder='Max.'
													onChange={formik.handleChange}
													value={formik.values.maxPrice}
												/>
											</InputGroup>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup>
											<Label htmlFor='categoryName'>Category</Label>
											<Select
												id='categoryName'
												ariaLabel='Category'
												placeholder='Category Name'
												list={[
													{ value: '3D Shapes', text: '3D Shapes' },
													{ value: 'Illustrator', text: 'Illustrator' },
													{ value: 'Photo', text: 'Photo' },
												]}
												onChange={formik.handleChange}
												value={formik.values.categoryName}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup>
											<Label>Store</Label>
											<ChecksGroup>
												<Checks
													id='companyA'
													label='Company A'
													onChange={formik.handleChange}
													checked={formik.values.companyA}
												/>
												<Checks
													id='companyB'
													label='Company B'
													onChange={formik.handleChange}
													checked={formik.values.companyB}
												/>
												<Checks
													id='companyC'
													label='Company C'
													onChange={formik.handleChange}
													checked={formik.values.companyC}
												/>
												<Checks
													id='companyD'
													label='Company D'
													onChange={formik.handleChange}
													checked={formik.values.companyD}
												/>
											</ChecksGroup>
										</FormGroup>
									</div>
									<div className='col-6'>
										<Button color='primary' isOutline className='w-100' onClick={formik.resetForm}>
											Reset
										</Button>
									</div>
									<div className='col-6'>
										<Button color='primary' className='w-100' type='submit'>
											Filter
										</Button>
									</div>
								</form>
							</div>
						</DropdownMenu>
					</Dropdown>
				</SubHeaderRight>
			</SubHeader> */}
			<Page>
				<Card stretch data-tour='list'>
					<CardHeader>
						<CardLabel>
							<CardTitle style={{ display: 'flex', alignItems: 'center' }}>
								<img
									src={WearHouse}
									style={{ width: '28px', marginRight: '12px' }}
									alt='Warehouse'
								/>
								Invitations
								{/* <small className='ms-2'>
									Item:{' '}
									{selectTable.values.selectedList.length
										? `${selectTable.values.selectedList.length} / `
										: null}
									{filteredData.length}
								</small> */}
							</CardTitle>
						</CardLabel>
						<CardActions>
							<Button
								color='info'
								icon='Add'
								isLight
								onClick={() => setShowSendInviteModal(true)}
							>
								Add
							</Button>
							<Dropdown isButtonGroup>
								{/* <Popovers
									desc={
										<DatePicker
											onChange={(item) => setDate(item)}
											date={date}
											color={process.env.REACT_APP_PRIMARY_COLOR}
										/>
									}
									placement='bottom-end'
									className='mw-100'
									trigger='click'> */}
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
						{!isLoadingInvitation ? (
							<TableComponent
								dummyDataHeader={dummyDataHeader}
								dummyDataToShow={originalData}
								name='invitation'
								setModalShow={setModalShow}
								setCurrentData={setCurrentData}
								handleDeleteInvitation={handleDeleteInvitation}
							/>
						) : (
							<Lottie
								options={defaultOptions}
								height={300}
								width={300}
							/>)
						}
					</CardBody>
					{/* <PaginationButtons
						data={items}
						label='items'
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
						perPage={perPage}
						setPerPage={setPerPage}
					/> */}
				</Card>
			</Page>
			<SendInviteModal isOpen={showSendInviteModal} setIsOpen={setShowSendInviteModal}
			/>
		</PageWrapper>
	);
};

export default InvitationsPage;
