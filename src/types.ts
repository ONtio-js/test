export type buttonProps = {
    variant : 'primary' | 'secondary' ;
    title : string;
    onclick? : () => void;
    secondary?: boolean;
    type?: 'button' | 'link';
    url?: string;
    style?: string;
}