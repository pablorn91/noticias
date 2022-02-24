import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types'

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deporte'},
        {value: 'technology', label: 'Tecnología'}
    ]

    //utilizar custon hook
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES)

    //submit pasara noticias al app.jsx
    const handleSubmit = e => {
        e.preventDefault()
        setCategoria(categoria)
    }

    return ( 
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
  }
  
 
export default Formulario;