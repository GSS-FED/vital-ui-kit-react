import * as React from 'react';
import styled from 'styled-components';
import { Badge } from '@vital-ui/react-badge';
import cn from 'classnames';
import { defaultTheme } from '@vital-ui/react-theme';

const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0.75rem 1.25rem;
  border-bottom: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.card.color};
  font-size: 1.25rem;
  min-height: 50px;
  display: table;
  width: 100%;
`;

const Title = styled.div``;

const RootWithImage = styled(Root)<{ image: string }>`
  min-height: 183px;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.grey300};
  background-size: cover;
  border-bottom: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.white};
  background-image: url(${({ image }) => image});

  > ${Title} {
    position: absolute;
    bottom: 0;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    font-size: 1.424rem;
    font-weight: normal;
    margin-top: 1.424em;
    margin-bottom: 1.424em;
  }
`;

const Cell = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const BadgeCell = styled(Cell)`
  width: 60px;
  text-align: right;
`;

type Props = {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  badge?: string;
  style?: React.CSSProperties;
  /** default: vital__card-header */
  className?: string;
  titleStyle?: React.CSSProperties;
  /** default: `vital__card-header-title` */
  titleClassName?: string;
  badgeStyle?: React.CSSProperties;
  /** default: `vital__card-header-badge` */
  badgeClassName?: string;
};

const Header = ({
  children,
  image,
  title,
  badge,
  titleClassName,
  titleStyle,
  style,
  className,
  badgeClassName,
  badgeStyle,
  ...props
}: Props) => {
  if (image) {
    return (
      <RootWithImage
        className={cn('vital__card-header', className)}
        style={style}
        image={image}
        {...props}
      >
        <Title
          className={cn('vital__card-header-title', titleClassName)}
          style={titleStyle}
        >
          {title}
        </Title>
        {children}
      </RootWithImage>
    );
  }

  return (
    <Root className={cn('vital__card-header', className)} {...props}>
      {title && <Cell style={titleStyle}>{title}</Cell>}
      {badge && (
        <BadgeCell>
          <Badge
            style={badgeStyle}
            className={cn('vital__card-header-badge', badgeClassName)}
            label={badge}
          />
        </BadgeCell>
      )}
      {children}
    </Root>
  );
};

// styled
RootWithImage.defaultProps = {
  theme: defaultTheme,
};
Root.defaultProps = {
  theme: defaultTheme,
};

export default Header;
