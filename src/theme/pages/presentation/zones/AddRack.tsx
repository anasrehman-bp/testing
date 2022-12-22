import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'theme/components/icon/Icon';
import Card, { CardHeader, CardLabel, CardTitle, CardBody } from 'theme/components/bootstrap/Card';
import Page from 'theme/layout/Page/Page';
import PageWrapper from 'theme/layout/PageWrapper/PageWrapper';
import Rack from '../../../assets/img/portalTable/addRack.png';
import { layoutMenu } from 'theme/menu';
import AddRackModal from 'theme/components/addRackModal/AddRackModal';
import './AddRack.scss';

const AddRack = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [values, setValues] = useState();
  const [rackData, setRackData] = useState([]);
  console.log('values', values);

  //   let arrayRack: any = [];
  const temp: any = [];
  const handleRackData = (value: any) => {
    const valueData = { ...value };
    temp.push(valueData);
    setRackData(temp);
  };

  return (
    <>
      <AddRackModal
        isOpen={modalShow}
        setIsOpen={setModalShow}
        setValues={setValues}
        handleRackData={handleRackData}
      />
      <PageWrapper title={layoutMenu.zones.text}>
        <Page>
          {rackData.length === 0 ? (
            <Card stretch data-tour="list">
              <CardHeader>
                <CardLabel>
                  <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Rack} style={{ width: '28px', marginRight: '12px' }} alt="Zone" />
                    Add Rack{' '}
                  </CardTitle>
                  <CardBody>
                    <div
                      style={{
                        position: 'absolute',
                        top: '350px',
                        left: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center'
                      }}
                    >
                      <div
                        style={{
                          border: '1.5px dashed #666666',
                          borderRadius: '10px',
                          width: '300px',
                          height: '120px',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          setModalShow(true);
                          handleRackData;
                        }}
                      >
                        <Icon icon="Add" size={'4x'} style={{ color: '#666666' }} />
                      </div>
                      <p style={{ marginTop: '25px', fontSize: '20px' }}>Add a Rack</p>
                    </div>
                  </CardBody>
                </CardLabel>
              </CardHeader>
            </Card>
          ) : (
            <>
              <h4 style={{ letterSpacing: '4px' }}>WALL</h4>
              {Object.values({ values }).map((i: any) => {
                if (
                  i.rows === 'row' &&
                  i.sections[0] === 'A' &&
                  i.orientation[0] === 'Horizontal' &&
                  i.position === 'Right'
                ) {
                  [...Array(i.column)].map((v, j) => {
                    {
                      console.log('ghg', j);
                    }
                    return (
                      <div
                        key={v}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: '7.26rem',
                          height: '5.75rem',
                          border: '1px solid #000000',
                          backgroundColor: '#FFFFFF'
                        }}
                      >
                        <h4>{i.shelves} Shelves</h4>
                      </div>
                    );
                  });
                }
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center'
                  }}
                >
                  <div
                    style={{
                      border: '1.5px dashed #666666',
                      borderRadius: '10px',
                      width: '116.26px',
                      height: '92px',
                      margin: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setModalShow(true);
                      handleRackData;
                    }}
                  >
                    <Icon icon="Add" size={'4x'} style={{ color: '#666666' }} />
                  </div>
                  <p style={{ marginTop: '25px', fontSize: '20px' }}>Add a Rack</p>
                </div>;
              })}
            </>
          )}
        </Page>
      </PageWrapper>
    </>
  );
};

export default AddRack;
