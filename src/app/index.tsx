/**
 *
 * App
 *
 * This component is the snowball around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './containers/pages/Home/Loadable';
import { NotFoundPage } from './containers/pages/NotFound/Loadable';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Example } from "./containers/pages/Example/Loadable";
import { BlockChain } from "./containers/BlockChain/Loadable";
import { AppPages } from "./types";
import { IS_DEV } from "environment";
import { GovernancePage } from "./containers/pages/Governance/Loadable";
import SNOWCONE_ABI from 'libs/abis/snowcone.json'
import { PoolsAndGauges } from "./containers/PoolsAndGauges";
import GAUGE_PROXY_ABI from 'libs/abis/gauge-proxy.json'
export function App() {
  const { t } = useTranslation();
  return (
    <>
      <BlockChain
        governance={{
          tokenABI: SNOWCONE_ABI
        }}
      />
      <PoolsAndGauges abi={GAUGE_PROXY_ABI} />
      <Helmet
        titleTemplate="%s - Snowball"
        defaultTitle={t(translations.HomePage.home())}
      >
        <meta name="description" content="Snowball" />
      </Helmet>
      <Switch>
        <Route exact path={AppPages.RootPage} component={HomePage} />
        {IS_DEV && <Route exact path={AppPages.Example} component={Example} />}
        <Route path={AppPages.GovernancePage} >
          <GovernancePage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
