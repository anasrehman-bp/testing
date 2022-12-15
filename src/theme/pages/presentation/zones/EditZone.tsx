import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Card, { CardBody, CardHeader, CardLabel, CardTitle } from 'theme/components/bootstrap/Card';
import Icon from 'theme/components/icon/Icon';
import Page from 'theme/layout/Page/Page';
import Zone from '../../../assets/img/portalTable/zone.png';
import { BsTrash } from 'react-icons/bs';
import Item from 'theme/layout/Navigation/Item';

interface IEditZoneProps { }
// var visibleZone: { id: number; name: string; status: string }[];
const EditZone: FC<IEditZoneProps> = () => {
	const [storedID, setStoredID] = useState<number>(1);
	const [prevID, setPrevID] = useState<number>(9);
	const noOfRowsAndCols = useMemo(() => [{ rows: 3, cols: 3 }], []);
	console.log('🚀 ~ file: EditZone.tsx:13 ~ noOfRowsAndCols[0]', noOfRowsAndCols[0]);
	const zones = useMemo(
		() => [
			{ id: 1, name: 'None', status: 'inactive' },
			{ id: 2, name: 'None', status: 'inactive' },
			{ id: 3, name: 'None', status: 'inactive' },
			{ id: 4, name: 'None', status: 'inactive' },
			{ id: 5, name: 'Zone A', status: 'active' },
			{ id: 6, name: 'None', status: 'inactive' },
			{ id: 7, name: 'None', status: 'inactive' },
			{ id: 8, name: 'None', status: 'inactive' },
			{ id: 9, name: 'None', status: 'inactive' },
		],
		[],
	);
	console.log('🚀 ~ file: EditZone.tsx:41 ~ zones', zones);

	const handleIndexOfMatrix = useCallback(
		(indexValue: number) => {
			console.log('🚀 ~ file: EditZone.tsx:25 ~ handleIndexOfMatrix ~ indexValue', indexValue);
			zones[indexValue].name = `${zones[indexValue].id}`;
			// if Index value is zero then it will add new obj in row and col
			if (indexValue === 0) {
				var count = prevID;
				for (let indexCol = 0; indexCol <= noOfRowsAndCols[0].cols; indexCol++) {
					zones.splice(indexCol, 0, { id: count + 1, name: 'None', status: 'inactive' });
					count = count + 1;
				}
				setPrevID(count);
				noOfRowsAndCols[0].cols = noOfRowsAndCols[0].cols + 1;
				for (
					let indexRow = noOfRowsAndCols[0].cols;
					indexRow <= noOfRowsAndCols[0].rows * noOfRowsAndCols[0].cols;
					indexRow = indexRow + noOfRowsAndCols[0].cols
				) {
					zones.splice(indexRow, 0, { id: count + 1, name: 'None', status: 'inactive' });
					count = count + 1;
				}
				setPrevID(count);
				noOfRowsAndCols[0].rows = noOfRowsAndCols[0].rows + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (indexValue === noOfRowsAndCols[0].cols - 1) {
				var count2 = prevID;
				for (let indexCol = 0; indexCol <= noOfRowsAndCols[0].cols; indexCol++) {
					zones.splice(indexCol, 0, { id: count2 + 1, name: 'None', status: 'inactive' });
					count2 = count2 + 1;
				}
				setPrevID(count2);
				noOfRowsAndCols[0].cols = noOfRowsAndCols[0].cols + 1;
				for (
					let indexRow = noOfRowsAndCols[0].rows + noOfRowsAndCols[0].cols;
					indexRow <= noOfRowsAndCols[0].cols * noOfRowsAndCols[0].cols;
					indexRow = indexRow + noOfRowsAndCols[0].cols
				) {
					zones.splice(indexRow, 0, { id: count2 + 1, name: 'None', status: 'inactive' });
					count2 = count2 + 1;
				}
				setPrevID(count2);
				noOfRowsAndCols[0].rows = noOfRowsAndCols[0].rows + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (
				indexValue ===
				noOfRowsAndCols[0].cols * noOfRowsAndCols[0].rows - noOfRowsAndCols[0].cols
			) {
				var count3 = prevID;
				for (
					let indexCol = 0;
					indexCol <= noOfRowsAndCols[0].rows * noOfRowsAndCols[0].cols;
					indexCol = indexCol + noOfRowsAndCols[0].cols + 1
				) {
					zones.splice(indexCol, 0, { id: count3 + 1, name: 'None', status: 'inactive' });
					count3 = count3 + 1;
				}
				setPrevID(count3);
				noOfRowsAndCols[0].cols = noOfRowsAndCols[0].cols + 1;
				for (let indexRow = 0; indexRow < noOfRowsAndCols[0].cols; indexRow++) {
					zones.push({ id: count3 + 1, name: 'None', status: 'inactive' });
					count3 = count3 + 1;
				}
				setPrevID(count3);
				noOfRowsAndCols[0].rows = noOfRowsAndCols[0].rows + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (indexValue === noOfRowsAndCols[0].cols * noOfRowsAndCols[0].rows - 1) {
				var count4 = prevID;
				for (
					let indexCol = noOfRowsAndCols[0].cols;
					indexCol <= noOfRowsAndCols[0].rows * noOfRowsAndCols[0].cols;
					indexCol = indexCol + noOfRowsAndCols[0].cols + 1
				) {
					zones.splice(indexCol, 0, { id: count4 + 1, name: 'None', status: 'inactive' });
					count4 = count4 + 1;
				}
				setPrevID(count4);
				noOfRowsAndCols[0].cols = noOfRowsAndCols[0].cols + 1;
				for (let indexRow = 0; indexRow <= noOfRowsAndCols[0].cols; indexRow++) {
					zones.push({ id: count4 + 1, name: 'None', status: 'inactive' });
					count4 = count4 + 1;
				}
				setPrevID(count4);
				noOfRowsAndCols[0].rows = noOfRowsAndCols[0].rows + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (indexValue > 0 && indexValue < noOfRowsAndCols[0].cols) {
				var count5 = prevID;
				for (let indexCol = 0; indexCol < noOfRowsAndCols[0].cols; indexCol++) {
					zones.splice(indexCol, 0, { id: count5 + 1, name: 'None', status: 'inactive' });
					count5 = count5 + 1;
				}
				setPrevID(count5);
				noOfRowsAndCols[0].rows = noOfRowsAndCols[0].rows + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (
				indexValue > noOfRowsAndCols[0].cols * noOfRowsAndCols[0].rows - noOfRowsAndCols[0].cols &&
				indexValue < noOfRowsAndCols[0].cols * noOfRowsAndCols[0].rows - 1
			) {
				var count6 = prevID;
				for (let indexCol = 0; indexCol < noOfRowsAndCols[0].cols; indexCol++) {
					zones.push({ id: count6 + 1, name: 'None', status: 'inactive' });
					count6 = count6 + 1;
				}
				setPrevID(count6);
				noOfRowsAndCols[0].rows = noOfRowsAndCols[0].rows + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (
				indexValue > noOfRowsAndCols[0].cols - 1 &&
				indexValue <= noOfRowsAndCols[0].cols * noOfRowsAndCols[0].rows - noOfRowsAndCols[0].cols
			) {
				var count7 = prevID;
				for (
					let indexCol = 0;
					indexCol <= noOfRowsAndCols[0].rows * noOfRowsAndCols[0].cols;
					indexCol = indexCol + noOfRowsAndCols[0].cols + 1
				) {
					zones.splice(indexCol, 0, { id: count7 + 1, name: 'None', status: 'inactive' });
					count7 = count7 + 1;
				}
				setPrevID(count7);
				noOfRowsAndCols[0].cols = noOfRowsAndCols[0].cols + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			} else if (
				indexValue > noOfRowsAndCols[0].cols * 2 - 2 &&
				indexValue <= noOfRowsAndCols[0].cols * noOfRowsAndCols[0].rows
			) {
				var count8 = prevID;
				for (
					let indexCol = noOfRowsAndCols[0].cols;
					indexCol <= noOfRowsAndCols[0].rows * noOfRowsAndCols[0].cols;
					indexCol = indexCol + noOfRowsAndCols[0].cols + 1
				) {
					zones.splice(indexCol, 0, { id: count8 + 1, name: 'None', status: 'inactive' });
					count8 = count8 + 1;
				}
				setPrevID(count8);
				noOfRowsAndCols[0].cols = noOfRowsAndCols[0].cols + 1;
				console.log('🚀 ~ file: EditZone.tsx:23 ~ zones', zones);
			}
		},
		[noOfRowsAndCols, prevID, zones],
	);

	// Zone Object which should be visible
	let visibleZone = useMemo(
		() => [
			{ id: 1, name: 'None', status: 'inactive' },
			{ id: 2, name: 'None', status: 'inactive' },
			{ id: 3, name: 'None', status: 'inactive' },
			{ id: 4, name: 'None', status: 'inactive' },
			{ id: 5, name: 'Zone A', status: 'active' },
			{ id: 6, name: 'None', status: 'inactive' },
			{ id: 7, name: 'None', status: 'inactive' },
			{ id: 8, name: 'None', status: 'inactive' },
			{ id: 9, name: 'None', status: 'inactive' },
		],
		[],
	);
	// const [visibleZone, setVisibleZone] = useState([]);
	// console.log("🚀 ~ file: EditZone.tsx:157 ~ visibleZone", visibleZone)

	const handleVisibleZoneObject = useCallback(
		(itemIDValue: number) => {
			// zones[zones.findIndex((x) => x.id === storedID)].name = `${itemIDValue}`;
			setStoredID(itemIDValue);
			console.log('🚀 ~ file: EditZone.tsx:182 ~ itemIDValue', itemIDValue);
			const pivotPoint = zones.findIndex((x) => x.id === itemIDValue);
			console.log('🚀 ~ file: EditZone.tsx:160 ~ handleVisibleZoneObject ~ pivotPoint', pivotPoint);
			// visibleZone = [];
			var indexCountValue = 0;
			for (
				let index = pivotPoint - 1 - noOfRowsAndCols[0].cols;
				index <= pivotPoint - 1 - noOfRowsAndCols[0].cols + 2;
				index++
			) {
				// visibleZone?.push(zones[index]);
				visibleZone.splice(indexCountValue, 1, zones[index]);
				indexCountValue = indexCountValue + 1;
				console.log('Line 193 if', zones[index]);
			}
			// visibleZone?.push(zones[pivotPoint - 1]);
			// visibleZone?.push(zones[pivotPoint]);
			// visibleZone?.push(zones[pivotPoint + 1]);
			console.log('Line 198 if', zones[pivotPoint - 1]);
			console.log('Line 198 if', zones[pivotPoint]);
			console.log('Line 198 if', zones[pivotPoint + 1]);
			visibleZone.splice(indexCountValue, 1, zones[pivotPoint - 1]);
			visibleZone.splice(indexCountValue + 1, 1, zones[pivotPoint]);
			visibleZone.splice(indexCountValue + 2, 1, zones[pivotPoint + 1]);
			indexCountValue = indexCountValue + 3;
			for (
				let index = pivotPoint - 1 + noOfRowsAndCols[0].cols;
				index <= pivotPoint - 1 + noOfRowsAndCols[0].cols + 2;
				index++
			) {
				// visibleZone?.push(zones[index]);
				console.log('Line 208 if', zones[index]);
				visibleZone.splice(indexCountValue, 1, zones[index]);
				indexCountValue = indexCountValue + 1;
			}
			console.log('🚀 ~ file: EditZone.tsx:160 ~ visibleZone ~ visibleZone', visibleZone);
		},
		[noOfRowsAndCols, zones, visibleZone],
	);

	// useEffect(() => {
	// 	handleVisibleZoneObject(storedID);
	// }, [handleVisibleZoneObject, storedID]);

	useEffect(() => { }, [visibleZone]);

	return (
		<Page>
			<Card stretch data-tour='list'>
				<CardHeader>
					<CardLabel>
						<CardTitle style={{ display: 'flex', alignItems: 'center' }}>
							<img src={Zone} style={{ width: '28px', marginRight: '12px' }} alt='Zone' />
							Zones{' '}
						</CardTitle>
					</CardLabel>
				</CardHeader>
				<CardBody
					className='table-responsive'
					isScrollable
					style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
					<div className='row justify-content-center gy-4' style={{ maxWidth: '800px' }}>
						{/* {[...Array(Number(9))].map((item, index) => ( */}
						{visibleZone?.map((item, index) => (
							<div key={index} style={{ width: '265px', textAlign: 'center' }}>
								<div
									onClick={() => {
										handleIndexOfMatrix(index);
										handleVisibleZoneObject(item.id);
									}}
									key={index}
									className='col-4'
									style={{
										border: item?.name === 'None' ? '1.5px dashed gray' : '1.5px solid blue',
										borderRadius: '5px',
										width: '200px',
										height: '80px',
										margin: 'auto',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										cursor: 'pointer',
									}}>
									{item?.name === 'None' ? (
										<Icon icon='Add' size={'4x'} style={{ color: '#666666' }} />
									) : (
										<div style={{ marginTop: '15px' }}>
											<h5>{item?.name ? item?.name : 'hey'}</h5>
											<p>A Receiving Zone</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
						<div
							style={{
								backgroundColor: '#E9E9E7 ',
								borderRadius: '50%',
								width: '55px',
								height: '55px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								cursor: 'pointer',
							}}>
							<BsTrash style={{ color: '#666666', height: '25px', width: '25px' }} />
						</div>
					</div>
				</CardBody>
			</Card>
		</Page>
	);
};

export default EditZone;
