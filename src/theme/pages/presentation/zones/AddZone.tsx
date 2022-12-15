import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card, { CardBody, CardHeader, CardLabel, CardTitle } from 'theme/components/bootstrap/Card';
import Icon from 'theme/components/icon/Icon';
import Page from 'theme/layout/Page/Page';
import Zone from '../../../assets/img/portalTable/zone.png';

interface IAddZonesProps { }

const AddZones: React.FunctionComponent<IAddZonesProps> = () => {
  const navigate = useNavigate();
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
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <div
              style={{
                border: '1.5px dashed gray',
                borderRadius: '10px',
                width: '200px',
                height: '80px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => navigate('../zones/editZone')}
            >
              <Icon icon='Add' size={'4x'} style={{ color: '#666666' }} />
            </div>
            <p style={{ marginTop: '8px' }}>Press the add icon to add zone</p>
          </div>
        </CardBody>
      </Card>
    </Page>
  );
};

export default AddZones;
