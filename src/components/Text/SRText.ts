import {
    createText
} from '@shopify/restyle';
import { Theme } from '../ThemeProvider';

export const SRText = createText<Theme>();

export type SRTextProps = React.ComponentProps<typeof SRText>;
