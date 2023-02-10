import './mylabel.css'

export interface MyLabelProps {
    /**
     * Este es el texto de la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Usar texto capitalizado
     */
    allCaps?: boolean
    /**
     * Colores basicos de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertriary',
    /**
     * Colores cutomizados de la etiqueta
     */
    fontColor?: string,

}

const MyLabel = ({
                     label = 'No Label',
                     size = 'normal',
                     allCaps = false,
                     color = 'primary',
                     fontColor="#000000"
                 }: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};

export default MyLabel;
