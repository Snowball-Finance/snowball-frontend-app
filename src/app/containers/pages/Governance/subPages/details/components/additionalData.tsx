import { Divider, styled } from "@mui/material";
import { SnowPaper } from "app/components/base/SnowPaper";
import ClickIcon from "assets/images/iconComponents/clock";
import DiscordChatIcon from "assets/images/iconComponents/discordChat";
import DocumentIcon from "assets/images/iconComponents/document";
import ExternalLinkIcon from "assets/images/iconComponents/externalLink";
import { translations } from "locales/i18n";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { CssVariables } from "styles/cssVariables/cssVariables";

interface AdditionalDataProps {
  discordLink: string,
  documentLink: string,
  startTime: string,
  endTime: string,
}
export const AdditionalData: FC<AdditionalDataProps> = ({ discordLink, documentLink, endTime, startTime }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <LinkContainer>
        <DiscordChatIcon />
        {t(translations.GovernancePage.DiscussionofproposalinDiscord())}
        <ExternalLinkIcon />
      </LinkContainer>
      <LinkContainer>
        <DocumentIcon color={CssVariables.dark} />
        {t(translations.GovernancePage.ProposalDocument())}
        <ExternalLinkIcon />
      </LinkContainer>
      <Divider />
      <TimeWrapper>
        <IconAndTimeContainer>
          <ClickIcon color={CssVariables.dark} />
          {t(translations.GovernancePage.Votingperiodbegins())}
        </IconAndTimeContainer>
          <Time>{startTime}</Time>
      </TimeWrapper>
      <TimeWrapper>
        <IconAndTimeContainer>
          <ClickIcon color={CssVariables.dark} />
          {t(translations.GovernancePage.Votingperiodends())}
        </IconAndTimeContainer>
          <Time>{endTime}</Time>
      </TimeWrapper>
    </Wrapper>
  )
}

const Time = styled('p')({
  margin: 0,
  fontSize: '14px',
  fontWeight: 500,
  color: CssVariables.black
})

const IconAndTimeContainer = styled('div')({
  fontSize: '14px',
  display: "flex",
  gap: '8px',
})

const TimeWrapper = styled('div')({})

const LinkContainer = styled('div')({
  display: 'flex',
  gap: '8px',
})

const Wrapper = styled(SnowPaper)({
  padding: '20px',
  display: 'flex',
  gap: '16px',
  flexDirection: 'column',
})