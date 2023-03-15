import * as PropTypes from 'prop-types';

function Ingredientes(props) {

    const listaIngredientes = props.ingrediente.map((ingrediente) => {
      return <li>{ingrediente}</li>;
    });
  
  return (
    <ul>
      {listaIngredientes}
    </ul>
  );
  }

  Ingredientes.propTypes = {
    ingrediente: PropTypes.array.isRequired
  }

  export default Ingredientes;