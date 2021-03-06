/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { ExtendStyle, IStyleGroup } from './types';

export enum VARIANTS {
	PRIMARY = 'primary',
	MUTED = 'muted',
	GHOST = 'ghost',
	SMALL = 's',
	MED = 'm',
	LARGE = 'l',
}

type Props = {
	onClick?: <T>(p: T) => void;
	bg?: VARIANTS.PRIMARY | VARIANTS.MUTED | VARIANTS.GHOST;
	size?: VARIANTS.LARGE | VARIANTS.MED | VARIANTS.SMALL;
} & ExtendStyle;

export default function Button({
	styl,
	children,
	bg = VARIANTS.PRIMARY,
	size = VARIANTS.MED,
	onClick,
	...rest
}: React.PropsWithChildren<Props>) {
	const shouldHandleClick = (e: React.MouseEvent<HTMLElement>) => {
		onClick && onClick(e);
	};
	return (
		<button
			{...rest}
			css={css`
				${buttonCss}
				${BG[bg]}
				${SIZES[size]}
				${styl};
			`}
			onClick={shouldHandleClick}
		>
			{children}
		</button>
	);
}

const buttonCss = css`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: var(--r-10);
	transition: color 0.3s, background 0.3s, opacity 0.3s;
	border: 0;
	box-shadow: none;
	font-size: var(--ft-16);
	font-family: inherit;
	cursor: pointer;
`;
const normalCss = css`
	height: var(--s-36);
	padding: 0 var(--s-18);
	font-weight: 500;
`;
const HugeCss = css`
	height: var(--s-48);
	padding: 0 var(--s-18);
	font-weight: 500;
`;
const TinyCss = css`
	padding: var(--s-12);
	font-weight: 400;
`;

const primaryCss = css`
	background: var(--c-secondary);
	color: var(--c-w100);
	&:hover {
		opacity: 0.8;
	}
`;

const mutedCss = css`
	background: var(--c-muted);
	color: var(--c-primary);
	&:hover {
		opacity: 0.8;
	}
`;

const ghostCss = css`
	background: transparent;
	color: var(--c-text);
	&:hover {
		color: var(--c-primary);
	}
`;

const BG: IStyleGroup = {
	[VARIANTS.PRIMARY]: primaryCss,
	[VARIANTS.MUTED]: mutedCss,
	[VARIANTS.GHOST]: ghostCss,
};

const SIZES: IStyleGroup = {
	[VARIANTS.MED]: normalCss,
	[VARIANTS.LARGE]: HugeCss,
	[VARIANTS.SMALL]: TinyCss,
};
