import React from 'react'
import Card, { CardActions, CardHeader, CardLabel, CardTitle, CardBody } from 'theme/components/bootstrap/Card';
import Page from 'theme/layout/Page/Page';
import PageWrapper from 'theme/layout/PageWrapper/PageWrapper';
import { management } from '../../../menu';
import CreateProcess from '../../../../theme/assets/img/portalTable/createProcess.png';
import Input from 'theme/components/bootstrap/forms/Input';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from 'theme/components/bootstrap/Dropdown';
import Button from 'theme/components/bootstrap/Button';
import Icon from 'theme/components/icon/Icon';

const LogicManagement = () => {
    const handleSteps = () => {
        console.log('working')
    }
    const handleAssociations = () => {
        console.log('working')
    }
  return (
    <>
    <PageWrapper title={management.processManagement.subMenu.logicManagement.text}>
        <Page>
            <Card stretch data-tour='list'>
                 <CardHeader>
                    <CardLabel>
                        <CardTitle style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={CreateProcess}
                                style={{ width: '28px', marginRight: '12px' }}
                                alt='Warehouse'
                                />
                                Create Process{' '}
                            </CardTitle>
                        </CardLabel>
                    </CardHeader>
                <CardActions style={{paddingLeft: '1.6rem'}}><input type='text' placeholder='Process Name' style={{height: '62px', width: '504px', paddingLeft: '2rem', border: '0px', borderRadius: '4px', backgroundColor: '#F8F9FA',boxShadow: 'inset 0px 2px 8px rgba(0, 0, 0, 0.05)'}}/></CardActions>
                <CardTitle style={{padding: '11.12rem 1.56rem 0rem 1.7rem', display: 'inline-flex',justifyContent:'space-between', maxWidth: '16rem', alignContent: 'flex-end', alignItems: 'baseline'}}>
                    Steps
                    <Button color='info' isLight onClick={() => handleSteps()}>Add <Icon icon='ArrowDownward' size={'lg'}/></Button>                     
                </CardTitle>
                <CardBody>
                <div>
            <div
              style={{
                border: '3px dashed #D9D9D9',
                borderRadius: '5px',
                width: '1264px',
                height: '60px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => handleSteps()}
            >
              <Icon icon='Add' size={'2x'} style={{ color: '#D9D9D9' }} />&nbsp;
              Add Steps
            </div>
          </div>    
                </CardBody>
                <CardTitle style={{padding: '11.12rem 1.56rem 0rem 1.7rem', display: 'inline-flex',justifyContent:'space-between', maxWidth: '20rem', alignContent: 'flex-end', alignItems: 'baseline'}}>
                    Associations
                    <Button color='info' isLight onClick={() => handleAssociations()}>Add <Icon icon='ArrowDownward' size={'lg'}/></Button>                     
                </CardTitle>
                <CardBody>
                <div>
            <div
              style={{
                border: '3px dashed #D9D9D9',
                borderRadius: '5px',
                width: '1264px',
                height: '60px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => handleAssociations()}
            >
              <Icon icon='Add' size={'2x'} style={{ color: '#666666' }} />&nbsp;
              Add Association
            </div>
          </div>    
                </CardBody>
            </Card>
        </Page>
    </PageWrapper>
    </>
  )
};

export default LogicManagement
