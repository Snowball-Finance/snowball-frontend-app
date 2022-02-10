import { styled } from "@mui/material";
import { SnowPaper } from "app/components/base/SnowPaper";
import { ContainedButton } from "app/components/common/buttons/containedButton";
import { OutlinedButton } from "app/components/common/buttons/outlinedButton";
import { selectGovernanceTokenBalance } from "app/containers/BlockChain/Governance/selectors";
import { BNToFloat } from "common/format";
import { env } from "environment";
import { BigNumber } from "ethers";
import { translations } from "locales/i18n";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Info } from "./info";

export const OverallInfoCard = () => {
  const { t } = useTranslation();
  const lockedTokenAmount = "0.00";
  const earnedTokensAmount = "0.00";
  const dailyUnlockedAmount = "0.00";
  const rawGovernanceTokenBalance = useSelector(selectGovernanceTokenBalance);
  const governanceTokenBalance = BNToFloat(
    rawGovernanceTokenBalance ?? BigNumber.from(0),
    18
  )?.toFixed(3);

  return (
    <StyledSnowPaper>
      <LeftWrapper>
        <Info
          title={t(translations.Staking.TokensLocked())}
          value={`${lockedTokenAmount} ${env.MAIN_TOKEN_NAME}`}
          help={<>info</>}
        />
        <Info
          title={t(translations.Staking.GOVERNANCETOKENNAME_Balance(), {
            governanceTokenName: env.GOVERNANCE_TOKEN_NAME,
          })}
          value={`${governanceTokenBalance} ${env.GOVERNANCE_TOKEN_NAME}`}
          help={<>info</>}
        />
        <Filler />

        <OutlinedButton>{t(translations.Staking.HowItWorks())}</OutlinedButton>
      </LeftWrapper>
      <RightWrapper>
        <Info
          title={t(translations.Staking.TokensEarned())}
          value={`${earnedTokensAmount} ${env.MAIN_TOKEN_NAME}`}
        />
        <Info
          title={t(translations.Staking.DailyUnlocked())}
          value={`${dailyUnlockedAmount} ${env.MAIN_TOKEN_NAME}`}
        />
        <Filler />
        <ContainedButton>
          {t(translations.Staking.Stake_MAINTOKENNAME(), {
            mainTokenName: env.MAIN_TOKEN_NAME,
          })}
        </ContainedButton>
      </RightWrapper>
    </StyledSnowPaper>
  );
};

const ButtonWrapper = styled("div")({
  padding: "0 1",
});

const Filler = styled("div")({
  flex: 1,
});

const LeftWrapper = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
const RightWrapper = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
const StyledSnowPaper = styled(SnowPaper)({
  padding: "24px 32px",
  position: "relative",
  maxWidth: "490px",
  display: "flex",
  gap: "12px",
  flex: 1,
});
