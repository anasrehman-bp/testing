import React from 'react';
import Footer from '../../../layout/Footer/Footer';
import Popovers from '../../../components/bootstrap/Popovers';

const DefaultFooter = () => {
	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					{/* <div className='col'>
						<Popovers
							title='Footer.tsx'
							desc={<code>src/pages/_layout/_footers/DefaultFooter.tsx</code>}>
							Footer
						</Popovers>
						<code className='ps-3'>Footer.tsx</code>
					</div>
					<div className='col-auto'>
						<Popovers
							title='Footer.tsx'
							desc={<code>src/pages/_layout/_footers/DefaultFooter.tsx</code>}>
							Footer
						</Popovers>
						<code className='ps-3'>Footer.tsx</code>
					</div> */}
					<p style={{ textAlign: 'center' }}>
						{' '}
						Copyright &copy; 2022-<script>document.write(new Date().getFullYear())</script> Leafgistics All Rights Reserved
					</p>
				</div>
			</div>
		</Footer>
	);
};

export default DefaultFooter;
