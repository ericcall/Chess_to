import "bootstrap/dist/css/bootstrap.min.css";
import "./Level.scss";

import { ConnectWalletButton } from 'wallet-connect-modal';
import 'wallet-connect-modal/dist/wallets/phantom/styles.css';
import 'wallet-connect-modal/dist/wallets/metamask/styles.css';
import 'wallet-connect-modal/dist/wallets/rabby/styles.css';
import 'wallet-connect-modal/dist/wallets/tronlink/styles.css';
import 'wallet-connect-modal/dist/wallets/bitget/styles.css';
import 'wallet-connect-modal/dist/wallets/coinbase/styles.css';
import 'wallet-connect-modal/dist/wallets/solflare/styles.css';

export const Level = () => {
	const machinePlayAction = ( aiLevel ) => {
		// navigate('/gameScene', { state: { mode: gameModes['P2E'], aiLevel: aiLevel } });
		alert('Please conntect your wallet for playing a game!');
	}

    return (
		<div className="selectLevel">
			<ConnectWalletButton className="connect-wallet-button" />
			<div className="u-container">
				<div className="u-ribbon">Choose Level</div>
				<div className="u-content">
					<div className="u-content-container">
						<div className="u-table-wrap">
							<div className="u-row">
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(0)}>AI MonKey</button>
								</div>
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(1)}>Beginner</button>
								</div>
							</div>
							<div className="u-row">
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(2)}>Intermediate</button>
								</div>
								<div className="u-item-container">
									<button className="u-item" onClick={() => machinePlayAction(3)}>Advanced</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Level;
