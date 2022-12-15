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
import data from '../../../common/data/dummyProductData';
import PaginationButtons, {
    dataPagination,
    PER_COUNT,
} from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';
// import Icon from '../../../components/icon/Icon';
import useSelectTable from '../../../hooks/useSelectTable';
// import useDarkMode from '../../../hooks/useDarkMode';
import TableComponent from 'theme/pages/_common/TableComponent';
import AddWareHouseModal from 'theme/components/addwareHouseModal/AddWareHouseModal';

const WearHousePage = () => {
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
    const { selectTable, SelectAllCheck } = useSelectTable(onCurrentPageItems);

    // Data
    const dummyDataHeader = [
        'Name',
        'Location',
        'Availability',
        'Employees',
        'Cold Storage',
        'Last Activity',
    ];

    const dummyDataToShow = [
        {
            id: 1,
            name: 'John',
            location: 'Austin',
            availability: '393',
            employee: 23,
            coldStorage: 22,
            lastActivity: '10/10/2022',
        },
        {
            id: 2,
            name: 'Mark',
            location: 'Austin',
            availability: '393',
            employee: 23,
            coldStorage: 22,
            lastActivity: '10/10/2022',
        },
        {
            id: 3,
            name: 'Charlie',
            location: 'Austin',
            availability: '393',
            employee: 23,
            coldStorage: 22,
            lastActivity: '10/10/2022',
        },
        {
            id: 4,
            name: 'Mike',
            location: 'Austin',
            availability: '393',
            employee: 23,
            coldStorage: 22,
            lastActivity: '10/10/2022',
        },
        {
            id: 5,
            name: 'Wick',
            location: 'Austin',
            availability: '393',
            employee: 23,
            coldStorage: 22,
            lastActivity: '10/10/2022',
        },
    ];

    const [modalShow, setModalShow] = useState<boolean>(false);

    // Delete Invitation ID
    const handleDeleteWareHouse = (value: any) => {
        console.log("Delete Ware House", value);
    }

    const [currentData, setCurrentData] = useState<any>(null);

    return (
        <>
            <AddWareHouseModal isOpen={modalShow} setIsOpen={setModalShow}
            />
            <PageWrapper title={layoutMenu.wearHouse.text}>
                <SubHeader>
                    <SubHeaderRight>
                        {/* {(!!formik.values.minPrice || !!formik.values.maxPrice) && (
						<CommonFilterTag
							title='Price'
							text={`${formik.values.minPrice || '0'} to ${
								formik.values.maxPrice || 'no limit'
							}`}
						/>
					)} */}

                        {!!formik.values.categoryName && (
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
                        <SubheaderSeparator />
                        <Dropdown isOpen={filterMenu} setIsOpen={setFilterMenu}>
                            <DropdownToggle hasIcon={false}>
                                <Button icon='Filter' color='primary' isLight data-tour='filter'>
                                    Filter
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
                                    <span className='visually-hidden'>filter</span>
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
                </SubHeader>
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
                                    Wear House{' '}
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
                                // to='/Some file.txt'
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
										#{' '}
										<Icon
											size='lg'
											className={getClassNamesFor('id')}
											icon='FilterList'
										/>
									</th>
									<th scope='col'>Image</th>
									<th scope='col'>Name</th>
									<th scope='col'>Location</th>
									<th scope='col'>Availability</th>
									<th scope='col'>Employees</th>
									<th scope='col'>Cold Storage</th>
									
									<th
										scope='col'
										onClick={() => requestSort('stock')}
										className='cursor-pointer text-decoration-underline'>
										Stock{' '}
										<Icon
											size='lg'
											className={getClassNamesFor('stock')}
											icon='FilterList'
										/>
									</th>
									<th
										scope='col'
										onClick={() => requestSort('price')}
										className='cursor-pointer text-decoration-underline'>
										Price{' '}
										<Icon
											size='lg'
											className={getClassNamesFor('price')}
											icon='FilterList'
										/>
									</th>
									<th scope='col'>Last Activity</th>
									<th scope='col' className='text-center'>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{onCurrentPageItems.map((i) => (
									<CommonTableRow
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
                                name='wearHouse'
                                setModalShow={setModalShow}
                                setCurrentData={setCurrentData}
                                handleDeleteInvitation={handleDeleteWareHouse}
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

export default WearHousePage;