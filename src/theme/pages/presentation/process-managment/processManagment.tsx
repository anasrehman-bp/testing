import React, { useState } from 'react'
import SubHeader, { SubHeaderRight, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import CommonFilterTag from '../../_common/CommonFilterTag';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import InputGroup, { InputGroupText } from '../../../components/bootstrap/forms/InputGroup';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Label from '../../../components/bootstrap/forms/Label';
import Select from '../../../components/bootstrap/forms/Select';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Page from '../../../layout/Page/Page';
import TableComponent from 'theme/pages/_common/TableComponent';
import Button from '../../../components/bootstrap/Button';import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Management from '../../../../theme/assets/img/portalTable/createProcess.png';
import PaginationButtons, {
	dataPagination,
	PER_COUNT,
} from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';
import data from '../../../common/data/dummyProductData';
import { useFormik } from 'formik';
import PageWrapper from 'theme/layout/PageWrapper/PageWrapper';
import { management } from 'theme/menu';
import AddWareHouseModal from 'theme/components/addwareHouseModal/AddWareHouseModal';


const processManagment = () => {
    const dummyDataHeader = ['Name', 'Step Count', 'Association'];

	const dummyDataToShow = [
		{
			// id: 1,
			name: 'Process 1',
			stepCount: '7 steps',
			association: 'src',
		},
		{
			// id: 1,
			name: 'Process 2',
			stepCount: '4 steps',
			association: 'src',
		},
		{
			// id: 1,
			name: 'Process 3',
			stepCount: '10 steps',
			association: 'src',
		},
		{
			// id: 1,
			name: 'Process 4',
			stepCount: '8 steps',
			association: 'src',
		},
		{
			// id: 1,
			name: 'Process 5',
			stepCount: '5 steps',
			association: 'src',
		},
		{
			// id: 1,
			name: 'Process 6',
			stepCount: '2 steps',
			association: 'src',
		},
		{
			// id: 1,
			name: 'Process 7',
			stepCount: '7 steps',
			association: 'src',
		},

		];

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

    const [currentData, setCurrentData] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
    const { items, requestSort, getClassNamesFor } = useSortableData(filteredData);
    const handleDeleteBarCode = (value: any) => {
		console.log("Delete Bar Code 23", value);
	}
    const [modalShow, setModalShow] = useState<boolean>(false);
  return (
    <>
	<PageWrapper title={management.processManagement.text}>
		<Page>
					<Card stretch data-tour='list'>
						<CardHeader>
							<CardLabel>
								<CardTitle style={{ display: 'flex', alignItems: 'center' }}>
									<img src={Management} style={{ width: '28px', marginRight: '12px' }} alt='BarCodes' />
									Create Process{' '}
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
									onClick={() => setModalShow(true)}
								// tag='a'
								// to='/somefile.txt'
								// target='_blank'
								// download
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
								{/* Extra Options */}
								{/* <Dropdown className='d-inline'>
								<DropdownToggle hasIcon={false}>
									<Button color={themeStatus} icon='MoreHoriz' />
								</DropdownToggle>
								<DropdownMenu isAlignmentEnd>
									<DropdownItem>
										<Button icon='Edit'>Edit</Button>
									</DropdownItem>
									<DropdownItem>
										<Button icon='Delete'>Delete</Button>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown> */}
							</CardActions>
						</CardHeader>
						<CardBody className='table-responsive' isScrollable>
							{/* <table className='table table-modern table-hover'>
							<thead>
								<tr>
									<th scope='col'>{SelectAllCheck}</th>
									<th
										scope='col'
										onClick={() => requestSort('id')}
										className='cursor-pointer text-decoration-underline'>
										# <Icon size='lg' className={getClassNamesFor('id')} icon='FilterList' />
									</th>
									<th scope='col'>Code</th>
									<th scope='col'>Type</th>
									<th scope='col'>Last Activity</th>
									<th scope='col' className='text-center'>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{onCurrentPageItems.map((i) => (
									<BarCodeTable
										key={i.id}
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...i}
										selectName='selectedList'
										selectOnChange={selectTable.handleChange}
										selectChecked={selectTable.values.selectedList.includes(
											// @ts-ignore
											i.id.toString(),
										)}
									/>
								))}
							</tbody>
						</table> */}
							<TableComponent
								dummyDataHeader={dummyDataHeader}
								dummyDataToShow={dummyDataToShow}
								name='barCode'
								setModalShow={setModalShow}
								setCurrentData={setCurrentData}
								handleDeleteInvitation={handleDeleteBarCode}
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
  )
}

export default processManagment
