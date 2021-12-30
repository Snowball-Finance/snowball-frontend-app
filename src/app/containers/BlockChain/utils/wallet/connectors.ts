
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const AVALANCHE_MAINNET_PARAMS = {
  chainId: '0xa86a',
  chainName: 'Avalanche Mainnet C-Chain',
  nativeCurrency: {
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18
  },
  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
  blockExplorerUrls: ['https://snowtrace.io/']
}

const walletLink = new WalletLinkConnector({
  url: AVALANCHE_MAINNET_PARAMS.rpcUrls[0],
  appName: 'Snowball',
  appLogoUrl: 'https://raw.githubusercontent.com/Snowball-Finance/app-v2/master/public/assets/images/logo.png'
})

const injected = new InjectedConnector({ supportedChainIds: [Number(AVALANCHE_MAINNET_PARAMS.chainId)] })
const trustWallet = new InjectedConnector({ supportedChainIds: [Number(AVALANCHE_MAINNET_PARAMS.chainId)] })

export {
  injected,
  trustWallet,
  walletLink,
  AVALANCHE_MAINNET_PARAMS
}
