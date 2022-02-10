import { styled } from "@mui/material";
import { StakingPageSelectors } from "app/containers/pages/StakingPage/selectors";
import { estimateXSnobForDate } from "app/containers/pages/StakingPage/utils/stakeDate";
import { BNToString } from "common/format";
import { env } from "environment";
import { BigNumber } from "ethers";
import { translations } from "locales/i18n";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { CssVariables } from "styles/cssVariables/cssVariables";

export const DepositYouWillGet = () => {
  const governanceTokenName = env.GOVERNANCE_TOKEN_NAME;
  const { t } = useTranslation();
  const youWillGet = useSelector(StakingPageSelectors.selectYouWillGet);
  return (
    <Amount>
      {t(translations.Staking.YouWillGet_AMOUNT_TOKEN(), {
        token: governanceTokenName,
        amount: Number(youWillGet).toFixed(3),
      })}
    </Amount>
  );
};

const Amount = styled("h6")({
  fontSize: "16px",
  fontWeight: "600",
  margin: 0,
  color: CssVariables.primaryBlue,
  textAlign: "center",
});