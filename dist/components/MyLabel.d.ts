/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el texto de la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Usar texto capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores basicos de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertriary';
    /**
     * Colores cutomizados de la etiqueta
     */
    fontColor?: string;
    /**
     * Colores cutomizados de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
