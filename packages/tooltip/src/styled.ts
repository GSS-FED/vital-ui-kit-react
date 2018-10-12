import { css } from 'styled-components';
import { defaultTheme } from '@vital-ui/react-theme';

export const rcTooltipStyle = ({
  theme = defaultTheme,
}: {
  theme?: typeof defaultTheme;
}) => css`
  .rc-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-trigger-popup-placement-top .rc-tooltip-arrow,
  .rc-trigger-popup-placement-topLeft .rc-tooltip-arrow,
  .rc-trigger-popup-placement-topRight .rc-tooltip-arrow {
    bottom: -5px;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: ${theme.tooltip.bg};
  }
  .rc-trigger-popup-placement-top .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-trigger-popup-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-trigger-popup-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }
  .rc-trigger-popup-placement-right .rc-tooltip-arrow,
  .rc-trigger-popup-placement-rightTop .rc-tooltip-arrow,
  .rc-trigger-popup-placement-rightBottom .rc-tooltip-arrow {
    left: -5px;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: ${theme.tooltip.bg};
  }
  .rc-trigger-popup-placement-right .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-trigger-popup-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-trigger-popup-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-trigger-popup-placement-left .rc-tooltip-arrow,
  .rc-trigger-popup-placement-leftTop .rc-tooltip-arrow,
  .rc-trigger-popup-placement-leftBottom .rc-tooltip-arrow {
    right: -5px;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: ${theme.tooltip.bg};
  }
  .rc-trigger-popup-placement-left .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-trigger-popup-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-trigger-popup-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-trigger-popup-placement-bottom .rc-tooltip-arrow,
  .rc-trigger-popup-placement-bottomLeft .rc-tooltip-arrow,
  .rc-trigger-popup-placement-bottomRight .rc-tooltip-arrow {
    top: -5px;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: ${theme.tooltip.bg};
  }
  .rc-trigger-popup-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-trigger-popup-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-trigger-popup-placement-bottomRight .rc-tooltip-arrow {
    right: 15%;
  }
`;
