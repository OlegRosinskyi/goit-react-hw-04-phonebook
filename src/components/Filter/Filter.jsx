import PropTypes from 'prop-types';
import { BoxFilter } from './Filter.stiled';
const Filter = ({ filterContact }) =>
{
    return (
        <BoxFilter>
            <h2>Find contacts by name</h2>
            <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                        onChange={filterContact}
                        
                        //value={value}
                    />
        </BoxFilter>
     )
}
export default Filter;
Filter.propTypes = {
    filtrContact: PropTypes.func,  
}